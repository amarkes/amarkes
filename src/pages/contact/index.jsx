import React from "react";
import styles from './style.module.css';
import ImageBG from "@/assets/school.webp";

const ContactPage = () => {
  return (
    <section className={styles.container}>
      <div className="flex flex-col relative mb-20 inset-1">
        <h2 className="text-color-gray text-5xl font-semibold tracking-wide uppercase">
          MEU CONTATO
        </h2>
        <div className="w-14 h-1 bg-orange-500 mt-1"></div>
      </div>

      <div className="border-t border-color-gray my-12 mr-7 w-2/3"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div>
          <div className="flex items-start mb-6">
            <span className="text-color-gray text-2xl mr-4">&#x1F4CD;</span>
            <div>
              <p className="text-color-gray font-medium">Cidade</p>
              <p className="text-color-gray">Distrito Federal - Brasil</p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-color-gray text-2xl mr-4">&#x2709;&#xFE0F;</span>
            <div>
              <p className="text-color-gray font-medium">Email</p>
              <p className="text-color-gray">amarkes.aws@gmail.com</p>
            </div>
          </div>
        </div>


      </div>
      <div className="border-t border-color-gray my-12 mr-7 w-2/3"></div>
    </section>
  );
};

export default ContactPage;
