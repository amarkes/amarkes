import React from 'react';

const experiences = [
  {
    company: 'Smartfit',
    role: 'Engenheiro de Software Sênior',
    period: '03/2025 — Atual',
    isCurrent: true,
    markerColor: 'bg-primary-container',
    bullets: [
      'Manutenção e evolução dos aplicativos dos studios.',
    ],
    tags: ['React Native', 'Mobile', 'APIs RESTful', 'Performance', 'Studios'],
  },
  {
    company: 'Angulare',
    role: 'Desenvolvedor Sênior',
    period: '07/2017 — 03/2025',
    isCurrent: false,
    markerColor: 'bg-secondary',
    bullets: [
      'Criação de sistemas e aplicativos personalizados para academias, com mais de 29 apps publicados na Apple Store e Google Play.',
      'Integração de APIs RESTful e automação de processos.',
      'Expertise em publicação de aplicativos em plataformas móveis e gerenciamento de ciclo de vida de sistemas.',
    ],
    tags: ['Mobile (iOS / Android)', 'App Store & Google Play', 'APIs RESTful', 'Automação', 'Lifecycle'],
  },
  {
    company: 'Grupo Impresso',
    role: 'Desenvolvedor',
    period: '01/2015 — 06/2017',
    isCurrent: false,
    markerColor: 'bg-surface-bright',
    bullets: [
      'Desenvolvimento e manutenção de sites e temas WordPress personalizados.',
      'Criação de websites responsivos otimizados para performance e SEO.',
      'Customização de temas e plugins em PHP, além de desenvolvimento de lojas virtuais com Joomla, Opencart e WooCommerce.',
    ],
    tags: ['WordPress', 'PHP', 'WooCommerce', 'SEO & Performance', 'E-commerce'],
  },
  {
    company: 'Nova Mídia',
    role: 'Desenvolvimento Backend e Websites',
    period: '01/2011 — 01/2013',
    isCurrent: false,
    markerColor: 'bg-surface-bright',
    bullets: [
      'Desenvolvimento de soluções robustas para a criação de websites e sistemas personalizados, com foco na escalabilidade, segurança e eficiência.',
      'Sistemas de Gerenciamento de Conteúdo (CMS).',
    ],
    tags: ['Backend', 'CMS', 'Websites', 'PHP', 'Bancos de Dados'],
  },
];

const Experience = () => {
  return (
    <section className="py-space-xl flex flex-col gap-space-lg" id="experiencia">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">
            03 // Histórico Profissional
          </span>
          <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">
            Trajetória &amp; Experiência
          </h2>
        </div>
        <span className="font-label-code text-label-code text-text-dim">
          git log --stat --oneline
        </span>
      </div>

      {/* Timeline wrapper */}
      <div className="relative flex flex-col gap-6 sm:gap-space-lg pl-6 sm:pl-8">
        {/* Connecting Vertical Rail */}
        <div className="absolute top-2 bottom-6 left-2.5 sm:left-3.5 w-0.5 bg-surface-container-highest" />

        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="relative flex flex-col gap-space-sm p-4 sm:p-space-lg rounded-2xl bg-surface-container-low shadow-md border border-border-glass transition-all hover:border-border-glass-hover"
          >
            {/* Timeline Marker Pin */}
            <div className={`absolute -left-[19px] sm:-left-[25px] top-5 sm:top-6 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ${exp.markerColor} ring-4 ring-surface-base shadow-sm`} />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="font-headline-md text-xl md:text-2xl text-text-primary font-bold">
                    {exp.role}
                  </h3>
                </div>
                <span className="font-body-md text-body-md text-primary font-medium">
                  {exp.company}
                </span>
              </div>
              <span className={`self-start sm:self-auto px-3 py-1 rounded-full font-label-code text-label-sm ${exp.isCurrent ? 'bg-primary-container/20 text-primary border border-primary/30 font-semibold' : 'bg-surface-container-high text-text-muted'}`}>
                {exp.period}
              </span>
            </div>

            <ul className="flex flex-col gap-2 pt-1">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5 font-body-md text-body-sm md:text-body-md text-text-muted leading-relaxed">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {exp.tags.map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  className="px-2.5 py-1 rounded-lg bg-surface-container-high font-label-code text-xs text-on-surface border border-border-glass"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
