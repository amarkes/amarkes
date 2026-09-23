import React from 'react';

const Education = () => {
  return (
    <section className="py-8 sm:py-space-xl flex flex-col gap-6 sm:gap-space-lg" id="formacao">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-4 pb-2">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-xs text-primary uppercase tracking-widest font-semibold">
            04 // Base de Conhecimento
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-headline-lg text-text-primary font-bold tracking-tight">
            Formação Acadêmica &amp; Certificações
          </h2>
        </div>
        <span className="font-body-sm text-xs sm:text-sm text-text-muted">
          Aprendizado contínuo &amp; rigor acadêmico
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-space-md">
        {/* Card Acadêmico */}
        <div className="p-4 sm:p-space-lg rounded-2xl bg-surface-container-low border border-border-glass flex flex-col gap-3 shadow-md">
          <div className="flex items-center gap-3 pb-2 border-b border-border-glass">
            <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[24px]">school</span>
            </div>
            <div>
              <span className="font-label-sm text-[11px] text-primary uppercase font-semibold">Graduação Superior</span>
              <h3 className="text-base sm:text-lg text-text-primary font-bold">Engenharia de Software / Ciência da Computação</h3>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Formação focada em fundamentos de algoritmos, estruturas de dados, compiladores, redes distribuídas, engenharia de requisitos e governança de software.
          </p>
          <div className="flex items-center gap-2 mt-auto pt-2 font-label-code text-xs text-text-dim">
            <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
            <span>Bacharelado Concluído • Ênfase em Sistemas Críticos</span>
          </div>
        </div>

        {/* Card Especializações & Certificações */}
        <div className="p-4 sm:p-space-lg rounded-2xl bg-surface-container-low border border-border-glass flex flex-col gap-3 shadow-md">
          <div className="flex items-center gap-3 pb-2 border-b border-border-glass">
            <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
            </div>
            <div>
              <span className="font-label-sm text-[11px] text-primary uppercase font-semibold">Aperfeiçoamento Avançado</span>
              <h3 className="text-base sm:text-lg text-text-primary font-bold">Especializações &amp; Cursos de Elite</h3>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 pt-1">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">verified_user</span>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm text-text-primary font-medium">Arquitetura de Microsserviços e Event-Driven Architecture</span>
                <span className="font-label-sm text-[11px] text-text-dim">Padrões CQRS, Saga, Kafka e consistência eventual</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">verified_user</span>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm text-text-primary font-medium">Cloud Computing &amp; Containers na AWS</span>
                <span className="font-label-sm text-[11px] text-text-dim">EC2, ECS, S3, RDS, IAM e boas práticas de segurança</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">verified_user</span>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm text-text-primary font-medium">Clean Code &amp; Domain-Driven Design (DDD)</span>
                <span className="font-label-sm text-[11px] text-text-dim">Refatoração de monólitos, código desacoplado e testes de unidade</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
