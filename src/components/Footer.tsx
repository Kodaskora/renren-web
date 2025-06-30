'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className='bg-gray-800 text-gray-200 py-6'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Valymo Įmonė. Visos teisės saugomos.
        </p>
        <div className='flex space-x-4 mt-4 md:mt-0'>
          <Link href='/' className='hover:text-white'>
            Pagrindinis
          </Link>
          <Link href='/services' className='hover:text-white'>
            Paslaugos
          </Link>
          <Link href='/order' className='hover:text-white'>
            Užsakymas
          </Link>
          <Link href='/contact' className='hover:text-white'>
            Kontaktai
          </Link>
        </div>
      </div>
    </footer>
  );
}
