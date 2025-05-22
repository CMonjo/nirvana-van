'use client';

import Button from '@/components/atoms/button';
import Checkbox from '@/components/atoms/checkbox';
import Input from '@/components/atoms/input';
import Textarea from '@/components/atoms/textarea';
import Typography from '@/components/atoms/typography';
import { useState } from 'react';
import * as envConfig from '@/config';
import { useLocale, useTranslations } from 'next-intl';
import { IModel, IProduct, IProductConfig } from '@/products/types';
import { getPrice } from '@/utils/price';
// @ts-ignore
import validator from 'validator';
type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormData: FormData = {
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  message: '',
};

export default function ConfigurationForm({
  color,
  onSuccess,
  product,
  model,
  productConfiguration,
  config,
}: {
  color: 'orange' | 'green';
  onSuccess: () => void;
  product: IProduct | null;
  model: IModel | null;
  productConfiguration: IProductConfig | null;
  config: any;
}) {
  //Translation
  const tContactForm = useTranslations('forms.contactForm');
  const tStatus = useTranslations('forms.status');
  const tMail = useTranslations('pages.configurator.mail');
  const tProduct = useTranslations(`products.${product?.key}`);
  const tModel = useTranslations(
    model ? `products.${product?.key}.models.${model?.key}` : ''
  );

  //States
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<{
    text: string;
    type: 'success' | 'error';
  } | null>(null);
  const [loading, setLoading] = useState(false);

  //Hooks
  const currentLocale = useLocale();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    let messageError = `${tStatus('error')} ${envConfig.mailContact}`;

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          config,
          product:
            product?.key !== model?.key
              ? `${tProduct('name')} (${tModel('name')})`
              : tProduct('name'),
          total: getPrice(productConfiguration?.totalPrice || 0),
          mailSubject: tMail('subject'),
          mailMessage: tMail('message'),
          locale: currentLocale,
        }),
      });

      if (response.ok) {
        onSuccess();
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
    <form onSubmit={handleSubmit} className='flex w-full flex-col gap-4'>
      <div className='flex flex-col gap-4 md:flex-row'>
        <Input
          value={formData.firstname}
          onChange={handleChange}
          required
          name='firstname'
          color={color}
          label={tContactForm('firstname')}
        />
        <Input
          value={formData.lastname}
          onChange={handleChange}
          required
          name='lastname'
          color={color}
          label={tContactForm('lastname')}
        />
      </div>
      <Input
        value={formData.email}
        onChange={handleChange}
        required
        name='email'
        type='email'
        color={color}
        label={tContactForm('email')}
      />
      <div className='flex flex-col gap-4 md:flex-row'>
        <Input
          value={formData.phone}
          onChange={handleChange}
          name='phone'
          color={color}
          type='number'
          label={tContactForm('phone')}
        />
      </div>
      <Textarea
        id='message'
        color={color}
        name='message'
        value={formData.message}
        onChange={handleChange}
        label={tContactForm('addMessage')}
        rows={2}
      />
      <div className='flex w-full items-center justify-end gap-8'>
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
        <div className='flex justify-end self-end'>
          <Button type='submit' color={color} disabled={loading}>
            {tContactForm('send')}
          </Button>
        </div>
      </div>
    </form>
  );
}
