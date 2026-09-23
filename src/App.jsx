import React from 'react';
import { ThemeProvider } from '@/contexts/theme/themeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full overflow-x-hidden bg-surface-base text-text-primary selection:bg-primary-container selection:text-on-primary-container font-sans antialiased transition-colors duration-300">
        <Header />
        <main className="w-full pt-20 bg-surface-base min-h-screen">
          <div className="flex flex-col w-full">
            {/* Top Ambient Glow Field */}
            <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-space-lg overflow-hidden">
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[680px] h-[340px] bg-gradient-to-tr from-primary-container/15 via-primary/5 to-transparent blur-[140px] pointer-events-none -z-10 rounded-full" />
              
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Education />
              <Projects />
              <Contact />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
