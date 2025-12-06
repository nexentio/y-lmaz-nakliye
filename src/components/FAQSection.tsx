import React from 'react';

import { FAQCard } from './FAQCard';

import { FAQ_DATA } from '../constants';

export const FAQSection: React.FC = () => {

  return (

    <section className="min-h-screen w-full bg-[#fdfdfd] text-[#1C1817] pb-24">

      <div className="max-w-[840px] mx-auto px-5 pt-20 md:pt-32">

        

        {/* Header Section */}

        <div className="mb-16 md:mb-20">

          {/* Small Tagline */}

          <p className="uppercase tracking-widest text-[11px] font-bold text-[#1C1817] mb-4 pl-0.5">

            Size yardımcı olmak için buradayız

          </p>

          

          {/* Main Title */}

          <h1 className="text-4xl md:text-[64px] font-bold tracking-tight leading-[1.1] mb-6 text-[#1C1817]">

            Sıkça <br className="hidden md:block" />

            Sorulan Sorular

          </h1>

          

          {/* Description */}

          <p className="text-[#1C1817] text-lg md:text-[19px] leading-relaxed max-w-2xl opacity-80">

            En sık sorulan sorulara aşağıda cevaplar verdik. Hala emin değil misiniz? Yılmaz Nakliyat olarak bizimle iletişime geçin — ekibimiz size yardımcı olmak için burada. Kurucumuz Yılmaz Arslan önderliğinde, tüm sorularınızı cana yakın bir şekilde yanıtlamaktan mutluluk duyarız.

          </p>

        </div>

        {/* FAQ List */}

        <div className="flex flex-col gap-4">

          {FAQ_DATA.map((item, index) => (

            <FAQCard 

              key={item.id}

              index={index}

              question={item.question}

              answer={item.answer}

            />

          ))}

        </div>

      </div>

    </section>

  );

};

