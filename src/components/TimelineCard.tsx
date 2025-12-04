import React from 'react';

import { TimelineItemData } from '../types';

interface TimelineCardProps {

  data: TimelineItemData;

  align: 'left' | 'right';

}

const TimelineCard: React.FC<TimelineCardProps> = ({ data, align }) => {

  // On mobile, we default to left alignment for everything.

  // The 'md:' prefix handles the desktop zig-zag layout.

  const isLeftAlign = align === 'left';

  return (

    <div 

      className={`

        flex flex-col w-full max-w-sm

        ${isLeftAlign ? 'items-start text-left' : 'items-start md:items-end text-left md:text-right'}

      `}

    >

      {/* Tag Row: Shape + Number */}

      <div className={`flex items-center gap-3 mb-4 ${isLeftAlign ? 'flex-row' : 'flex-row md:flex-row-reverse'}`}>

        {/* Orange Ring Shape */}

        <div 

          className="w-4 h-4 rounded-full border-[4px] border-[#F94006] bg-transparent shrink-0"

          aria-hidden="true"

        />

        

        {/* Number */}

        <span className="text-[#1C1817] font-medium text-sm tracking-widest">

          {data.number}

        </span>

      </div>

      {/* Content */}

      <h2 className="text-3xl md:text-4xl font-bold text-[#1C1817] mb-3 tracking-tight">

        {data.title}

      </h2>

      <p className="text-lg md:text-xl text-[#1C1817] font-light leading-relaxed">

        {data.description}

      </p>

    </div>

  );

};

export default TimelineCard;

