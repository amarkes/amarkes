import React from 'react';

const Skills = () => {
  return (
    <section className="py-8 sm:py-space-xl flex flex-col gap-6 sm:gap-space-lg" id="skills">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-4 pb-2">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-xs text-primary uppercase tracking-widest font-semibold">
            02 // Matriz de Competências
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-headline-lg text-text-primary font-bold tracking-tight">
            Hard Skills &amp; Tech Stack
          </h2>
        </div>
        <p className="font-body-sm text-xs sm:text-sm text-text-muted">
          Dominância prática comprovada em sistemas reais
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-space-md">
        {/* Categoria: Backend */}
        <div className="p-4 sm:p-space-lg rounded-2xl bg-surface-container-low border border-border-glass flex flex-col gap-4 shadow-md">
          <div className="flex items-center justify-between pb-2 border-b border-border-glass">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-primary text-[22px]">database</span>
              <h3 className="text-lg sm:text-xl text-text-primary font-bold">Backend &amp; Arquitetura</h3>
            </div>
            <span className="font-label-code text-xs text-primary font-semibold">95% de afinidade</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Python', 'Node.js', 'Java', 'Go', 'REST APIs', 'GraphQL', 'Microservices'].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high border border-border-glass text-on-surface font-label-code text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                <span>{tech}</span>
              </div>
            ))}
          </div>

          {/* Proficiency metric bar */}
          <div className="flex flex-col gap-1.5 pt-2 mt-auto">
            <div className="flex justify-between font-label-sm text-xs text-text-dim">
              <span>Maturidade Arquitetural &amp; Concorrência</span>
              <span>Avançado</span>
            </div>
            <div className="w-full h-2 bg-surface-container-lowest border border-border-glass rounded-full overflow-hidden">
              <div className="h-full bg-primary-container rounded-full" style={{ width: '95%' }} />
            </div>
          </div>
        </div>

        {/* Categoria: Frontend */}
        <div className="p-4 sm:p-space-lg rounded-2xl bg-surface-container-low border border-border-glass flex flex-col gap-4 shadow-md">
          <div className="flex items-center justify-between pb-2 border-b border-border-glass">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-primary text-[22px]">web</span>
              <h3 className="text-lg sm:text-xl text-text-primary font-bold">Frontend Moderno</h3>
            </div>
            <span className="font-label-code text-xs text-secondary font-semibold">92% de afinidade</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'State Mgmt', 'HTML5 / CSS3', 'Vite'].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high border border-border-glass text-on-surface font-label-code text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span>{tech}</span>
              </div>
            ))}
          </div>

          {/* Proficiency metric bar */}
          <div className="flex flex-col gap-1.5 pt-2 mt-auto">
            <div className="flex justify-between font-label-sm text-xs text-text-dim">
              <span>Componentização, Reatividade &amp; UX</span>
              <span>Avançado</span>
            </div>
            <div className="w-full h-2 bg-surface-container-lowest border border-border-glass rounded-full overflow-hidden">
              <div className="h-full bg-secondary rounded-full" style={{ width: '92%' }} />
            </div>
          </div>
        </div>

        {/* Categoria: DevOps & Cloud */}
        <div className="p-4 sm:p-space-lg rounded-2xl bg-surface-container-low border border-border-glass flex flex-col gap-4 shadow-md">
          <div className="flex items-center justify-between pb-2 border-b border-border-glass">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-primary text-[22px]">cloud_sync</span>
              <h3 className="text-lg sm:text-xl text-text-primary font-bold">Cloud &amp; DevOps</h3>
            </div>
            <span className="font-label-code text-xs text-primary-fixed-dim font-semibold">90% de afinidade</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Docker', 'AWS (EC2/S3/ECS)', 'CI/CD Pipelines', 'GitHub Actions', 'Linux / Bash', 'Nginx'].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high border border-border-glass text-on-surface font-label-code text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim" />
                <span>{tech}</span>
              </div>
            ))}
          </div>

          {/* Proficiency metric bar */}
          <div className="flex flex-col gap-1.5 pt-2 mt-auto">
            <div className="flex justify-between font-label-sm text-xs text-text-dim">
              <span>Infraestrutura, Containers &amp; Automação</span>
              <span>Avançado</span>
            </div>
            <div className="w-full h-2 bg-surface-container-lowest border border-border-glass rounded-full overflow-hidden">
              <div className="h-full bg-primary-fixed-dim rounded-full" style={{ width: '90%' }} />
            </div>
          </div>
        </div>

        {/* Categoria: Databases & Data */}
        <div className="p-4 sm:p-space-lg rounded-2xl bg-surface-container-low border border-border-glass flex flex-col gap-4 shadow-md">
          <div className="flex items-center justify-between pb-2 border-b border-border-glass">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-primary text-[22px]">storage</span>
              <h3 className="text-lg sm:text-xl text-text-primary font-bold">Bancos de Dados &amp; Cache</h3>
            </div>
            <span className="font-label-code text-xs text-primary font-semibold">88% de afinidade</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma ORM', 'TypeORM', 'Query Optimization'].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high border border-border-glass text-on-surface font-label-code text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                <span>{tech}</span>
              </div>
            ))}
          </div>

          {/* Proficiency metric bar */}
          <div className="flex flex-col gap-1.5 pt-2 mt-auto">
            <div className="flex justify-between font-label-sm text-xs text-text-dim">
              <span>Modelagem Relacional, Cache &amp; Performance</span>
              <span>Sólido</span>
            </div>
            <div className="w-full h-2 bg-surface-container-lowest border border-border-glass rounded-full overflow-hidden">
              <div className="h-full bg-primary-container rounded-full" style={{ width: '88%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
