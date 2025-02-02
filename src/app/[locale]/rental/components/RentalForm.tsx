'use client';

import Button from '@/components/atoms/button';
import Input from '@/components/atoms/input';
import Textarea from '@/components/atoms/textarea';
import Typography from '@/components/atoms/typography';
import { useState } from 'react';
import * as config from '@/config';
import { useLocale, useTranslations } from 'next-intl';
import DatePicker from '@/components/atoms/datePicker';

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
  startDate: string;
  endDate: string;
};

export default function RentalForm() {
  const tRentalForm = useTranslations('forms.contactForm');
  const tStatus = useTranslations('forms.status');
  const currentLocale = useLocale();

  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
    startDate: '',
    endDate: '',
  });
  const [status, setStatus] = useState<{
    text: string;
    type: 'success' | 'error';
  } | null>(null);
  const [dateErrors, setDateErrors] = useState<{
    startDate?: string;
    endDate?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (value: string, name: string) => {
    // Réinitialiser l'erreur pour ce champ
    setDateErrors((prev) => ({ ...prev, [name]: undefined }));

    // Si la valeur est vide, on peut la mettre à jour directement
    if (!value) {
      setFormData((prev) => ({ ...prev, [name]: value }));
      return;
    }

    const selectedDate = new Date(value);
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 365);

    let isValid = true;
    let errorMessage = '';

    // Vérifier que la date est valide
    if (isNaN(selectedDate.getTime())) {
      isValid = false;
      errorMessage = 'Date invalide';
    }

    // Vérifier que la date soit dans les 365 prochains jours
    if (selectedDate > maxDate || selectedDate < today) {
      isValid = false;
      errorMessage =
        "La date doit être comprise entre aujourd'hui et dans 365 jours";
    }

    if (name === 'startDate') {
      if (formData.endDate) {
        const endDate = new Date(formData.endDate);
        const diffTime = endDate.getTime() - selectedDate.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 1) {
          isValid = false;
          errorMessage =
            'La date de départ doit être au moins 1 jour avant la date de retour';
        }
      }
    }

    if (name === 'endDate') {
      if (formData.startDate) {
        const startDate = new Date(formData.startDate);
        const diffTime = selectedDate.getTime() - startDate.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 1) {
          isValid = false;
          errorMessage =
            'La date de retour doit être au moins 1 jour après la date de départ';
        }
      }
    }

    if (!isValid) {
      setDateErrors((prev) => ({ ...prev, [name]: errorMessage }));
    }

    if (isValid) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    let messageError = `${tStatus('error')} ${config.mailContact}`;

    try {
      const response = await fetch('/api/rental', {
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
          startDate: '',
          endDate: '',
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
      <Typography variant='caption'>Je souhaite partir...</Typography>
      <div className='flex flex-col gap-4 md:flex-row'>
        <DatePicker
          value={formData.startDate}
          onChange={(value) => handleDateChange(value, 'startDate')}
          label={tRentalForm('startDate')}
          color='orange'
        />
        <DatePicker
          value={formData.endDate}
          onChange={(value) => handleDateChange(value, 'endDate')}
          label={tRentalForm('endDate')}
          color='orange'
        />
      </div>
      {dateErrors.startDate && (
        <p className='mt-1 text-sm text-red-500'>{dateErrors.startDate}</p>
      )}
      {dateErrors.endDate && (
        <p className='mt-1 text-sm text-red-500'>{dateErrors.endDate}</p>
      )}
      <Typography variant='caption'>Mes informations</Typography>
      <div className='flex flex-col gap-4 md:flex-row'>
        <Input
          value={formData.firstname}
          onChange={handleChange}
          required
          name='firstname'
          color='orange'
          label={tRentalForm('firstname')}
        />
        <Input
          value={formData.lastname}
          onChange={handleChange}
          required
          name='lastname'
          color='orange'
          label={tRentalForm('lastname')}
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
          label={tRentalForm('email')}
        />
        <Input
          value={formData.phone}
          onChange={handleChange}
          name='phone'
          color='orange'
          type='number'
          label={tRentalForm('phone')}
        />
      </div>
      <Textarea
        id='message'
        name='message'
        value={formData.message}
        onChange={handleChange}
        label={tRentalForm('message')}
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
            {tRentalForm('send')}
          </Button>
        </div>
      </div>
    </form>
  );
}
