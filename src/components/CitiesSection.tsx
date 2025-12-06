import React from 'react';

const CitiesSection: React.FC = () => {
  const cities = [
    {
      name: 'İstanbul',
      description: 'Türkiye\'nin en büyük şehri İstanbul\'a düzenli sevkiyatlarımızla hizmet veriyoruz. Özellikle tekstil ürünleri, genel yük, ev eşyaları ve ofis taşımacılığı konularında yoğun talep görüyoruz. İstanbul\'un tüm ilçelerine güvenilir ve zamanında teslimat yapıyoruz.',
      services: ['Tekstil Ürünleri', 'Genel Yük', 'Ev Eşyaları', 'Ofis Taşımacılığı']
    },
    {
      name: 'İzmir',
      description: 'Ege Bölgesi\'nin kalbi İzmir\'e düzenli olarak yük taşımacılığı yapıyoruz. Genel yük, demirci malzemeleri, müteahhit malzemeleri ve ev eşyaları taşımacılığında deneyimli ekibimizle hizmetinizdeyiz. İzmir ve çevresindeki tüm ilçelere güvenilir taşımacılık sağlıyoruz.',
      services: ['Genel Yük', 'Demirci Malzemeleri', 'Müteahhit Malzemeleri', 'Ev Eşyaları']
    },
    {
      name: 'Ankara',
      description: 'Başkent Ankara\'ya inşaat malzemeleri, ofis eşyaları ve genel yük taşımacılığı yapıyoruz. Özellikle müteahhit firmalarının şantiye malzemelerini zamanında ve güvenle ulaştırıyoruz. Ankara\'nın tüm semtlerine profesyonel taşımacılık hizmeti sunuyoruz.',
      services: ['İnşaat Malzemeleri', 'Ofis Eşyaları', 'Genel Yük', 'Şantiye Teslimatları']
    },
    {
      name: 'Konya',
      description: 'Konya\'ya tarım ürünleri, canlı hayvan taşımacılığı ve genel yük sevkiyatları yapıyoruz. Özellikle canlı hayvan taşımacılığı konusunda uzman ekibimizle, hayvanların sağlığı ve konforu için özel araçlarımızla hizmet veriyoruz. Konya ve çevresindeki tüm ilçelere düzenli sevkiyatlarımız bulunmaktadır.',
      services: ['Canlı Hayvan Taşımacılığı', 'Tarım Ürünleri', 'Genel Yük', 'Ev Eşyaları']
    },
    {
      name: 'Bursa',
      description: 'Bursa\'ya tekstil ürünleri, otomotiv yan sanayi ürünleri ve genel yük taşımacılığı yapıyoruz. Bursa\'nın sanayi bölgelerine düzenli sevkiyatlarımızla, işletmelerin üretim süreçlerini aksatmadan hizmet veriyoruz.',
      services: ['Tekstil Ürünleri', 'Otomotiv Yan Sanayi', 'Genel Yük', 'Endüstriyel Ürünler']
    },
    {
      name: 'Antalya',
      description: 'Turizm kenti Antalya\'ya ev eşyaları, ofis taşımacılığı ve genel yük sevkiyatları yapıyoruz. Özellikle yaz sezonunda artan talep doğrultusunda, hızlı ve güvenilir taşımacılık hizmeti sunuyoruz.',
      services: ['Ev Eşyaları', 'Ofis Taşımacılığı', 'Genel Yük', 'Turizm Sektörü']
    },
    {
      name: 'Adana',
      description: 'Çukurova Bölgesi\'nin merkezi Adana\'ya tarım ürünleri, tekstil ürünleri ve genel yük taşımacılığı yapıyoruz. Adana ve çevresindeki tüm ilçelere düzenli sevkiyatlarımızla hizmet veriyoruz.',
      services: ['Tarım Ürünleri', 'Tekstil Ürünleri', 'Genel Yük', 'Endüstriyel Ürünler']
    },
    {
      name: 'Mersin',
      description: 'Liman kenti Mersin\'e genel yük, konteyner taşımacılığı ve tekstil ürünleri sevkiyatları yapıyoruz. Mersin Limanı\'ndan gelen yüklerin Türkiye geneline dağıtımında da hizmet veriyoruz.',
      services: ['Genel Yük', 'Konteyner Taşımacılığı', 'Tekstil Ürünleri', 'Liman Yükleri']
    }
  ];

  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full border-[3px] border-[#F94006]"></div>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500">
              Hizmet Verdiğimiz Şehirler
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1C1817] mb-6">
            Türkiye Genelinde<br />
            Güvenilir Taşımacılık
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gaziantep merkezli olarak faaliyet gösteren Yılmaz Nakliyat, Türkiye'nin dört bir yanına düzenli sevkiyatlar yapmaktadır. 
            İstanbul, İzmir, Ankara, Konya ve daha birçok şehre güvenilir taşımacılık hizmeti sunuyoruz. 
            Kurucumuz Yılmaz Arslan'ın önderliğinde, her şehre özel çözümler üretiyoruz.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cities.map((city, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="text-2xl font-semibold text-[#1C1817] mb-3 group-hover:text-[#F94006] transition-colors">
                {city.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {city.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {city.services.map((service, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-3 py-1 bg-[#F94006]/10 text-[#F94006] rounded-full font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Yukarıda belirtilen şehirlere ek olarak, <strong className="text-[#1C1817]">Bursa, Antalya, Adana, Mersin, Kayseri, Samsun, Trabzon, 
            Eskişehir, Denizli, Gaziantep, Şanlıurfa, Diyarbakır, Malatya, Erzurum, Van</strong> ve Türkiye'nin tüm şehirlerine 
            taşımacılık hizmeti veriyoruz. Özel rota ve sevkiyat talepleriniz için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;

