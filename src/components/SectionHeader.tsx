import React from 'react';



export const SectionHeader: React.FC = () => {

  return (

    <div className="flex items-center gap-3 mb-12">

      {/* 

        The Circle Icon

        Based on CSS snippet:

        border-bottom-width: 4px; 

        border-color: rgb(249, 64, 6);

        border-radius: 56px; 

        width/height isn't explicitly clear in snippet but visual suggests ~12-14px

      */}

      <div 

        className="w-3 h-3 rounded-full border-[3px] border-[#F94006]"

        aria-hidden="true"

      />

      

      {/* 

        The Text

        Based on CSS snippet:

        color: rgb(28, 24, 23);

        font-family: 'Inter', sans-serif;

      */}

      <h2 className="text-[12px] font-medium tracking-wide uppercase text-[#1C1817]">

        Clients & Partners

      </h2>

    </div>

  );

};

