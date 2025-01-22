import React from "react";
import styles from './style.module.css';
import ImageBG from "@/assets/abstract-about.jpg";

const AboutPage = () => {
  return (
    <section className={styles.container}
      style={{
        backgroundImage: `url(${ImageBG})`,
      }}>
      <div className={styles.shadow}></div>
      <div className={styles.description}>
        <p className={styles.text}>
          PERFIL PROFISSIONAL
        </p>
        <div className={styles.devide}></div>
        <p className={styles.text}>
          Sou um desenvolvedor full stack movido pela paixão de criar
          experiências digitais inovadoras. Minha trajetória começou com PHP,
          Laravel e CodeIgniter, evoluindo para o domínio de tecnologias
          modernas como Angular, React, React Native e Ionic.
        </p>
        <div className={styles.devide}></div>
        <p className={styles.text}>
          Com uma biblioteca publicada no NPM e mais de 6 mil downloads, além
          de 29 aplicativos lançados nas lojas Apple e Google, meu foco é
          combinar criatividade, eficiência e excelência técnica para entregar
          resultados que realmente impactam. Estou sempre em busca de desafios
          que elevem o nível da experiência digital.
        </p>
        <div className={styles.devide}></div>
      </div>
    </section>
  );
};

export default AboutPage;