import React from 'react';



interface LocationPinProps {

  active?: boolean;

  onClick?: () => void;

}

export const LocationPin: React.FC<LocationPinProps> = ({ active = false, onClick }) => {

  return (

    <div 

      className="relative cursor-pointer group"

      onClick={onClick}

    >

      {/* Pulse effect for active pin */}

      {active && (

        <div className="absolute -inset-2 rounded-full bg-brand-orange/30 animate-ping" />

      )}

      

      {/* Pin Body */}

      <div 

        className={`

          relative w-6 h-6 rounded-full border-2 border-white shadow-[1px_2px_6px_rgba(0,0,0,0.15)]

          transition-colors duration-300 ease-in-out

          ${active ? 'bg-brand-orange scale-110' : 'bg-brand-gray hover:bg-stone-600'}

        `}

      />

    </div>

  );

};

