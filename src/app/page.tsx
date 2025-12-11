import React from 'react';
import type { Metadata } from 'next';

import Hero from '../components/Hero';
import VideoBackground from '../components/VideoBackground';
import { StatsSection } from '../components/StatsSection';
import { ClientsSection } from '../components/ClientsSection';
import { ServicesSection } from '../components/ServicesSection';
import { IndustrySection } from '../components/IndustrySection';
import WhyUsSection from '../components/WhyUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Ana Sayfa',
  description: 'Yılmaz Nakliyat - Gaziantep tekstil kentinde kumaş taşıma, elbise taşıma, evden eve taşıma, çeyiz taşıma, demir kapı taşıma, inşaat malzemeleri taşıma. Başpınar ve tüm ilçelere hizmet.',
  alternates: {
    canonical: 'https://www.gaziantepnakliyeci.com',
  },
  openGraph: {
    title: 'Yılmaz Nakliyat | Gaziantep Tekstil Kenti Taşımacılık',
    description: 'Gaziantep tekstil kentinde profesyonel taşımacılık hizmetleri. Kumaş, elbise, ev eşyası, çeyiz, demir kapı ve inşaat malzemeleri taşıma.',
    url: 'https://www.gaziantepnakliyeci.com',
    images: ['/yilmaz-nakliyat-yuk-tasima-araci.webp'],
  },
};

export default function App() {
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
    ],
  };

  return (
    <>
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <div className="min-h-screen w-full flex flex-col">
        {/* Hero Section */}
        <div className="relative min-h-screen w-full flex flex-col overflow-hidden text-white">
          {/* Background Layer */}
          <VideoBackground />
          
          {/* Texture Overlay (Top Pattern) */}
          <div className="absolute top-0 left-0 w-full h-32 bg-chevron-pattern opacity-30 z-10 pointer-events-none mask-gradient-to-b" />
          {/* Content Layer */}
          <div className="relative z-20 flex flex-col min-h-screen">
            <Hero />
          </div>
        </div>

        {/* Stats Section */}
        <StatsSection />

        {/* Clients Section */}
        <div className="w-full bg-[#F2F2F2]">
          <ClientsSection />
        </div>

        {/* Services Section */}
        <ServicesSection />

        {/* Industry Section */}
        <IndustrySection />

        {/* Why Us Section */}
        <div className="min-h-screen bg-white flex items-center justify-center p-4 lg:p-12">
          <WhyUsSection />
        </div>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
