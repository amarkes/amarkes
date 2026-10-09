import React from 'react';

const skillCategories = [
  {
    title: 'Linguagens & Frameworks',
    icon: 'code',
    items: [
      { name: 'JavaScript', icon: 'https://github.com/user-attachments/assets/cad880d7-889c-4f2e-a75c-d4eb7a6d644b' },
      { name: 'TypeScript', icon: 'https://github.com/user-attachments/assets/e92b8bdf-9a16-41c6-9ac0-7d6310718560' },
      { name: 'Node.js', icon: 'https://github.com/user-attachments/assets/5879df40-6e3d-44ac-85c7-49f2dd670707' },
      { name: 'AdonisJS', icon: 'https://github.com/user-attachments/assets/3c3486a3-7d30-4fc6-9f70-e2e2d97de2a3' },
      { name: 'Next.js', icon: 'https://github.com/user-attachments/assets/f7e2fe3f-54e2-4593-930b-e325b9e3aea8' },
    ],
  },
  {
    title: 'Front-end & UI',
    icon: 'web',
    items: [
      { name: 'React', icon: 'https://github.com/user-attachments/assets/d1f95529-230a-448a-bf36-209abd061cda' },
      { name: 'Angular', icon: 'https://github.com/user-attachments/assets/0c08a039-a0eb-4e77-a047-6ea385f0e588' },
      { name: 'HTML5', icon: 'https://github.com/user-attachments/assets/0848907d-6ff9-4970-953b-386400ff3832' },
      { name: 'CSS3', icon: 'https://github.com/user-attachments/assets/e7e10a9e-9688-4a92-a425-d985ed8c53c0' },
      { name: 'Bootstrap', icon: 'https://github.com/user-attachments/assets/fd5ac5cd-63af-42c7-8f47-48cb05db6b2c' },
      { name: 'Tailwind CSS', icon: 'https://github.com/user-attachments/assets/39fe61f5-f08f-430d-97e3-2d37457633c9' },
    ],
  },
  {
    title: 'Mobile & Cross-platform',
    icon: 'smartphone',
    items: [
      { name: 'React Native', icon: 'https://github.com/user-attachments/assets/8f8d1aec-9fce-4fdb-9a0e-2fd894cb217f' },
      { name: 'Expo', icon: 'https://github.com/user-attachments/assets/f4d6f061-be09-41c4-9b16-65120976a979' },
      { name: 'Electron', icon: 'https://github.com/user-attachments/assets/380e7fea-5365-444e-8440-44e215fa398b' },
    ],
  },
  {
    title: 'Bancos de Dados & BaaS',
    icon: 'database',
    items: [
      { name: 'Supabase', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg' },
      { name: 'MySQL', icon: 'https://github.com/user-attachments/assets/0ae69970-7b21-4ba6-8fb6-5767a4bf823e' },
      { name: 'PostgreSQL', icon: 'https://github.com/user-attachments/assets/2cea9aca-59b9-4e0a-ba5b-8bb638a35b6d' },
      { name: 'MongoDB', icon: 'https://github.com/user-attachments/assets/2caa726b-9be3-4f61-a846-5f16bb5d1f60' },
      { name: 'SQLite', icon: 'https://github.com/user-attachments/assets/a06aafaa-4039-4e58-96ee-ad26a14ac942' },
      { name: 'Redis', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg' },
    ],
  },
  {
    title: 'DevTools & Outras',
    icon: 'terminal',
    items: [
      { name: 'Git', icon: 'https://github.com/user-attachments/assets/f79ddc5b-c63a-42af-a008-fdd747cccaf1' },
      { name: 'npm', icon: 'https://github.com/user-attachments/assets/1e6476aa-4547-4f02-b3d2-d0b9cbcccb04' },
      { name: 'Docker', icon: 'https://github.com/user-attachments/assets/8621c654-05c6-4944-ba1f-0bbd1536c988' },
      { name: 'TanStack Query', icon: 'https://github.com/user-attachments/assets/7220541e-ca9c-481a-9f86-c3d4711b6361' },
      { name: 'ESLint', icon: 'https://github.com/user-attachments/assets/c64d3c1b-3859-485b-b546-324b54c7e33e' },
      { name: 'Firebase', icon: 'https://github.com/user-attachments/assets/232d4477-ca09-4696-9d0e-6a21872004d4' },
      { name: 'Figma', icon: 'https://github.com/user-attachments/assets/8ab67a04-8bae-4c2e-b764-9efe94df6c69' },
    ],
  },
  {
    title: 'QA, Testes & Automação',
    icon: 'fact_check',
    items: [
      { name: 'Playwright', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/playwright/playwright-original.svg' },
      { name: 'Detox', icon: 'https://github.com/user-attachments/assets/f38b6de5-bace-40c1-a7e8-e709d9bfb130' },
      { name: 'Appium', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/appium.svg' },
      { name: 'Appium Inspector', icon: 'https://github.com/user-attachments/assets/be49b73c-bda0-44c3-b65d-d63b773b5899' },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-8 sm:py-space-xl flex flex-col gap-6 sm:gap-space-lg" id="skills">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-4 pb-2">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-xs text-primary uppercase tracking-widest font-semibold">
            02 // Matriz de Competências
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-headline-lg text-text-primary font-bold tracking-tight">
            Tech Stack &amp; Ferramentas
          </h2>
        </div>
        <p className="font-body-sm text-xs sm:text-sm text-text-muted">
          Tecnologias, bancos, automação e ferramentas com domínio prático
        </p>
      </div>

      {/* Grid das Categorias de Tecnologias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-space-md">
        {skillCategories.map((category, catIdx) => (
          <div
            key={catIdx}
            className="p-4 sm:p-space-lg rounded-2xl bg-surface-container-low border border-border-glass flex flex-col gap-3.5 shadow-md hover:border-border-glass-hover transition-all"
          >
            {/* Header da Categoria */}
            <div className="flex items-center gap-2.5 pb-2 border-b border-border-glass">
              <span className="material-symbols-outlined text-primary text-[20px] sm:text-[22px]">
                {category.icon}
              </span>
              <h3 className="text-base sm:text-lg text-text-primary font-bold">
                {category.title}
              </h3>
            </div>

            {/* Grid dos itens/tecnologias */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2.5 pt-1">
              {category.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="group flex flex-col items-center justify-center p-2.5 rounded-xl bg-surface-container-high/60 hover:bg-surface-container-highest border border-border-glass hover:border-primary/40 transition-all duration-200 text-center"
                >
                  <div className="w-10 h-10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="max-h-8 max-w-8 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="font-label-code text-[11px] sm:text-xs text-text-primary font-medium leading-tight line-clamp-2">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
