import React from 'react';

interface FormInputProps {

  number: string;

  label: string;

  placeholder: string;

  type?: string;
  
  value?: string;
  
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const FormInput: React.FC<FormInputProps> = ({ number, label, placeholder, type = "text", value, onChange }) => {

  return (

    <div className="flex flex-col gap-3">

      <div className="flex items-baseline gap-3">

        <span className="text-xs font-semibold text-[#1C1817]">{number}</span>

        <label className="text-base font-semibold text-[#1C1817]">{label}</label>

      </div>

      <input 

        type={type}

        placeholder={placeholder}
        
        value={value}
        
        onChange={onChange}

        className="w-full bg-white border border-gray-300 rounded-full py-4 px-6 text-[#1C1817] placeholder-gray-400 focus:outline-none focus:border-[#F94006] focus:ring-1 focus:ring-[#F94006] transition-colors"

      />

    </div>

  );

};

export default FormInput;

