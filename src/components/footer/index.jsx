"use client";

import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faGraduationCap, faCogs, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '@/contexts/theme/themeContext';

const tabs = [
  { id: 'perfil', label: 'Perfil', icon: faUser },
  { id: 'experiencia', label: 'Experiência', icon: faBriefcase },
  { id: 'formacao', label: 'Formação', icon: faGraduationCap },
  { id: 'habilidades', label: 'Habilidades', icon: faCogs },
  { id: 'projetos', label: 'Projetos', icon: faProjectDiagram },
];

export default function FooterComponent({ openTab, activeTab }) {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`${theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-200'} flex justify-around p-2 h-[60px]`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => openTab(tab.id)}
          className={`flex-1 p-2 text-gray-600 text-[18px] flex justify-center items-center rounded-tl-none rounded-tr-none rounded-xl transition-opacity duration-1000 ${
            activeTab === tab.id ? `${theme === 'dark' ? 'bg-gray-600 text-gray-800' : 'bg-gray-300 text-gray-700'} opacity-100 mt-[-8px] pb-[2px]` : 'opacity-50'
          }`}
        >
          <FontAwesomeIcon icon={tab.icon} className="text-[24px]" />
        </button>
      ))}
    </footer>
  );
}
