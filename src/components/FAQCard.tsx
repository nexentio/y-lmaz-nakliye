"use client";

import React, { useRef, useEffect, useState } from 'react';

interface FAQCardProps {

  index: number;

  question: string;

  answer: string;

}

export const FAQCard: React.FC<FAQCardProps> = ({ index, question, answer }) => {

  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<string>('0px');

  // Format index to be 2 digits (e.g., 01, 02)

  const formattedIndex = (index + 1).toString().padStart(2, '0');

  useEffect(() => {

    if (isOpen && contentRef.current) {

      setHeight(`${contentRef.current.scrollHeight}px`);

    } else {

      setHeight('0px');

    }

  }, [isOpen]);

  return (

    <div 

      className={`w-full bg-white rounded-xl border transition-all duration-300 ease-in-out cursor-pointer overflow-hidden ${isOpen ? 'shadow-[0px_0px_16px_0px_rgba(0,0,0,0.05)] border-[#F94006]' : 'shadow-[0px_0px_16px_0px_rgba(0,0,0,0.05)] border-[#FED9CD]'}`}

      onClick={() => setIsOpen(!isOpen)}

    >

      {/* Card Header */}

      <div className="p-6 md:p-8 flex items-center justify-between gap-4">

        <div className="flex items-center gap-4 md:gap-6 flex-1">

          {/* Number Badge */}

          <div className="flex items-center flex-shrink-0">

            {/* The orange ring */}

            <div className="w-[14px] h-[14px] rounded-full border-[3.5px] border-[#F94006] mr-3"></div>

            {/* The number */}

            <span className="text-[#1C1817] font-semibold text-lg">{formattedIndex}</span>

          </div>

          

          {/* Question Text */}

          <h3 className="text-[#1C1817] font-semibold text-lg md:text-[19px] leading-tight select-none">

            {question}

          </h3>

        </div>

        {/* Toggle Button */}

        <div className="flex-shrink-0">

          <button 

            className={`w-12 h-12 rounded-full border border-[#F94006] flex items-center justify-center transition-transform duration-300 ease-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}

            aria-label={isOpen ? "Close answer" : "Open answer"}

          >

            <svg 

              width="24" 

              height="24" 

              viewBox="0 0 24 24" 

              fill="none" 

              xmlns="http://www.w3.org/2000/svg"

              className="text-[#F94006]"

            >

              <path d="M12 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

              <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

            </svg>

          </button>

        </div>

      </div>

      {/* Expandable Content */}

      <div 

        style={{ height }} 

        className="transition-[height] duration-300 ease-in-out overflow-hidden"

      >

        <div ref={contentRef} className="px-6 md:px-8 pb-8 pt-0">

          <div className="pl-[60px] md:pl-[70px]">

            <p className="text-[#595959] text-lg leading-relaxed">

              {answer}

            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

