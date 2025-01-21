"use client";

import React, { useContext } from 'react';
import { ThemeContext } from '@/contexts/theme/themeContext';

const SkillsPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <section className={`mt-5 mb-5 ml-5 mr-5 ${theme === 'dark' ? 'text-slate-400' : 'text-black'}`}>
            <h2 className="text-[24px] mb-5">Habilidades Técnicas</h2>
            <ul className={`list-disc list-inside space-y-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-700'} ml-4 text-left text-[16px]`}>
                <li>Linguagens: JavaScript, TypeScript, Node.js, HTML, CSS</li>
                <li>Frameworks e Bibliotecas: Angular, React, React Native, Ionic</li>
                <li>Bancos de Dados: PostgreSQL, MySQL, MongoDB, Firebase, SQLite</li>
                <li>Hospedagem e Infraestrutura: Configuração e gerenciamento de hospedagem de sites e sistemas, incluindo servidores em ambientes cloud (AWS, Google Cloud, DigitalOcean) e tradicionais</li>
                <li>Controle de Versão: Git, com experiência em GitHub e GitLab</li>
                <li>Integração e Entrega Contínua (CI/CD): Configuração de pipelines automatizados no GitLab e GitHub Actions</li>
                <li>Metodologias Ágeis: Experiência com Scrum em equipes de desenvolvimento ágil</li>
                <li>Ferramentas de Gerenciamento de Projetos: ClickUp, Slack, Trello, MeisterTask</li>
                <li>Outras Competências: Conhecimento em automação de tarefas e processos utilizando ferramentas modernas e boas práticas de desenvolvimento.</li>
            </ul>
        </section>
    );
};

export default SkillsPage;