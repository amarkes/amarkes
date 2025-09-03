import React, { useEffect, useState } from "react";
import styles from './style.module.css';

const SkillPage = () => {
  return (
    <section className={styles.container}>
      <div className="container mx-auto pb-10">
        <div className="flex flex-col relative mb-20">
        <h2 className="text-gray-300 text-5xl font-semibold tracking-wide uppercase">
          SKILL
        </h2>
        <div className="w-14 h-1 bg-orange-500 mt-1"></div>
      </div>
        <div className="mb-12 mt-12">
          <h2 className="text-2xl font-semibold mb-4">TECNOLOGIAS</h2>
          <p className="text-color-gray max-w-2xl">Abaixo, você encontrará uma seleção das tecnologias que domino e com as quais adquiri experiência ao longo da minha jornada profissional.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">LINGUAGENS</h2>
          <div className="flex md:flex-row gap-2 mt-5 flex-wrap">
            <div className="flex items-center justify-center">
              <div className="relative w-40 h-40 md:w-24 md:h-24">
                <div className="absolute w-full h-full rounded-full border-2 border-color-gray"></div>
                <div className="absolute w-full h-full flex items-center justify-center">
                  <span className="text-color-gray text-sm">JavaScript</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-40 h-40 md:w-24 md:h-24">
                <div className="absolute w-full h-full rounded-full border-2 border-color-gray"></div>
                <div className="absolute w-full h-full flex items-center justify-center">
                  <span className="text-color-gray text-sm">Node</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-40 h-40 md:w-24 md:h-24">
                <div className="absolute w-full h-full rounded-full border-2 border-color-gray"></div>
                <div className="absolute w-full h-full flex items-center justify-center">
                  <span className="text-color-gray text-sm">HTML</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-40 h-40 md:w-24 md:h-24">
                <div className="absolute w-full h-full rounded-full border-2 border-color-gray"></div>
                <div className="absolute w-full h-full flex items-center justify-center">
                  <span className="text-color-gray text-sm">CSS</span>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className="border-t border-color-gray my-12 mr-7"></div>

        <div className="">
          <h2 className="text-2xl font-semibold mb-4">FRAMEWORKS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">

            <div className="flex items-center">
              <span className="text-color-gray mr-2">&#10003;</span>
              <span>React</span>
            </div>

            <div className="flex items-center">
              <span className="text-color-gray mr-2">&#10003;</span>
              <span>React Native</span>
            </div>

            <div className="flex items-center">
              <span className="text-color-gray mr-2">&#10003;</span>
              <span>Next.js</span>
            </div>

            <div className="flex items-center">
              <span className="text-color-gray mr-2">&#10003;</span>
              <span>Tailwind CSS</span>
            </div>

            <div className="flex items-center">
              <span className="text-color-gray mr-2">&#10003;</span>
              <span>Express</span>
            </div>

            <div className="flex items-center">
              <span className="text-color-gray mr-2">&#10003;</span>
              <span>Vue.js</span>
            </div>

            <div className="flex items-center">
              <span className="text-color-gray mr-2">&#10003;</span>
              <span>Angular</span>
            </div>

            <div className="flex items-center">
              <span className="text-color-gray mr-2">&#10003;</span>
              <span>IONIC</span>
            </div>

          </div>
        </div>

        <div className="border-t border-color-gray my-12 mr-7"></div>

        <div className="">
          <h2 className="text-2xl font-semibold mb-4">BANCO DE DADOS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">

            <div className="flex items-center">
              <span className="text-color-gray mr-2">&#10003;</span>
              <span>Supabase</span>
            </div>

            <div className="flex items-center">
              <span className="text-color-gray mr-2">&#10003;</span>
              <span>PostgreSQL</span>
            </div>

            <div className="flex items-center">
              <span className="text-color-gray mr-2">&#10003;</span>
              <span>MySQL</span>
            </div>

            <div className="flex items-center">
              <span className="text-color-gray mr-2">&#10003;</span>
              <span>SQLite</span>
            </div>

            <div className="flex items-center">
              <span className="text-color-gray mr-2">&#10003;</span>
              <span>MongoDB</span>
            </div>

            <div className="flex items-center">
              <span className="text-color-gray mr-2">&#10003;</span>
              <span>Firebase</span>
            </div>


          </div>
        </div>


      </div>
    </section>
  );
};

export default SkillPage;
