import React from 'react';



interface TimelineYearProps {

  year: string;

  isActive: boolean;

  opacity: number;

  onClick: () => void;

}

export const TimelineYear: React.FC<TimelineYearProps> = ({ year, isActive, opacity, onClick }) => {

  return (

    <button

      onClick={onClick}

      className={`

        text-[42px] font-medium leading-tight tracking-tight transition-all duration-500 ease-out mb-1 text-left block w-full

        ${isActive ? 'text-brand-black' : 'text-brand-black hover:text-brand-orange'}

      `}

      style={{ 

        opacity: opacity,

        transform: isActive ? 'scale(1)' : 'scale(1)', // Can add scale effect if desired

      }}

    >

      {year}

    </button>

  );

};

