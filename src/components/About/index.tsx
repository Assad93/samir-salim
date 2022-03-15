import React from "react";
import styles from "./About.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Animation } from "../Animation";
import { SiGmail } from "react-icons/si";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <span className={styles.about__greetings}>Hello, World!</span>
      <h1 className={styles.about__title}>
        Meu nome é <span>Samir Salim</span>
      </h1>
      <p className={styles.about__description}>
        Estou me formando em Sistemas de Informação pelo IFF e sou um
        desenvolvedor front-end em busca da primeira oportunidade no mercado.
        Gosto muito de desenvolver interfaces, de estudar coisas novas e,
        principalmente, de café :-).
      </p>
      <div className={styles.about__socialMedia}>
        <a href="https://github.com/Assad93" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/devsalim/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:devsalim93@gmail.com">
          <SiGmail />
        </a>
        <span>devsalim93@gmail.com</span>
      </div>
      <Animation />
    </section>
  );
};

export default About;
