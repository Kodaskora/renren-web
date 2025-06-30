'use client';
import { useState } from 'react';

// Housing options
const housingOptions = [
  { id: 'studio', label: 'Hybel', range: '0-49 m²' },
  { id: 'apartment', label: 'Leilighet', range: '50-99 m²' },
  { id: 'small', label: 'Liten bolig', range: '100-149 m²' },
  { id: 'large', label: 'Stor bolig', range: '150-350 m²' },
];

// Cleaning types
const cleaningOptions = [
  { id: 'daily', label: 'Hverdags', price: 1990 },
  { id: 'general', label: 'Grundig', price: 2490 },
  { id: 'deep', label: 'Nedvask', price: 9900 },
];

export default function OrderPage() {
  const [address, setAddress] = useState('');
  const [housingType, setHousingType] = useState<string | null>(null);
  const [cleaningType, setCleaningType] = useState<string | null>(null);
  const [area, setArea] = useState<number>(0);

  const selectedCleaning = cleaningOptions.find(
    (opt) => opt.id === cleaningType
  );
  const pricePerSqm = selectedCleaning
    ? selectedCleaning.price / area || 100
    : 100;
  const totalPrice = selectedCleaning
    ? selectedCleaning.price
    : area * pricePerSqm;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Adresse: ${address}
Boligtype: ${housingType}
Kvadratmeter: ${area} m²
Vask: ${cleaningType}
Beregnet pris: ${totalPrice} kr`
    );
  };

  return (
    <main className='flex flex-col p-5 flex-1 max-w-md mx-auto pb-16'>
      <h2 className='text-xl font-semibold mb-4'>Hvor ønsker du vask?</h2>
      <input
        type='text'
        placeholder='Skriv inn din adresse..'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className='w-full border border-gray-300 rounded p-2 mb-6'
      />

      <h2 className='text-xl font-semibold mb-2'>Velg boligtype</h2>
      <div className='grid grid-cols-2 gap-2 mb-6'>
        {housingOptions.map((opt) => (
          <div
            key={opt.id}
            onClick={() => setHousingType(opt.id)}
            className={`p-4 border rounded cursor-pointer text-center select-none ${
              housingType === opt.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-800'
            }`}
          >
            <div className='font-semibold'>{opt.label}</div>
            <div className='text-sm text-gray-500'>{opt.range}</div>
          </div>
        ))}
      </div>

      <h2 className='text-xl font-semibold mb-2'>Hvilken vask ønsker du?</h2>
      <div className='grid grid-cols-3 gap-2 mb-6'>
        {cleaningOptions.map((opt) => (
          <div
            key={opt.id}
            onClick={() => setCleaningType(opt.id)}
            className={`p-4 border rounded cursor-pointer text-center select-none ${
              cleaningType === opt.id
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-800'
            }`}
          >
            <div className='font-semibold'>{opt.label}</div>
            <div className='text-sm text-gray-500'>{opt.price},- kr</div>
          </div>
        ))}
      </div>

      <h2 className='text-xl font-semibold mb-2'>Kvadratmeter: {area} m²</h2>
      <input
        type='range'
        min={0}
        max={350}
        value={area}
        onChange={(e) => setArea(Number(e.target.value))}
        className='w-full mb-6'
      />

      <button
        onClick={handleSubmit}
        disabled={!address || !housingType || !cleaningType || area <= 0}
        className='w-full bg-blue-600 text-white py-3 rounded disabled:opacity-50 transition'
      >
        Beregn pris og bestill
      </button>
    </main>
  );
}
