"use client";

import React, { useState, useRef } from 'react';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

import { HistoryItem } from '../types';

const historyData: HistoryItem[] = [

  {

    year: 2010,

    title: "Bir Araç. Bir Hayal.",

    description: "Yılmaz Nakliyat, kurucumuz Yılmaz Arslan tarafından tek bir araç ve net bir misyonla kuruldu: Yerel işletmelere büyük firmaların sağlayamadığı kalitede, cana yakın ve güvenilir taşımacılık hizmeti sunmak.",

    image: "/araclar/beyaz-ford-transit-gunbatimi-otoyol.webp"

  },

  {

    year: 2013,

    title: "Ufukları Genişletiyoruz.",

    description: "2013 yılına gelindiğinde filomuz on araca ulaştı. Yılmaz Arslan'ın liderliğinde operasyonlarımızı genişleterek Türkiye genelinde hizmet vermeye başladık ve ilk lojistik merkezimizi kurduk. Bu dönemde müşteri memnuniyetini her şeyin üstünde tutarak büyümeye devam ettik.",

    image: "/araclar/ticari-ford-transit-ve-lojistik-kamyonlari.webp" 

  },

  {

    year: 2017,

    title: "Dijital Dönüşüm.",

    description: "En son teknoloji takip sistemleri entegre edildi ve teslimat sürelerimiz %40 azaltıldı. Yılmaz Nakliyat olarak taşımacılık sektöründe şeffaflık için yeni bir standart belirledik. Müşterilerimize gerçek zamanlı takip imkanı sunarak güven ve memnuniyet sağladık.",

    image: "/araclar/yuklu-van-rulo-malzeme-tasima-ticari-sokak.webp"

  },

  {

    year: 2021,

    title: "Büyüme ve Gelişim.",

    description: "Yatırımlarımızı artırarak filomuzu genişlettik. Tırlar, Ford Transit araçlar ve ev taşıma araçları ile her türlü taşımacılık ihtiyacına hizmet vermeye başladık. Yılmaz Arslan'ın vizyonu doğrultusunda, müşterilerimize daha iyi hizmet verebilmek için sürekli kendimizi geliştiriyoruz.",

    image: "/araclar/agiryuklu-nakliye-araci-ford-transit-kentsel.webp"

  },

  {

    year: 2025,

    title: "Güçlü Konum.",

    description: "15+ araçlık filomuz ve profesyonel ekibimizle Türkiye genelinde yük taşıma, evden eve taşıma, canlı hayvan taşıma ve tekstil ürünleri taşımacılığında güvenilir bir çözüm ortağıyız. Gaziantep'ten başlayarak, İstanbul, İzmir, Ankara, Konya gibi büyük şehirlere düzenli sevkiyatlarımızla müşterilerimize hizmet veriyoruz. Özellikle İstanbul'a tekstil ürünleri, İzmir'e genel yük, Ankara'ya inşaat malzemeleri, Konya'ya tarım ürünleri ve canlı hayvan taşımacılığı yapıyoruz. Yılmaz Arslan'ın önderliğinde, her müşterimize cana yakın ve samimi hizmet sunarak sektörde öncü olmaya devam ediyoruz.",

    image: "/araclar/tekstil-rulolari-yuklu-kamyonet.webp"

  }

];

const HistorySectionNew: React.FC = () => {

  const [activeYear, setActiveYear] = useState<number>(2010);

  const containerRef = useRef<HTMLDivElement>(null);

  

  // Track scroll progress within the container

  const { scrollYProgress } = useScroll({

    target: containerRef,

    offset: ["start start", "end end"]

  });

  // Update active year based on scroll position

  useMotionValueEvent(scrollYProgress, "change", (latest) => {

    // Divide scroll into segments based on number of items

    const segmentLength = 1 / historyData.length;

    const index = Math.min(

      Math.floor(latest / segmentLength),

      historyData.length - 1

    );

    

    // Only update if changed to prevent unnecessary re-renders

    const newYear = historyData[index].year;

    if (newYear !== activeYear) {

      setActiveYear(newYear);

    }

  });

  const activeContent = historyData.find(item => item.year === activeYear) || historyData[0];

  return (

    // Outer container defines the scrollable height (e.g., 500vh for scroll distance)

    <div ref={containerRef} className="relative h-[500vh]">

      

      {/* Sticky container holds the view in place while scrolling */}

      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden px-4 md:px-12">

        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          

          {/* Left Column: Title & Timeline */}

          <div className="lg:col-span-5 flex flex-col pt-4 relative z-10">

            <h2 className="text-[56px] leading-tight font-medium text-[#1C1817] mb-24 tracking-tight">

              Tarihimiz

            </h2>

            <div className="relative flex flex-col items-end w-full pr-8">

              {historyData.map((item) => {

                const isActive = activeYear === item.year;

                

                return (

                  <div 

                    key={item.year} 

                    className="relative flex items-center justify-end w-full h-[50px] mb-2 transition-colors duration-300"

                  >

                    

                    {/* The "YEAR" Indicator Line - Only visible for active item */}

                    {isActive && (

                      <motion.div 

                        layoutId="activeIndicator"

                        className="absolute right-[120px] md:right-[160px] flex items-center"

                        initial={{ opacity: 0, x: -20 }}

                        animate={{ opacity: 1, x: 0 }}

                        transition={{ duration: 0.4, ease: "easeOut" }}

                      >

                        <div className="flex items-center gap-4">

                            <div className="flex items-center gap-2">

                              <div className="w-3 h-3 rounded-full border-[3px] border-[#F94006] bg-transparent box-border" />

                              <span className="text-[11px] font-bold uppercase tracking-widest text-[#1C1817]">Yıl</span>

                            </div>

                            {/* The Horizontal Line */}

                            <div className="h-[2px] bg-[#F94006] w-[80px] md:w-[140px] rounded-full opacity-60" />

                        </div>

                      </motion.div>

                    )}

                    {/* Year Number */}

                    <div 

                      className={`transition-all duration-500 ease-in-out origin-right text-right

                        ${isActive 

                          ? 'text-[52px] font-medium text-[#1C1817] opacity-100' 

                          : 'text-[42px] font-medium text-[#1C1817] opacity-20 scale-90'

                        }`}

                      style={{ lineHeight: 1 }}

                    >

                      {item.year}

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

          {/* Right Column: Content */}

          <div className="lg:col-span-7 flex flex-col pt-12 lg:pt-[160px]">

            <AnimatePresence mode='wait'>

              <motion.div

                key={activeYear}

                initial={{ opacity: 0, y: 30 }}

                animate={{ opacity: 1, y: 0 }}

                exit={{ opacity: 0, y: -30 }}

                transition={{ duration: 0.5, ease: "easeOut" }}

              >

                {/* Text Content */}

                <div className="mb-12 max-w-xl">

                  <h3 className="text-[40px] leading-[1.1] font-medium text-[#1C1817] mb-6 tracking-tight">

                    {activeContent.title.split('. ').map((part, i) => (

                        <span key={i} className="block">{part}{i === 0 ? '.' : ''}</span>

                    ))}

                  </h3>

                  <p className="text-xl leading-relaxed text-[#1C1817] font-normal opacity-90">

                    {activeContent.description}

                  </p>

                </div>

                {/* Image */}

                <div className="w-[85%] mt-16 relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-200 shadow-xl">

                  <img 

                    src={activeContent.image} 

                    alt={activeYear === 2010 
                      ? "Gün batımında asfalt otoyolda ilerleyen beyaz Ford Transit nakliye aracı."
                      : activeYear === 2013
                      ? "Ford Transit ticari araç, arkada sıraya dizilmiş beyaz nakliye ve lojistik kamyonları."
                      : activeYear === 2017
                      ? "Ticari sokakta çatısında rulo paketler taşıyan beyaz van ve yükleme yapan işçiler."
                      : activeYear === 2021
                      ? "Büyük panellerle aşırı yüklenmiş, şehir içi nakliye yapan beyaz Ford Transit kamyonet."
                      : "Tekstil ve kumaş rulolarıyla aşırı yüklenmiş, ticari bir caddede (Kayaoğulları Tekstil önü) park etmiş beyaz nakliye kamyoneti."
                    }

                    className="w-full h-full object-cover grayscale sepia-[.15]"

                  />

                  {/* Overlay LOGO text on the building wall - purely decorative to match the specific image provided */}


                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>

    </div>

  );

};

export default HistorySectionNew;
