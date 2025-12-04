import React from 'react';



import ServicesHero from '../../components/ServicesHero';

import { ServicesListSection } from '../../components/ServicesListSection';

import { FeaturesSection } from '../../components/FeaturesSection';

import Timeline from '../../components/Timeline';

import Footer from '../../components/Footer';

export default function ServicesPage() {

  return (

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

  );

}

