"use client";

import React, { useState, useEffect, useContext, useRef } from 'react';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderComponent from '@/components/header/index';
import FooterComponent from '@/components/footer/index';
import { ThemeContext } from '@/contexts/theme/themeContext';

import ExperiencePage from '@/pages/experience';
import TrainingPage from '@/pages/training';
import SkillsPage from '@/pages/skills';
import ProfilePage from '@/pages/profile';
import ProjectsPage from '@/pages/projects';
import ContactPage from '@/pages/contact';



const ContentComponent = () => {



  return (
    <aside className='bg-[#333333]'>
      <div className='max-w-screen-2xl mx-auto border border-white bg-gray-50'>
        <div className="flex flex-col md:flex-row">
          <div className="bg-[#333333] text-white flex flex-col justify-center items-center sm:items-start w-full md:w-1/2 p-4 md:p-10">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              ANTÔNIO <br />
              MARQUES
            </h1>
          </div>

          <div className="bg-[#00798b] text-white flex flex-col justify-center items-center w-full md:w-1/2 sm:items-start p-4">
            <p className="text-md md:text-lg">Desenvolvedor</p>
            <p className="text-xl md:text-2xl font-bold">Software Engineer</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-start items-center w-full md:w-1/2">
            <div className="bg-[#00798b] text-white w-full p-4">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Perfil
              </h1>
            </div>
            <div className="text-black flex flex-col justify-center items-center p-4">
              <p className="text-sm text-justify">
                Sou um desenvolvedor full stack movido pela paixão de criar experiências digitais inovadoras. Minha trajetória começou com PHP, Laravel e CodeIgniter, evoluindo para o domínio de tecnologias modernas como Angular, React, React Native e Ionic.
              </p>
              <p className="text-sm text-justify mt-4">
                Com uma biblioteca publicada no NPM e mais de 6 mil downloads, além de 29 aplicativos lançados nas lojas Apple e Google, meu foco é combinar criatividade, eficiência e excelência técnica para entregar resultados que realmente impactam. Estou sempre em busca de desafios que elevem o nível da experiência digital.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-start items-center w-full md:w-1/2">
            <div className="bg-[#333333] text-white p-4 w-full">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Contato
              </h1>
            </div>
            <div className="bg-gray-200 text-black flex flex-col h-full w-full items-start p-4">
              <p className="text-lg">
                
              </p>
              <p className="text-lg mt-2">
                <FontAwesomeIcon icon={faEnvelope} size="sm" className="text-gray-400" /> amarkes.aws@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-start items-center w-full md:w-1/2">
            <div className="bg-[#00798b] text-white w-full p-4">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Experiência Profissional
              </h1>
            </div>
            <div className="text-black flex flex-col justify-center items-start p-4 w-full">
              <p className="text-sm"><b>Angulare – Desenvolvedor Sênior</b></p>
              <p className="text-sm"><b>Período:</b> 07/2017 - Atual</p>
              <p className="text-sm">- Criação de sistemas e aplicativos personalizados para academias, com mais de 29 apps publicados na Apple Store e Google Play.</p>
              <p className="text-sm">- Integração de APIs RESTful e automação de processos.</p>
              <p className="text-sm">- Expertise em publicação de aplicativos em plataformas móveis e gerenciamento de ciclo de vida de sistemas.</p>
              <br />
              <p className="text-sm"><b>Grupo Impresso – Desenvolvedor</b></p>
              <p className="text-sm"><b>Período:</b> 01/2015 - 06/2017</p>
              <p className="text-sm">- Desenvolvimento e manutenção de sites e temas WordPress personalizados.</p>
              <p className="text-sm">- Criação de websites responsivos otimizados para performance e SEO.</p>
              <p className="text-sm">- Customização de temas e plugins em PHP, além de desenvolvimento de lojas virtuais com Joomla, Opencart e WooCommerce.</p>


            </div>
          </div>

          <div className="flex flex-col justify-start items-center w-full md:w-1/2">
            <div className="bg-[#333333] text-white p-4 w-full">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Formação Acadêmica
              </h1>
            </div>
            <div className="bg-gray-200 text-black flex flex-col h-full w-full items-start p-4">
              <p className="text-lg">
                <b>Bacharelado em Engenharia de Software</b>
              </p>
              <p className="text-lg">
                <b>Instituição:</b> Unicesumar (trancado)
              </p>
              <p className="text-lg">
                <b>Status:</b> Restam apenas 3 disciplinas para a conclusão.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-start items-center w-full md:w-1/2">
            <div className="bg-[#00798b] text-white w-full p-4 h-[80px]">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Certificações e Cursos
              </h1>
            </div>
            <div className="text-black flex flex-col justify-center items-start p-4 w-full">
              <p className="text-sm">
                Angular JS – 41 horas<br />
                JavaScript Completo – 47 horas<br />
                Introdução ao Unity e Desenvolvimento de Games – 25 horas<br />
                Gerenciamento de Projetos PMBOK – 55 horas<br />
                Primeiros Passos com Node.js – 6 horas<br />
                Controle de Versão com Git – 25 horas<br />
                Ionic 2 Restful – 11 horas<br />
                CSS3 Display Flex – 4 horas<br />
                Materializer – 2 horas<br />
                Express – 4 horas<br />
                Scrum – 23 horas<br />
                MySQL – 50 horas<br />
                Diagrama de Casos de Uso na Prática – 39 horas<br />
                Especificação de Casos de Uso – 31 horas<br />
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-start items-center w-full md:w-1/2">
            <div className="bg-[#00798b] text-white w-full h-[80px] hidden md:block" />
            <div className="text-black flex flex-col justify-center items-start p-4 w-full">
              <p className="text-sm">
                Ionic – 21 horas<br />
                Laravel 5.4 Banco de Dados e Eloquent – 3 horas<br />
                Ionic 2 – 3 horas<br />
                Otimizando com Gulp – 2 horas<br />
                Laravel 5.4 Mix e Blade – 2 horas<br />
                Laravel Elixir – 1 hora<br />
                Criar Tema para WordPress – 2 horas<br />
                React – 3 horas<br />
                Ionic 1 com Laravel – 5 horas<br />
                Angular 2 com Laravel – 5 horas<br />
                Template com Bootstrap – 1 hora<br />
                React Native com Hooks e Context API – 8 horas<br />
                Aplicação Desktop com JavaScript, Electron JS e Vue JS – 4 horas<br />
                Next.js & React – 31 horas
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-start items-center w-full md:w-1/2">
            <div className="bg-[#00798b] text-white w-full p-4">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Habilidades Técnicas
              </h1>
            </div>
            <div className="text-black flex flex-col justify-center items-start p-4 w-full">
              <p className="text-sm">- <b>Linguagens:</b> JavaScript, Node.js, HTML, CSS</p>
              <p className="text-sm">- <b>Frameworks:</b> Angular, React, React Native, Ionic</p>
              <p className="text-sm">- <b>Bancos de Dados:</b> PostgreSQL, MySQL, MongoDB, Firebase</p>
              <p className="text-sm">- <b>Controle de Versão:</b> Git</p>
              <p className="text-sm">- <b>Metodologias Ágeis:</b> Scrum</p>
              <p className="text-sm">- <b>Ferramentas de Gerenciamento:</b> ClickUp, Slack, Trello, Meistertask</p>
            </div>
          </div>

          <div className="flex flex-col justify-start items-center w-full md:w-1/2">
            <div className="bg-[#333333] text-white p-4 w-full">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Projetos de Destaque
              </h1>
            </div>
            <div className="bg-gray-200 text-black flex flex-col h-full w-full items-start p-4">
              <p className="text-sm">- <b>Biblioteca br-mask:</b> Publicada no NPM, utilizada para máscaras de formulários, com mais de 6k downloads.</p>
              <p className="text-sm">- <b>ngx-autocep:</b> Biblioteca para busca de CEP com autocomplete, disponível no NPM.</p>
              <p className="text-sm">- <b>World Cleanup Day App:</b> Participação no projeto global do World Cleanup Day.</p>
              <p className="text-sm">- <b>Sistemas para academias:</b> Desenvolvimento de mais de 29 aplicativos mobile, com funcionalidades robustas para gestão e personalização.</p>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ContentComponent;
