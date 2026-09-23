import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-space-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-lg pb-space-lg">
          <div className="flex flex-col items-center md:items-start gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-text-primary">Antonio Marques</span>
              <span className="font-label-sm text-label-sm text-primary">/ dev</span>
            </div>
            <p className="font-body-sm text-body-sm text-text-dim text-center md:text-left">
              Engenharia de software de alta performance, arquitetura full-stack e interfaces refinadas.
            </p>
          </div>
          <div className="flex items-center gap-space-md">
            <a className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors font-label-code text-label-code" href="https://github.com/amarkes" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-[18px]">code</span><span>GitHub</span>
            </a>
            <a className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors font-label-code text-label-code" href="https://www.linkedin.com/in/antonio-marques-1209ab376/" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-[18px]">link</span><span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center font-label-sm text-label-sm text-text-dim">
          <p>© 2025 Antonio Marques. Todos os direitos reservados.</p>
          <div className="flex items-center gap-space-md">
            <span>Construído com precisão arquitetural</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            <span>Status: Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
