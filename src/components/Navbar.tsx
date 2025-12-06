"use client";

import React, { useState, useEffect } from 'react';

import Link from 'next/link';

import Image from 'next/image';

import { ArrowRight, Menu, X } from 'lucide-react';

const NavLink = ({ text, href, variant = 'dark' }: { text: string; href: string; variant?: 'dark' | 'light' }) => {

  const textColor = variant === 'light' 
    ? 'text-[#1C1817]/80 hover:text-[#1C1817]' 
    : 'text-white/80 hover:text-white';

  return (
    <Link 
      href={href}
      className={`text-[13px] font-medium tracking-wide ${textColor} transition-colors uppercase`}
    >
      {text}
    </Link>
  );
};

interface NavbarProps {
  variant?: 'dark' | 'light';
}

export default function Navbar({ variant = 'dark' }: NavbarProps) {

  const [isOpen, setIsOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const currentScrollY = window.scrollY;

      // Scroll down - hide navbar

      if (currentScrollY > lastScrollY && currentScrollY > 100) {

        setIsVisible(false);

      } 

      // Scroll up - show navbar

      else if (currentScrollY < lastScrollY) {

        setIsVisible(true);

      }

      setLastScrollY(currentScrollY);

    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);

  }, [lastScrollY]);

  const isLight = variant === 'light';
  
  const logoColor = isLight ? 'text-[#1C1817]' : 'text-white';
  const menuBg = isLight ? 'bg-white/50 backdrop-blur-sm border border-[#1C1817]/10' : 'bg-black/40 backdrop-blur-md border border-white/10';
  const menuToggleColor = isLight ? 'text-[#1C1817]' : 'text-white';
  const mobileMenuBg = isLight ? 'bg-white/95 backdrop-blur-xl border-b border-[#1C1817]/10' : 'bg-[#1C1817]/95 backdrop-blur-xl border-b border-white/10';

  return (

    <nav className={`w-full px-6 py-6 flex items-center justify-between transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>

      {/* Logo */}

      <Link href="/" className="flex items-center gap-1 group cursor-pointer">

        <img 
          src="/logo-yilmaz-nakliyat.png" 
          alt="Yılmaz Nakliyat Logo" 
          className="h-10 w-auto object-contain"
        />

      </Link>

      {/* Desktop Links */}

      <div className={`hidden lg:flex items-center gap-8 ${menuBg} px-8 py-3 rounded-full`}>

        <NavLink text="Ana Sayfa" href="/" variant={variant} />

        <NavLink text="Hakkımızda" href="/about" variant={variant} />

        <NavLink text="Hizmetler" href="/services" variant={variant} />

        <NavLink text="Araç Filosu" href="/fleet" variant={variant} />

           <NavLink text="Sektörler" href="/industries" variant={variant} />

        <NavLink text="İletişim" href="/contact" variant={variant} />

      </div>

      {/* CTA Button */}

      <div className="hidden lg:block">

        <a 
          href={`https://wa.me/905457175150?text=${encodeURIComponent("Merhaba! Yılmaz Nakliyat hizmetleriniz hakkında bilgi almak ve teklif almak istiyorum. Taşımacılık ihtiyacım için sizinle iletişime geçmek istiyorum. Teşekkürler! 🙏")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#F94006] hover:bg-[#d63604] text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-orange-900/20 group"
        >

          <span className="text-sm font-medium">Teklif Alın</span>

          <div className="bg-white/20 rounded-full p-1 transition-transform group-hover:translate-x-1">

            <ArrowRight size={14} className="text-white" />

          </div>

        </a>

      </div>

      {/* Mobile Menu Toggle */}

      <div className="lg:hidden">

        <button onClick={() => setIsOpen(!isOpen)} className={`${menuToggleColor} p-2`}>

          {isOpen ? <X /> : <Menu />}

        </button>

      </div>

      {/* Mobile Menu */}

      {isOpen && (

        <div className={`absolute top-20 left-0 w-full ${mobileMenuBg} p-6 flex flex-col gap-6 lg:hidden z-50`}>

           <NavLink text="Ana Sayfa" href="/" variant={variant} />

           <NavLink text="Hakkımızda" href="/about" variant={variant} />

           <NavLink text="Hizmetler" href="/services" variant={variant} />

           <NavLink text="Araç Filosu" href="/fleet" variant={variant} />

           <NavLink text="Sektörler" href="/industries" variant={variant} />

           <NavLink text="İletişim" href="/contact" variant={variant} />

           <a 
             href={`https://wa.me/905457175150?text=${encodeURIComponent("Merhaba! Yılmaz Nakliyat hizmetleriniz hakkında bilgi almak ve teklif almak istiyorum. Taşımacılık ihtiyacım için sizinle iletişime geçmek istiyorum. Teşekkürler! 🙏")}`}
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center justify-center gap-3 bg-[#F94006] text-white px-6 py-3 rounded-full w-full"
           >

            <span className="text-sm font-medium">Teklif Alın</span>

            <ArrowRight size={16} />

          </a>

        </div>

      )}

    </nav>

  );

}

