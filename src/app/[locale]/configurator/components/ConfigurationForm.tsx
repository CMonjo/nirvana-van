'use client';

import Button from '@/components/atoms/button';
import Checkbox from '@/components/atoms/checkbox';
import Input from '@/components/atoms/input';
import Textarea from '@/components/atoms/textarea';
import Typography from '@/components/atoms/typography';
import { useState } from 'react';
import * as envConfig from '@/config';
import { useLocale, useTranslations } from 'next-intl';
import { IProduct, IProductConfig } from '@/products/types';
import useConfig from '../hook/useConfig';
import { getPrice } from '@/utils/price';

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
};

export default function ConfigurationForm({
  color,
  onSuccess,
  product,
  productConfiguration,
}: {
  color: 'orange' | 'green';
  onSuccess: () => void;
  product: IProduct | null;
  productConfiguration: IProductConfig | null;
}) {
  const tContactForm = useTranslations('forms.contactForm');
  const tStatus = useTranslations('forms.status');
  const tMail = useTranslations('pages.configurator.mail');

  const config = useConfig(productConfiguration, product);

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

  //Hooks
  const currentLocale = useLocale();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    let messageError = `${tStatus('error')} ${envConfig.mailContact}`;

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          config,
          product: product?.name,
          total: getPrice(productConfiguration?.totalPrice || 0),
          mailSubject: tMail('subject'),
          mailMessage: tMail('message'),
          locale: currentLocale,
        }),
      });

      if (response.ok) {
        onSuccess();
        setFormData({
          firstname: 'Camille',
          lastname: 'MONJO',
          phone: '',
          email: 'monjocamille@gmail.com',
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
        name='message'
        value={formData.message}
        onChange={handleChange}
        label={tContactForm('addMessage')}
        rows={2}
      />
      <div className='flex w-full items-center justify-end gap-8'>
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
        <div className='flex justify-end self-end'>
          <Button type='submit' color={color}>
            {tContactForm('send')}
          </Button>
        </div>
      </div>
    </form>
  );
}
