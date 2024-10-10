import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (!init) {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      setTheme(savedTheme);
      setInit(true);
    }
  }, [init]);

  useEffect(() => {
    if (init) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, init]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
