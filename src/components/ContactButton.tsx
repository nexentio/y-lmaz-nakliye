import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  variant?: 'primary' | 'icon-circle';

  children: React.ReactNode;

}

export const ContactButton: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {

  const baseStyles = "transition-all duration-300 ease-in-out font-medium flex items-center justify-center";

  

  const variants = {

    primary: "bg-[#F94006] hover:bg-[#D93605] text-white rounded-full px-8 py-3.5 text-base tracking-wide shadow-sm hover:shadow-md",

    "icon-circle": "bg-[#F94006] hover:bg-[#D93605] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-sm hover:shadow-md"

  };

  return (

    <button 

      className={`${baseStyles} ${variants[variant]} ${className}`}

      {...props}

    >

      {children}

    </button>

  );

};

