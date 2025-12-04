import React from 'react';

import Footer from '../../components/Footer';

import { ArrowIcon } from '../../components/ArrowIcon';

import FleetSection from '../../components/FleetSection';

import FleetCard from '../../components/FleetCard';

import { 

  GPSIcon, 

  DashboardIcon, 

  MaintenanceIcon, 

  RoadsideIcon, 

  RouteIcon, 

  EuroIcon 

} from '../../components/Icons';

// CloseIcon Component

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (

  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">

    <circle cx="12" cy="12" r="11.5" stroke="currentColor" strokeWidth="1"/>

    <path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>

  </svg>

);

// VehicleCard Component

interface VehicleCardProps {

  number: string;

  title: string;

  imageSrc: string;

  description: string;

  features: string[];

}

const VehicleCard: React.FC<VehicleCardProps> = ({ number, title, imageSrc, description, features }) => (

  <div className="bg-white rounded-lg p-6 sm:p-8 w-full">

    {/* Header */}

    <div className="flex justify-between items-start mb-6 sm:mb-8">

      <div className="flex flex-col gap-3">

        <div className="flex items-center gap-2">

          <div className="w-2 h-2 rounded-full border-2 border-accent" />

          <span className="text-xs font-bold text-[#1C1817] uppercase tracking-widest leading-none">{number}</span>

        </div>

        <h3 className="text-xl sm:text-2xl font-semibold text-[#1C1817]">{title}</h3>

      </div>

      <button className="text-[#1C1817]/30 hover:text-accent transition-colors shrink-0" aria-label="Close">

        <CloseIcon className="w-8 h-8 sm:w-10 sm:h-10" />

      </button>

    </div>



    {/* Image */}

    <div className="mb-8 rounded-lg overflow-hidden bg-gray-100">

      <img 

        src={imageSrc} 

        alt={title} 

        className="w-full h-auto object-cover aspect-[16/9] sm:aspect-[2/1]" 

      />

    </div>



    {/* Description */}

    <p className="text-[#1C1817] opacity-80 mb-8 leading-relaxed text-[15px] sm:text-base">

      {description}

    </p>



    {/* Features List */}

    <ul className="space-y-3">

      {features.map((feature, index) => (

        <li key={index} className="flex items-start gap-3 text-[15px] text-[#1C1817] font-medium">

          <span className="w-0.5 h-0.5 rounded-full bg-[#1C1817] mt-2.5 shrink-0" />

          {feature}

        </li>

      ))}

    </ul>

  </div>

);

export default function FleetPage() {

  return (

    <div className="min-h-screen w-full flex flex-col bg-white">


      {/* Hero Section */}

      <section className="w-full flex flex-col items-center pt-24 pb-20 px-4 sm:px-6 lg:px-8">

        {/* Hero Image Section */}

        <div className="w-full max-w-[1200px] mb-16 sm:mb-20">

          <div className="relative w-full overflow-hidden rounded-lg">

            <img 

              src="https://framerusercontent.com/images/mwoDPtIBBxKDpcf82lXns9s41K4.webp?width=2240&height=1640" 

              alt="Truck in motion on a bridge" 

              className="w-full h-auto object-cover block"

              style={{ aspectRatio: '2240/1640', maxHeight: '600px', objectPosition: 'center' }}

            />

          </div>

        </div>



        {/* Text Content Section */}

        <div className="flex flex-col items-center max-w-[800px] text-center mx-auto space-y-8">

          

          {/* Tag / Eyebrow */}

          <div className="flex items-center justify-center gap-2.5">

            <div className="w-[10px] h-[10px] rounded-full border-[3px] border-accent" aria-hidden="true" />

            <span className="text-[11px] font-bold tracking-[0.08em] text-[#1C1817] uppercase leading-none">

              Introducing

            </span>

          </div>



          {/* Heading */}

          <h1 className="text-4xl sm:text-5xl md:text-[64px] leading-[1.1] font-medium tracking-[-0.02em] text-[#1C1817]">

            Our Fleet in Motion.

          </h1>



          {/* Subtext Paragraph */}

          <div className="max-w-[680px] mx-auto">

            <p className="text-lg sm:text-[20px] leading-[1.6] font-normal text-[#1C1817] opacity-90">

              Modern vehicles, advanced technology, total reliability — engineered to move your cargo safely and on time, every time.

            </p>

          </div>



        </div>

      </section>



      {/* Stats Section */}

      <section className="w-full relative overflow-hidden py-20 lg:py-32">

        

        {/* Animated Marquee Background */}

        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-100 pointer-events-none select-none z-0">

          <div className="flex whitespace-nowrap animate-marquee w-fit">

            {[...Array(2)].map((_, groupIndex) => (

              <div key={groupIndex} className="flex shrink-0">

                {[...Array(12)].map((_, i) => (

                  <div key={i} className="flex shrink-0 items-center justify-center w-[200px] sm:w-[300px]">

                    <ArrowIcon className="w-32 h-32 sm:w-48 sm:h-48 text-[#1C1817] opacity-[0.04]" />

                  </div>

                ))}

              </div>

            ))}

          </div>

        </div>



        {/* Content Container */}

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">

            

            {/* Left Column: Heading */}

            <div className="flex flex-col items-start gap-6 max-w-lg">

               {/* Tag */}

               <div className="flex items-center gap-2.5">

                 <div className="w-[10px] h-[10px] rounded-full border-[3px] border-accent" aria-hidden="true" />

                 <span className="text-[11px] font-bold tracking-[0.08em] text-[#1C1817] uppercase leading-none">

                   By the Numbers

                 </span>

               </div>

               

               {/* Heading */}

               <h2 className="text-4xl sm:text-5xl md:text-[56px] leading-[1.1] font-medium tracking-[-0.02em] text-[#1C1817]">

                 A diverse fleet serving Europe & United States.

               </h2>

            </div>



            {/* Right Column: Stats Grid */}

            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:gap-x-12 sm:gap-y-16 pl-0 lg:pl-12">

               {/* Stat 1 */}

               <div className="flex flex-col gap-2">

                 <span className="font-semibold text-5xl sm:text-[64px] text-[#1C1817] leading-none tracking-tight">

                   30+

                 </span>

                 <p className="text-base sm:text-lg text-[#1C1817] opacity-90 leading-tight">

                   Total Vehicles.

                 </p>

               </div>



               {/* Stat 2 */}

               <div className="flex flex-col gap-2">

                 <span className="font-semibold text-5xl sm:text-[64px] text-[#1C1817] leading-none tracking-tight">

                   20+

                 </span>

                 <p className="text-base sm:text-lg text-[#1C1817] opacity-90 leading-tight">

                   Heavy-duty Semi-Trailers.

                 </p>

               </div>



               {/* Stat 3 */}

               <div className="flex flex-col gap-2">

                 <span className="font-semibold text-5xl sm:text-[64px] text-[#1C1817] leading-none tracking-tight">

                   +10

                 </span>

                 <p className="text-base sm:text-lg text-[#1C1817] opacity-90 leading-tight">

                   Urban Delivery Vehicles.

                 </p>

               </div>



               {/* Stat 4 */}

               <div className="flex flex-col gap-2">

                 <span className="font-semibold text-5xl sm:text-[64px] text-[#1C1817] leading-none tracking-tight">

                   100%

                 </span>

                 <p className="text-base sm:text-lg text-[#1C1817] opacity-90 leading-tight">

                   ADR & HACCP–Compliant Units.

                 </p>

               </div>

            </div>



          </div>

        </div>



      </section>



      {/* Vehicle Categories Section */}

      <section className="w-full bg-[#350900] py-20 lg:py-32">

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">

            

            {/* Left Column: Sticky Content */}

            <div className="lg:col-span-5 flex flex-col items-start gap-8 lg:sticky lg:top-24 self-start">

              {/* Tag */}

              <div className="flex items-center gap-2.5">

                <div className="w-[10px] h-[10px] rounded-full border-[3px] border-accent" aria-hidden="true" />

                <span className="text-[11px] font-bold tracking-[0.08em] text-white uppercase leading-none">

                  Vehicle Categories

                </span>

              </div>

              

              {/* Heading */}

              <h2 className="text-4xl sm:text-5xl md:text-[56px] leading-[1.1] font-medium tracking-[-0.02em] text-white">

                Built for Every Route and Requirement

              </h2>



              {/* Description */}

              <div className="flex flex-col gap-6 text-white/80 text-[17px] leading-relaxed max-w-md">

                <p>

                  At Loginord, versatility is key. Our fleet is strategically diversified to meet the full spectrum of transportation demands — from heavy industrial freight to time-sensitive cold chain deliveries and agile urban distribution.

                </p>

                <p>

                  Whether you're moving raw materials, consumer goods, or specialized cargo, we have the right vehicle to ensure safety, compliance, and on-time performance.

                </p>

              </div>



              {/* CTA Button */}

              <a href="#" className="group mt-4 inline-flex items-center gap-1 rounded-full border border-accent/40 bg-gradient-to-r from-accent/0 to-accent/0 hover:from-accent/10 hover:to-accent/5 backdrop-blur-sm pl-6 pr-2 py-2 transition-all duration-300">

                <span className="text-white font-medium text-sm sm:text-base">Talk to Our Fleet Team</span>

                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-accent/0 group-hover:bg-accent/10 transition-colors ml-2">

                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white transform group-hover:translate-x-0.5 transition-transform">

                     <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

                   </svg>

                </span>

              </a>

            </div>



            {/* Right Column: Cards Stack */}

            <div className="lg:col-span-7 flex flex-col gap-6 w-full">

              

              <VehicleCard 

                number="01"

                title="Heavy-duty Semi-Trailers"

                imageSrc="https://framerusercontent.com/images/sqjR9log69svYrWvzRtPpLFHarc.jpg?lossless=1&width=1920&height=1080"

                description="Our backbone for long-haul and full-truckload (FTL) shipments. Robust chassis and high-capacity trailers keep your freight secure across borders."

                features={[

                  "Payload up to 25 tons",

                  "Available as dry van, curtain side, refrigerated",

                  "ADR–compliant options for hazardous goods"

                ]}

              />



              <VehicleCard 

                number="02"

                title="Refrigerated Trailers"

                imageSrc="https://framerusercontent.com/images/zd6FBRCBmMTo4WjEG89IFgZbYuw.jpg?width=1920&height=1280"

                description="Precision temperature control for perishables and pharmaceuticals. Our refrigerated units maintain exact setpoints from door to door."

                features={[

                  "Temperature range –25 °C to +25 °C",

                  "Real-time temperature & humidity monitoring",

                  "HACCP–certified and GMP–aligned"

                ]}

              />



              <VehicleCard 

                number="03"

                title="Regional & Urban Vans"

                imageSrc="https://framerusercontent.com/images/RmyDnwJBv9BORAIpIaORlKCRM.jpg?width=2400&height=1648"

                description="Agile and efficient for last-mile delivery and regional distribution. Perfect for tight urban routes or smaller consignments."

                features={[

                  "Payload up to 3 tons",

                  "Compact dimensions for city access",

                  "Optional lift-gate and tail-lift"

                ]}

              />



            </div>



          </div>

        </div>

      </section>

      {/* Connected Fleet Section */}

      <section className="w-full bg-gradient-to-b from-[#350900] to-[#8F1800] py-16 md:py-24">

        <FleetSection

          title="Connected Fleet, Connected You."

          description="Every vehicle is equipped with advanced telematics hardware, giving you real-time visibility and proactive alerts."

          variant="dark"

        >

          <FleetCard

            type="icon"

            title="Live GPS Tracking"

            description="See exact location and ETA."

            icon={<GPSIcon />}

            bgColor="bg-[#ffe4e6]"

          />

          <FleetCard

            type="image"

            title="API Integration"

            description="Embed tracking into your TMS or portal."

            imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"

          />

          <FleetCard

            type="image"

            title="Automated Alerts"

            description="Route deviations, temperature excursions."

            imageSrc="https://images.unsplash.com/photo-1516245834210-c4c14278733f?q=80&w=2069&auto=format&fit=crop"

          />

          <FleetCard

            type="icon"

            title="Telematics Dashboard"

            description="Speed, fuel consumption, driver behavior."

            icon={<DashboardIcon />}

            bgColor="bg-[#ffe4e6]"

          />

        </FleetSection>

      </section>

      {/* Rigorous Care Section */}

      <section className="w-full bg-gradient-to-b from-[#8F1800] to-[#F52900] py-16 md:py-24">

        <FleetSection

          title="Rigorous Care. Maximum Uptime."

          description="Loginord's in-house maintenance team follows strict inspection schedules and leverages predictive analytics to minimize downtime and maximize safety."

          variant="dark"

        >

          <FleetCard

            type="icon"

            title="Preventive Maintenance"

            description="Regular checks on vehicles & refrigeration."

            icon={<MaintenanceIcon />}

            bgColor="bg-[#ffe4e6]"

          />

          <FleetCard

            type="image"

            title="Compliance Audits"

            description="ADR, HACCP and EU/US transport regulations."

            imageSrc="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"

          />

          <FleetCard

            type="image"

            title="Driver Training"

            description="Regular safety and eco-driving courses."

            imageSrc="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"

          />

          <FleetCard

            type="icon"

            title="24/7 Roadside Support"

            description="Rapid response for on-route issues."

            icon={<RoadsideIcon />}

            bgColor="bg-[#ffe4e6]"

          />

        </FleetSection>

      </section>

      {/* Greener Fleet Section */}

      <section className="w-full bg-gradient-to-b from-[#F52900] to-[#FFDDD6] py-16 md:py-24">

        <FleetSection

          title="Towards a Greener Fleet."

          description="We're investing in eco-friendly vehicles and processes to reduce carbon footprint and support your ESG goals."

          variant="dark"

        >

          <FleetCard

            type="icon"

            title="Route Optimization"

            description="For lower fuel consumption."

            icon={<RouteIcon />}

            bgColor="bg-[#e4fff4]"

          />

          <FleetCard

            type="image"

            title="Partnership"

            description="With carbon offset programs."

            imageSrc="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop"

          />

          <FleetCard

            type="image"

            title="Pilot Program"

            description="With electric urban vans."

            imageSrc="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop"

          />

          <FleetCard

            type="icon"

            title="Euro VI"

            description="Emission standards on all heavy vehicles."

            icon={<EuroIcon />}

            bgColor="bg-[#e4fff4]"

          />

        </FleetSection>

      </section>

      {/* Footer */}

      <Footer />

    </div>

  );

}
