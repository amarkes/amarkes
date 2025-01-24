import React from "react";
import styles from './style.module.css';
import ImageBG from "@/assets/school.webp";

const SchoolPage = () => {
  return (
    <section className={styles.container}
      style={{
        backgroundImage: `url(${ImageBG})`,
      }}>
      <div className={styles.shadow}></div>
      <div className="flex flex-col relative mb-20 inset-1">
        <h2 className="text-gray-300 text-5xl font-semibold tracking-wide uppercase">
          FORMAÇÃO ACADEMICA
        </h2>
        <div className="w-14 h-1 bg-orange-500 mt-1"></div>
      </div>

      <div className={styles.description}>
        <div>
          <p><b>Bacharelado em Engenharia de Software</b></p>

          <p><b>Instituição: Unicesumar (trancado)</b></p>

          <p><b>Status</b> Restam apenas 3 disciplinas para a conclusão.</p>
        </div>

      </div>
    </section>
  );
};

export default SchoolPage;
