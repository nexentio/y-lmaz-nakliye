"use client";

import React from 'react';

import Footer from '../../components/Footer';

import { ContactHero } from '../../components/ContactHero';

import ContactFormSection from '../../components/ContactFormSection';

import KeyContactsSection from '../../components/KeyContactsSection';

import LocationsSection from '../../components/LocationsSection';

import { FAQSection } from '../../components/FAQSection';


// Hero images - you can replace these with actual image URLs

const HERO_IMAGES = {

  sky: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",

  city: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop"

};

export default function ContactPage() {

  return (

    <div className="min-h-screen bg-white text-[#1C1817] selection:bg-[#F94006] selection:text-white">

      <main>

        <ContactHero skyImage={HERO_IMAGES.sky} cityImage={HERO_IMAGES.city} />

      </main>

      

      {/* Contact Form and Key Contacts Section */}

      <section className="w-full py-38 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom, #f3f2f2 0%, #f3f2f2 70%, #e7e7e6 100%)' }}>

        <div className="max-w-4xl mx-auto space-y-16">

          <header className="mb-12">

            <p className="text-sm font-medium text-[#1C1817] mb-2 tracking-wide uppercase">Bizimle iletişime geçin.</p>

            <h1 className="text-5xl font-bold tracking-tight text-[#1C1817]">Sohbeti Başlatalım.</h1>

          </header>

          <div>

            <ContactFormSection />

            <div className="h-20"></div> {/* Spacer */}

            <KeyContactsSection />

          </div>

          

          {/* Footer spacer */}

          <div className="h-12"></div>

        </div>

      </section>

      {/* Locations Section */}

      <LocationsSection />

      {/* FAQ Section */}

      <FAQSection />

      

      {/* Decorative background element to add depth if needed, strictly subtle */}

      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-[-1] opacity-[0.02]" 

           style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #1C1817 1px, transparent 1px)', backgroundSize: '40px 40px' }}>

      </div>



      {/* Footer */}

      <Footer />

    </div>

  );

}

