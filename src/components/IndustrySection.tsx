import React from 'react';



import { ArrowRight } from 'lucide-react';

import { Industry } from '../types';

import { IndustryCardHome } from './IndustryCardHome';

import { WhatsAppCTA } from './WhatsAppCTA';

import { TickerBackground } from './TickerBackground';

// Data from the design

const industries: Industry[] = [

  {

    id: '1',

    title: 'Demirci Malzemeleri',

    imageUrl: '/yilmaz-nakliyat-metal-malzeme-tasima-kamyonet.webp',

    alt: 'Yılmaz Nakliyat firmasına ait, metal profillerle yüklü beyaz kamyonet, depo önünde taşıma için bekliyor.'

  },

  {

    id: '2',

    title: 'Müteahhit Malzemeleri',

    imageUrl: '/yilmaz-nakliyat-cimento-yuklu-kamyonet.webp',

    alt: 'İnşaat alanında, çimento torbaları taşıyan Yılmaz Nakliyat kamyoneti.'

  },

  {

    id: '3',

    title: 'Ev Eşyaları',

    imageUrl: '/yilmaz-nakliyat-kamyoneti-tasima.webp',

    alt: 'Yılmaz Nakliyat logolu, kasasında yük bulunan beyaz nakliye kamyoneti yolda ilerliyor.'

  },

  {

    id: '4',

    title: 'Ofis ve İş Yeri',

    imageUrl: '/beyaz-ford-transit-kamyonet-yilmaz-nakliyat.webp',

    alt: 'Yılmaz Nakliyat\'a ait yüklü beyaz Ford Transit kamyonet, yeşil kırsal yolda ilerliyor.'

  },

  {

    id: '5',

    title: 'Genel Yük Taşımacılığı',

    imageUrl: '/yilmaz-nakliyat-guvenli-tasima-yuk-sabitleme.webp',

    alt: 'Yılmaz Nakliyat çalışanı, paletli yükleri güvenli taşıma için kamyonette sabitliyor.'

  }

];

export const IndustrySection: React.FC = () => {

  return (

    <section className="relative w-full min-h-screen bg-brand-dark">

      {/* Background Effect */}

      <TickerBackground />

      {/* Main Container */}

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 w-full">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 pt-20 lg:pt-0">

          

          {/* Left Column - Sticky Content */}

          <div className="lg:w-5/12 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center py-10 lg:py-0">

            <div className="space-y-10 max-w-lg relative">

              <div className="space-y-6">

                <h2 className="text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-white">

                  Her Sektör İçin Profesyonel Çözümler.

                </h2>

                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium max-w-md">

                  Demircilerden müteahhitlere, ev taşımacılığından yük taşımacılığına kadar her sektöre özel taşımacılık hizmetleri. Yılmaz Nakliyat olarak, kurucumuz Yılmaz Arslan'ın önderliğinde her sektörün ihtiyacını anlayıp, cana yakın ve güvenilir çözümler sunuyoruz.

                </p>

              </div>

              {/* Action Buttons */}

              <div className="flex flex-col sm:flex-row gap-4">

                <a 

                  href="#" 

                  className="inline-flex items-center gap-4 pl-6 pr-2 py-2 rounded-full border border-brand-orange bg-gradient-to-b from-brand-orange/0 to-brand-orange-dark/0 backdrop-blur-sm text-white transition-all duration-300 hover:bg-brand-orange/10 group"

                >

                  <span className="font-semibold tracking-wide text-sm">Hizmetlerimizi İnceleyin</span>

                  <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#f94006] to-[#af2c04] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-brand-orange/20">

                    <ArrowRight className="w-5 h-5 text-white" strokeWidth={2.5} />

                  </div>

                </a>

                <WhatsAppCTA
                  message="Merhaba! Yılmaz Nakliyat sektörel taşımacılık çözümleriniz hakkında bilgi almak istiyorum. Hangi sektörler için hizmet veriyorsunuz? Teşekkürler! 🙏"
                  variant="outline"
                  size="md"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Sektörel Çözümler
                </WhatsAppCTA>

              </div>

            </div>

          </div>

          {/* Right Column - Scrolling Cards */}

          <div className="lg:w-7/12 py-10 lg:py-32 space-y-8 md:space-y-12">

            {industries.map((industry) => (

              <IndustryCardHome key={industry.id} industry={industry} />

            ))}

            

            {/* Bottom spacer for scroll comfort */}

            <div className="h-20 lg:h-32"></div>

          </div>

          

        </div>

      </div>

    </section>

  );

};

