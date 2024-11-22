'use client';

import Button from '@/components/atoms/button';
import Input from '@/components/atoms/input';
import Textarea from '@/components/atoms/textarea';
import { useState } from 'react';

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

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
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message envoyé avec succès.');
        setFormData({
          firstname: '',
          lastname: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        const data = await response.json();
        setStatus(data.error || 'Une erreur est survenue.');
      }
    } catch (error) {
      setStatus('Une erreur est survenue.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex w-full flex-col gap-4'>
      <div className='flex gap-4'>
        <Input
          value={formData.firstname}
          onChange={handleChange}
          required
          name='firstname'
          color='orange'
          label='Prénom'
        />
        <Input
          value={formData.lastname}
          onChange={handleChange}
          required
          name='lastname'
          color='orange'
          label='Nom'
        />
      </div>
      <div className='flex gap-4'>
        <Input
          value={formData.email}
          onChange={handleChange}
          required
          name='email'
          type='email'
          color='orange'
          label='Email'
        />
        <Input
          value={formData.phone}
          onChange={handleChange}
          name='phone'
          color='orange'
          type='number'
          label='Téléphone'
        />
      </div>
      <Textarea
        id='message'
        name='message'
        value={formData.message}
        onChange={handleChange}
        label='Écrivez votre message'
        required
        rows={6}
      />
      <div className='flex w-full justify-end'>
        <Button type='submit' color='orange' disabled>
          Envoyer
        </Button>
      </div>
      {status && <p>{status}</p>}
    </form>
  );
}
