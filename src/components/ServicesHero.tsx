"use client";

import React, { useEffect, useState } from 'react';



const ServicesHero: React.FC = () => {

  const [isVisible, setIsVisible] = useState(false);



  useEffect(() => {

    // Simple entry animation trigger

    setIsVisible(true);

  }, []);



  return (

    <section 

      className={`w-full max-w-[1360px] mx-auto px-5 md:px-10 py-12 md:py-20 transition-all duration-1000 ease-out transform ${

        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'

      }`}

      style={{ color: '#1C1817' }}

    >

      {/* Top Header Row */}

      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-6">

        {/* H1 Title */}

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[0.95]">

          <span className="inline-block">Özel Taşımacılık</span>

        </h1>



        {/* Services Tag/Link */}

        <div className="flex items-center gap-3 self-start md:self-end md:mb-3">

          {/* Orange Ring Icon */}

          <div 

            className="w-4 h-4 rounded-full border-[3px]"

            style={{ borderColor: '#F94006' }}

            aria-hidden="true"

          />

          <span className="text-[11px] font-bold tracking-wider uppercase">

            Hizmetlerimiz

          </span>

        </div>

      </div>



      {/* Hero Image */}

      <div className="w-full relative rounded-lg overflow-hidden bg-gray-100 aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.4/1] mb-8 md:mb-12">

        <img 

          src="/yilmaz-nakliyat-lojistik-tir-kopru-gunbatimi.webp"

          alt="Yılmaz Nakliyat - Profesyonel Taşımacılık Hizmetleri ve Güvenilir Filo"

          className="w-full h-full object-cover object-[50%_65%]"

        />

        {/* Optional overlay gradient if needed for text contrast, though design is clean */}

      </div>



      {/* Bottom Title Row */}

      <div className="flex justify-start">

         <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[0.95]">

          Güvenilir Taşımacılık İçin.

        </h2>

      </div>

    </section>

  );

};



export default ServicesHero;

