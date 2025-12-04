import React from 'react';

import ContactCard from './ContactCard';

const KeyContactsSection: React.FC = () => {

  const contacts = [

    {

      name: "Michael Reyes",

      position: "US Business Development",

      email: "michael@logi-nord.com",

      phone: "+1 (832) 555-0192"

    },

    {

      name: "Customer Support",

      position: "Global Customer Support",

      email: "support@logi-nord.com",

      phone: "+1 (832) 555-0192"

    },

    {

      name: "Sophie Van Dijk",

      position: "Commercial Director",

      email: "sophie@logi-nord.com",

      phone: "+1 (832) 555-0191"

    }

  ];



  return (

    <section>

      <h2 className="text-3xl font-bold text-[#1C1817] mb-8 text-center md:text-left">Key Contacts</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {contacts.map((contact, index) => (

          <ContactCard 

            key={index}

            name={contact.name}

            position={contact.position}

            email={contact.email}

            phone={contact.phone}

          />

        ))}

      </div>

    </section>

  );

};

export default KeyContactsSection;

