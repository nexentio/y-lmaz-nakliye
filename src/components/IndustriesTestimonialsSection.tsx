import React from 'react';

import { IndustriesTestimonialCard } from './IndustriesTestimonialCard';

import { Testimonial } from '../types';

const testimonials: Testimonial[] = [

  {

    id: '1',

    quote: "\"Yılmaz Nakliyat ile çalışmaya başladığımızdan beri demirci malzemelerimizin taşınması hiç sorun olmadı. Her zaman zamanında ve güvenilir hizmet alıyoruz. Yılmaz Arslan bey ve ekibi gerçekten profesyonel.\"",

    name: "Mehmet Demirci",

    company: "Demirci Malzemeleri İşletmesi",

    avatarUrl: "https://picsum.photos/id/64/200/200"

  },

  {

    id: '2',

    quote: "\"İnşaat projelerimizde Yılmaz Nakliyat'ı tercih ediyoruz. Şantiye teslimatlarında çok başarılılar. Malzemelerimiz her zaman zamanında ve hasarsız geliyor. Müteahhitler için ideal bir taşımacılık firması.\"",

    name: "Ali Yılmaz",

    company: "Yılmaz İnşaat Ltd.",

    avatarUrl: "https://picsum.photos/id/338/200/200"

  },

  {

    id: '3',

    quote: "\"Ev taşımacılığında Yılmaz Nakliyat'ı seçtik ve hiç pişman olmadık. Eşyalarımızı özenle paketleyip taşıdılar. 3+1 evimizin tüm eşyalarını tek seferde güvenle taşıdılar. Çok memnun kaldık.\"",

    name: "Ayşe Kaya",

    company: "Yılmaz Nakliyat Müşterisi",

    avatarUrl: "https://picsum.photos/id/237/200/200"

  },

  {

    id: '4',

    quote: "\"Ofis taşımacılığı için Yılmaz Nakliyat ile çalıştık. İş akışımızı hiç aksatmadan, hızlı ve verimli bir şekilde taşımacılık yaptılar. Bilgisayar sistemlerimiz ve tüm ofis eşyalarımız güvenle taşındı.\"",

    name: "Fatih Özkan",

    company: "Teknoloji Şirketi",

    avatarUrl: "https://picsum.photos/id/91/200/200"

  }

];

export const IndustriesTestimonialsSection: React.FC = () => {

  return (

    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-[#F2F2F2] to-[#E7E5E4]">

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">

        

        {/* Header Section */}

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-6">

          <h2 className="text-[#1C1817] text-4xl md:text-5xl font-medium tracking-tight max-w-sm">

            Müşterilerimiz Ne Diyor

          </h2>

          <div className="max-w-md">

            <p className="text-[#1C1817] text-lg md:text-[19px] leading-snug">

              En iyi deneyimi sunuyoruz. Yılmaz Nakliyat olarak, kurucumuz Yılmaz Arslan'ın önderliğinde müşterilerimizin eşyalarını her adımda güvenle ve verimli bir şekilde taşıyoruz.

            </p>

          </div>

        </div>

        {/* Content Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[700px]">

          

          {/* Left Large Media Card (Video Placeholder) */}

          <div className="lg:col-span-1 h-[400px] lg:h-full w-full rounded-lg overflow-hidden relative group">

             {/* Using an image to simulate the video poster from the design */}

            <img 

              src="https://picsum.photos/id/206/800/1200" 

              alt="Yılmaz Nakliyat - Türkiye Genelinde Profesyonel Taşımacılık Hizmetleri" 

              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

            />

            <div className="absolute inset-0 bg-black/10"></div>

          </div>

          {/* Right Testimonial Grid */}

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">

             {testimonials.map((testimonial) => (

                <IndustriesTestimonialCard key={testimonial.id} data={testimonial} />

             ))}

          </div>

        </div>

      </div>

    </section>

  );

};

export default IndustriesTestimonialsSection;

