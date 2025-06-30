'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='text-xl font-bold'>
          <Link href='/'>Valymo Įmonė</Link>
        </div>
        <nav className='hidden md:flex space-x-6'>
          <Link href='/' className='hover:text-blue-600'>
            Pagrindinis
          </Link>
          <Link href='/services' className='hover:text-blue-600'>
            Paslaugos
          </Link>
          <Link href='/order' className='hover:text-blue-600'>
            Užsakymas
          </Link>
          <Link href='/contact' className='hover:text-blue-600'>
            Kontaktai
          </Link>
        </nav>
        <button
          className='md:hidden flex items-center'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            {menuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <nav className='md:hidden bg-white px-4 pb-4'>
          <Link href='/' className='block py-2'>
            Pagrindinis
          </Link>
          <Link href='/services' className='block py-2'>
            Paslaugos
          </Link>
          <Link href='/order' className='block py-2'>
            Užsakymas
          </Link>
          <Link href='/contact' className='block py-2'>
            Kontaktai
          </Link>
        </nav>
      )}
    </header>
  );
}
