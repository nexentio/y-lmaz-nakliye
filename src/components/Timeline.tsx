import React from 'react';

import { TimelineItemData } from '../types';

import TimelineCard from './TimelineCard';

const timelineData: TimelineItemData[] = [

  {

    id: '01',

    number: '01',

    title: 'Keşif',

    description: 'İhtiyaçlarınızı ve beklentilerinizi değerlendiriyoruz.',

  },

  {

    id: '02',

    number: '02',

    title: 'Çözüm Tasarımı',

    description: 'Size özel taşımacılık planı oluşturuyoruz.',

  },

  {

    id: '03',

    number: '03',

    title: 'Onboarding',

    description: 'Sistemlerimize entegre oluyorsunuz.',

  },

  {

    id: '04',

    number: '04',

    title: 'Operasyonlar',

    description: 'Teslim ediyor, takip ediyor ve optimize ediyoruz.',

  },

  {

    id: '05',

    number: '05',

    title: 'İnceleme',

    description: 'İyileştirme için düzenli görüşmeler yapıyoruz.',

  },

];

const Timeline: React.FC = () => {

  // Separate data into left and right columns for the zig-zag effect

  const rightItems = timelineData.filter((_, index) => index % 2 === 0);

  const leftItems = timelineData.filter((_, index) => index % 2 !== 0);

  return (

    <div className="relative w-full max-w-[1200px] mx-auto px-4 md:px-8">

      {/* Header Section */}
      <div className="text-center mb-16 md:mb-24">

        <p className="text-xs md:text-[11px] font-semibold tracking-widest text-[#1C1817] uppercase mb-4">

          Nasıl Çalışıyoruz

        </p>

        <h2 className="text-4xl md:text-[56px] font-medium tracking-tight text-[#1C1817]">

          Süreç

        </h2>

      </div>

      {/* Central Animated Road Line */}

      <div className="absolute left-1/2 top-[120px] md:top-[200px] bottom-24 md:bottom-32 -translate-x-1/2 w-6 z-0 hidden md:flex justify-between">

        {/* Left Solid Line */}

        <div className="w-px h-full bg-[#E5E7EB]"></div>

        

        {/* Center Dashed Line */}

        <div className="w-[2px] h-full overflow-hidden relative">

          <div 

            className="w-full h-[200%] animate-road-moving absolute top-0 left-0"

            style={{

              background: 'linear-gradient(to bottom, #E5E7EB 50%, transparent 50%)',

              backgroundSize: '2px 30px', // 15px dash, 15px gap

            }}

          />

        </div>

        {/* Right Solid Line */}

        <div className="w-px h-full bg-[#E5E7EB]"></div>

      </div>

      <div className="flex flex-col md:flex-row justify-between relative z-10">

        

        {/* Left Column */}

        <div className="w-full md:w-1/2 flex flex-col items-end md:pr-16 pt-0 md:pt-48 pb-12 md:pb-0 space-y-16 md:space-y-64">

          {leftItems.map((item) => (

            <TimelineCard 

              key={item.id} 

              data={item} 

              align="right" 

            />

          ))}

        </div>

        {/* Right Column */}

        <div className="w-full md:w-1/2 flex flex-col items-start md:pl-16 space-y-16 md:space-y-64">

          {rightItems.map((item) => (

            <TimelineCard 

              key={item.id} 

              data={item} 

              align="left" 

            />

          ))}

        </div>

      </div>

    </div>

  );

};

export default Timeline;

