import React from 'react';



import Navbar from '../components/Navbar';

import Hero from '../components/Hero';

import VideoBackground from '../components/VideoBackground';

import { QuickFacts } from '../components/QuickFacts';

import { ClientsSection } from '../components/ClientsSection';

import { ServicesSection } from '../components/ServicesSection';

import { IndustrySection } from '../components/IndustrySection';

import WhyUsSection from '../components/WhyUsSection';

import TestimonialsSection from '../components/TestimonialsSection';

import Footer from '../components/Footer';

export default function App() {

  return (

    <div className="min-h-screen w-full flex flex-col">

      {/* Hero Section */}

      <div className="relative min-h-screen w-full flex flex-col overflow-hidden text-white">

        {/* Background Layer */}

        <VideoBackground />

        

        {/* Texture Overlay (Top Pattern) */}

        <div className="absolute top-0 left-0 w-full h-32 bg-chevron-pattern opacity-30 z-10 pointer-events-none mask-gradient-to-b" />

        {/* Content Layer */}

        <div className="relative z-20 flex flex-col min-h-screen">

          <Navbar />

          <Hero />

        </div>

      </div>

      {/* Quick Facts Section */}

      <QuickFacts />

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

  );

}
