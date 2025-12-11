import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Yılmaz Nakliyat ile iletişime geçin. Gaziantep tekstil kentinde kumaş taşıma, elbise taşıma, evden eve taşıma, çeyiz taşıma hizmetleri için bizi arayın. Tel: 0545 717 5150 - 0543 391 9863',
  alternates: {
    canonical: 'https://www.gaziantepnakliyeci.com/iletisim',
  },
  openGraph: {
    title: 'İletişim | Yılmaz Nakliyat',
    description: 'Gaziantep tekstil kentinde taşımacılık hizmetleri için bizi arayın. 0545 717 5150 - 0543 391 9863',
    url: 'https://www.gaziantepnakliyeci.com/iletisim',
    images: ['/beyaz-ford-transit-kamyonet-yilmaz-nakliyat.webp'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

