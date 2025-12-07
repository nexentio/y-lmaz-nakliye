"use client";

import React from 'react';

import { FeatureCard } from './FeatureCard';

import { SectionButton } from './ui/SectionButton';

import { WhatsAppCTA } from './WhatsAppCTA';

import { GlobalServiceVisual } from './visuals/GlobalServiceVisual';

import { FleetVisual } from './visuals/FleetVisual';

import { DeliveryVisual } from './visuals/DeliveryVisual';

import { DocumentsVisual } from './visuals/DocumentsVisual';

export default function WhyUsSection() {

  return (

    <section className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center px-4 md:px-12">

      

      {/* Left Content Column */}

      <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">

        <div className="space-y-4">

          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-brand-orange text-xs font-bold tracking-wider uppercase">

            Neden Biz?

          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">

            Profesyonel <br/>

            <span className="relative">

               Taşımacılık 

               <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-orange opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">

                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />

               </svg>

            </span>

            <br/> Hizmetleri

          </h2>

        </div>

        

        <p className="text-slate-600 text-lg leading-relaxed text-justify md:text-left">

          Eşyalarınızı ve yüklerinizi güvenle taşıyoruz. Yılmaz Nakliyat olarak, 

          kurucumuz Yılmaz Arslan'ın önderliğinde profesyonel ekibimiz ve 30+ araçlık 

          geniş filomuz ile her türlü taşımacılık ihtiyacınıza cana yakın ve güvenilir 

          çözümler sunuyoruz.

        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-4">

          <SectionButton />

          <WhatsAppCTA
            message="Merhaba! Yılmaz Nakliyat hizmetleriniz hakkında daha fazla bilgi almak istiyorum. Teşekkürler! 🙏"
            variant="outline"
            size="md"
          >
            Daha Fazla Bilgi
          </WhatsAppCTA>

        </div>

      </div>

      {/* Right Grid Column */}

      <div className="lg:col-span-7 w-full">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">

          

            <FeatureCard 

                title="Türkiye Genelinde Güvenilir Hizmet"

            visual={<GlobalServiceVisual />}

            delay={0.1}

            />

            <FeatureCard 

                title="Geniş ve Modern Araç Filosu"

            visual={<FleetVisual />}

            delay={0.2}

            />

            <FeatureCard 

            title="Hızlı ve Güvenli Teslimat"

                visual={<DeliveryVisual />}

            delay={0.3}

            />

            <FeatureCard 

                title="Profesyonel ve Deneyimli Ekip"

            visual={<DocumentsVisual />}

            delay={0.4}

            />

        </div>

      </div>

    </section>

  );

}

