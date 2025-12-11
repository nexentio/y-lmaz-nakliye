import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';

import ServicesHero from '../../components/ServicesHero';
import { ServicesListSection } from '../../components/ServicesListSection';
import { FeaturesSection } from '../../components/FeaturesSection';
import Timeline from '../../components/Timeline';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: 'Yılmaz Nakliyat hizmetleri: Gaziantep tekstil kentinde kumaş taşıma, elbise taşıma, evden eve taşıma, çeyiz taşıma, canlı hayvan taşıma, demir kapı taşıma, inşaat malzemeleri taşıma, Başpınar yük götürme ve ağır yük taşımacılığı.',
  alternates: {
    canonical: 'https://www.gaziantepnakliyeci.com/services',
  },
  openGraph: {
    title: 'Yılmaz Nakliyat Hizmetleri | Gaziantep Tekstil Kenti',
    description: 'Gaziantep tekstil kentinde kumaş taşıma, elbise taşıma, evden eve taşıma, çeyiz taşıma, demir kapı ve inşaat malzemeleri taşımacılığı hizmetleri.',
    url: 'https://www.gaziantepnakliyeci.com/services',
    images: ['/yilmaz-nakliyat-yuk-tasima-araci.webp'],
  },
};

export default function ServicesPage() {
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
        name: 'Hizmetlerimiz',
        item: 'https://www.gaziantepnakliyeci.com/services',
      },
    ],
  };

  return (
    <>
      <Script
        id="breadcrumb-schema-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <div className="min-h-screen w-full flex flex-col bg-white">


      {/* Hero Section */}

      <main className="min-h-screen w-full bg-white flex flex-col justify-center">

        <ServicesHero />

      </main>

      {/* Services List Section */}

      <ServicesListSection />

      {/* Features Section */}

      <FeaturesSection />

      {/* Process Section */}

      <div className="min-h-screen w-full bg-white flex items-center justify-center py-20">

        <Timeline />

      </div>

      {/* Footer */}

      <Footer />

      </div>
    </>
  );
}

