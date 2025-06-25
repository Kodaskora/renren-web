export default function ServicesPage() {
  const services = [
    { title: 'Patalpų valymas', description: 'Išsamus Jūsų namų valymas.' },
    {
      title: 'Biurų valymas',
      description: 'Patikimos biurų priežiūros paslaugos.',
    },
    {
      title: 'Ekologinis valymas',
      description: 'Naudojame tik ekologiškas priemones.',
    },
  ];

  return (
    <main className='container mx-auto py-16'>
      <h1 className='text-3xl font-bold mb-6'>Mūsų paslaugos</h1>
      <ul className='space-y-4'>
        {services.map((svc) => (
          <li key={svc.title} className='border p-4 rounded shadow-sm'>
            <h2 className='text-xl font-semibold'>{svc.title}</h2>
            <p className='text-gray-600'>{svc.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
