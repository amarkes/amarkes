"use client";

import React, {useContext} from 'react';
import { ThemeContext } from '@/contexts/theme/themeContext';

const ExperiencePage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <section className={`mt-5 mb-5 ml-5 mr-5 ${theme === 'dark' ? 'text-slate-400' : 'text-black'}`}>
            <h2 className="text-[24px] mb-5">Experiência Profissional</h2>
            <h3 className="text-[18px] mb-1 font-bold text-left">Angulare – Desenvolvedor senior</h3>
            <p className="text-[16px] mb-1 font-bold text-left">Período: 07/2017 - Atual</p>
            <ul className={`list-disc list-inside space-y-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-700'} ml-4 text-left`}>
                <li>Desenvolvo sistemas e aplicativos para academias, com mais de 29 aplicativos lançados nas plataformas da Apple Store e Google Play.</li>
                <li>Integração de sistemas com APIs RESTful.</li>
                <li>Publicação de aplicativos em plataformas móveis (Apple Store e Google Play).</li>
            </ul>
            <hr className="border-t-2 border-gray-300 my-4 mx-auto rounded-full" />
            <h3 className="text-[18px] mb-1 font-bold text-left">Grupo Impresso – Desenvolvedor</h3>
            <p className="text-[16px] mb-1 font-bold text-left">Período: 01/2015 - 06/2017</p>
            <ul className={`list-disc list-inside space-y-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-700'} ml-4 text-left`}>
                <li>Trabalhei na criação e manutenção de sites e temas personalizados em WordPress.</li>
                <li>Desenvolvimento de websites responsivos com foco em performance e SEO.</li>
                <li>Customização de temas e plugins em PHP e WordPress.</li>
                <li>Lojas virtuais com Joomla, Opencart, Woocommerce.</li>
            </ul>
        </section>
    );
};

export default ExperiencePage;