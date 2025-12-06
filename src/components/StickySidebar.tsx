import React from 'react';



import { ArrowRight } from 'lucide-react';

export const StickySidebar: React.FC = () => {

  return (

    <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between py-12 lg:py-24 pr-8">

      <div>

        <div className="mb-6">

          <span className="text-white text-sm font-medium tracking-wide">Temel Uzmanlık</span>

        </div>

        <h1 className="text-5xl lg:text-7xl font-medium text-white leading-[1.1] mb-8">

          Ana Yetkinlikler

        </h1>

        <p className="text-lg text-gray-300 max-w-md leading-relaxed">

          İşletmenizi ileriye taşımak için özel taşımacılık ve lojistik çözümleri sunuyoruz.

        </p>

      </div>

      <div className="mt-12 lg:mt-0">

        <button className="group relative flex items-center bg-white/5 backdrop-blur-sm border border-[#f94006] rounded-full p-1 pl-6 pr-1 transition-all hover:bg-white/10">

          <span className="text-white font-medium mr-4">İletişime Geçin</span>

          <div className="h-10 w-10 bg-gradient-to-br from-[#f94006] to-[#af2c04] rounded-full flex items-center justify-center transition-transform group-hover:scale-105">

            <ArrowRight className="text-white w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />

          </div>

        </button>

      </div>

    </div>

  );

};

