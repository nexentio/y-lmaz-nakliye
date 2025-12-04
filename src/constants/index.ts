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

    quote: "\"Loginord helped us streamline our entire distribution network in Western Europe. Always on time, always reliable.\"",

    name: "Frank Anderson",

    company: "European Food Co.",

    image: "https://framerusercontent.com/images/eA14AQZoraXhWBvjDmeNUInSEk.webp"

  },

  {

    id: 2,

    quote: "\"Loginord became a true partner in our cold-chain operations across the US. Their real-time visibility tools make all the difference.\"",

    name: "Carla Jennings",

    company: "FreshHarvest Foods",

    image: "https://framerusercontent.com/images/unWYDuYMRPUeJ16AX0mrzNKJ8.webp"

  },

  {

    id: 3,

    quote: "\"What impressed us most was their flexibility during seasonal peaks. Loginord scaled up quickly without compromising quality.\"",

    name: "Thierry Morel",

    company: "AgriNova Americas",

    image: "https://framerusercontent.com/images/Ej8sUg9nHnlycpYyqFac2ga4.webp"

  },

  {

    id: 4,

    quote: "\"From the first shipment, it was clear they understood the complexity of electronics transport. Everything has been smooth and secure.\"",

    name: "Derek Tanaka",

    company: "Nextronix Components",

    image: "https://framerusercontent.com/images/V4oFVZNGp88PU7IzhV9HJiodMws.webp"

  }

];

export const NAV_LINKS: NavLink[] = [

  { label: 'Home', href: '#' },

  { label: 'About Us', href: '#' },

  { label: 'Services', href: '#' },

  { label: 'Fleet', href: '#' },

  { label: 'Industries', href: '#' },

  { label: 'Contact Us', href: '#' },

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

    id: 'rotterdam-hub',

    city: 'Rotterdam',

    country: 'Netherlands',

    title: 'European Headquarters & Warehouse',

    description: "Located in the heart of Europe's logistics corridor, our Rotterdam HQ oversees ground freight, regional distribution, and B2B partnerships across France, Germany, Benelux, and Spain.",

    coordinates: {

      top: 72.5,

      left: 58.5,

    },

    image: 'https://images.unsplash.com/photo-1473876637954-4b493d59fd09?q=80&w=2000&auto=format&fit=crop', 

    active: true,

  }

];

export const TEAM_MEMBERS: TeamMember[] = [

  {

    id: '1',

    name: 'Anders Smithsson',

    role: 'Founder & CEO',

    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',

    linkedinUrl: '#'

  },

  {

    id: '2',

    name: 'Sophie Van Dijk',

    role: 'Commercial Director',

    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',

    linkedinUrl: '#'

  },

  {

    id: '3',

    name: 'Michael Reyes',

    role: 'Head of Operations',

    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',

    linkedinUrl: '#'

  },

  {

    id: '4',

    name: 'Claire Fontaine',

    role: 'Quality & Compliance Lead',

    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',

    linkedinUrl: '#'

  }

];

export const STANDARDS: StandardItem[] = [

  {

    id: 1,

    iconSrc: "https://framerusercontent.com/images/rkWr4LxNKhYA7mIbUN436Q8264.svg?width=59&height=36",

    title: "ISO 9001:2015",

    description: "Our operations follow strict quality management standards, ensuring consistency, efficiency, and customer satisfaction at every stage.",

    width: 59,

    height: 36

  },

  {

    id: 2,

    iconSrc: "https://framerusercontent.com/images/YojkX4pmmDTitKmvFG2xERdo.svg?width=51&height=40",

    title: "GDP Certification",

    description: "We comply with Good Distribution Practices to guarantee the integrity and safety of products throughout the supply chain.",

    width: 51,

    height: 40

  },

  {

    id: 3,

    iconSrc: "https://framerusercontent.com/images/eLNWAzqL6G7tJSxbylXqaxnc9VU.svg?width=37&height=41",

    title: "Environmental Compliance",

    description: "Commitment to sustainable logistics practices that meet international environmental and safety regulations.",

    width: 37,

    height: 41

  }

];

export const services: ServiceData[] = [

  {

    id: "01",

    title: "National & International Freight",

    image: "https://picsum.photos/800/600?random=1",

    description: "We move goods across Europe and North America with precision. Whether it's full truckloads or smaller consignments, our multimodal solutions ensure on-time, secure deliveries.",

    features: [

      { title: "Multi-modal shipping:", description: "Road, rail, air, and ocean freight." },

      { title: "Customs-ready:", description: "International documentation and clearance support." },

      { title: "Route optimization:", description: "For efficiency, cost, and sustainability." }

    ]

  },

  {

    id: "02",

    title: "Regional Distribution",

    image: "https://picsum.photos/800/600?random=2",

    description: "Our regional distribution network enables daily and scheduled deliveries in France and the U.S., supported by digital traceability and performance tracking.",

    features: [

      { title: "Same-day / next-day options:", description: "Based on regional hubs." },

      { title: "Real-time tracking:", description: "From pick-up to delivery." },

      { title: "Proof of delivery (POD):", description: "Digital and secure." }

    ]

  },

  {

    id: "03",

    title: "Warehousing & Fulfillment",

    image: "https://picsum.photos/800/600?random=3",

    description: "More than storage — our logistics hubs offer advanced capabilities tailored to dynamic supply chains and omni-channel operations.",

    features: [

      { title: "Temperature-controlled zones:", description: "For sensitive goods." },

      { title: "Inventory integration:", description: "Real-time sync with your systems." },

      { title: "Value-added services:", description: "Kitting, labeling, repacking." }

    ]

  },

  {

    id: "04",

    title: "Refrigerated Transport",

    image: "https://picsum.photos/800/600?random=4",

    description: "Temperature-controlled transport you can rely on. Designed for pharma, perishables, and other sensitive cargo, with full visibility and compliance.",

    features: [

      { title: "Certified cold chain:", description: "HACCP & GDP compliant." },

      { title: "Live temperature monitoring:", description: "Throughout the journey." },

      { title: "Pharma & food-grade fleet:", description: "Sanitized and calibrated." }

    ]

  },

  {

    id: "05",

    title: "3PL Subcontracting",

    image: "https://picsum.photos/800/600?random=5",

    description: "We support growing businesses with long-term logistics solutions, dedicated assets, and flexible SLAs — acting as an extension of your team.",

    features: [

      { title: "Custom contracts:", description: "Tailored to your industry & volumes." },

      { title: "Dedicated fleet options:", description: "Branded or white-label." },

      { title: "Client dashboards:", description: "Real-time data, performance reports." }

    ]

  }

];

export const SECTION_TAG = "FUELING EVERY MOVE";

export const SECTION_TITLE = "What Sets Us Apart:";

export const FEATURES: FeatureItem[] = [

  {

    id: 'reliability',

    title: 'Certified Reliability',

    description: 'ISO 9001 processes & time-definite performance.',

    icon: 'https://framerusercontent.com/images/9evVzCTgnvOhSapzBMvHCFEFTqs.svg',

  },

  {

    id: 'fleet',

    title: 'Own Fleet + Trusted Partners',

    description: 'Flexibility and control for consistent delivery.',

    icon: 'https://framerusercontent.com/images/nNxIxSslCuOx4gx4QYOH0qVUlEY.svg',

  },

  {

    id: 'dual-hub',

    title: 'Dual-Hub Operations',

    description: 'Rotterdam & Houston coverage ensures global reach and regional precision.',

    icon: 'https://framerusercontent.com/images/gaR0VwBnC0N4APFwe98Wh6FNzA.svg',

  },

  {

    id: 'integrations',

    title: 'Client-Centric Integrations',

    description: 'API-based tracking, order management & EDI support.',

    icon: 'https://framerusercontent.com/images/ewowPWKy313pFX3YtxCqcFjFxg.svg',

  },

  {

    id: 'scalable',

    title: 'Scalable for Growth',

    description: 'Modular service plans for evolving business needs.',

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

    question: "Do you handle temperature-controlled shipments internationally?",

    answer: "Yes, we specialize in end-to-end cold chain logistics. Our fleet is equipped with advanced temperature monitoring systems to ensure your sensitive cargo remains within the required temperature range throughout the entire journey, whether by air, sea, or road."

  },

  {

    id: 2,

    question: "What's the average quote response time?",

    answer: "We understand that speed is critical in logistics. Our team is committed to providing detailed quotes within 2 hours for standard requests and within 24 hours for complex, multi-modal project logistics."

  },

  {

    id: 3,

    question: "Can I request dedicated capacity for seasonal peaks?",

    answer: "Absolutely. We offer flexible contracts that allow you to secure dedicated capacity during your high-volume periods. We recommend discussing your seasonal forecasting with us at least 3 months in advance to guarantee availability."

  },

  {

    id: 4,

    question: "Can I request a quote for a single shipment?",

    answer: "Yes, we handle both recurring contracts and one-off spot shipments. You can easily request a quote through our portal or by contacting our support team directly, regardless of shipment volume."

  },

  {

    id: 5,

    question: "Can you manage logistics during seasonal peaks?",

    answer: "Yes, our scalable infrastructure is designed to absorb demand surges. We utilize predictive analytics to allocate resources efficiently during peak seasons, ensuring your supply chain remains uninterrupted."

  },

  {

    id: 6,

    question: "Are your services available for small and mid-sized businesses?",

    answer: "We serve businesses of all sizes. Our solutions are scalable, meaning we provide the same level of tracking, reliability, and support to SMEs as we do to enterprise clients, often with tailored pricing models."

  },

  {

    id: 7,

    question: "What certifications does Loginord hold?",

    answer: "We maintain the highest industry standards. Loginord is ISO 9001 certified for quality management, GDP certified for pharmaceutical transport, and we are an Authorized Economic Operator (AEO)."

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

  tag: "INDUSTRIES",

  titlePrefix: "Tailored to your",

  titleSuffix: "Industry.",

  description: "From perishable foods to high-value electronics, Loginord crafts specialized supply-chain solutions that fit your requirements and regulations."

};

// Industries Data for Industries Page Detailed Section

export const INDUSTRIES_DATA: IndustryData[] = [

  {

    id: 'food-beverage',

    title: 'Food & Beverage',

    description: 'Temperature-controlled transport from farm to market.',

    imageUrl: 'https://framerusercontent.com/images/4W2UQjgXqF2ySWbOeXH2W9G6os.jpg?width=1000',

    features: [

      'HACCP-certified cold chain',

      'Cross-docking & warehousing',

      'Last-mile refrigerated delivery'

    ]

  },

  {

    id: 'pharma',

    title: 'Pharmaceutical & Medical',

    description: 'Safe, traceable logistics for healthcare essentials.',

    imageUrl: 'https://framerusercontent.com/images/M2Blfi2uhHuLhqgAkz4Gths8aXo.jpg?width=1000',

    features: [

      'GDP/GMP-compliant transport',

      'Tamper-evident packaging',

      'Real-time tracking'

    ]

  },

  {

    id: 'industrial',

    title: 'Industrial & Manufacturing',

    description: 'Just-in-time heavy transport for manufacturing logistics.',

    imageUrl: 'https://framerusercontent.com/images/5UpEscfduHJTgjeKasOjUYDYps.webp?width=1000',

    features: [

      'Full & breakbulk FTL services',

      'Real-time route optimization',

      'Customs-cleared cross-border'

    ]

  },

  {

    id: 'electronics',

    title: 'Electronics & Technology',

    description: 'Secure logistics for high-value tech components.',

    imageUrl: 'https://framerusercontent.com/images/gDJQlN4uLNxj3MMRA45Ji66530.jpg?width=1000',

    features: [

      'ESD-safe handling & packaging',

      'Express air & ground transport',

      'Customs-ready documentation support'

    ]

  },

  {

    id: 'retail',

    title: 'Retail & E-Commerce',

    description: 'Fast, scalable delivery for retail and online sales.',

    imageUrl: 'https://framerusercontent.com/images/j4QHmpdyTicyhFFwPzYSL5E7jlU.jpg?width=1000',

    features: [

      'Nationwide fulfillment & distribution',

      'Integrated returns management',

      'Last-mile delivery optimization'

    ]

  }

];
