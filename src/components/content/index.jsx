"use client";

import React, { useState } from 'react';
import styles from './style.module.css';
import viteLogo from '@/assets/vite.svg';


import HomePage from '@/pages/home/index';
import AboutPage from '@/pages/about/index';
import CoursePage from '@/pages/course/index';
import ExperiencePage from '@/pages/experience/index';
import SchoolPage from '@/pages/school/index';
import SkillPage from '@/pages/skill/index';
import ContactPage from '@/pages/contact/index';


const ContentComponent = () => {

  const [currentPage, setCurrentPage] = useState(0);

  // Função para navegar entre páginas
  const scrollToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <aside className={styles.container}>
      <div className={styles.menu}>

        <div className={styles.nameLogo}>
          <div className={styles.logoMenu}>
            <h1 className={styles.name}>ANTONIO MARQUES</h1>
            <img src={viteLogo} alt="Vite Logo" className={styles.logo} />
          </div>

        </div>

        <nav className={styles.nav}>
          <a href="#" onClick={() => scrollToPage(0)} className={currentPage === 0 ? styles.navMenu2 : styles.navMenu}>HOME</a>
          <a href="#" onClick={() => scrollToPage(1)} className={currentPage === 1 ? styles.navMenu2 : styles.navMenu}>PERFIL</a>
          <a href="#" onClick={() => scrollToPage(2)} className={currentPage === 2 ? styles.navMenu2 : styles.navMenu}>SKILL</a>
          <a href="#" onClick={() => scrollToPage(3)} className={currentPage === 3 ? styles.navMenu2 : styles.navMenu}>EXPERIÊNCIA</a>
          <a href="#" onClick={() => scrollToPage(4)} className={currentPage === 4 ? styles.navMenu2 : styles.navMenu}>FORMAÇÃO</a>
          <a href="#" onClick={() => scrollToPage(5)} className={currentPage === 5 ? styles.navMenu2 : styles.navMenu}>CURSOS</a>
          <a href="#" onClick={() => scrollToPage(6)} className={currentPage === 6 ? styles.navMenu2 : styles.navMenu}>CONTATO</a>
        </nav>



        <div className={styles.footerMenu}>
          © ANTONIO MARQUES. ALL RIGHTS RESERVED.
        </div>
      </div>
      <div className={styles.content}>
        <div
          className={styles.contentPages}
          style={{
            transform: `translateX(-${currentPage * 65}vw)`,
          }}
        >
          {/* Página 1 */}
          <section className={styles.sectionPage}>
            <HomePage />
          </section>

          {/* Página 2 */}
          <section className={styles.sectionPage2}>
            <AboutPage />
          </section>

          {/* Página 3 */}
          <section className={styles.sectionPage}>
          <SkillPage />
          </section>

          {/* Página 4 */}
          <section className={styles.sectionPage2}>
            <ExperiencePage />
          </section>

          {/* Página 5 */}
          <section className={styles.sectionPage}>
            <SchoolPage />  
          </section>

          {/* Página 6 */}
          <section className={styles.sectionPage2}>
            <CoursePage />
          </section>

          {/* Página 7 */}
          <section className={styles.sectionPage3}>
            <ContactPage />
          </section>
        </div>
      </div>
    </aside>
  );
};

export default ContentComponent;
