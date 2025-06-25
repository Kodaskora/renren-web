'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form data:', form);
  };

  return (
    <main className='container mx-auto py-16 max-w-lg'>
      <h1 className='text-3xl font-bold mb-6'>Kontaktai</h1>
      {submitted ? (
        <p className='text-green-600'>Ačiū! Jūsų žinutė išsiųsta.</p>
      ) : (
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block font-medium mb-1'>Vardas</label>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              required
              className='w-full border rounded p-2'
            />
          </div>
          <div>
            <label className='block font-medium mb-1'>El. paštas</label>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
              className='w-full border rounded p-2'
            />
          </div>
          <div>
            <label className='block font-medium mb-1'>Žinutė</label>{' '}
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              required
              className='w-full border rounded p-2 h-32'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
          >
            Siųsti
          </button>
        </form>
      )}
    </main>
  );
}
