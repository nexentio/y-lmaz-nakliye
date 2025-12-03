import React from 'react';



import { ArrowIcon } from './ArrowIcon';

export const BackgroundPattern: React.FC = () => {

  // Create an array to repeat the arrows across the screen

  const arrows = Array.from({ length: 20 });

  return (

    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">

      <div className="flex gap-0 min-w-full justify-center opacity-100">

        {arrows.map((_, i) => (

          <div key={i} className="flex-shrink-0 w-[160px] h-[160px]">

             <ArrowIcon className="w-full h-full" />

          </div>

        ))}

      </div>

    </div>

  );

};

