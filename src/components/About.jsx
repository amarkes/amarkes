import React from 'react';

const About = () => {
  return (
    <section className="py-8 sm:py-space-xl flex flex-col gap-6 sm:gap-space-lg" id="sobre">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-4 pb-2">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-xs text-primary uppercase tracking-widest font-semibold">
            01 // Perfil de Engenharia
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-headline-lg text-text-primary font-bold tracking-tight">
            Sobre Mim &amp; Filosofia de Trabalho
          </h2>
        </div>
        <p className="font-label-code text-xs text-text-dim">clean_code.architectural_integrity</p>
      </div>

      {/* Extended Bio Card */}
      <div className="p-4 sm:p-space-lg rounded-2xl bg-surface-container-low border border-border-glass shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-space-lg items-center">
          <div className="lg:col-span-8 flex flex-col gap-3">
            <p className="text-sm sm:text-base md:text-body-lg text-on-surface leading-relaxed">
              Minha trajetória com desenvolvimento de software é impulsionada pela curiosidade contínua e busca por tecnologias modernas. Com sólida bagagem técnica para entregar soluções <strong className="text-text-primary font-semibold">end-to-end</strong> com qualidade e precisão, focado em transformar complexidade técnica em produtos fluidos, sustentáveis e eficientes.
            </p>
            <p className="text-xs sm:text-sm md:text-body-md text-text-muted leading-relaxed">
              Priorizo arquitetura limpa, separação rigorosa de responsabilidades, observabilidade nativa e código legível. Acredito que excelente software não é apenas veloz em execução, mas também intuitivo para outros engenheiros manterem e evoluírem sem atrito.
            </p>
          </div>

          {/* Code Manifest Snippet (Dark IDE Window with high-contrast syntax highlighting) */}
          <div className="lg:col-span-4 rounded-xl bg-[#0d1117] border border-[#30363d] shadow-xl overflow-hidden flex flex-col">
            {/* Terminal Window Header Bar */}
            <div className="bg-[#161b22] px-3 py-2 border-b border-[#30363d] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="font-label-code text-[11px] text-[#8b949e]">core_values.ts</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            
            {/* Code Body */}
            <pre className="p-3.5 font-label-code text-xs text-[#e6edf3] leading-relaxed overflow-x-auto bg-[#0d1117]">
              <code>
                <span className="text-[#ff7b72] font-semibold">const</span> <span className="text-[#79c0ff] font-bold">Engineer</span> = {"{"}
                {"\n"}  <span className="text-[#d2a8ff]">name</span>: <span className="text-[#a5d6ff]">"Antonio Marques"</span>,
                {"\n"}  <span className="text-[#d2a8ff]">mindset</span>: <span className="text-[#a5d6ff]">"Domain-Driven"</span>,
                {"\n"}  <span className="text-[#d2a8ff]">standards</span>: [
                {"\n"}    <span className="text-[#7ee787]">"KISS"</span>, <span className="text-[#7ee787]">"SOLID"</span>, <span className="text-[#7ee787]">"Zero-Downtime"</span>
                {"\n"}  ],
                {"\n"}  <span className="text-[#d2a8ff]">delivery</span>: <span className="text-[#ffa657]">"High-Precision"</span>
                {"\n"}{"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Pilares de Atuação */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-space-md">
        {/* Pilar 1: Backend & Bancos */}
        <div className="group flex flex-col gap-3 p-4 sm:p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all shadow-md border border-border-glass hover:border-border-glass-hover">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[24px] sm:text-[28px]">dns</span>
          </div>
          <h3 className="text-lg sm:text-xl text-text-primary font-bold">Backend &amp; Bancos</h3>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Construção de APIs RESTful escaláveis com Node.js, AdonisJS e Next.js. Modelagem relacional e NoSQL em PostgreSQL, MySQL, Supabase, MongoDB, SQLite e caching com Redis.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
            <span className="px-2 py-0.5 rounded-lg bg-surface-subtle font-label-code text-xs text-primary border border-border-glass">Node.js &amp; Adonis</span>
            <span className="px-2 py-0.5 rounded-lg bg-surface-subtle font-label-code text-xs text-text-muted border border-border-glass">Postgres / MySQL</span>
            <span className="px-2 py-0.5 rounded-lg bg-surface-subtle font-label-code text-xs text-text-muted border border-border-glass">Supabase &amp; Redis</span>
          </div>
        </div>

        {/* Pilar 2: Frontend & Mobile */}
        <div className="group flex flex-col gap-3 p-4 sm:p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all shadow-md border border-border-glass hover:border-border-glass-hover">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[24px] sm:text-[28px]">devices</span>
          </div>
          <h3 className="text-lg sm:text-xl text-text-primary font-bold">Frontend &amp; Mobile</h3>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Interfaces reativas impecáveis com TypeScript, React, Next.js, Angular, React Native e Expo. Fidelidade de UI/UX, acessibilidade e alta pontuação no Core Web Vitals.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
            <span className="px-2 py-0.5 rounded-lg bg-surface-subtle font-label-code text-xs text-primary border border-border-glass">React &amp; Next</span>
            <span className="px-2 py-0.5 rounded-lg bg-surface-subtle font-label-code text-xs text-text-muted border border-border-glass">React Native</span>
            <span className="px-2 py-0.5 rounded-lg bg-surface-subtle font-label-code text-xs text-text-muted border border-border-glass">Tailwind CSS</span>
          </div>
        </div>

        {/* Pilar 3: QA & Testes Automatizados */}
        <div className="group flex flex-col gap-3 p-4 sm:p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all shadow-md border border-border-glass hover:border-border-glass-hover">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[24px] sm:text-[28px]">fact_check</span>
          </div>
          <h3 className="text-lg sm:text-xl text-text-primary font-bold">QA &amp; Automação E2E</h3>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Garantia de qualidade contínua e testes automatizados end-to-end com Playwright para web, Detox e Appium / Appium Inspector para aplicações móveis.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
            <span className="px-2 py-0.5 rounded-lg bg-surface-subtle font-label-code text-xs text-primary border border-border-glass">Playwright</span>
            <span className="px-2 py-0.5 rounded-lg bg-surface-subtle font-label-code text-xs text-text-muted border border-border-glass">Detox &amp; Appium</span>
            <span className="px-2 py-0.5 rounded-lg bg-surface-subtle font-label-code text-xs text-text-muted border border-border-glass">Testes E2E</span>
          </div>
        </div>

        {/* Pilar 4: DevOps & Boas Práticas */}
        <div className="group flex flex-col gap-3 p-4 sm:p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all shadow-md border border-border-glass hover:border-border-glass-hover">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[24px] sm:text-[28px]">deployed_code</span>
          </div>
          <h3 className="text-lg sm:text-xl text-text-primary font-bold">DevOps &amp; Qualidade</h3>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Pipelines automatizadas com GitHub Actions, containerização Docker, documentação técnica, versionamento semântico e arquitetura limpa em produção.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
            <span className="px-2 py-0.5 rounded-lg bg-surface-subtle font-label-code text-xs text-primary border border-border-glass">Docker</span>
            <span className="px-2 py-0.5 rounded-lg bg-surface-subtle font-label-code text-xs text-text-muted border border-border-glass">GitHub Actions</span>
            <span className="px-2 py-0.5 rounded-lg bg-surface-subtle font-label-code text-xs text-text-muted border border-border-glass">CI / CD</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
