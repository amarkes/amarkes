import React from 'react';

const Projects = () => {
  return (
    <section className="py-8 sm:py-space-xl flex flex-col gap-6 sm:gap-space-lg" id="projetos">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-4 pb-2">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-xs text-primary uppercase tracking-widest font-semibold">
            05 // Portfólio Técnico
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-headline-lg text-text-primary font-bold tracking-tight">
            Projetos em Destaque
          </h2>
        </div>
        <p className="font-body-sm text-xs sm:text-sm text-text-muted">
          Impacto mensurável e excelência de engenharia
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-space-md">
        {/* Projeto 1 */}
        <div className="group flex flex-col rounded-2xl bg-surface-container-low hover:bg-surface-container-high border border-border-glass hover:border-border-glass-hover shadow-md transition-all">
          <div className="p-4 sm:p-space-lg flex flex-col gap-3 flex-1">
            <div className="flex items-center justify-between pb-1">
              <span className="font-label-code text-xs text-primary font-semibold">#PROJ-01</span>
              <span className="px-2 py-0.5 rounded-lg bg-surface-subtle font-label-code text-[11px] text-text-dim border border-border-glass">
                Microservices
              </span>
            </div>
            
            <h3 className="text-lg sm:text-xl text-text-primary font-bold group-hover:text-primary transition-colors">
              Core Banking &amp; Financial Gateway
            </h3>
            
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              API bancária de alta taxa de requisições com processamento assíncrono de transações financeiras, prevenção de idempotência e auditoria imutável.
            </p>

            {/* Metrics Highlight */}
            <div className="p-3 rounded-xl bg-surface-container-lowest border border-border-glass flex items-center justify-between mt-auto">
              <div className="flex flex-col">
                <span className="font-label-sm text-[10px] text-text-dim">Throughput</span>
                <span className="text-sm sm:text-body-md text-text-primary font-bold">12k req/seg</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-label-sm text-[10px] text-text-dim">Latência p99</span>
                <span className="text-sm sm:text-body-md text-primary font-bold">&lt; 14ms</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Go', 'PostgreSQL', 'Redis', 'Docker'].map((tag, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-lg bg-surface-container-high font-label-code text-xs text-on-surface border border-border-glass">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 pt-0 flex items-center gap-2 mt-auto">
            <a 
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-code text-xs transition-colors border border-border-glass" 
              href="https://github.com/amarkes" 
              rel="noopener noreferrer" 
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              <span>Ver Código</span>
            </a>
          </div>
        </div>

        {/* Projeto 2 */}
        <div className="group flex flex-col rounded-2xl bg-surface-container-low hover:bg-surface-container-high border border-border-glass hover:border-border-glass-hover shadow-md transition-all">
          <div className="p-4 sm:p-space-lg flex flex-col gap-3 flex-1">
            <div className="flex items-center justify-between pb-1">
              <span className="font-label-code text-xs text-primary font-semibold">#PROJ-02</span>
              <span className="px-2 py-0.5 rounded-lg bg-surface-subtle font-label-code text-[11px] text-text-dim border border-border-glass">
                Enterprise SaaS
              </span>
            </div>

            <h3 className="text-lg sm:text-xl text-text-primary font-bold group-hover:text-primary transition-colors">
              Data Streaming Dashboard Real-time
            </h3>

            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Plataforma analítica corporativa com consumo de telemetria em tempo real via WebSockets, geração dinâmica de relatórios e visualizações interativas.
            </p>

            {/* Metrics Highlight */}
            <div className="p-3 rounded-xl bg-surface-container-lowest border border-border-glass flex items-center justify-between mt-auto">
              <div className="flex flex-col">
                <span className="font-label-sm text-[10px] text-text-dim">Lighthouse</span>
                <span className="text-sm sm:text-body-md text-text-primary font-bold">99/100 Perf</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-label-sm text-[10px] text-text-dim">Data Stream</span>
                <span className="text-sm sm:text-body-md text-primary font-bold">WebSocket</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Next.js', 'TypeScript', 'Tailwind', 'Node.js'].map((tag, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-lg bg-surface-container-high font-label-code text-xs text-on-surface border border-border-glass">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 pt-0 flex items-center gap-2 mt-auto">
            <a 
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-code text-xs transition-colors border border-border-glass" 
              href="https://github.com/amarkes" 
              rel="noopener noreferrer" 
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              <span>Ver Código</span>
            </a>
          </div>
        </div>

        {/* Projeto 3 */}
        <div className="group flex flex-col rounded-2xl bg-surface-container-low hover:bg-surface-container-high border border-border-glass hover:border-border-glass-hover shadow-md transition-all">
          <div className="p-4 sm:p-space-lg flex flex-col gap-3 flex-1">
            <div className="flex items-center justify-between pb-1">
              <span className="font-label-code text-xs text-primary font-semibold">#PROJ-03</span>
              <span className="px-2 py-0.5 rounded-lg bg-surface-subtle font-label-code text-[11px] text-text-dim border border-border-glass">
                DevOps &amp; Infra
              </span>
            </div>

            <h3 className="text-lg sm:text-xl text-text-primary font-bold group-hover:text-primary transition-colors">
              Automated Cloud Pipeline &amp; Infra-as-Code
            </h3>

            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Estruturação completa de pipelines de entrega contínua multienvironment com testes automatizados, verificação de qualidade de código e deploy zero-downtime.
            </p>

            {/* Metrics Highlight */}
            <div className="p-3 rounded-xl bg-surface-container-lowest border border-border-glass flex items-center justify-between mt-auto">
              <div className="flex flex-col">
                <span className="font-label-sm text-[10px] text-text-dim">Deploy Speed</span>
                <span className="text-sm sm:text-body-md text-text-primary font-bold">2.4 min ciclo</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-label-sm text-[10px] text-text-dim">Falhas de Build</span>
                <span className="text-sm sm:text-body-md text-primary font-bold">0% Rollback</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Python', 'Docker', 'AWS ECS', 'GitHub Actions'].map((tag, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-lg bg-surface-container-high font-label-code text-xs text-on-surface border border-border-glass">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 pt-0 flex items-center gap-2 mt-auto">
            <a 
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-code text-xs transition-colors border border-border-glass" 
              href="https://github.com/amarkes" 
              rel="noopener noreferrer" 
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              <span>Ver Código</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
