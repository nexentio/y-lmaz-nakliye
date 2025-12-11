import type { Metadata } from 'next';
import './globals.css';
import NavbarWrapper from '../components/NavbarWrapper';
import WhatsAppButton from '../components/WhatsAppButton';
import { PhoneButton } from '../components/PhoneButton';
import { CookieConsent } from '../components/CookieConsent';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gaziantepnakliyeci.com'),
  title: {
    default: 'Yılmaz Nakliyat | Güvenilir Taşımacılık Hizmetleri | Gaziantep Tekstil Kenti',
    template: '%s | Yılmaz Nakliyat'
  },
  description: 'Yılmaz Nakliyat olarak Gaziantep tekstil kentinde kumaş taşıma, elbise taşıma, yük taşıma, evden eve taşıma, çeyiz taşıma, canlı hayvan taşıma, tekstil ürünleri taşıma, demir kapı taşıma, inşaat malzemeleri taşıma ve ağır yük taşımacılığı hizmetleri sunuyoruz. Gaziantep\'in tüm ilçelerine (Başpınar dahil) yük götürme hizmeti veriyoruz. Yılmaz Arslan önderliğinde, 30+ araçlık filomuzla Türkiye genelinde profesyonel taşımacılık hizmeti veriyoruz. İletişim: 0545 717 5150 - 0543 391 9863',
  keywords: 'yılmaz nakliyat, gaziantep nakliyat, gaziantep tekstil kent, kumaş taşıma gaziantep, elbise taşıma, yük taşıma gaziantep, evden eve taşıma gaziantep, çeyiz taşıma, canlı hayvan taşıma, tekstil taşıma, demir kapı taşıma, inşaat malzemeleri taşıma, başpınar yük götürme, ağır yük taşımacılığı, nakliyat firması gaziantep, taşımacılık gaziantep, lojistik gaziantep, demirci malzemeleri taşıma, müteahhit malzemeleri taşıma, yılmaz arslan, güvenilir nakliyat, gaziantep nakliye firmaları',
  authors: [{ name: 'Yılmaz Nakliyat' }],
  creator: 'Yılmaz Nakliyat',
  publisher: 'Yılmaz Nakliyat',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo-yilmaz-nakliyat.png',
    apple: '/logo-yilmaz-nakliyat.png',
    shortcut: '/logo-yilmaz-nakliyat.png',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.gaziantepnakliyeci.com',
    siteName: 'Yılmaz Nakliyat',
    title: 'Yılmaz Nakliyat | Gaziantep Tekstil Kenti Güvenilir Taşımacılık',
    description: 'Gaziantep tekstil kentinde kumaş taşıma, elbise taşıma, evden eve taşıma, çeyiz taşıma, demir kapı ve inşaat malzemeleri taşımacılığı. Başpınar ve tüm ilçelere hizmet. 0545 717 5150',
    images: [
      {
        url: '/yilmaz-nakliyat-yuk-tasima-araci.webp',
        width: 1200,
        height: 630,
        alt: 'Yılmaz Nakliyat - Gaziantep Tekstil Kenti Profesyonel Taşımacılık Hizmetleri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yılmaz Nakliyat | Gaziantep Tekstil Kenti Güvenilir Taşımacılık',
    description: 'Gaziantep tekstil kentinde kumaş taşıma, elbise taşıma, evden eve taşıma, çeyiz taşıma, demir kapı ve inşaat malzemeleri taşımacılığı.',
    images: ['/yilmaz-nakliyat-yuk-tasima-araci.webp'],
  },
  alternates: {
    canonical: 'https://www.gaziantepnakliyeci.com',
  },
  verification: {
    google: 'google-site-verification-code-buraya', // Google Search Console'dan alın
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.gaziantepnakliyeci.com/#localbusiness',
    name: 'Yılmaz Nakliyat',
    alternateName: 'Yılmaz Nakliyat Gaziantep',
    description:
      "Gaziantep tekstil kentinde kumaş taşıma, elbise taşıma, yük taşıma, evden eve ve çeyiz taşıma, canlı hayvan, demir kapı ve inşaat malzemeleri taşımacılığı hizmetleri sunar. Gaziantep'in tüm ilçelerine (Başpınar dahil) ve Türkiye geneline güvenilir nakliyat.",
    image: 'https://www.gaziantepnakliyeci.com/logo-yilmaz-nakliyat.png',
    logo: 'https://www.gaziantepnakliyeci.com/logo-yilmaz-nakliyat.png',
    telephone: '+905457175150',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gaziantep',
      addressRegion: 'Gaziantep',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.0662,
      longitude: 37.3833,
    },
    url: 'https://www.gaziantepnakliyeci.com',
    sameAs: [
      'https://wa.me/905457175150',
    ],
    areaServed: [
      { '@type': 'City', name: 'Gaziantep' },
      { '@type': 'City', name: 'Başpınar' },
      { '@type': 'Country', name: 'Türkiye' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Taşımacılık Hizmetleri',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Tekstil Taşımacılığı',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Kumaş Taşıma',
                description: 'Gaziantep tekstil kentinde profesyonel kumaş taşımacılığı',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Elbise Taşıma',
                description: 'Hazır giyim ve elbise taşımacılığı hizmetleri',
              },
            },
          ],
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Evden Eve Taşıma',
            description: 'Gaziantep ve tüm ilçelere evden eve nakliyat',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Çeyiz Taşıma',
            description: 'Gaziantep genelinde çeyiz taşımacılığı',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Demir Kapı Taşıma',
            description: 'Demir kapı ve metal ürünler taşımacılığı',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'İnşaat Malzemeleri Taşıma',
            description: 'Şantiye ve inşaat malzemeleri taşımacılığı',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Canlı Hayvan Taşıma',
            description: 'Güvenli canlı hayvan taşımacılığı hizmetleri',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Başpınar Yük Götürme',
            description: "Gaziantep Başpınar'a profesyonel yük taşıma hizmeti",
          },
        },
      ],
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  };

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.gaziantepnakliyeci.com/#organization',
    name: 'Yılmaz Nakliyat',
    url: 'https://www.gaziantepnakliyeci.com',
    logo: 'https://www.gaziantepnakliyeci.com/logo-yilmaz-nakliyat.png',
    description: 'Gaziantep tekstil kentinde güvenilir taşımacılık hizmetleri',
    founder: {
      '@type': 'Person',
      name: 'Yılmaz Arslan',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+905457175150',
        contactType: 'customer service',
        areaServed: 'TR',
        availableLanguage: 'Turkish',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+905433919863',
        contactType: 'customer service',
        areaServed: 'TR',
        availableLanguage: 'Turkish',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gaziantep',
      addressRegion: 'Gaziantep',
      addressCountry: 'TR',
    },
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.gaziantepnakliyeci.com/#website',
    url: 'https://www.gaziantepnakliyeci.com',
    name: 'Yılmaz Nakliyat',
    description: 'Gaziantep tekstil kentinde profesyonel taşımacılık hizmetleri',
    publisher: {
      '@id': 'https://www.gaziantepnakliyeci.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.gaziantepnakliyeci.com/?s={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href="https://www.gaziantepnakliyeci.com" />
        <meta name="geo.region" content="TR-27" />
        <meta name="geo.placename" content="Gaziantep" />
        <meta name="geo.position" content="37.0662;37.3833" />
        <meta name="ICBM" content="37.0662, 37.3833" />
        <script
          id="structured-data-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
        />
        <script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        />
      </head>
      <body>
        <NavbarWrapper />
        {children}
        <WhatsAppButton />
        <PhoneButton />
        <CookieConsent />
      </body>
    </html>
  );
}

