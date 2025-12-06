import React from 'react';



import { ArrowIcon } from './Icons';

interface ValueItemProps {

  title: string;

  description: string;

}

const ValueItem: React.FC<ValueItemProps> = ({ title, description }) => {

  return (

    <div className="flex items-start gap-6 md:gap-8 group">

      <div className="flex-shrink-0 mt-1">

        <ArrowIcon className="w-8 h-8 text-customOrange" />

      </div>

      <div className="flex flex-col gap-1">

        <h4 className="text-lg md:text-xl font-medium text-customDark">

          {title}

        </h4>

        <p className="text-base md:text-lg text-customDark/80 leading-relaxed max-w-md">

          {description}

        </p>

      </div>

    </div>

  );

};

const ValuesSection: React.FC = () => {

  const values = [

    {

      title: "Misyon",

      description: "Kurucumuz Yılmaz Arslan'ın vizyonu doğrultusunda, büyüyen işletmeler için kesintisiz, verimli ve dürüst taşımacılık çözümleri sunmak. Müşterilerimizin başarısı bizim başarımızdır. Her işletmeye cana yakın ve güvenilir hizmet sunarak, onların büyümesine destek oluyoruz."

    },

    {

      title: "Vizyon",

      description: "Yılmaz Nakliyat olarak, demirci malzemelerinden müteahhit malzemelerine, ev eşyalarından canlı hayvan taşımacılığına kadar her sektörden işletmelerin en güvenilir taşımacılık ortağı olmak. Türkiye genelinde güvenilir, kaliteli ve profesyonel hizmet sunarak sektörde öncü olmayı hedefliyoruz."

    },

    {

      title: "Değerlerimiz",

      description: "Güvenilirlik, şeffaflık, özen ve saygı değerlerimizle çalışıyoruz. Yılmaz Arslan önderliğinde, her müşterimize karşı samimi ve saygılı yaklaşım sergiliyoruz. Eşyalarınızı ve yüklerinizi kendi eşyalarımız gibi özenle taşıyoruz."

    }

  ];

  return (

    <section className="w-full max-w-[1200px] mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* Left Column - Sticky Header area */}

        <div className="flex flex-col gap-4 lg:sticky lg:top-12 h-fit">

          <span className="text-xs font-semibold tracking-wider uppercase text-customDark/70">

            Misyonumuz, Vizyonumuz ve Değerlerimiz

          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-customDark tracking-tight">

            Bizi Yönlendirenler.

          </h2>

        </div>

        {/* Right Column - Content List */}

        <div className="flex flex-col gap-16 lg:gap-20 lg:pt-2">

          {values.map((item, index) => (

            <ValueItem 

              key={index}

              title={item.title}

              description={item.description}

            />

          ))}

        </div>

      </div>

    </section>

  );

};

export default ValuesSection;

