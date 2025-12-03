import React from 'react';



import { STANDARDS } from '../constants';

const CertifiedSection: React.FC = () => {

  return (

    <section className="relative w-full py-24 px-6 md:px-12 lg:px-16 xl:px-24" style={{ color: '#1C1817' }}>

      <div className="max-w-[1200px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          

          {/* Left Column - Sticky Content */}

          <div className="relative">

            <div className="flex flex-col gap-6 lg:sticky lg:top-32">

              <div className="flex flex-col gap-4">

                <span className="text-sm font-semibold tracking-wide uppercase opacity-90">

                  Industry Standards

                </span>

                <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-medium -tracking-[0.02em]">

                  Certified. Verified.<br />

                  Compliant.

                </h2>

              </div>

              <p className="text-lg md:text-[19px] leading-[1.6] opacity-80 max-w-[480px]">

                Loginord operates under ISO 9001 standards and complies with HACCP and ADR regulations. All vehicles and processes are regularly audited for quality and safety.

              </p>

            </div>

          </div>

          {/* Right Column - Scrolling List */}

          {/* Added lg:pt-32 to create the staggered effect seen in the design */}

          <div className="flex flex-col gap-16 md:gap-20 lg:pt-32">

            {STANDARDS.map((item) => (

              <div key={item.id} className="flex flex-col items-start gap-6">

                <figure className="relative h-12 flex items-end">

                  <img

                    src={item.iconSrc}

                    alt={`${item.title} logo`}

                    width={item.width}

                    height={item.height}

                    className="block object-contain"

                    loading="lazy"

                  />

                </figure>

                <div className="flex flex-col gap-3">

                  <h3 className="text-xl font-medium tracking-tight">

                    {item.title}

                  </h3>

                  <p className="text-lg leading-[1.6] opacity-80">

                    {item.description}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

};

export default CertifiedSection;

