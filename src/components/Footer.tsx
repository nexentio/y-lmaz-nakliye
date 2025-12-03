import React from 'react';



import { ArrowUpRight, ArrowRight, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

import { MarqueeArrow } from './icons/MarqueeArrow';

// --- Data & Types ---

interface LinkItem {

  label: string;

  href: string;

}

interface FooterColumn {

  title: string;

  links: LinkItem[];

}

const contactsData: FooterColumn = {

  title: "Contacts",

  links: [

    { label: "info@loginord.com", href: "mailto:info@loginord.com" },

    { label: "houston@loginord.com", href: "mailto:houston@loginord.com" },

    { label: "+31 23 732 600", href: "tel:+3123732600" },

    { label: "+1 713 5976172", href: "tel:+17135976172" },

  ]

};

const servicesData: FooterColumn = {

  title: "Services",

  links: [

    { label: "Services", href: "#services" },

    { label: "Our Fleet", href: "#fleet" },

    { label: "Industries", href: "#industries" },

  ]

};

const companyData: FooterColumn = {

  title: "Company",

  links: [

    { label: "About Us", href: "#about" },

    { label: "Contact Us", href: "#contact" },

  ]

};

const socialLinks = [

  { label: "LinkedIn", href: "#", icon: Linkedin },

  { label: "Instagram", href: "#", icon: Instagram },

  { label: "Facebook", href: "#", icon: Facebook },

];

// --- Sub-components ---

const Logo: React.FC = () => (

  <div className="flex items-start mb-10">

    <div className="relative text-white text-5xl font-bold tracking-tight flex items-center gap-1">

      LogiNord

      <ArrowUpRight className="text-white w-8 h-8 stroke-[3]" />

    </div>

  </div>

);

const NewsletterForm: React.FC = () => (

  <div className="w-full max-w-md mb-12">

    <h3 className="text-white text-xl font-medium mb-6">

      Keep on track by subscribing our Newsletter.

    </h3>

    <div className="flex flex-col sm:flex-row gap-4 items-center">

      <div className="relative w-full">

        <input 

          type="email" 

          placeholder="example@email.com" 

          className="w-full bg-transparent border border-white/10 rounded-full py-3 px-6 text-white placeholder-white/50 focus:outline-none focus:border-[#F94006] transition-colors"

        />

      </div>

      <button className="group flex items-center gap-2 border border-[#F94006] rounded-full px-6 py-3 text-white font-medium hover:bg-[#F94006]/10 transition-colors shrink-0">

        Subscribe

        <span className="bg-[#F94006] rounded-full p-1 group-hover:bg-[#d63604] transition-colors">

            <ArrowRight size={16} className="text-white" />

        </span>

      </button>

    </div>

  </div>

);

const SocialList: React.FC = () => (

  <div className="mb-12 lg:mb-0">

    <h4 className="text-white font-semibold text-lg mb-4">Connect</h4>

    <div className="flex gap-8">

      {socialLinks.map((social) => (

        <a 

          key={social.label} 

          href={social.href}

          className="group flex items-center gap-1 text-white font-medium hover:text-[#F94006] transition-colors"

        >

          {social.label}

          <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />

        </a>

      ))}

    </div>

  </div>

);

const ColumnLinks: React.FC<{ data: FooterColumn }> = ({ data }) => (

  <div>

    <h4 className="text-white font-semibold text-2xl mb-6">{data.title}</h4>

    <ul className="flex flex-col gap-4">

      {data.links.map((link, idx) => (

        <li key={idx}>

          <a 

            href={link.href} 

            className="text-white font-mono text-sm tracking-wide hover:underline decoration-[#F94006] underline-offset-4 decoration-2"

          >

            {link.label}

          </a>

        </li>

      ))}

    </ul>

  </div>

);

const MarqueeSection: React.FC = () => {

  // Create a sufficient number of arrows to fill the screen

  const arrows = Array(30).fill(null);

  

  return (

    <div className="w-full overflow-hidden border-b border-white/5 py-16 relative flex items-center justify-between gap-10">

      

      {/* Background Animated Arrows */}

      <div className="absolute inset-0 flex items-center opacity-40 pointer-events-none select-none overflow-hidden">

        <div className="flex gap-16 animate-marquee whitespace-nowrap min-w-full">

            {/* Double the array for seamless looping */}

            {[...arrows, ...arrows].map((_, i) => (

               <MarqueeArrow key={i} className="w-16 h-16 shrink-0 text-white/10" />

            ))}

        </div>

      </div>

      {/* Foreground Content */}

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10 w-full">

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 text-3xl md:text-5xl font-bold text-white mb-8 md:mb-0">

          <span className="whitespace-nowrap">Ready to m</span>

          {/* The orange line graphic */}

          <div className="mx-4 h-[3px] w-24 md:w-64 bg-[#F94006] relative flex items-center">

             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#F94006] rotate-45"></div>

          </div>

          <span className="whitespace-nowrap">ve smarter?</span>

        </div>

        <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#F94006] to-[#ae2d04] p-[1px] focus:outline-none focus:ring-2 focus:ring-[#F94006] focus:ring-offset-2 focus:ring-offset-[#1a0502]">

          <span className="relative flex items-center gap-3 rounded-full bg-gradient-to-r from-[#F94006] to-[#ae2d04] px-8 py-4 text-white font-semibold transition-transform active:scale-95">

            Get a Custom Quote

            <div className="bg-white rounded-full p-2 text-[#F94006]">

               <ArrowRight size={20} className="fill-current" />

            </div>

          </span>

        </button>

      </div>

    </div>

  );

};

// --- Main Component ---

const Footer: React.FC = () => {

  return (

    <footer className="w-full bg-[#1a0502] border-t border-white/5">

      {/* Top CTA Section */}

      <MarqueeSection />

      {/* Main Content */}

      <div className="container mx-auto px-6 md:px-12 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          

          {/* Left Column (Brand + Newsletter) */}

          <div className="lg:col-span-5 flex flex-col justify-between">

            <div>

              <Logo />

              <NewsletterForm />

              <SocialList />

            </div>

          </div>

          {/* Right Columns (Links) */}

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 lg:pl-20">

            <ColumnLinks data={contactsData} />

            <ColumnLinks data={servicesData} />

            <ColumnLinks data={companyData} />

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="bg-[rgba(28,24,23,0.6)] py-6">

        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-sm text-white font-medium">

          <p>© Copyright 2025 - Made by <span className="underline decoration-white/30 cursor-pointer hover:decoration-white transition-all">JBStudio</span></p>

          

          <div className="flex items-center gap-2 mt-4 md:mt-0">

             <a href="#" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">

                ⚡ Get Template

             </a>

             <a href="#" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">

                Made in Framer

             </a>

          </div>

          <div className="mt-4 md:mt-0">

            <a href="#" className="hover:text-[#F94006] transition-colors mr-1">Get Template</a>

            <span className="mx-1">-</span>

            <a href="#" className="hover:text-[#F94006] transition-colors ml-1">Privacy Policy</a>

          </div>

        </div>

      </div>

    </footer>

  );

};

export default Footer;

