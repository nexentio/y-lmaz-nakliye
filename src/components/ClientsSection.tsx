import React from 'react';



import { SectionHeader } from './SectionHeader';

import { Marquee } from './Marquee';

import { LogoItem } from './LogoItem';

import { CLIENT_LOGOS } from '../constants';

export const ClientsSection: React.FC = () => {

  return (

    <section className="w-full max-w-[1200px] mx-auto px-6 py-24">

       <div className="flex flex-col items-start">

         <SectionHeader />

         

         <div className="w-full">

           <Marquee>

             {CLIENT_LOGOS.map((logo) => (

               <LogoItem key={logo.id} logo={logo} />

             ))}

           </Marquee>

         </div>

       </div>

    </section>

  );

};

