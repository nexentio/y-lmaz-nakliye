import React from 'react';



import { ArrowUpRight } from 'lucide-react';

import { TeamMember } from '../types';

interface TeamMemberCardProps {

  member: TeamMember;

}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {

  return (

    <div className="flex flex-col group">

      {/* Image Container */}

      <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/5] bg-gray-100">

        <img

          src={member.imageUrl}

          alt={member.name}

          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"

          loading="lazy"

        />

      </div>

      {/* Text Content */}

      <div className="flex flex-col items-start">

        <h3 className="text-lg font-medium text-gray-900 mb-1">

          {member.name}

        </h3>

        <p className="text-base text-gray-600 font-light mb-4">

          {member.role}

        </p>

        {/* LinkedIn Link */}

        <a

          href={member.linkedinUrl}

          target="_blank"

          rel="noopener noreferrer"

          className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors gap-1"

        >

          LinkedIn

          <ArrowUpRight size={16} strokeWidth={2} />

        </a>

      </div>

    </div>

  );

};

