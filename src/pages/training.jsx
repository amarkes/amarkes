"use client";

import React, { useContext } from 'react';
import { ThemeContext } from '@/contexts/theme/themeContext';

const TrainingPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <section className={`mt-5 mb-5 ml-5 mr-5 ${theme === 'dark' ? 'text-slate-400' : 'text-black'}`}>
            <h2 className="text-[24px] mb-5">Formação Acadêmica</h2>
            <p className="text-[16px] mb-1 text-left"><strong>Unicesumar</strong> - Curso: Bacharelado em Engenharia de Software (Trancado)</p>
            <p className="text-[16px] mb-1 text-left"><strong>Status:</strong> Faltando 3 matérias para conclusão</p>
            <h3 className="mt-5 mb-5 text-[18px] font-bold">Cursos e Certificações</h3>
            <ul className={`list-disc list-inside space-y-1 ${theme === 'dark' ? 'text-slate-400' : 'text-gray-700'} ml-4 text-left text-[16px]`}>
                <li>Angular JS – 41 horas</li> 
                <li>JavaScript Completo – 47 horas</li>
                <li>Introdução ao Unity e Desenvolvimento de Games – 25 horas</li>
                <li>Gerenciamento de Projetos PMBOK – 55 horas</li>
                <li>Primeiros Passos com Node.js – 6 horas</li>
                <li>Controle de Versão com Git – 25 horas</li>
                <li>Ionic 2 Restful – 11 horas</li>
                <li>CSS3 Display Flex – 4 horas</li>
                <li>Materializer – 2 horas</li>
                <li>Express – 4 horas</li>
                <li>Scrum – 23 horas</li>
                <li>MySQL – 50 horas</li>
                <li>Diagrama de Casos de Uso na Prática – 39 horas</li>
                <li>Especificação de Casos de Uso – 31 horas</li>
                <li>Ionic – 21 horas</li>
                <li>Laravel 5.4 Banco de Dados e Eloquent – 3 horas</li>
                <li>Ionic 2 – 3 horas</li>
                <li>Otimizando com Gulp – 2 horas</li>
                <li>Laravel 5.4 Mix e Blade – 2 horas</li>
                <li>Laravel Elixir – 1 hora</li>
                <li>Criar Tema para WordPress – 2 horas</li>
                <li>React – 3 horas</li>
                <li>Ionic 1 com Laravel – 5 horas</li>
                <li>Angular 2 com Laravel – 5 horas</li>
                <li>Template com Bootstrap – 1 hora</li>
                <li>React Native com Hooks e Context API – 8 horas</li>
                <li>Aplicação Desktop com JavaScript, Electron JS e Vue JS – 4 horas</li>
                <li>Next.js & React – 31 horas</li>
            </ul>
        </section>
    )
};

export default TrainingPage;