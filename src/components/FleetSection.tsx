import React from 'react';

interface SectionProps {

  title: string;

  description: string;

  children: React.ReactNode;

  variant?: 'light' | 'dark';

}

const FleetSection: React.FC<SectionProps> = ({ title, description, children, variant = 'light' }) => {

  const titleColor = variant === 'dark' ? 'text-white' : 'text-[#1c1817]';

  const descriptionColor = variant === 'dark' ? 'text-white/90' : 'text-gray-700';

  return (

    <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">

        <h2 className={`text-3xl md:text-4xl font-bold ${titleColor} mb-4 tracking-tight`}>

          {title}

        </h2>

        <p className={`${descriptionColor} text-lg md:text-[1.05rem] leading-relaxed`}>

          {description}

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-8">

        {children}

      </div>

    </section>

  );

};

export default FleetSection;

