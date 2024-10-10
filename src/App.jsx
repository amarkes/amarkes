"use client";

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { ThemeProvider } from '@/contexts/theme/themeContext';
import ContentComponent from '@/components/content/index';
import './index.css';
library.add(fas, fab);

const MyApp = () => {
  
  return (
    <ThemeProvider>
      <ContentComponent />
    </ThemeProvider>
  );
};

export default MyApp;

