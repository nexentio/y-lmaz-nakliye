import type { Metadata } from 'next';
import './globals.css';
import NavbarWrapper from '../components/NavbarWrapper';
import WhatsAppButton from '../components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Yılmaz Nakliyat | Güvenilir Taşımacılık Hizmetleri | Türkiye Genelinde',
  description: 'Yılmaz Nakliyat olarak yük taşıma, evden eve taşıma, canlı hayvan taşıma, tekstil ürünleri taşıma ve tırla ürün taşıma hizmetleri sunuyoruz. Yılmaz Arslan önderliğinde, 30+ araçlık filomuzla Türkiye genelinde profesyonel taşımacılık hizmeti veriyoruz. İletişim: 0545 717 5150 - 0543 391 9863',
  keywords: 'yılmaz nakliyat, yük taşıma, evden eve taşıma, canlı hayvan taşıma, tekstil taşıma, tırla ürün taşıma, nakliyat firması, taşımacılık, lojistik, demirci malzemeleri taşıma, müteahhit malzemeleri taşıma, yılmaz arslan, güvenilir nakliyat',
  icons: {
    icon: '/logo-yilmaz-nakliyat.png',
    apple: '/logo-yilmaz-nakliyat.png',
  },
  openGraph: {
    title: 'Yılmaz Nakliyat | Güvenilir Taşımacılık Hizmetleri',
    description: 'Türkiye genelinde yük taşıma, evden eve taşıma ve özel taşımacılık hizmetleri. Yılmaz Arslan önderliğinde 30+ araçlık filomuzla hizmetinizdeyiz.',
    type: 'website',
    locale: 'tr_TR',
  },
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
        <WhatsAppButton />
      </body>
    </html>
  );
}

