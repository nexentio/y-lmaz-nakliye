import type { Metadata } from 'next';
import './globals.css';
import NavbarWrapper from '../components/NavbarWrapper';

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
      <body>
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}

