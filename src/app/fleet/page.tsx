import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';

import Footer from '../../components/Footer';
import { ArrowIcon } from '../../components/ArrowIcon';
import FleetSection from '../../components/FleetSection';
import FleetCard from '../../components/FleetCard';
import { WhatsAppCTA } from '../../components/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'Araç Filosu',
  description: 'Yılmaz Nakliyat araç filosu: 15+ araç ile Gaziantep ve Türkiye genelinde güvenilir taşımacılık. Ağır yük kamyonetleri, Ford Transit araçlar ve ev taşıma araçları.',
  alternates: {
    canonical: 'https://www.yilmaz-nakliyat.com/fleet',
  },
  openGraph: {
    title: 'Araç Filosu | Yılmaz Nakliyat',
    description: '15+ araç ile Gaziantep ve Türkiye genelinde güvenilir taşımacılık. Modern araç filosumuzla profesyonel hizmet.',
    url: 'https://www.yilmaz-nakliyat.com/fleet',
    images: ['/yilmaz-nakliyat-genis-arac-filosu.webp'],
  },
};

import { 

  GPSIcon, 

  DashboardIcon, 

  MaintenanceIcon, 

  RoadsideIcon, 

  RouteIcon, 

  EuroIcon 

} from '../../components/Icons';

// CloseIcon Component

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (

  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">

    <circle cx="12" cy="12" r="11.5" stroke="currentColor" strokeWidth="1"/>

    <path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>

  </svg>

);

// VehicleCard Component

interface VehicleCardProps {

  number: string;

  title: string;

  imageSrc: string;

  description: string;

  features: string[];

}

const VehicleCard: React.FC<VehicleCardProps> = ({ number, title, imageSrc, description, features }) => (

  <div className="bg-white rounded-lg p-6 sm:p-8 w-full">

    {/* Header */}

    <div className="flex justify-between items-start mb-6 sm:mb-8">

      <div className="flex flex-col gap-3">

        <div className="flex items-center gap-2">

          <div className="w-2 h-2 rounded-full border-2 border-accent" />

          <span className="text-xs font-bold text-[#1C1817] uppercase tracking-widest leading-none">{number}</span>

        </div>

        <h3 className="text-xl sm:text-2xl font-semibold text-[#1C1817]">{title}</h3>

      </div>

      <button className="text-[#1C1817]/30 hover:text-accent transition-colors shrink-0" aria-label="Close">

        <CloseIcon className="w-8 h-8 sm:w-10 sm:h-10" />

      </button>

    </div>



    {/* Image */}

    <div className="mb-8 rounded-lg overflow-hidden bg-gray-100">

      <img 

        src={imageSrc} 

        alt={title} 

        className="w-full h-auto object-cover aspect-[16/9] sm:aspect-[2/1]" 

      />

    </div>



    {/* Description */}

    <p className="text-[#1C1817] opacity-80 mb-8 leading-relaxed text-[15px] sm:text-base">

      {description}

    </p>



    {/* Features List */}

    <ul className="space-y-3">

      {features.map((feature, index) => (

        <li key={index} className="flex items-start gap-3 text-[15px] text-[#1C1817] font-medium">

          <span className="w-0.5 h-0.5 rounded-full bg-[#1C1817] mt-2.5 shrink-0" />

          {feature}

        </li>

      ))}

    </ul>

  </div>

);

export default function FleetPage() {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: 'https://www.yilmaz-nakliyat.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Araç Filosu',
        item: 'https://www.yilmaz-nakliyat.com/fleet',
      },
    ],
  };

  return (
    <>
      <Script
        id="breadcrumb-schema-fleet"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <div className="min-h-screen w-full flex flex-col bg-white">


      {/* Hero Section */}

      <section className="w-full flex flex-col items-center pt-24 pb-20 px-4 sm:px-6 lg:px-8">

        {/* Hero Image Section */}

        <div className="w-full max-w-[1200px] mb-16 sm:mb-20">

          <div className="relative w-full overflow-hidden rounded-lg">

            <img 

              src="https://framerusercontent.com/images/mwoDPtIBBxKDpcf82lXns9s41K4.webp?width=2240&height=1640" 

              alt="Yılmaz Nakliyat - Hareket Halindeki Taşımacılık Filosu" 

              className="w-full h-auto object-cover block"

              style={{ aspectRatio: '2240/1640', maxHeight: '600px', objectPosition: 'center' }}

            />

          </div>

        </div>



        {/* Text Content Section */}

        <div className="flex flex-col items-center max-w-[800px] text-center mx-auto space-y-8">

          

          {/* Tag / Eyebrow */}

          <div className="flex items-center justify-center gap-2.5">

            <div className="w-[10px] h-[10px] rounded-full border-[3px] border-accent" aria-hidden="true" />

            <span className="text-[11px] font-bold tracking-[0.08em] text-[#1C1817] uppercase leading-none">

              Tanıtım

            </span>

          </div>



          {/* Heading */}

          <h1 className="text-4xl sm:text-5xl md:text-[64px] leading-[1.1] font-medium tracking-[-0.02em] text-[#1C1817]">

            Hareket Halindeki Filosumuz.

          </h1>



          {/* Subtext Paragraph */}

          <div className="max-w-[680px] mx-auto">

            <p className="text-lg sm:text-[20px] leading-[1.6] font-normal text-[#1C1817] opacity-90">

              Modern araçlar, gelişmiş teknoloji, tam güvenilirlik — kargonuzu her seferinde güvenle ve zamanında taşımak için tasarlandı.

            </p>

          </div>



        </div>

      </section>



      {/* Stats Section */}

      <section className="w-full relative overflow-hidden py-20 lg:py-32">

        

        {/* Animated Marquee Background */}

        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-100 pointer-events-none select-none z-0">

          <div className="flex whitespace-nowrap animate-marquee w-fit">

            {[...Array(2)].map((_, groupIndex) => (

              <div key={groupIndex} className="flex shrink-0">

                {[...Array(12)].map((_, i) => (

                  <div key={i} className="flex shrink-0 items-center justify-center w-[200px] sm:w-[300px]">

                    <ArrowIcon className="w-32 h-32 sm:w-48 sm:h-48 text-[#1C1817] opacity-[0.04]" />

                  </div>

                ))}

              </div>

            ))}

          </div>

        </div>



        {/* Content Container */}

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">

            

            {/* Left Column: Heading */}

            <div className="flex flex-col items-start gap-6 max-w-lg">

               {/* Tag */}

               <div className="flex items-center gap-2.5">

                 <div className="w-[10px] h-[10px] rounded-full border-[3px] border-accent" aria-hidden="true" />

                 <span className="text-[11px] font-bold tracking-[0.08em] text-[#1C1817] uppercase leading-none">

                   Rakamlarla

                 </span>

               </div>

               

               {/* Heading */}

               <h2 className="text-4xl sm:text-5xl md:text-[56px] leading-[1.1] font-medium tracking-[-0.02em] text-[#1C1817]">

                 Türkiye genelinde hizmet veren çeşitli araç filomuz.

               </h2>

            </div>



            {/* Right Column: Stats Grid */}

            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:gap-x-12 sm:gap-y-16 pl-0 lg:pl-12">

               {/* Stat 1 */}

               <div className="flex flex-col gap-2">

                 <span className="font-semibold text-5xl sm:text-[64px] text-[#1C1817] leading-none tracking-tight">

                   15+

                 </span>

                 <p className="text-base sm:text-lg text-[#1C1817] opacity-90 leading-tight">

                   Toplam Araç.

                 </p>

               </div>



               {/* Stat 2 */}

               <div className="flex flex-col gap-2">

                 <span className="font-semibold text-5xl sm:text-[64px] text-[#1C1817] leading-none tracking-tight">

                   2+

                 </span>

                 <p className="text-base sm:text-lg text-[#1C1817] opacity-90 leading-tight">

                   Ağır Yük Kamyonetleri.

                 </p>

               </div>



               {/* Stat 3 */}

               <div className="flex flex-col gap-2">

                 <span className="font-semibold text-5xl sm:text-[64px] text-[#1C1817] leading-none tracking-tight">

                   5+

                 </span>

                 <p className="text-base sm:text-lg text-[#1C1817] opacity-90 leading-tight">

                   Ford Transit ve Şehir İçi Araçlar.

                 </p>

               </div>



               {/* Stat 4 */}

               <div className="flex flex-col gap-2">

                 <span className="font-semibold text-5xl sm:text-[64px] text-[#1C1817] leading-none tracking-tight">

                   3+

                 </span>

                 <p className="text-base sm:text-lg text-[#1C1817] opacity-90 leading-tight">

                   2+1 ve 3+1 Ev Taşıma Araçları.

                 </p>

               </div>

            </div>



          </div>

        </div>



      </section>



      {/* Vehicle Categories Section */}

      <section className="w-full bg-[#350900] py-20 lg:py-32">

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

            

            {/* Left Column: Sticky Content */}

            <div className="lg:col-span-5 flex flex-col items-start gap-8 lg:sticky lg:top-24 self-start">

              {/* Tag */}

              <div className="flex items-center gap-2.5">

                <div className="w-[10px] h-[10px] rounded-full border-[3px] border-accent" aria-hidden="true" />

                <span className="text-[11px] font-bold tracking-[0.08em] text-white uppercase leading-none">

                  Araç Kategorileri

                </span>

              </div>

              

              {/* Heading */}

              <h2 className="text-4xl sm:text-5xl md:text-[56px] leading-[1.1] font-medium tracking-[-0.02em] text-white">

                Her Rota ve İhtiyaca Uygun Tasarım

              </h2>



              {/* Description */}

              <div className="flex flex-col gap-6 text-white/80 text-[17px] leading-relaxed max-w-md">

                <p>

                  Yılmaz Nakliyat'ta, kurucumuz Yılmaz Arslan'ın vizyonu doğrultusunda çeşitlilik önemlidir. Filosumuz, taşımacılık ihtiyaçlarının tamamını karşılamak için stratejik olarak çeşitlendirilmiştir — ağır endüstriyel yüklerden hızlı şehir içi dağıtıma kadar. Müşterilerimize en uygun çözümü sunmak için geniş bir araç yelpazesine sahibiz.

                </p>

                <p>

                  Ham malzemeden tüketim mallarına, özel kargolara kadar, güvenlik, uyumluluk ve zamanında performans sağlamak için doğru aracımız var.

                </p>

              </div>



              {/* CTA Button */}

              <div className="mt-4">
                <WhatsAppCTA
                  message="Merhaba! Yılmaz Nakliyat araç filosu hakkında bilgi almak istiyorum. Filo ekibinizle iletişime geçmek ve taşımacılık ihtiyacım için teklif almak istiyorum. Teşekkürler! 🙏"
                  variant="outline"
                  size="md"
                  className="border-white/40 text-white hover:bg-white/10"
                >
                  Filo Ekibimizle İletişime Geçin
                </WhatsAppCTA>
              </div>

            </div>



            {/* Right Column: Cards Stack */}

            <div className="lg:col-span-7 flex flex-col gap-6 w-full">

              

              <VehicleCard 

                number="01"

                title="Ağır Yük Kamyonetleri"

                imageSrc="/yilmaz-nakliyat-kamyonet-metal-profil-yukleme.webp"

                description="Uzun mesafe ve ağır yükler için temel araçlarımız. Sağlam şasi ve yüksek kapasiteli kasalar, yüklerinizi güvenle taşır."

                features={[

                  "Yüksek kapasiteli yük taşıma",

                  "Metal profiller, demir ve ağır malzemeler için uygun",

                  "Güvenli ve profesyonel taşımacılık hizmeti"

                ]}

              />



              <VehicleCard 

                number="02"

                title="Ford Transit Araçlar"

                imageSrc="/beyaz-ford-transit-kamyonet-yilmaz-nakliyat.webp"

                description="Şehir içi dağıtım ve küçük yükler için ideal araçlar. Kompakt boyutları ve verimliliği ile dar sokaklarda rahatlıkla çalışır."

                features={[

                  "3 tona kadar yük kapasitesi",

                  "Şehir içi erişim için kompakt boyutlar",

                  "Kaldırma platformu ve kuyruk lifti seçenekleri"

                ]}

              />



              <VehicleCard 

                number="03"

                title="Ev Taşıma Araçları"

                imageSrc="/evden-eve-nakliyat-yukleme.webp"

                description="2+1 ve 3+1 ev eşyalarının taşınması için özel olarak tasarlanmış araçlar. Eşyalarınızın güvenle taşınması için geniş ve korumalı taşıma alanı."

                features={[

                  "2+1 ve 3+1 evler için uygun araçlar",

                  "Eşyaların korunması için özel paketleme",

                  "Profesyonel taşıma ekibi ile güvenli teslimat"

                ]}

              />



            </div>



          </div>

        </div>

      </section>

      {/* Connected Fleet Section */}

      <section className="w-full bg-gradient-to-b from-[#350900] to-[#8F1800] py-16 md:py-24">

        <FleetSection

          title="Güvenilir Filo, Güvenilir Hizmet."

          description="Yılmaz Nakliyat olarak, tüm araçlarımız düzenli bakım ve kontrolden geçer. Müşterilerimize güvenilir ve zamanında teslimat sağlamak için sürekli olarak araçlarımızı takip ediyor ve en iyi durumda tutuyoruz. Kurucumuz Yılmaz Arslan'ın önderliğinde, her yükünüzü güvenle taşıyoruz."

          variant="dark"

        >

          <FleetCard

            type="icon"

            title="Güvenilir Takip Sistemi"

            description="Yüklerinizin durumunu telefon veya WhatsApp üzerinden takip edebilirsiniz. Yılmaz Nakliyat olarak, müşterilerimize şeffaf ve güvenilir hizmet sunuyoruz."

            icon={<GPSIcon />}

            bgColor="bg-[#ffe4e6]"

          />

          <FleetCard

            type="image"

            title="Hızlı İletişim"

            description="0545 717 5150 ve 0543 391 9863 numaralarımızdan veya WhatsApp üzerinden 7/24 bize ulaşabilirsiniz. Yılmaz Nakliyat olarak, müşterilerimizle sürekli iletişim halindeyiz."

            imageSrc="/yilmaz-nakliyat-teslimat-takip-uygulamasi.webp"

          />

          <FleetCard

            type="image"

            title="Zamanında Bilgilendirme"

            description="Yüklerinizin durumu hakkında düzenli olarak bilgilendirilirsiniz. Yılmaz Nakliyat olarak, müşterilerimizi her adımda bilgilendirerek güven sağlıyoruz."

            imageSrc="/yilmaz-nakliyat-kamyoneti-otoyolda.webp"

          />

          <FleetCard

            type="icon"

            title="Profesyonel Ekip"

            description="Deneyimli sürücülerimiz ve taşıma ekibimizle, yüklerinizi güvenle ve özenle taşıyoruz. Yılmaz Nakliyat olarak, her işimizde profesyonellik ve özen gösteriyoruz."

            icon={<DashboardIcon />}

            bgColor="bg-[#ffe4e6]"

          />

        </FleetSection>

      </section>

      {/* Rigorous Care Section */}

      <section className="w-full bg-gradient-to-b from-[#8F1800] to-[#F52900] py-16 md:py-24">

        <FleetSection

          title="Sıkı Bakım. Maksimum Çalışma Süresi."

          description="Yılmaz Nakliyat'ın iç bakım ekibi, kurucumuz Yılmaz Arslan'ın talimatları doğrultusunda kesin denetim programlarını takip eder ve duruş süresini en aza indirmek ve güvenliği en üst düzeye çıkarmak için tahmine dayalı analitiği kullanır. Araçlarımızın her zaman hazır olması için sürekli bakım yapıyoruz."

          variant="dark"

        >

          <FleetCard

            type="icon"

            title="Düzenli Araç Bakımı"

            description="Tüm araçlarımız düzenli olarak bakımdan geçer. Yılmaz Nakliyat olarak, araçlarımızın her zaman hazır ve güvenli olmasını sağlıyoruz."

            icon={<MaintenanceIcon />}

            bgColor="bg-[#ffe4e6]"

          />

          <FleetCard

            type="image"

            title="Yasal Uyumluluk"

            description="Tüm taşımacılık işlemlerimiz Türk taşımacılık mevzuatına uygundur. Yılmaz Nakliyat olarak, yasal gereklilikleri eksiksiz yerine getiriyoruz."

            imageSrc="/yilmaz-nakliyat-metal-malzeme-tasima-kamyonet.webp"

          />

          <FleetCard

            type="image"

            title="Deneyimli Sürücüler"

            description="Tüm sürücülerimiz deneyimli ve güvenli sürüş konusunda eğitimlidir. Yılmaz Nakliyat olarak, güvenli taşımacılık için sürekli eğitim veriyoruz."

            imageSrc="/araclar/beyaz-ford-transit-gunbatimi-otoyol.webp"

          />

          <FleetCard

            type="icon"

            title="7/24 Destek Hattı"

            description="Yolda herhangi bir sorun olduğunda, 0545 717 5150 veya 0543 391 9863 numaralarımızdan bize ulaşabilirsiniz. Yılmaz Nakliyat olarak, her zaman yanınızdayız."

            icon={<RoadsideIcon />}

            bgColor="bg-[#ffe4e6]"

          />

        </FleetSection>

      </section>

      {/* Greener Fleet Section */}

      <section className="w-full bg-gradient-to-b from-[#F52900] to-[#FFDDD6] py-16 md:py-24">

        <FleetSection

          title="Güvenilir ve Verimli Taşımacılık."

          description="Yılmaz Nakliyat olarak, araçlarımızı düzenli bakım ve kontrolden geçirerek verimli çalışmasını sağlıyoruz. Kurucumuz Yılmaz Arslan'ın önderliğinde, müşterilerimize güvenilir ve zamanında teslimat garantisi sunuyoruz."

          variant="dark"

        >

          <FleetCard

            type="icon"

            title="Akıllı Rota Planlama"

            description="En kısa ve güvenli rotaları belirleyerek, yüklerinizin zamanında ve güvenle teslim edilmesini sağlıyoruz. Yılmaz Nakliyat olarak, her sevkiyatta en uygun rotayı seçiyoruz."

            icon={<RouteIcon />}

            bgColor="bg-[#e4fff4]"

          />

          <FleetCard

            type="image"

            title="Güvenilir Ortaklıklar"

            description="Türkiye genelinde güvenilir iş ortaklarımızla çalışarak, yüklerinizin her noktaya güvenle ulaşmasını sağlıyoruz. Yılmaz Nakliyat olarak, geniş bir hizmet ağına sahibiz."

            imageSrc="/yilmaz-nakliyat-turkiye-dagitim-agi.webp"

          />

          <FleetCard

            type="image"

            title="Sürekli Gelişim"

            description="Filosumuzu sürekli genişletiyor ve modernize ediyoruz. Yılmaz Nakliyat olarak, müşterilerimize daha iyi hizmet verebilmek için sürekli yatırım yapıyoruz."

            imageSrc="/yilmaz-nakliyat-kasali-ford-transit-arazi.webp"

          />

          <FleetCard

            type="icon"

            title="Yasal Standartlara Uyum"

            description="Tüm araçlarımız Türk taşımacılık mevzuatına ve çevre standartlarına uygundur. Yılmaz Nakliyat olarak, yasal gereklilikleri eksiksiz yerine getiriyoruz."

            icon={<EuroIcon />}

            bgColor="bg-[#e4fff4]"

          />

        </FleetSection>

      </section>

      {/* Footer */}

      <Footer />

      </div>
    </>
  );
}
