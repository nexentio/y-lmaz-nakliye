import React from 'react';



import Navbar from '../../components/Navbar';

import { HeroSection } from '../../components/HeroSection';

import HistorySectionNew from '../../components/HistorySectionNew';

import ValuesSection from '../../components/ValuesSection';

import LocationsSection from '../../components/LocationsSection';

import { TeamSection } from '../../components/TeamSection';

import CertifiedSection from '../../components/CertifiedSection';

import Footer from '../../components/Footer';

export default function AboutPage() {

  return (

    <div className="min-h-screen w-full flex flex-col bg-white">

      {/* Navbar with white background */}

      <div className="w-full h-20"></div>

      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#1C1817]/10">

        <Navbar variant="light" />

      </div>

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

  );

}

