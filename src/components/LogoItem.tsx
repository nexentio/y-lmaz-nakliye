import React from 'react';



import { LogoData } from '../constants';

interface LogoItemProps {

  logo: LogoData;

}

export const LogoItem: React.FC<LogoItemProps> = ({ logo }) => {

  return (

    <div className="flex-shrink-0 flex items-center justify-center px-4">

      {/* 

        Using standard img tag as requested. 

        Enforcing object-contain to match the framer snippet style.

      */}

      <img

        src={`${logo.src}?width=${logo.width}&height=${logo.height}`}

        alt={logo.alt}

        width={logo.width}

        height={logo.height}

        loading="lazy"

        className="block object-contain opacity-100 mix-blend-multiply filter grayscale-[0%] contrast-100" 

        // Note: The original image seems to have colorful logos. 

        // If the design requires grayscale, add 'grayscale' to className.

        // The user snippet image shows colors, so we keep them color.

        style={{

           width: 'auto',

           height: '40px', // Normalizing height to create a uniform look, similar to the visual alignment in the screenshot

           maxHeight: '100%'

        }}

      />

    </div>

  );

};

