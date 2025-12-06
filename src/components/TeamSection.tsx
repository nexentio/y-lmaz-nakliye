import React from 'react';



import { TeamMemberCard } from './TeamMemberCard';

import { TeamMember } from '../types';

import { TEAM_MEMBERS } from '../constants';

export const TeamSection: React.FC = () => {

  return (

    <section className="w-full py-20 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

        

        {/* Left Column - Sticky Header */}

        <div className="lg:col-span-4 flex flex-col items-start">

          <div className="lg:sticky lg:top-24">

            <span className="text-xs font-semibold tracking-wider text-gray-900 uppercase mb-5 block">

              Ekibimiz

            </span>

            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-8 leading-[1.15]">

              Güvenebileceğiniz<br />İnsanlar.

            </h2>

            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-sm">

              Gücümüz insanlarımızdan geliyor — sevk görevlilerinden şoförlerimize kadar. Her başarılı teslimatın arkasındaki yönetim ekibimizi tanıyın.

            </p>

          </div>

        </div>

        {/* Right Column - Team Grid */}

        <div className="lg:col-span-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

            {TEAM_MEMBERS.map((member) => (

              <TeamMemberCard key={member.id} member={member} />

            ))}

          </div>

        </div>

        

      </div>

    </section>

  );

};

