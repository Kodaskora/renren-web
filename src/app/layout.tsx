import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RenRen Web',
  description: 'Renhold tjenester i Alesund',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='no'>
      <body>{children}</body>
    </html>
  );
}
