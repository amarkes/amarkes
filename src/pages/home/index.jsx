import React from "react";
import styles from './style.module.css';
import ImageBG from "@/assets/bg-home.png";

const HomePage = () => {
  return (
    <section className={styles.container}
    style={{
        backgroundImage: `url(${ImageBG})`,
      }}>
      <div className={styles.home}>
        <h1 className={styles.hello}>HELLO, I'M</h1>
        <h2 className={styles.name}>ANTONIO MARQUES</h2>
      </div>

      <div className={styles.devide}></div>
      <p className={styles.text}>
        Backend Developer / Frontend Developer / Software Engineer
      </p>
      <div className={styles.devide}></div>

      
    </section>
  );
};

export default HomePage;
