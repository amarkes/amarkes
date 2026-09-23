import React, { useState } from 'react';
import Logo from './Logo';
import { useTheme } from '@/contexts/theme/themeContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-base/80 backdrop-blur-xl border-b border-border-glass shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-colors duration-300">
      <div className="h-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <a className="flex items-center gap-2.5 group" href="#">
            <Logo theme={theme} className="h-9 w-auto" />
            <div className="flex flex-col">
              <span className="font-headline-sm text-base md:text-lg text-text-primary font-bold tracking-tight group-hover:text-primary transition-colors whitespace-nowrap">
                Antonio Marques
              </span>
              <span className="font-label-sm text-[10px] text-primary tracking-wider uppercase font-semibold">
                Software Engineer
              </span>
            </div>
          </a>
          
          <div className="hidden 2xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-container-low border border-border-glass">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-label-sm text-[11px] text-text-muted whitespace-nowrap">Disponível para projetos</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-0.5 p-1 rounded-xl bg-surface-container-lowest border border-border-glass shadow-inner">
          <a className="whitespace-nowrap px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-[13px]" href="#sobre">
            Sobre
          </a>
          <a className="whitespace-nowrap px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-[13px]" href="#skills">
            Skills
          </a>
          <a className="whitespace-nowrap px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-[13px]" href="#experiencia">
            Experiência
          </a>
          <a className="whitespace-nowrap px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-[13px]" href="#formacao">
            Formação & Cursos
          </a>
          <a className="whitespace-nowrap px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-[13px]" href="#projetos">
            Projetos
          </a>
          <a className="whitespace-nowrap px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-[13px]" href="#contato">
            Contato
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-text-primary hover:text-primary border border-border-glass transition-all cursor-pointer flex items-center justify-center shadow-sm"
            title={theme === 'dark' ? 'Alternar para Modo Claro' : 'Alternar para Modo Escuro'}
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-[20px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <a className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-body-sm font-semibold hover:bg-secondary-container transition-all shadow-[0_0_18px_rgba(249,115,22,0.25)] whitespace-nowrap" href="#contato">
            Entrar em Contato
          </a>
          

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-surface-container-low text-text-primary hover:text-primary border border-border-glass transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px]">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-border-glass px-margin-mobile py-4 flex flex-col gap-2 shadow-2xl">
          <a onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-on-surface hover:bg-surface-container-low font-body-sm" href="#sobre">Sobre</a>
          <a onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-on-surface hover:bg-surface-container-low font-body-sm" href="#skills">Skills</a>
          <a onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-on-surface hover:bg-surface-container-low font-body-sm" href="#experiencia">Experiência</a>
          <a onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-on-surface hover:bg-surface-container-low font-body-sm" href="#formacao">Formação & Cursos</a>
          <a onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-on-surface hover:bg-surface-container-low font-body-sm" href="#projetos">Projetos</a>
          <a onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-on-surface hover:bg-surface-container-low font-body-sm" href="#contato">Contato</a>
          <div className="flex items-center justify-between pt-2 border-t border-border-glass mt-1">
            <span className="font-body-sm text-text-dim">Tema</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low text-text-primary"
            >
              <span className="material-symbols-outlined text-[18px]">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
              <span className="font-label-sm">{theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}</span>
            </button>
          </div>
          <a onClick={() => setMobileMenuOpen(false)} className="mt-2 text-center py-2.5 rounded-xl bg-primary-container text-on-primary-container font-semibold text-body-sm" href="#contato">
            Entrar em Contato
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
