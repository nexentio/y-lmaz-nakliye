import React from 'react';



import ServiceCard from './ServiceCard';

import { ServiceItem } from '../types';

// Data extracted from the provided HTML/Design

const services: ServiceItem[] = [

  {

    id: '1',

    number: '01',

    title: 'Yük Taşıma',

    imageUrl: '/yilmaz-nakliyat-yuk-tasima-araci.webp',

    alt: 'Yılmaz Nakliyat logosu taşıyan, paletli yüklerle dolu beyaz nakliye aracı otoyolda hızla ilerliyor.'

  },

  {

    id: '2',

    number: '02',

    title: 'Evden Eve Taşıma',

    imageUrl: '/evden-eve-nakliyat-yukleme.webp',

    alt: 'Profesyonel evden eve nakliyat elemanları, beyaz Yılmaz Nakliyat kamyonetine dikkatlice eşya yüklüyor.'

  },

  {

    id: '3',

    number: '03',

    title: 'Canlı Hayvan Taşıma',

    imageUrl: '/yilmaz-nakliyat-koyun-tasimaciligi.webp',

    alt: 'Yılmaz Nakliyat logosu taşıyan kamyonet ile kırsal alanda canlı hayvan (koyun) nakliyesi.'

  },

  {

    id: '4',

    number: '04',

    title: 'Tekstil Ürünleri Taşıma',

    imageUrl: '/yilmaz-nakliyat-kamyoneti.webp',

    alt: 'Beyaz Yılmaz Nakliyat kamyoneti, paletler ve kutular yüklü, depolama alanında nakliye hizmeti.'

  },

  {

    id: '5',

    number: '05',

    title: 'Tırla Ürün Taşıma',

    imageUrl: '/yilmaz-nakliyat-tir-istanbul-bogaz-koprusu.webp',

    alt: 'Yılmaz Nakliyat tırı, İstanbul Boğaz Köprüsü\'nden geçerken uluslararası taşımacılık ve lojistik hizmetlerini temsil ediyor.'

  }

];

export const ServicesSection: React.FC = () => {

  return (

    <main className="min-h-screen w-full bg-white text-[#1C1817] selection:bg-[#F94006] selection:text-white">

      

      {/* 

        Main Layout Wrapper 

        Using max-w-[1440px] to mimic typical Framer desktop breakpoints 

      */}

      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24 lg:px-20 lg:py-32">

        

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12 xl:gap-x-24">

          

          {/* Left Column: Sticky Title & Description */}

          <div className="lg:col-span-5 relative">

            <div className="lg:sticky lg:top-32 flex flex-col gap-6 lg:gap-8 max-w-lg">

              <h2 className="text-4xl md:text-5xl lg:text-[64px] leading-[1.05] md:leading-[1.1] lg:leading-[0.95] tracking-tight font-medium">

                İhtiyaçlarınıza Uygun <br className="hidden lg:block" />

                Taşımacılık Hizmetleri.

              </h2>

              <p className="text-lg md:text-xl text-[#1C1817] leading-relaxed opacity-90 font-normal max-w-sm">

                Yük taşıma, evden eve taşıma, canlı hayvan taşıma ve tekstil ürünleri taşıma — Yılmaz Nakliyat olarak her ihtiyaca özel çözümler sunuyoruz. Kurucumuz Yılmaz Arslan'ın önderliğinde, müşterilerimize güvenilir, kaliteli ve cana yakın hizmet sağlıyoruz. 30+ araçlık filomuzla Türkiye genelinde profesyonel taşımacılık hizmeti veriyoruz.

              </p>

            </div>

          </div>

          {/* Right Column: Scrollable Service List */}

          <div className="lg:col-span-7 flex flex-col gap-24 lg:gap-32 pb-20">

            {services.map((service) => (

              <ServiceCard key={service.id} item={service} />

            ))}

            

            {/* Empty spacer at bottom if needed for scroll feel, mirroring framer padding */}

            <div className="h-0 lg:h-12" />

          </div>

        </div>

      </div>

    </main>

  );

};

