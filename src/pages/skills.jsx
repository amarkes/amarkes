"use client";

import React, { useContext } from 'react';
import { ThemeContext } from '@/contexts/theme/themeContext';

const SkillsPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <section className={`mt-5 mb-5 ml-5 mr-5 ${theme === 'dark' ? 'text-slate-400' : 'text-black'}`}>
            <h2 className="text-[24px] mb-5">Habilidades Técnicas</h2>
            <ul className={`list-disc list-inside space-y-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-700'} ml-4 text-left text-[16px]`}>
                <li>Banco de dados: PostgreSQL, MongoDB, MySQL, Firebase</li>
                <li>Linguagens de Programação: JavaScript, NODE, HTML, CSS</li>
                <li>Frameworks: Angular, Ionic, React, React Native, Strapi, Swagger</li>
                <li>Ferramentas de Controle de Versão: Git</li>
                <li>Metodologias Ágeis: Scrum</li>
                <li>Ferramentas de Gerenciamento de Projetos: ClickUp, Slack, Trello e Meistertask</li>
            </ul>
        </section>
    );
};

export default SkillsPage;