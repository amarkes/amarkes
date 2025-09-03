import React from "react";
import styles from './style.module.css';
import ImageBG from "@/assets/experctice.jpg";

const ExperiencePage = () => {
  return (
    <section className={styles.container}
      style={{
        backgroundImage: `url(${ImageBG})`,
      }}>
      <div className="flex flex-col relative mb-20">
        <h2 className="text-gray-300 text-5xl font-semibold tracking-wide uppercase">
          EXPERIÊNCIA
        </h2>
        <div className="w-14 h-1 bg-orange-500 mt-1"></div>
      </div>
      <div className={styles.description}>
        <div>
          <p><b>Smartfit - Engenheiro de software senior</b></p>

          <p><b>Período: 03/2025 - Atual</b></p>

          <p>- Manutenção dos apps dos studios.</p>

          <br />

          <p><b>Angulare – Desenvolvedor Sênior</b></p>

          <p><b>Período: 07/2017 - 03/2025</b></p>

          <p>-  Criação de sistemas e aplicativos personalizados para academias, com mais de 29 apps publicados na Apple Store e Google Play.</p>

          <p>- Integração de APIs RESTful e automação de processos.</p>

          <p>- Expertise em publicação de aplicativos em plataformas móveis e gerenciamento de ciclo de vida de sistemas.</p>

          <br />
          <p><b>Grupo Impresso – Desenvolvedor</b></p>

          <p><b>Período: 01/2015 - 06/2017</b></p>

          <p>- Desenvolvimento e manutenção de sites e temas WordPress personalizados.</p>

          <p>- Criação de websites responsivos otimizados para performance e SEO.</p>

          <p>- Customização de temas e plugins em PHP, além de desenvolvimento de lojas virtuais com Joomla, Opencart e WooCommerce.</p>

          <br />
          <p><b>Nova média</b></p>

          <p><b>Período: 01/2011 - 01/2013</b></p>

          <p>- Desenvolvimento Backend e Websites</p>

          <p>- Desenvolvimento de soluções robustas para a criação de websites e sistemas personalizados, com foco na escalabilidade, segurança e eficiência..</p>

          <p>- Sistemas de Gerenciamento de Conteúdo (CMS)</p>
        </div>

      </div>
    </section>
  );
};

export default ExperiencePage;
