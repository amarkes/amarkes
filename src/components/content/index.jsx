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
import ContactPage from '@/pages/contact';

const tabContent = {
  perfil: <ProfilePage />,
  experiencia: <ExperiencePage />,
  formacao: <TrainingPage />,
  habilidades: <SkillsPage />,
  projetos: <ProjectsPage />,
  contact: <ContactPage />,
};

const ContentComponent = () => {
  const { theme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('perfil');
  const [isMobile, setIsMobile] = useState(false);
  const contentRef = useRef(null);

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  return (
    <div className={`${isMobile ? 'justify-center items-start' : 'justify-center items-center'} flex h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} font-sans`}>
      <div className={`${isMobile ? 'h-full' : 'w-[390px] h-[85vh] rounded-2xl'} ${theme === 'dark' ? 'bg-gray-500' : 'bg-black'} p-1 shadow-md flex justify-center items-center`}>
        <div className={`w-full ${isMobile ? 'h-full' : 'h-[83vh]'} ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} ${isMobile ? '' : 'rounded-lg'} shadow-md overflow-hidden text-center relative flex flex-col`}>
          <HeaderComponent />
          <div ref={contentRef} className="flex-1 overflow-y-auto pb-16">
            {tabContent[activeTab]}
          </div>
          <FooterComponent openTab={openTab} activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;
