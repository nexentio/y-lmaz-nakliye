import React from 'react';

interface ContactHeroProps {

  skyImage: string;

  cityImage: string;

}

export const ContactHero: React.FC<ContactHeroProps> = ({ skyImage, cityImage }) => {

  return (

    <section className="relative pt-32 pb-20 px-6 lg:px-12 max-w-[1440px] mx-auto min-h-screen flex flex-col justify-center">

      

      {/* Top Header Row */}

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">

        <h1 className="text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-tight font-medium text-[#1C1817]">

          Özel <br/> Taşımacılık

        </h1>

        {/* Our Services Tag */}

        <div className="flex flex-col items-end mb-2">

           <div className="flex items-center gap-3 group cursor-pointer">

              <div className="relative w-8 h-8">

                {/* Decorative Box mimicking the 'tag' shape in the image */}

                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#F94006]"></div>

                 <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#F94006] rounded-full"></div>

              </div>

              <span className="uppercase text-sm font-bold tracking-widest text-[#1C1817]">Hizmetlerimiz</span>

           </div>

        </div>

      </div>

      {/* Images Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 h-[400px] md:h-[500px]">

        {/* Left Image (Sky/Minimal) */}

        <div className="relative overflow-hidden rounded-lg group h-full">

           <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>

           <img 

            src={skyImage} 

            alt="Yılmaz Nakliyat - Türkiye Genelinde Taşımacılık Hizmetleri" 

            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"

           />

        </div>

        

        {/* Right Image (City Skyline) */}

        <div className="relative overflow-hidden rounded-lg group h-full">

           <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>

           <img 

            src={cityImage} 

            alt="Yılmaz Nakliyat - Güvenilir Taşımacılık ve Lojistik Çözümleri" 

            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"

           />

        </div>

      </div>

      {/* Bottom Text Area */}

      <div className="flex flex-col xl:flex-row justify-between items-start gap-10">

        <h2 className="text-5xl md:text-6xl lg:text-[64px] font-medium tracking-tight text-[#1C1817] leading-tight max-w-2xl">

          Türkiye Genelinde Güvenilir Hizmet.

        </h2>

        <div className="xl:max-w-md w-full">

          <p className="text-xl md:text-[22px] leading-relaxed text-[#1C1817] font-normal">

            Teklif almak, özel bir sorunuz olması veya taşımacılık ihtiyaçlarınız için nasıl destek olabileceğimizi öğrenmek istiyorsanız — Yılmaz Nakliyat olarak buradayız. Kurucumuz Yılmaz Arslan önderliğinde, size en uygun çözümü bulmak için cana yakın ve samimi bir yaklaşımla hizmetinizdeyiz.

          </p>

          

          {/* Subtle decoration line often found in these designs */}

          <div className="h-[2px] w-full bg-[#1C1817]/10 mt-8">

            <div className="h-full w-1/3 bg-[#F94006]"></div>

          </div>

        </div>

      </div>

    </section>

  );

};

