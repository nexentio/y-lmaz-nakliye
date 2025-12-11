import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';

import { HeroSection } from '../../components/HeroSection';
import HistorySectionNew from '../../components/HistorySectionNew';
import ValuesSection from '../../components/ValuesSection';
import LocationsSection from '../../components/LocationsSection';
import CitiesSection from '../../components/CitiesSection';
import { TeamSection } from '../../components/TeamSection';
import CertifiedSection from '../../components/CertifiedSection';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Yılmaz Nakliyat - Gaziantep tekstil kentinde 2010 yılından beri güvenilir taşımacılık hizmetleri. Yılmaz Arslan önderliğinde 30+ araçlık filomuzla Türkiye genelinde profesyonel hizmet.',
  alternates: {
    canonical: 'https://www.gaziantepnakliyeci.com/about',
  },
  openGraph: {
    title: 'Hakkımızda | Yılmaz Nakliyat',
    description: 'Gaziantep tekstil kentinde 2010 yılından beri güvenilir taşımacılık hizmetleri. 30+ araçlık filomuzla Türkiye genelinde profesyonel hizmet.',
    url: 'https://www.gaziantepnakliyeci.com/about',
    images: ['/yilmaz-nakliyat-filosu.webp'],
  },
};

export default function AboutPage() {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: 'https://www.gaziantepnakliyeci.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Hakkımızda',
        item: 'https://www.gaziantepnakliyeci.com/about',
      },
    ],
  };

  return (
    <>
      <Script
        id="breadcrumb-schema-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <div className="min-h-screen w-full flex flex-col bg-white">


      {/* Hero Section */}

      <main className="min-h-screen bg-white w-full">

        <HeroSection />

      </main>

      {/* History Section */}

      <div className="w-full bg-[#f2f2f0]">

        <HistorySectionNew />

      </div>

      {/* Values Section */}

      <div className="min-h-screen w-full flex items-center justify-center bg-customGray p-6 md:p-12">

        <ValuesSection />

      </div>

      {/* Cities Section */}
      
      <CitiesSection />

      {/* Locations Section */}

      <LocationsSection />

      {/* Team Section */}

      <TeamSection />

      {/* Certified Section */}

      <div className="w-full bg-[#EAEAEA]">

        <CertifiedSection />

      </div>

      {/* Footer */}

      <Footer />

      </div>
    </>
  );
}

