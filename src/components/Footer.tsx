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

  title: "İletişim",

  links: [

    { label: "0545 717 5150", href: "tel:+905457175150" },

    { label: "0543 391 9863", href: "tel:+905433919863" },

    { label: "WhatsApp: 0545 717 5150", href: "https://wa.me/905457175150" },

    { label: "WhatsApp: 0543 391 9863", href: "https://wa.me/905433919863" },

  ]

};

const servicesData: FooterColumn = {

  title: "Hizmetler",

  links: [

    { label: "Hizmetlerimiz", href: "#services" },

    { label: "Araç Filosu", href: "#fleet" },

    { label: "Sektörler", href: "#industries" },

  ]

};

const companyData: FooterColumn = {

  title: "Şirket",

  links: [

    { label: "Hakkımızda", href: "#about" },

    { label: "İletişim", href: "#contact" },

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

      Yılmaz Nakliyat

      <ArrowUpRight className="text-white w-8 h-8 stroke-[3]" />

    </div>

  </div>

);

const NewsletterForm: React.FC = () => (

  <div className="w-full max-w-md mb-12">

    <h3 className="text-white text-xl font-medium mb-6">

      Bültenimize abone olarak güncel haberlerden haberdar olun.

    </h3>

    <div className="flex flex-col sm:flex-row gap-4 items-center">

      <div className="relative w-full">

        <input 

          type="email" 

          placeholder="ornek@email.com" 

          className="w-full bg-transparent border border-white/10 rounded-full py-3 px-6 text-white placeholder-white/50 focus:outline-none focus:border-[#F94006] transition-colors"

        />

      </div>

      <button className="group flex items-center gap-2 border border-[#F94006] rounded-full px-6 py-3 text-white font-medium hover:bg-[#F94006]/10 transition-colors shrink-0">

        Abone Ol

        <span className="bg-[#F94006] rounded-full p-1 group-hover:bg-[#d63604] transition-colors">

            <ArrowRight size={16} className="text-white" />

        </span>

      </button>

    </div>

  </div>

);

const SocialList: React.FC = () => (

  <div className="mb-12 lg:mb-0">

    <h4 className="text-white font-semibold text-lg mb-4">Bağlanın</h4>

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

          <span className="whitespace-nowrap">Hemen İletişime</span>

          {/* The orange line graphic */}

          <div className="mx-4 h-[3px] w-24 md:w-64 bg-[#F94006] relative flex items-center">

             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#F94006] rotate-45"></div>

          </div>

          <span className="whitespace-nowrap">Geçelim mi?</span>

        </div>

        <a 
          href={`https://wa.me/905457175150?text=${encodeURIComponent("Merhaba! Yılmaz Nakliyat hizmetleriniz hakkında bilgi almak ve teklif almak istiyorum. Taşımacılık ihtiyacım için sizinle iletişime geçmek istiyorum. Teşekkürler! 🙏")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#F94006] to-[#ae2d04] p-[1px] focus:outline-none focus:ring-2 focus:ring-[#F94006] focus:ring-offset-2 focus:ring-offset-[#1a0502]"
        >

          <span className="relative flex items-center gap-3 rounded-full bg-gradient-to-r from-[#F94006] to-[#ae2d04] px-8 py-4 text-white font-semibold transition-transform active:scale-95">

            Teklif Alın

            <div className="bg-white rounded-full p-2 text-[#F94006]">

               <ArrowRight size={20} className="fill-current" />

            </div>

          </span>

        </a>

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

    </footer>

  );

};

export default Footer;

