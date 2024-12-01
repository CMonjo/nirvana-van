'use client';

import Button from '@/components/atoms/button';
import Checkbox from '@/components/atoms/checkbox';
import Input from '@/components/atoms/input';
import Textarea from '@/components/atoms/textarea';
import Typography from '@/components/atoms/typography';
import { useState } from 'react';
import * as config from '@/config';

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
}: {
  color: 'orange' | 'green';
  onSuccess: () => void;
}) {
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
  const [getInTouch, setGetInTouch] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          getInTouch,
        }),
      });

      if (response.ok) {
        onSuccess();
        setFormData({
          firstname: '',
          lastname: '',
          phone: '',
          email: '',
          message: '',
        });
        // setStatus({
        //   type: 'success',
        //   text: 'Message envoyé avec succès !',
        // });
      } else {
        const data = await response.json();
        setStatus({
          type: 'error',
          text: `${data?.error ? data.error : 'Une erreur est survenue.'} Veuillez réessayer ou nous contacter à ${config.mailContact}`,
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        text: `Une erreur est survenue. Veuillez réessayer ou nous contacter à ${config.mailContact}`,
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
          label='Prénom'
        />
        <Input
          value={formData.lastname}
          onChange={handleChange}
          required
          name='lastname'
          color={color}
          label='Nom'
        />
      </div>
      <Input
        value={formData.email}
        onChange={handleChange}
        required
        name='email'
        type='email'
        color={color}
        label='Email'
      />
      <div className='flex flex-col gap-4 md:flex-row'>
        <Input
          value={formData.phone}
          onChange={handleChange}
          name='phone'
          color={color}
          type='number'
          label='Téléphone'
        />
      </div>
      <Textarea
        id='message'
        name='message'
        value={formData.message}
        onChange={handleChange}
        label='Une message à nous faire passer ?'
        rows={2}
      />
      <div className='flex flex-col gap-4 md:flex-row'>
        <Checkbox
          color={color}
          label='Je souhaite être recontacté'
          checked={getInTouch}
          onChange={() => setGetInTouch(!getInTouch)}
        />
      </div>
      <div className='flex w-full items-center justify-end gap-8'>
        {status && (
          <Typography
            variant='caption'
            className={`${status.type === 'error' ? 'text-red-500' : 'text-dark'} w-full`}
          >
            {status.text}
          </Typography>
        )}
        <div className='flex justify-end self-end'>
          <Button type='submit' color='orange'>
            Envoyer
          </Button>
        </div>
      </div>
    </form>
  );
}
