"use client";

import React, {useContext} from 'react';
import { ThemeContext } from '@/contexts/theme/themeContext';

const ProjectsPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <section className={`mt-5 mb-5 ml-5 mr-5 ${theme === 'dark' ? 'text-slate-400' : 'text-black'}`}>
            <h2 className="text-[24px] mb-5">Projetos de Destaque</h2>
            <ul className={`list-disc list-inside space-y-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-700'} ml-4 text-left text-[16px]`}>
                <li>Biblioteca br-mask: Publicação da biblioteca para máscaras de formulários, disponível no npm, com mais de 6k downloads.</li>
                <li>Biblioteca ngx-autocep: Publicação da biblioteca para ser ultilizada na pesquisa de cep e auto complete, disponível no npm.</li>
                <li>Participação no app do projeto world cleanup day worldcleanupday.org</li>
                <li>Sistemas de Academia: Desenvolvimento de mais de 29 apps para academias, disponíveis nas plataformas Apple Store e Google Play.</li>
            </ul>
        </section>
    );
};

export default ProjectsPage;