import React from 'react';



import Navbar from '../../components/Navbar';

import ServicesHero from '../../components/ServicesHero';

import { ServicesListSection } from '../../components/ServicesListSection';

import { FeaturesSection } from '../../components/FeaturesSection';

import { ProcessSection } from '../../components/ProcessSection';

import Footer from '../../components/Footer';

export default function ServicesPage() {

  return (

    <div className="min-h-screen w-full flex flex-col bg-white">

      {/* Navbar with white background */}

      <div className="w-full bg-white border-b border-[#1C1817]/10">

        <Navbar variant="light" />

      </div>

      {/* Hero Section */}

      <main className="min-h-screen w-full bg-white flex flex-col justify-center">

        <ServicesHero />

      </main>

      {/* Services List Section */}

      <ServicesListSection />

      {/* Features Section */}

      <FeaturesSection />

      {/* Process Section */}

      <ProcessSection />

      {/* Footer */}

      <Footer />

    </div>

  );

}

