import React from 'react';

import FormInput from './FormInput';

const ContactFormSection: React.FC = () => {

  return (

    <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">

      <form className="space-y-6">

        <FormInput 

          number="01"

          label="Name"

          placeholder="Your full name"

        />

        <FormInput 

          number="02"

          label="Email"

          placeholder="your.email@example.com"

          type="email"

        />

        <FormInput 

          number="03"

          label="Company"

          placeholder="Your company name"

        />

        <div className="flex flex-col gap-3">

          <div className="flex items-baseline gap-3">

            <span className="text-xs font-semibold text-[#1C1817]">04</span>

            <label className="text-base font-semibold text-[#1C1817]">Message</label>

          </div>

          <textarea 

            placeholder="Tell us about your logistics needs..."

            rows={6}

            className="w-full bg-white border border-gray-300 rounded-3xl py-4 px-6 text-[#1C1817] placeholder-gray-400 focus:outline-none focus:border-[#F94006] focus:ring-1 focus:ring-[#F94006] transition-colors resize-none"

          />

        </div>

        <div className="pt-4">

          <button 

            type="submit"

            className="w-full bg-[#F94006] hover:bg-[#D93605] text-white rounded-full py-4 px-8 text-base font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-300"

          >

            Send Message

          </button>

        </div>

      </form>

    </section>

  );

};

export default ContactFormSection;

