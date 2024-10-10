"use client";

import React, { useState, useEffect, useContext, useRef } from 'react';
import HeaderComponent from '@/components/header/index';
import FooterComponent from '@/components/footer/index';
import { ThemeContext } from '@/contexts/theme/themeContext';


import ExperiencePage from '@/pages/experience';
import TrainingPage from '@/pages/training';
import SkillsPage from '@/pages/skills';
import ProfilePage from '@/pages/profile';
import ProjectsPage from '@/pages/projects';

const tabContent = {
  perfil: <ProfilePage />,
  experiencia: <ExperiencePage />,
  formacao: <TrainingPage />,
  habilidades: <SkillsPage />,
  projetos: <ProjectsPage />,
};

const ContentComponent = () => {
  const { theme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('perfil');
  const contentRef = useRef(null);

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  return (
    <div className={`flex justify-center items-center h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} font-sans`}>
      <div className={`w-[390px] h-[90vh] rounded-2xl ${theme === 'dark' ? 'bg-gray-500' : 'bg-black'} p-1 shadow-md flex justify-center items-center`}>
        <div className={`w-[380px] h-[87vh] ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-md overflow-hidden text-center relative flex flex-col`}>
          <HeaderComponent />
          <div ref={contentRef} className="flex-1 overflow-y-auto">
            {tabContent[activeTab]}
          </div>
          <FooterComponent openTab={openTab} activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;
