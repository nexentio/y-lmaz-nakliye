import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yılmaz Nakliyat',
  description: 'Yılmaz Nakliyat - Güvenilir taşımacılık hizmetleri',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}

