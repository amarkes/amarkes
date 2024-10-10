"use client";

import React, {useContext} from 'react';
import { ThemeContext } from '@/contexts/theme/themeContext';

const ProfilePage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <section className={`mt-5 ml-5 mr-5 ${theme === 'dark' ? 'text-slate-400' : 'text-black'}`}>
            <h2 className="text-[24px] mb-5">Perfil Profissional</h2>
            <p className="text-left mb-2">
                Sou um desenvolvedor full stack apaixonado por transformar ideias em experiências digitais impactantes.
            </p>
            <p className="text-left mb-2">
                Minha jornada começou com PHP, Laravel e CodeIgniter, evoluindo rapidamente para a criação de sites dinâmicos com WordPress.

            </p>
            <p className="text-left mb-2">
                Ao longo do caminho, mergulhei no desenvolvimento de sistemas robustos e aplicativos inovadores usando tecnologias como Ionic, Angular, React e React Native.

            </p>
            <p className="text-left mb-2">
                Com projetos lançados nas lojas Apple e Google, e uma publicação da biblioteca br-mask feita para ionic com mais de 6 mil downloads.

            </p>
            <p className="text-left mb-2">Estou sempre buscando novos desafios para levar a experiência a um novo patamar.</p>
        </section>
    );
};

export default ProfilePage;