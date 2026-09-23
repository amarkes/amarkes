import React from 'react';
import pkg from '../../package.json';
import avatarImg from '@/assets/avatar.jpeg';

const Hero = () => {
  return (
    <section className="py-8 sm:py-space-xl md:py-margin flex flex-col gap-6 sm:gap-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-space-lg items-center">
        {/* Text Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-3 sm:gap-space-md">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-border-glass shadow-sm max-w-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-label-sm text-[10px] sm:text-xs text-text-primary uppercase tracking-wider font-semibold truncate sm:whitespace-normal">
              Disponível para oportunidades e projetos
            </span>
          </div>

          {/* Hero Headline */}
          <div className="flex flex-col gap-1 sm:gap-space-xs mt-1 sm:mt-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-display-hero font-extrabold text-text-primary tracking-tight leading-tight">
              Olá, sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary-fixed">Antonio Marques</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-headline-md text-primary font-medium tracking-tight mt-1">
              Software Engineer • Backend &amp; Frontend Developer
            </p>
          </div>

          {/* Bio Pitch */}
          <p className="text-sm sm:text-base md:text-body-lg text-text-muted max-w-2xl leading-relaxed">
            Desenvolvedor focado na construção de arquiteturas escaláveis, APIs robustas e interfaces de usuário modernas de alta performance. Apaixonado por engenharia de software limpa, boas práticas e soluções que resolvem problemas reais.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
            <a 
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-primary-container text-on-primary-container text-sm sm:text-base font-bold hover:bg-secondary-container transition-all shadow-[0_0_24px_rgba(249,115,22,0.35)]" 
              href="#projetos"
            >
              <span>Ver Projetos &amp; Experiência</span>
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>
            <a 
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-surface-container-high text-on-surface hover:text-text-primary hover:bg-surface-bright transition-all shadow-sm border border-border-glass text-sm sm:text-base font-semibold" 
              href="#contato"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">download</span>
              <span>Baixar CV / Contatar</span>
            </a>
          </div>

          {/* Quick Terminal Micro-meta */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-text-dim font-label-code text-xs sm:text-label-code pt-1">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> amarkes@sys:~$
            </span>
            <span>stack: polyglot</span>
            <span>focus: distributed-systems</span>
          </div>
        </div>

        {/* Dev Profile Card with Technical Badging */}
        <div className="lg:col-span-5 flex justify-center w-full mt-2 lg:mt-0">
          <div className="relative w-full max-w-[340px] sm:max-w-[390px] rounded-2xl bg-surface-container-low p-4 sm:p-space-md shadow-xl border border-border-glass">
            {/* Simulated Terminal Window Bar */}
            <div className="flex items-center justify-between pb-3 mb-3 bg-surface-container-lowest/60 -mx-4 sm:-mx-space-md -mt-4 sm:-mt-space-md px-4 sm:px-space-md pt-3 rounded-t-2xl border-b border-border-glass">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-surface-bright" />
                <span className="w-2.5 h-2.5 rounded-full bg-surface-bright" />
                <span className="w-2.5 h-2.5 rounded-full bg-surface-bright" />
              </div>
              <span className="font-label-code text-xs text-text-dim">eng-lead://antonio-marques</span>
              <span className="font-label-sm text-xs text-primary uppercase font-semibold">v{pkg.version}</span>
            </div>

            {/* Profile Avatar Frame */}
            <div className="relative rounded-xl overflow-hidden aspect-square bg-surface-container-lowest">
              <img 
                alt="Antonio Marques - Software Engineer" 
                className="w-full h-full object-cover grayscale-[10%] contrast-105 hover:grayscale-0 transition-all duration-500" 
                src={avatarImg} 
              />
              {/* Inset Ambient Frame Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-transparent to-transparent opacity-80" />
              
              {/* Overlaid Status Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-surface-container-high/90 backdrop-blur-md shadow-md border border-border-glass">
                <div className="flex flex-col">
                  <span className="font-label-sm text-[10px] text-text-dim uppercase tracking-wider">Perfil Ativo</span>
                  <span className="font-headline-sm text-sm sm:text-body-sm text-text-primary font-bold">Antonio Marques</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-surface-subtle text-primary font-label-code text-xs border border-primary/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>
            </div>

            {/* Interactive Sub-stats Strip */}
            <div className="grid grid-cols-2 gap-2 mt-3 pt-1">
              <div className="flex flex-col p-2.5 rounded-xl bg-surface-container-lowest border border-border-glass">
                <span className="font-label-sm text-[10px] sm:text-xs text-text-dim">Especialidade</span>
                <span className="font-body-sm text-xs sm:text-sm text-on-surface font-semibold">Backend &amp; Cloud</span>
              </div>
              <div className="flex flex-col p-2.5 rounded-xl bg-surface-container-lowest border border-border-glass">
                <span className="font-label-sm text-[10px] sm:text-xs text-text-dim">Localização</span>
                <span className="font-body-sm text-xs sm:text-sm text-on-surface font-semibold">Brasil • Remoto</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Metrics Ribbon */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-space-md pt-2 sm:pt-4">
        <div className="flex flex-col gap-1 p-3.5 sm:p-space-md rounded-2xl bg-surface-container-low border border-border-glass shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-2xl sm:text-3xl lg:text-headline-lg text-primary font-extrabold tracking-tight">+6</span>
            <span className="material-symbols-outlined text-primary text-[20px] sm:text-[26px]">terminal</span>
          </div>
          <span className="text-xs sm:text-body-sm text-text-primary font-semibold">Anos de Experiência</span>
          <span className="text-[10px] sm:text-label-sm text-text-dim">Engenharia end-to-end</span>
        </div>

        <div className="flex flex-col gap-1 p-3.5 sm:p-space-md rounded-2xl bg-surface-container-low border border-border-glass shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-2xl sm:text-3xl lg:text-headline-lg text-text-primary font-extrabold tracking-tight">20+</span>
            <span className="material-symbols-outlined text-primary text-[20px] sm:text-[26px]">rocket_launch</span>
          </div>
          <span className="text-xs sm:text-body-sm text-text-primary font-semibold">Projetos Concluídos</span>
          <span className="text-[10px] sm:text-label-sm text-text-dim">Corporativos &amp; Cloud</span>
        </div>

        <div className="flex flex-col gap-1 p-3.5 sm:p-space-md rounded-2xl bg-surface-container-low border border-border-glass shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-2xl sm:text-3xl lg:text-headline-lg text-text-primary font-extrabold tracking-tight">100%</span>
            <span className="material-symbols-outlined text-primary text-[20px] sm:text-[26px]">verified</span>
          </div>
          <span className="text-xs sm:text-body-sm text-text-primary font-semibold">Código Limpo &amp; Testável</span>
          <span className="text-[10px] sm:text-label-sm text-text-dim">TDD, CI/CD e Qualidade</span>
        </div>

        <div className="flex flex-col gap-1 p-3.5 sm:p-space-md rounded-2xl bg-surface-container-low border border-border-glass shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-2xl sm:text-3xl lg:text-headline-lg text-primary font-extrabold tracking-tight">99.9%</span>
            <span className="material-symbols-outlined text-primary text-[20px] sm:text-[26px]">monitoring</span>
          </div>
          <span className="text-xs sm:text-body-sm text-text-primary font-semibold">Uptime &amp; Resiliência</span>
          <span className="text-[10px] sm:text-label-sm text-text-dim">Sistemas em produção</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
