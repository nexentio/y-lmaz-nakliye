import React from 'react';



interface MarqueeProps {

  children: React.ReactNode;

  direction?: 'left' | 'right';

  speed?: 'fast' | 'normal' | 'slow';

}

export const Marquee: React.FC<MarqueeProps> = ({ children, direction = 'left', speed = 'normal' }) => {

  

  // To create a seamless loop, we need at least two copies of the content.

  // The animation moves the container -50% (or -100% of one set) and then resets instantly.

  

  return (

    <div 

      className="flex w-full overflow-hidden select-none pointer-events-none"

      style={{

        // Replicating the mask-image from the HTML snippet strictly

        maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',

        WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'

      }}

    >

      <div className="flex min-w-full shrink-0 animate-scroll items-center gap-8 py-4">

        {children}

      </div>

      <div className="flex min-w-full shrink-0 animate-scroll items-center gap-8 py-4">

        {children}

      </div>

    </div>

  );

};

