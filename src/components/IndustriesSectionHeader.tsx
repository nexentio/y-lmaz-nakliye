import React from 'react';

const IndustriesSectionHeader: React.FC = () => {

  return (

    <div className="flex flex-col h-full">

      <div className="mb-6">

        <span className="text-[10px] uppercase tracking-widest font-bold text-white mb-4 block">

          Specialized by Sector

        </span>

        <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[0.95] mb-8">

          Industries<br />We Serve

        </h2>

        <p className="text-lg leading-relaxed max-w-md text-white/90">

          Each industry has its own logistics DNA — we tailor our services to meet yours with precision, reliability, and care.

        </p>

      </div>

      {/* Decorative SVG elements or sticky behavior could be added here if needed */}

      <div className="hidden lg:block absolute -top-10 -left-10 opacity-10 pointer-events-none">

         {/* Abstract background shape if desired */}

      </div>

    </div>

  );

};

export default IndustriesSectionHeader;

