"use client";

import React, { useState, useEffect } from 'react';

import Link from 'next/link';

import Footer from '../../components/Footer';

import { ContactHero } from '../../components/ContactHero';

import ContactFormSection from '../../components/ContactFormSection';

import KeyContactsSection from '../../components/KeyContactsSection';

import LocationsSection from '../../components/LocationsSection';

import { FAQSection } from '../../components/FAQSection';

import { ArrowUpRight, ArrowRight, Menu, X } from 'lucide-react';

import { ContactButton } from '../../components/ContactButton';

// Hero images - you can replace these with actual image URLs

const HERO_IMAGES = {

  sky: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",

  city: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop"

};

export default function ContactPage() {

  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 20);

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (

    <div className="min-h-screen bg-white text-[#1C1817] selection:bg-[#F94006] selection:text-white">

      {/* Navbar with scroll effect */}

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex items-start group">

            <span className="text-3xl font-semibold tracking-tight text-[#1C1817]">LogiNord</span>

            <ArrowUpRight className="w-4 h-4 ml-0.5 mt-0.5 text-[#1C1817] group-hover:text-[#F94006] transition-colors" strokeWidth={3} />

          </Link>



          {/* Desktop Nav */}

          <div className="hidden lg:flex items-center gap-8">

            <Link href="/" className="text-[#1C1817] text-[15px] font-medium hover:text-[#F94006] transition-colors tracking-wide">Home</Link>

            <Link href="/about" className="text-[#1C1817] text-[15px] font-medium hover:text-[#F94006] transition-colors tracking-wide">About Us</Link>

            <Link href="/services" className="text-[#1C1817] text-[15px] font-medium hover:text-[#F94006] transition-colors tracking-wide">Services</Link>

            <Link href="/fleet" className="text-[#1C1817] text-[15px] font-medium hover:text-[#F94006] transition-colors tracking-wide">Fleet</Link>

            <Link href="#industries" className="text-[#1C1817] text-[15px] font-medium hover:text-[#F94006] transition-colors tracking-wide">Industries</Link>

            <Link href="/contact" className="text-[#1C1817] text-[15px] font-medium hover:text-[#F94006] transition-colors tracking-wide">Contact Us</Link>

          </div>



          {/* CTA Area */}

          <div className="hidden lg:flex items-center gap-3">

            <ContactButton variant="primary">

              Get a Quote

            </ContactButton>

            <ContactButton variant="icon-circle">

              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />

            </ContactButton>

          </div>



          {/* Mobile Toggle */}

          <button 

            className="lg:hidden text-[#1C1817]"

            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

          >

            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}

          </button>

        </div>



        {/* Mobile Menu */}

        {mobileMenuOpen && (

          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-6 shadow-xl h-screen">

             <div className="flex flex-col gap-6">

              <Link href="/" className="text-[#1C1817] text-2xl font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>

              <Link href="/about" className="text-[#1C1817] text-2xl font-medium" onClick={() => setMobileMenuOpen(false)}>About Us</Link>

              <Link href="/services" className="text-[#1C1817] text-2xl font-medium" onClick={() => setMobileMenuOpen(false)}>Services</Link>

              <Link href="/fleet" className="text-[#1C1817] text-2xl font-medium" onClick={() => setMobileMenuOpen(false)}>Fleet</Link>

              <Link href="#industries" className="text-[#1C1817] text-2xl font-medium" onClick={() => setMobileMenuOpen(false)}>Industries</Link>

              <Link href="/contact" className="text-[#1C1817] text-2xl font-medium" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>

             </div>

             <div className="flex flex-col gap-4 mt-4">

              <ContactButton variant="primary" className="w-full" onClick={() => setMobileMenuOpen(false)}>Get a Quote</ContactButton>

             </div>

          </div>

        )}

      </nav>



      <main>

        <ContactHero skyImage={HERO_IMAGES.sky} cityImage={HERO_IMAGES.city} />

      </main>

      

      {/* Contact Form and Key Contacts Section */}

      <section className="w-full py-38 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(to bottom, #f3f2f2 0%, #f3f2f2 70%, #e7e7e6 100%)' }}>

        <div className="max-w-4xl mx-auto space-y-16">

          <header className="mb-12">

            <p className="text-sm font-medium text-[#1C1817] mb-2 tracking-wide uppercase">Reach out to us.</p>

            <h1 className="text-5xl font-bold tracking-tight text-[#1C1817]">Start the Conversation.</h1>

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

