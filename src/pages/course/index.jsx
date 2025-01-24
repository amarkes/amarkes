import React from "react";
import styles from './style.module.css';
import ImageBG from "@/assets/courses.jpg";

const CoursePage = () => {
  return (
    <section className={styles.container}
      style={{
        backgroundImage: `url(${ImageBG})`,
      }}>
      <div className="flex flex-col relative mb-20 inset-1">
        <h2 className="text-gray-300 text-5xl font-semibold tracking-wide uppercase">
          CUSOS CONCLOÍDOS
        </h2>
        <div className="w-14 h-1 bg-orange-500 mt-1"></div>
      </div>
      <div className={styles.description}>
        <div>
          <ul className={styles.list}>
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
        </div>

      </div>
    </section>
  );
};

export default CoursePage;
