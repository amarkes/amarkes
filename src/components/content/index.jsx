"use client";

import React, { useState } from 'react';
import styles from './style.module.css';
import viteLogo from '@/assets/vite.svg';


import HomePage from '@/pages/home/index';
import AboutPage from '@/pages/about/index';
import CoursePage from '@/pages/course/index';


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
          <a href="#" onClick={() => scrollToPage(0)} className={styles.navMenu}>HOME</a>
          <a href="#" onClick={() => scrollToPage(1)} className={styles.navMenu}>PERFIL</a>
          <a href="#" onClick={() => scrollToPage(2)} className={styles.navMenu}>CURSOS</a>
          <a href="#" onClick={() => scrollToPage(3)} className={styles.navMenu}>EXPERIÊNCIA</a>
          <a href="#" onClick={() => scrollToPage(4)} className={styles.navMenu}>FORMAÇÃO</a>
          <a href="#" onClick={() => scrollToPage(5)} className={styles.navMenu}>SKILL</a>
          <a href="#" onClick={() => scrollToPage(6)} className={styles.navMenu}>PROJETOS</a>
          <a href="#" onClick={() => scrollToPage(7)} className={styles.navMenu}>CONTATO</a>
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
            <CoursePage />
          </section>

          {/* Página 4 */}
          <section className={styles.sectionPage2}>
            <h1 className="text-3xl font-bold">EXPERIENCE</h1>
          </section>

          {/* Página 5 */}
          <section className={styles.sectionPage}>
            <h1 className="text-3xl font-bold">EDUCATION</h1>
          </section>

          {/* Página 6 */}
          <section className={styles.sectionPage2}>
            <h1 className="text-3xl font-bold">PORTFOLIO</h1>
          </section>

          {/* Página 7 */}
          <section className={styles.sectionPage}>
            <h1 className="text-3xl font-bold">CONTACT</h1>
          </section>

          {/* Página 8 */}
          <section className={styles.sectionPage3}>
            <h1 className="text-3xl font-bold">CONTACT</h1>
          </section>
        </div>
      </div>
    </aside>
  );
};

export default ContentComponent;
