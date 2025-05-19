'use client';

import Button from '@/components/atoms/button';
import Input from '@/components/atoms/input';
import Textarea from '@/components/atoms/textarea';
import Select from '@/components/atoms/select';
import Typography from '@/components/atoms/typography';
import { useState } from 'react';
import * as config from '@/config';
import { products } from '@/products/products';
import { useLocale, useTranslations } from 'next-intl';
import ConfirmationModal from '@/components/ConfirmationModal';
//@ts-ignore
import validator from 'validator';

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialFormData: FormData = {
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const tContactForm = useTranslations('forms.contactForm');
  const tStatus = useTranslations('forms.status');
  const tProduct = useTranslations('products');
  const currentLocale = useLocale();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<{
    text: string;
    type: 'success' | 'error';
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const validators = () => {
    if (!validator.isEmail(formData.email)) {
      setStatus({
        type: 'error',
        text: tStatus('invalidEmail'),
      });
      return false;
    }
    if (formData.phone && !validator.isMobilePhone(formData.phone, '')) {
      setStatus({
        type: 'error',
        text: tStatus('invalidPhone'),
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    if (!validators()) {
      return;
    }
    setLoading(true);
    let messageError = `${tStatus('error')} ${config.mailContact}`;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          locale: currentLocale,
        }),
      });

      if (response.ok) {
        setOpen(true);
        setStatus({
          type: 'success',
          text: tStatus('success'),
        });
        setFormData(initialFormData);
      } else {
        const data = await response.json();

        if (data.error) {
          messageError = tStatus(data.error);
        }

        setStatus({
          type: 'error',
          text: messageError,
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        text: messageError,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex w-full flex-col gap-4'>
        <div className='flex flex-col gap-4 md:flex-row'>
          <Input
            value={formData.firstname}
            onChange={handleChange}
            required
            name='firstname'
            color='orange'
            label={tContactForm('firstname')}
          />
          <Input
            value={formData.lastname}
            onChange={handleChange}
            required
            name='lastname'
            color='orange'
            label={tContactForm('lastname')}
          />
        </div>
        <div className='flex flex-col gap-4 md:flex-row'>
          <Input
            value={formData.email}
            onChange={handleChange}
            required
            name='email'
            type='email'
            color='orange'
            label={tContactForm('email')}
          />
          <Input
            value={formData.phone}
            onChange={handleChange}
            name='phone'
            color='orange'
            type='number'
            label={tContactForm('phone')}
          />
        </div>
        <Select
          options={[
            ...products.map((product) => ({
              label: tProduct(`${product.key}.name`),
              value: tProduct(`${product.key}.name`),
            })),
            { label: tContactForm('help'), value: tContactForm('help') },
            { label: tContactForm('other'), value: tContactForm('other') },
          ]}
          value={formData.subject}
          onChange={handleSubjectChange}
          variant='filled'
          required
          placeholder={tContactForm('option')}
          size='medium'
          color='white'
        />
        <Textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          label={tContactForm('message')}
          required
          rows={6}
        />
        <div className='flex items-center gap-8'>
          {status?.type === 'error' || loading ? (
            <Typography
              variant='caption'
              className={`${status?.type === 'error' ? 'text-red-500' : 'text-dark'} w-full`}
            >
              {loading ? tStatus('loading') : status?.text}
            </Typography>
          ) : (
            <div className='flex w-full' />
          )}
          <div className='flex justify-end'>
            <Button type='submit' color='orange' disabled={loading}>
              {tContactForm('send')}
            </Button>
          </div>
        </div>
      </form>
      <ConfirmationModal
        open={open}
        title={tStatus('messageSent')}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
