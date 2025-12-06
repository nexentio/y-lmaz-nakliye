import React from 'react';

import ContactCard from './ContactCard';

const KeyContactsSection: React.FC = () => {

  const contacts = [

    {

      name: "Yılmaz Arslan",

      position: "Kurucu & Genel Müdür",

      email: "info@yilmaznakliyat.com",

      phone: "0545 717 5150"

    },

    {

      name: "Müşteri Hizmetleri",

      position: "7/24 Müşteri Desteği",

      email: "info@yilmaznakliyat.com",

      phone: "0543 391 9863"

    },

    {

      name: "Operasyon Departmanı",

      position: "Araç ve Operasyon Yönetimi",

      email: "info@yilmaznakliyat.com",

      phone: "0545 717 5150"

    }

  ];



  return (

    <section>

      <h2 className="text-3xl font-bold text-[#1C1817] mb-8 text-center md:text-left">İletişim Bilgileri</h2>

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

