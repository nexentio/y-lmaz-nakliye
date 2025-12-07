import { Testimonial, NavLink, HistoryEvent, LocationData, TeamMember, StandardItem, ServiceData, FeatureItem, ProcessStep, FAQItem, IndustryImage, IndustryData } from '../types';

export interface LogoData {



  id: number;

  src: string;

  alt: string;

  width: number;

  height: number;

}

// Extracted URLs from the provided HTML snippet to ensure pixel perfection

export const CLIENT_LOGOS: LogoData[] = [

  {

    id: 1,

    src: "https://framerusercontent.com/images/0hEyP0wwW89T2DSLT3xi5NIwmC8.svg",

    alt: "Client 1",

    width: 36,

    height: 40

  },

  {

    id: 2,

    src: "https://framerusercontent.com/images/ud1s4Rt4P4XwdQtnHmWxuz8bc.svg",

    alt: "Client 2",

    width: 44,

    height: 41

  },

  {

    id: 3,

    src: "https://framerusercontent.com/images/9BpEOg3xXRUNtoNld1gFuLoMas4.svg",

    alt: "Client 3",

    width: 70,

    height: 40

  },

  {

    id: 4,

    src: "https://framerusercontent.com/images/t91NdGaZLeC9zr7ONnvUXJedAsg.svg",

    alt: "Client 4",

    width: 49,

    height: 40

  },

  {

    id: 5,

    src: "https://framerusercontent.com/images/mZEOKbi91uOuBQi8bfLtFC7ZDg.svg",

    alt: "Client 5",

    width: 59,

    height: 36

  },

  {

    id: 6,

    src: "https://framerusercontent.com/images/0AujqWc17HJiD5KnGjCjUNAG1g.svg",

    alt: "Client 6",

    width: 60,

    height: 40

  },

  {

    id: 7,

    src: "https://framerusercontent.com/images/WLPKtH14Ct7v2NfwWdkFssnvloU.svg",

    alt: "Client 7",

    width: 59,

    height: 38

  },

  {

    id: 8,

    src: "https://framerusercontent.com/images/qi7HDA6siEBSXPQeZwWVXJFgeXQ.svg",

    alt: "Client 8",

    width: 51,

    height: 39

  },

  {

    id: 9,

    src: "https://framerusercontent.com/images/VupYCtGJrCh5eRfyPUT8SDxXzpM.svg",

    alt: "Client 9",

    width: 40,

    height: 40

  },

  {

    id: 10,

    src: "https://framerusercontent.com/images/gyGelDBjFsPktRVTnY5XTtI94.svg",

    alt: "Client 10",

    width: 71,

    height: 55

  },

  {

    id: 11,

    src: "https://framerusercontent.com/images/wNHDTsV2Z2xrq4haVKSiXy2XE.svg",

    alt: "Client 11",

    width: 29,

    height: 40

  }

];

export const TESTIMONIALS: Testimonial[] = [

  {

    id: 1,

    quote: "\"Evden eve taşıma hizmetinizden çok memnun kaldık. Eşyalarımız hiç zarar görmeden, zamanında teslim edildi. Teşekkür ederiz.\"",

    name: "Yılmaz Arslan",

    company: "Yılmaz Nakliyat Müşterisi",

    image: "/google-logo.png"

  },

  {

    id: 2,

    quote: "\"Demirci malzemelerimizi her zaman güvenle taşıdılar. Profesyonel ekip ve düzenli hizmet için teşekkürler.\"",

    name: "Mehmet Demirci",

    company: "Demirci İşletmesi",

    image: "/google-logo.png"

  },

  {

    id: 3,

    quote: "\"İnşaat malzemelerimizin taşınmasında çok yardımcı oldular. Zamanında ve güvenli teslimat için her zaman tercih ediyoruz.\"",

    name: "Ali Müteahhit",

    company: "İnşaat Firması",

    image: "/google-logo.png"

  },

  {

    id: 4,

    quote: "\"Canlı hayvan taşımacılığında çok hassas ve özenli davrandılar. Hayvanlarımız çok güvenli bir şekilde teslim edildi.\"",

    name: "Fatma Çiftçi",

    company: "Hayvancılık İşletmesi",

    image: "/google-logo.png"

  }

];

export const NAV_LINKS: NavLink[] = [

  { label: 'Ana Sayfa', href: '#' },

  { label: 'Hakkımızda', href: '#' },

  { label: 'Hizmetler', href: '#' },

  { label: 'Araç Filosu', href: '#' },

  { label: 'Sektörler', href: '#' },

  { label: 'İletişim', href: '#' },

];

export const HISTORY_DATA: HistoryEvent[] = [

  {

    year: '2010',

    title: 'One Truck.\nOne Dream.',

    description: "LogiNord was founded in a small Rotterdam warehouse with just one vehicle and a clear mission: to offer reliable transport for local businesses with the kind of service larger firms couldn't match.",

    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80' // Warehouse/Truck vibe

  },

  {

    year: '2013',

    title: 'Expanding Horizons.',

    description: "By 2013, the fleet had grown to ten vehicles. We opened our second distribution center in Antwerp, allowing us to serve clients across the Benelux region with same-day delivery options.",

    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80' // Highway/Transport

  },

  {

    year: '2017',

    title: 'Digital Revolution.',

    description: "We launched our proprietary logistics tracking platform, giving clients real-time visibility into their supply chain. This technological leap set a new standard for transparency in the industry.",

    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80' // Tech/Data

  },

  {

    year: '2021',

    title: 'Going Green.',

    description: "Commitment to sustainability led to the acquisition of our first fleet of electric heavy-duty trucks. We pledged to reduce our carbon footprint by 50% within the decade.",

    image: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80' // Electric/Green

  },

  {

    year: '2025',

    title: 'Global Reach.',

    description: "Today, LogiNord operates in 12 countries. While our scale has changed, our core philosophy remains: every package matters, and every client is a partner.",

    image: 'https://images.unsplash.com/photo-1494412574643-35d324698420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80' // Global/Map

  }

];

export const LOCATIONS: LocationData[] = [

  {

    id: 'turkey-hub',

    city: 'Gaziantep',

    country: 'Türkiye',

    title: 'Merkez Ofis ve Lojistik Merkezi',

    description: "Gaziantep'te bulunan merkez ofisimiz, yük taşımacılığı, evden eve taşımacılık, canlı hayvan taşımacılığı ve tekstil ürünleri taşımacılığı hizmetlerini Türkiye genelinde yönetmektedir. Yılmaz Nakliyat olarak, kurucumuz Yılmaz Arslan'ın önderliğinde Gaziantep'ten Türkiye'nin her yerine güvenilir taşımacılık hizmeti sunuyoruz.",

    coordinates: {

      top: 45.5,

      left: 62.5,

    },

    image: '/adres-resmi/gaziantep.webp', 

    active: true,

  }

];

export const TEAM_MEMBERS: TeamMember[] = [

  {

    id: '1',

    name: 'Yılmaz Arslan',

    role: 'Kurucu & Genel Müdür',

    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',

    linkedinUrl: '#'

  },

  {

    id: '2',

    name: 'Ayşe Yılmaz',

    role: 'Ticari Müdür',

    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',

    linkedinUrl: '#'

  },

  {

    id: '3',

    name: 'Mehmet Yılmaz',

    role: 'Operasyon Müdürü',

    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',

    linkedinUrl: '#'

  },

  {

    id: '4',

    name: 'Fatma Yılmaz',

    role: 'Kalite ve Uyumluluk Sorumlusu',

    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',

    linkedinUrl: '#'

  }

];

export const STANDARDS: StandardItem[] = [

  {

    id: 1,

    iconSrc: "https://framerusercontent.com/images/rkWr4LxNKhYA7mIbUN436Q8264.svg?width=59&height=36",

    title: "Sigortalı Taşımacılık",

    description: "Tüm yükleriniz ve eşyalarınız kapsamlı sigorta ile korunmaktadır. Yılmaz Nakliyat olarak, taşımacılık sürecinde oluşabilecek her türlü riski sigorta kapsamına alarak müşterilerimize güvence sağlıyoruz. Kurucumuz Yılmaz Arslan'ın önderliğinde, güvenli ve sigortalı taşımacılık hizmeti sunuyoruz.",

    width: 59,

    height: 36

  },

  {

    id: 2,

    iconSrc: "https://framerusercontent.com/images/YojkX4pmmDTitKmvFG2xERdo.svg?width=51&height=40",

    title: "Güvenli ve Özenli Taşımacılık",

    description: "Eşyalarınızı ve yüklerinizi kendi eşyalarımız gibi özenle taşıyoruz. Profesyonel paketleme, güvenli yükleme ve hasarsız teslimat için özel ekipmanlar ve deneyimli ekibimizle hizmet veriyoruz. Yılmaz Nakliyat, her taşımacılık işleminde güvenliği ön planda tutar.",

    width: 51,

    height: 40

  },

  {

    id: 3,

    iconSrc: "https://framerusercontent.com/images/eLNWAzqL6G7tJSxbylXqaxnc9VU.svg?width=37&height=41",

    title: "Zamanında Teslimat Garantisi",

    description: "Yılmaz Nakliyat olarak, taahhüt ettiğimiz teslimat sürelerine uygun hareket ediyoruz. Türkiye genelinde düzenli sevkiyatlarımızla, yüklerinizin zamanında ve güvenle teslim edilmesini garanti ediyoruz. Kurucumuz Yılmaz Arslan'ın önderliğinde, müşteri memnuniyetini en üst seviyede tutuyoruz.",

    width: 37,

    height: 41

  }

];

export const services: ServiceData[] = [

  {

    id: "01",

    title: "Yük Taşıma",

    image: "https://picsum.photos/800/600?random=1",

    description: "Türkiye genelinde büyük yüklerinizi güvenle taşıyoruz. Tam tır yüklerinden küçük gönderilere kadar geniş araç filomuzla zamanında ve güvenli teslimat garantisi sunuyoruz.",

    features: [

      { title: "Geniş araç filosu:", description: "Tırlar, Ford Transit ve özel araçlar." },

      { title: "Güvenli taşımacılık:", description: "Sigortalı ve profesyonel hizmet." },

      { title: "Esnek çözümler:", description: "Her türlü yük için uygun taşıma seçenekleri." }

    ]

  },

  {

    id: "02",

    title: "Evden Eve Taşıma",

    image: "https://picsum.photos/800/600?random=2",

    description: "2+1 ve 3+1 ev eşyalarınızı özenle taşıyoruz. Profesyonel ekibimiz ve özel araçlarımızla eşyalarınızı zarar görmeden yeni adresinize ulaştırıyoruz.",

    features: [

      { title: "Özel ev taşıma araçları:", description: "2+1 ve 3+1 evler için uygun araçlar." },

      { title: "Profesyonel ekip:", description: "Eşyalarınızı özenle paketleyen ve taşıyan deneyimli personel." },

      { title: "Güvenli teslimat:", description: "Eşyalarınızın hasarsız teslim edilmesi garantisi." }

    ]

  },

  {

    id: "03",

    title: "Canlı Hayvan Taşıma",

    image: "https://picsum.photos/800/600?random=3",

    description: "Canlı hayvanlarınızı en özenli şekilde taşıyoruz. Hayvanların sağlığı ve güvenliği için özel olarak tasarlanmış araçlar ve deneyimli ekibimizle hizmet veriyoruz.",

    features: [

      { title: "Özel araçlar:", description: "Canlı hayvanlar için uygun taşıma araçları." },

      { title: "Deneyimli ekip:", description: "Hayvan bakımı konusunda uzman personel." },

      { title: "Güvenli taşımacılık:", description: "Hayvanların sağlığı ve konforu için özenli hizmet." }

    ]

  },

  {

    id: "04",

    title: "Tekstil Ürünleri Taşıma",

    image: "https://picsum.photos/800/600?random=4",

    description: "Tekstil ürünlerinizi temiz ve güvenli şekilde taşıyoruz. Kumaşlar, hazır giyim ve tekstil malzemelerinin zarar görmeden teslim edilmesi için özel özen gösteriyoruz.",

    features: [

      { title: "Temiz taşımacılık:", description: "Tekstil ürünleri için hijyenik taşıma." },

      { title: "Özel paketleme:", description: "Ürünlerin zarar görmemesi için profesyonel paketleme." },

      { title: "Zamanında teslimat:", description: "Tekstil sektörüne uygun hızlı ve güvenli teslimat." }

    ]

  },

  {

    id: "05",

    title: "Tırla Ürün Taşıma",

    image: "https://picsum.photos/800/600?random=5",

    description: "Geniş tır filomuzla büyük hacimli ürünlerinizi Türkiye'nin her yerine güvenle taşıyoruz. Demirci malzemelerinden müteahhit malzemelerine kadar her türlü ürün için hizmet veriyoruz.",

    features: [

      { title: "Geniş tır filosu:", description: "15+ tır ile büyük hacimli taşımacılık." },

      { title: "Sektörel uzmanlık:", description: "Demirci, müteahhit ve endüstriyel ürün taşımacılığı." },

      { title: "Güvenilir hizmet:", description: "Profesyonel şoförler ve bakımlı araçlarla güvenli taşımacılık." }

    ]

  }

];

export const SECTION_TAG = "HER HAREKETİMİZ İÇİN";

export const SECTION_TITLE = "Bizi Farklı Kılanlar:";

export const FEATURES: FeatureItem[] = [

  {

    id: 'reliability',

    title: 'Güvenilir Hizmet',

    description: 'Kaliteli süreçler ve zamanında teslimat garantisi.',

    icon: 'https://framerusercontent.com/images/9evVzCTgnvOhSapzBMvHCFEFTqs.svg',

  },

  {

    id: 'fleet',

    title: 'Geniş Araç Filosu',

    description: 'Tutarlı teslimat için esneklik ve kontrol.',

    icon: 'https://framerusercontent.com/images/nNxIxSslCuOx4gx4QYOH0qVUlEY.svg',

  },

  {

    id: 'dual-hub',

    title: 'Türkiye Genelinde Hizmet',

    description: 'Türkiye genelinde kapsamlı hizmet ağı ile güvenilir taşımacılık.',

    icon: 'https://framerusercontent.com/images/gaR0VwBnC0N4APFwe98Wh6FNzA.svg',

  },

  {

    id: 'integrations',

    title: 'Müşteri Odaklı Hizmet',

    description: 'Profesyonel takip, sipariş yönetimi ve müşteri desteği.',

    icon: 'https://framerusercontent.com/images/ewowPWKy313pFX3YtxCqcFjFxg.svg',

  },

  {

    id: 'scalable',

    title: 'Büyümeye Uygun',

    description: 'Gelişen iş ihtiyaçlarınız için modüler hizmet planları.',

    icon: 'https://framerusercontent.com/images/xfwVeEi5Q4ThoeqAvKoLkDEGjM.svg',

  },

];

export const PROCESS_STEPS: ProcessStep[] = [

  {

    id: 'step-1',

    number: '01',

    title: 'Discovery',

    description: 'We assess your needs and KPIs.',

  },

  {

    id: 'step-2',

    number: '02',

    title: 'Solution Design',

    description: 'We build a custom logistics plan.',

  },

  {

    id: 'step-3',

    number: '03',

    title: 'Onboarding',

    description: 'You get connected to our systems.',

  },

  {

    id: 'step-4',

    number: '04',

    title: 'Operations',

    description: 'We deliver, track, and optimize.',

  },

  {

    id: 'step-5',

    number: '05',

    title: 'Review',

    description: 'We meet monthly to improve.',

  },

];

export const FAQ_DATA: FAQItem[] = [

  {

    id: 1,

    question: "Evden eve taşıma hizmetiniz için ne kadar süre önceden rezervasyon yapmalıyım?",

    answer: "Yılmaz Nakliyat olarak, evden eve taşıma hizmetleri için en az 1-2 gün önceden rezervasyon yapmanızı öneririz. Ancak acil durumlarda aynı gün hizmet de verebiliriz. Kurucumuz Yılmaz Arslan'ın önderliğinde, müşterilerimize esnek ve hızlı çözümler sunuyoruz. 0545 717 5150 veya 0543 391 9863 numaralarımızdan bize ulaşarak teklif alabilirsiniz."

  },

  {

    id: 2,

    question: "Teklif alma süresi ne kadar?",

    answer: "Yılmaz Nakliyat olarak hızın taşımacılıkta ne kadar önemli olduğunu biliyoruz. Ekibimiz, standart istekler için 2 saat içinde, daha karmaşık projeler için 24 saat içinde detaylı teklifler sunmaya kararlıdır. WhatsApp üzerinden 0545 717 5150 veya 0543 391 9863 numaralarımızdan bize ulaşabilir, hızlı teklif alabilirsiniz."

  },

  {

    id: 3,

    question: "Canlı hayvan taşımacılığı yapıyor musunuz?",

    answer: "Evet, Yılmaz Nakliyat olarak canlı hayvan taşımacılığı konusunda uzmanız. Hayvanlarınızın sağlığı ve konforu için özel olarak tasarlanmış araçlarımız ve deneyimli ekibimizle hizmet veriyoruz. Kurucumuz Yılmaz Arslan'ın önderliğinde, her hayvanı kendi hayvanımız gibi özenle taşıyoruz. Detaylı bilgi için bizimle iletişime geçin."

  },

  {

    id: 4,

    question: "Tek seferlik yük taşıma hizmeti alabilir miyim?",

    answer: "Tabii ki! Yılmaz Nakliyat olarak hem düzenli sözleşmeler hem de tek seferlik spot taşımalar için hizmet veriyoruz. Yük hacminiz ne olursa olsun, 0545 717 5150 veya 0543 391 9863 numaralarımızdan veya WhatsApp üzerinden bize ulaşarak kolayca teklif isteyebilirsiniz. Müşterilerimize cana yakın ve samimi hizmet sunuyoruz."

  },

  {

    id: 5,

    question: "Mevsimsel yoğunluk dönemlerinde hizmet verebiliyor musunuz?",

    answer: "Evet, Yılmaz Nakliyat'ın ölçeklenebilir altyapısı talep artışlarını karşılamak için tasarlanmıştır. 30+ araçlık filomuzla mevsimsel yoğunluk dönemlerinde de kesintisiz hizmet sunuyoruz. Kurucumuz Yılmaz Arslan önderliğinde, kaynaklarımızı verimli bir şekilde tahsis ederek tedarik zincirinizin kesintisiz kalmasını sağlıyoruz."

  },

  {

    id: 6,

    question: "Küçük ve orta ölçekli işletmeler için hizmet veriyor musunuz?",

    answer: "Yılmaz Nakliyat olarak tüm işletme büyüklüklerine hizmet veriyoruz. Çözümlerimiz ölçeklenebilirdir, yani KOBİ'lere de büyük işletmelere sunduğumuz aynı takip, güvenilirlik ve destek seviyesini sunuyoruz, genellikle özel fiyatlandırma modelleriyle. Kurucumuz Yılmaz Arslan'ın vizyonu doğrultusunda, her işletmeye cana yakın hizmet sunuyoruz."

  },

  {

    id: 7,

    question: "Yılmaz Nakliyat hangi sertifikalara sahip?",

    answer: "Yılmaz Nakliyat olarak en yüksek endüstri standartlarını koruyoruz. Kurucumuz Yılmaz Arslan'ın önderliğinde kalite yönetimi için ISO 9001 standartlarına uygun olarak çalışıyoruz. Tüm araçlarımız ve süreçlerimiz düzenli olarak kalite ve güvenlik açısından kontrol edilir. Müşterilerimize güvenilir ve kaliteli hizmet sunmak için sürekli kendimizi geliştiriyoruz."

  }

];

// Industry Images for Industries Page

export const INDUSTRY_IMAGES: IndustryImage[] = [

  {

    id: 1,

    alt: "Juicy raw Steak on a Table",

    src: "https://picsum.photos/400/600?random=1", 

  },

  {

    id: 2,

    alt: "Table with pharmaceutical pills",

    src: "https://picsum.photos/400/600?random=2",

  },

  {

    id: 3,

    alt: "Industrial Factory",

    src: "https://picsum.photos/400/600?random=3",

  },

  {

    id: 4,

    alt: "3D Printer closeup",

    src: "https://picsum.photos/400/600?random=4",

  },

  {

    id: 5,

    alt: "Payment terminal",

    src: "https://picsum.photos/400/600?random=5",

  }

];

// Text Content for Industries Page

export const TEXT_CONTENT = {

  tag: "SEKTÖRLER",

  titlePrefix: "Sektörünüze Özel",

  titleSuffix: "Çözümler.",

  description: "Demirci malzemelerinden müteahhit malzemelerine, ev eşyalarından yük taşımacılığına kadar Yılmaz Nakliyat, her sektöre özel taşımacılık çözümleri sunuyor. Yılmaz Arslan önderliğinde, Türkiye genelinde güvenilir ve profesyonel taşımacılık hizmeti."

};

// Industries Data for Industries Page Detailed Section

export const INDUSTRIES_DATA: IndustryData[] = [

  {

    id: 'demirci-malzemeleri',

    title: 'Demirci Malzemeleri Taşımacılığı',

    description: 'Demirci malzemelerinizi güvenle ve profesyonelce taşıyoruz. Yılmaz Nakliyat olarak, kurucumuz Yılmaz Arslan önderliğinde demirci sektörünün tüm ihtiyaçlarına özel çözümler sunuyoruz. Demir profiller, çelik levhalar, borular, köşebentler ve tüm demirci malzemeleri için özel olarak tasarlanmış tırlarımızla hizmetinizdeyiz. Ağır yüklerin güvenli taşınması için özel ekipmanlar ve deneyimli ekibimizle, malzemelerinizin hasar görmeden ve zamanında teslim edilmesini garanti ediyoruz.',

    imageUrl: 'https://framerusercontent.com/images/4W2UQjgXqF2ySWbOeXH2W9G6os.jpg?width=1000',

    features: [

      'Ağır demir malzemeleri için özel tırlar (25 tona kadar)',

      'Demir profiller, çelik levhalar, borular ve köşebentler taşımacılığı',

      'Özel vinç ve kaldırma ekipmanları ile güvenli yükleme',

      'Zamanında ve hasarsız teslimat garantisi',

      'Türkiye genelinde şehirlerarası demirci malzemeleri taşımacılığı',

      'Sigortalı ve güvenli taşımacılık hizmeti'

    ]

  },

  {

    id: 'muteahhit-malzemeleri',

    title: 'Müteahhit ve İnşaat Malzemeleri Taşımacılığı',

    description: 'İnşaat sektörü için güvenilir taşımacılık hizmetleri. Yılmaz Nakliyat, müteahhitlerin tüm malzemelerini şantiyelerine güvenle ulaştırıyor. Çimento, tuğla, kiremit, beton bloklar, hazır beton, demir çubuklar, çatı malzemeleri ve tüm inşaat malzemeleri için özel araçlarımızla hizmet veriyoruz. Şantiye teslimatlarında uzman ekibimiz, dar sokaklara ve zor erişimli alanlara da güvenle ulaşabiliyor. Proje bazlı taşımacılık çözümlerimizle, inşaat projelerinizin kesintisiz devam etmesini sağlıyoruz.',

    imageUrl: 'https://framerusercontent.com/images/M2Blfi2uhHuLhqgAkz4Gths8aXo.jpg?width=1000',

    features: [

      'Çimento, tuğla, kiremit ve beton bloklar taşımacılığı',

      'Hazır beton ve demir çubuklar için özel araçlar',

      'Çatı malzemeleri ve yalıtım ürünleri taşımacılığı',

      'Şantiye teslimatında uzman ekip ve özel araçlar',

      'Proje bazlı taşımacılık çözümleri ve düzenli sevkiyat',

      'Dar sokaklara ve zor erişimli alanlara teslimat imkanı'

    ]

  },

  {

    id: 'ev-esyalari',

    title: 'Evden Eve Taşımacılık',

    description: 'Ev eşyalarınızı özenle taşıyoruz. Yılmaz Nakliyat, 2+1 ve 3+1 evler için özel araçları ve profesyonel ekibiyle hizmetinizde. Eşyalarınızın güvenli taşınması için özel paketleme hizmeti sunuyoruz. Mobilyalar, elektronik eşyalar, mutfak gereçleri, yatak odası takımları ve tüm ev eşyalarınızı özenle paketleyip, özel koruma malzemeleriyle sararak taşıyoruz. Deneyimli taşıma ekibimiz, eşyalarınızı hasar görmeden yeni adresinize ulaştırıyor. 2+1 ve 3+1 evler için özel olarak tasarlanmış araçlarımızla, tek seferde tüm eşyalarınızı taşıyabiliyoruz.',

    imageUrl: 'https://framerusercontent.com/images/5UpEscfduHJTgjeKasOjUYDYps.webp?width=1000',

    features: [

      '2+1 ve 3+1 evler için özel tasarlanmış araçlar',

      'Profesyonel paketleme ve koruma hizmeti',

      'Mobilya, elektronik ve tüm ev eşyaları taşımacılığı',

      'Deneyimli taşıma ekibi ile güvenli teslimat',

      'Özel koruma malzemeleri ile hasarsız taşımacılık',

      'Tek seferde tüm eşyalarınızı taşıma imkanı'

    ]

  },

  {

    id: 'ofis-isyeri',

    title: 'Ofis ve İş Yeri Taşımacılığı',

    description: 'Ofis ve iş yeri taşımacılığında deneyimli ekibimizle hizmet veriyoruz. Kurucumuz Yılmaz Arslan önderliğinde, ofis eşyalarınızı güvenle taşıyoruz. Ofis masaları, sandalyeler, dosya dolapları, bilgisayar sistemleri, yazıcılar, fotokopi makineleri ve tüm ofis eşyalarınızı özel paketleme ile koruyarak taşıyoruz. İş akışınızı aksatmadan, hızlı ve verimli bir şekilde taşımacılık hizmeti sunuyoruz. Büyük ofislerden küçük işletmelere kadar her ölçekte ofis taşımacılığı yapıyoruz. Eşyalarınızın montaj ve demontaj işlemlerini de yaparak, yeni ofisinizde hemen çalışmaya başlayabilmenizi sağlıyoruz.',

    imageUrl: 'https://framerusercontent.com/images/gDJQlN4uLNxj3MMRA45Ji66530.jpg?width=1000',

    features: [

      'Ofis mobilyaları için özel paketleme ve koruma',

      'Bilgisayar sistemleri ve elektronik cihazlar taşımacılığı',

      'Hızlı ve verimli taşımacılık ile iş akışınızı aksatmama',

      'Montaj ve demontaj hizmetleri',

      'Büyük ofislerden küçük işletmelere kadar her ölçekte hizmet',

      'Hafta içi ve hafta sonu esnek taşımacılık seçenekleri'

    ]

  },

  {

    id: 'genel-yuk',

    title: 'Genel Yük Taşımacılığı',

    description: 'Her türlü yükünüzü güvenle taşıyoruz. Yılmaz Nakliyat olarak, 30+ araçlık filomuzla genel yük taşımacılığında güvenilir çözümler sunuyoruz. Paletli yükler, koli yükleri, ambalajlı ürünler, makine parçaları, tekstil ürünleri ve her türlü genel yük için uygun araçlarımızla hizmet veriyoruz. Türkiye genelinde kapsamlı hizmet ağımızla, yüklerinizi güvenle ve zamanında teslim ediyoruz. Küçük yüklerden büyük tır yüklerine kadar her boyutta taşımacılık yapıyoruz. Sigortalı ve güvenli taşımacılık hizmetimizle, yüklerinizin güvenliğini garanti ediyoruz.',

    imageUrl: 'https://framerusercontent.com/images/j4QHmpdyTicyhFFwPzYSL5E7jlU.jpg?width=1000',

    features: [

      'Paletli yükler, koli yükleri ve ambalajlı ürünler taşımacılığı',

      'Makine parçaları ve endüstriyel yükler için özel araçlar',

      'Tekstil ürünleri ve kumaş taşımacılığı',

      'Türkiye genelinde kapsamlı hizmet ağı',

      'Küçük yüklerden büyük tır yüklerine kadar her boyutta hizmet',

      'Sigortalı ve güvenli taşımacılık ile zamanında teslimat garantisi'

    ]

  }

];
