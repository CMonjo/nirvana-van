'use client';

import Input from '@/components/atoms/input';
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
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
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
          color='orange'
          label='Email'
        />
        <Input
          value={formData.phone}
          onChange={handleChange}
          required
          name='phone'
          color='orange'
          label='Téléphone portable ou domicile fix'
        />
      </div>
      <textarea
        name='message'
        value={formData.message}
        onChange={handleChange}
        placeholder='Votre message'
        required
        className='w-full border p-2'
      />
      <button
        type='submit'
        className='rounded bg-blue-500 p-2 text-white hover:bg-blue-600'
      >
        Envoyer
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
