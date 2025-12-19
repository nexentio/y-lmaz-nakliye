"use client";

import React from 'react';



import { ArrowRight } from 'lucide-react';

export default function Hero() {

  return (

    <main className="flex-1 flex flex-col justify-center px-6 lg:px-12 w-full max-w-[1400px] mx-auto pt-20 lg:pt-0">

      

      {/* Main Headline */}

      <div className="flex flex-col gap-2 mb-8 mt-[100px]">

        <h1 className="text-5xl md:text-7xl lg:text-[88px] leading-[1.1] font-semibold tracking-tight text-white drop-shadow-2xl">

          <span className="block">Eşyalarınız, Güvenle</span>

          <span className="block">Teslim Ediliyor.</span>

        </h1>

      </div>

      {/* Subheadline with orange circle */}

      <div className="flex items-center gap-3 mb-20 lg:mb-32">

        <div className="w-4 h-4 rounded-full border-[3px] border-[#F94006]"></div>

        <p className="text-lg md:text-xl text-white/90 font-normal">

          Gaziantep Nakliyeci - Türkiye Genelinde Profesyonel Taşımacılık.

        </p>

      </div>

      {/* Bottom Section: Description & Secondary CTA */}

      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-0 mt-auto pb-12 lg:pb-20 w-full">

        

        {/* Paragraph */}

        <p className="text-lg md:text-xl text-white/80 max-w-md leading-relaxed font-light">

          Gaziantep Nakliyeci olarak güvenilir taşımacılık. Profesyonel hizmet.<br />

          Her türlü yük ve eşya taşımacılığı. Yılmaz Arslan önderliğinde, sizin için buradayız.

        </p>

        {/* Secondary CTA Button (Glassmorphism + Orange Border) */}

        <a 
          href={`https://wa.me/905457175150?text=${encodeURIComponent("Merhaba! Yılmaz Nakliyat hizmetleriniz hakkında bilgi almak istiyorum. Hizmetlerinizi keşfetmek ve taşımacılık ihtiyacım için teklif almak istiyorum. Teşekkürler! 🙏")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center h-[56px] transition-all duration-300"
        >

            {/* Text Part */}

            <div className="h-full px-8 flex items-center border border-[#F94006] rounded-l-full bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-md border-r-0 group-hover:bg-white/10 transition-colors">

                <span className="text-white text-base font-medium whitespace-nowrap">Hizmetlerimizi Keşfedin</span>

            </div>

            

            {/* Icon Part */}

            <div className="h-full pl-2 pr-2 flex items-center border border-[#F94006] rounded-r-full border-l-0 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-md">

                <div className="w-10 h-10 rounded-full border border-[#F94006] flex items-center justify-center bg-transparent group-hover:bg-[#F94006] transition-colors duration-300">

                    <ArrowRight size={20} className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />

                </div>

            </div>

        </a>

      </div>

    </main>

  );

}

