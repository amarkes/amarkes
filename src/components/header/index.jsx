"use client";

import React, { useContext } from 'react';
import { ThemeContext } from '@/contexts/theme/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';


const HeaderComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`${theme === 'dark' ? 'bg-gray-400' : 'bg-teal-600'} py-4 px-6 text-2xl flex items-center shadow-lg`}>
      <button
        onClick={() => toggleTheme()}
        className={`ml-[-15px] mt-[-10px] mb-[-10px] px-3 mr-2 rounded-md ${theme === 'dark' ? 'bg-gray-900 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-300'}   transition duration-300 ease-in-out shadow-md`}
      >
        <FontAwesomeIcon icon={faCircleHalfStroke} className={`${theme === 'dark' ? 'text-gray-300' : 'text-black'} text-[20px]`} />
      </button>
      <span className={`font-semibold text-[18px] ${theme === 'dark' ? 'text-black' : 'text-white'}`}>Antônio Marques de Oliveira Neto</span>
    </header>

  );
};

export default HeaderComponent;
