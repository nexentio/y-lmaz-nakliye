"use client";

import React, { useState } from 'react';

import FormInput from './FormInput';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const phoneNumber = "905457175150"; // 0545 717 5150 with country code

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form verilerini WhatsApp mesajı formatına dönüştür
    let whatsappMessage = "Merhaba! Yılmaz Nakliyat iletişim formundan mesaj gönderiyorum.\n\n";
    
    if (formData.name) {
      whatsappMessage += `👤 Ad Soyad: ${formData.name}\n`;
    }
    
    if (formData.email) {
      whatsappMessage += `📧 E-posta: ${formData.email}\n`;
    }
    
    if (formData.company) {
      whatsappMessage += `🏢 Şirket: ${formData.company}\n`;
    }
    
    if (formData.message) {
      whatsappMessage += `\n💬 Mesaj:\n${formData.message}\n`;
    }
    
    whatsappMessage += "\nTeşekkürler! 🙏";

    // WhatsApp URL'ini oluştur
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // WhatsApp'ı yeni sekmede aç
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (

    <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">

      <form className="space-y-6" onSubmit={handleSubmit}>

        <FormInput 

          number="01"

          label="Ad Soyad"

          placeholder="Adınız ve soyadınız"
          
          value={formData.name}
          
          onChange={(e) => handleChange('name', e.target.value)}

        />

        <FormInput 

          number="02"

          label="E-posta"

          placeholder="ornek@email.com"

          type="email"
          
          value={formData.email}
          
          onChange={(e) => handleChange('email', e.target.value)}

        />

        <FormInput 

          number="03"

          label="Şirket"

          placeholder="Şirket adınız (isteğe bağlı)"
          
          value={formData.company}
          
          onChange={(e) => handleChange('company', e.target.value)}

        />

        <div className="flex flex-col gap-3">

          <div className="flex items-baseline gap-3">

            <span className="text-xs font-semibold text-[#1C1817]">04</span>

            <label className="text-base font-semibold text-[#1C1817]">Mesaj</label>

          </div>

          <textarea 

            placeholder="Taşımacılık ihtiyaçlarınızı bizimle paylaşın..."
            
            value={formData.message}
            
            onChange={(e) => handleChange('message', e.target.value)}

            rows={6}

            className="w-full bg-white border border-gray-300 rounded-3xl py-4 px-6 text-[#1C1817] placeholder-gray-400 focus:outline-none focus:border-[#F94006] focus:ring-1 focus:ring-[#F94006] transition-colors resize-none"

          />

        </div>

        <div className="pt-4">

          <button 

            type="submit"

            className="w-full bg-[#F94006] hover:bg-[#D93605] text-white rounded-full py-4 px-8 text-base font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-300"

          >

            Mesaj Gönder

          </button>

        </div>

      </form>

    </section>

  );

};

export default ContactFormSection;

