import React from 'react';

interface ContactCardProps {

  name: string;

  position: string;

  email: string;

  phone: string;

}

const ContactCard: React.FC<ContactCardProps> = ({ name, position, email, phone }) => {

  return (

    <div className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[200px] shadow-sm hover:shadow-md transition-shadow">

      <div className="mb-6">

        <h3 className="text-xl font-bold text-[#1C1817] mb-1">{name}</h3>

        <p className="text-gray-600 text-sm">{position}</p>

      </div>

      

      <div className="space-y-1">

        <div>

            <a 

            href={`mailto:${email}`} 

            className="text-[#F94006] hover:text-[#D93605] transition-colors underline decoration-[#F94006]/40 hover:decoration-[#F94006] underline-offset-4"

            >

            {email}

            </a>

        </div>

        <div>

            <a 

            href={`tel:${phone}`} 

            className="text-[#F94006] hover:text-[#D93605] transition-colors underline decoration-[#F94006]/40 hover:decoration-[#F94006] underline-offset-4"

            >

            {phone}

            </a>

        </div>

      </div>

    </div>

  );

};

export default ContactCard;

