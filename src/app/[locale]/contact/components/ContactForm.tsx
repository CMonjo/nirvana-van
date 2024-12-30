'use client';

import Button from '@/components/atoms/button';
import Input from '@/components/atoms/input';
import Textarea from '@/components/atoms/textarea';
import Typography from '@/components/atoms/typography';
import { useState } from 'react';
import * as config from '@/config';
import { useLocale, useTranslations } from 'next-intl';

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const tContactForm = useTranslations('forms.contactForm');
  const tStatus = useTranslations('forms.status');
  const currentLocale = useLocale();

  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
  });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

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
        setStatus({
          type: 'success',
          text: tStatus('success'),
        });
        setFormData({
          firstname: '',
          lastname: '',
          phone: '',
          email: '',
          message: '',
        });
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
    }
  };

  return (
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
        {status ? (
          <Typography
            variant='caption'
            className={`${status.type === 'error' ? 'text-red-500' : 'text-dark'} w-full`}
          >
            {status.text}
          </Typography>
        ) : (
          <div className='flex w-full' />
        )}
        <div className='flex justify-end'>
          <Button type='submit' color='orange'>
            {tContactForm('send')}
          </Button>
        </div>
      </div>
    </form>
  );
}
