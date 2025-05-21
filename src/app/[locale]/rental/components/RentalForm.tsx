'use client';

import Button from '@/components/atoms/button';
import Input from '@/components/atoms/input';
import Textarea from '@/components/atoms/textarea';
import Typography from '@/components/atoms/typography';
import { useState } from 'react';
import * as config from '@/config';
import { useLocale, useTranslations } from 'next-intl';
import DatePicker from '@/components/atoms/datePicker';
//@ts-ignore
import validator from 'validator';
import ConfirmationModal from '@/components/ConfirmationModal';

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
  startDate: string;
  endDate: string;
};

const initialFormData: FormData = {
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  message: '',
  startDate: '',
  endDate: '',
};

export default function RentalForm() {
  const tPage = useTranslations('pages.rental');
  const tRentalForm = useTranslations('forms.contactForm');
  const tStatus = useTranslations('forms.status');
  const currentLocale = useLocale();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
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
    setDateErrors((prev) => ({ ...prev, [name]: undefined }));
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
      errorMessage = tStatus('invalidDate');
    }

    // Vérifier que la date soit dans les 365 prochains jours
    if (selectedDate > maxDate || selectedDate < today) {
      isValid = false;
      errorMessage = tStatus('dateRange');
    }

    if (name === 'startDate') {
      if (formData.endDate) {
        const endDate = new Date(formData.endDate);
        const diffTime = endDate.getTime() - selectedDate.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 1) {
          isValid = false;
          errorMessage = tStatus('dateStartBeforeEnd');
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
          errorMessage = tStatus('dateEndBeforeStart');
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

  const validators = () => {
    if (!validator.isEmail(formData.email)) {
      setStatus({
        type: 'error',
        text: tStatus('invalidEmail'),
      });
      return false;
    }
    if (formData.phone?.length && !validator.isMobilePhone(formData.phone)) {
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
      const response = await fetch('/api/rental', {
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
        <Typography variant='caption'>{tPage('leaveFrom')}</Typography>
        <div className='flex flex-col gap-4 md:flex-row'>
          <DatePicker
            value={formData.startDate}
            required
            onChange={(value) => handleDateChange(value, 'startDate')}
            label={tRentalForm('startDate')}
            color='orange'
          />
          <DatePicker
            value={formData.endDate}
            required
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
        <Typography variant='caption'>{tPage('myInformations')}</Typography>
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
              {tRentalForm('send')}
            </Button>
          </div>
        </div>
      </form>
      <ConfirmationModal
        open={open}
        title={tStatus('rentalSent')}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
