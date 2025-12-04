export interface ServiceItem {

  id: string;

  number: string;

  title: string;

  imageUrl: string;

  alt: string;

}

export interface Industry {

  id: string;

  title: string;

  imageUrl: string;

  alt: string;

}

export interface Testimonial {

  id: number;

  quote: string;

  name: string;

  company: string;

  image: string;

}

export interface NavLink {

  label: string;

  href: string;

}

export interface HistoryEvent {

  year: string;

  title: string;

  description: string;

  image: string;

}

export interface LocationData {

  id: string;

  city: string;

  country: string;

  title: string;

  description: string;

  coordinates: {

    top: number;

    left: number;

  };

  image?: string;

  active: boolean;

}

export interface TeamMember {

  id: string;

  name: string;

  role: string;

  imageUrl: string;

  linkedinUrl: string;

}

export interface StandardItem {

  id: number;

  iconSrc: string;

  title: string;

  description: string;

  width: number;

  height: number;

}

export interface ServiceData {

  id: string;

  title: string;

  image: string;

  description: string;

  features: Array<{

    title: string;

    description: string;

  }>;

}

export interface FeatureItem {

  id: string;

  title: string;

  description: string;

  icon: string;

}

export interface ProcessStep {

  id: string;

  number: string;

  title: string;

  description: string;

}

export interface FAQItem {

  id: number;

  question: string;

  answer: string;

}
