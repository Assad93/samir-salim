import React from "react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiExpo,
  SiJest,
  SiTestinglibrary,
  SiNodedotjs,
  SiPrisma,
  SiMysql,
  SiExpress,
} from "react-icons/si";

import styles from "./Skills.module.css";

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h1 className={styles.skills__heading}>
        <span>Minhas</span> Habilidades
      </h1>
      <div className={styles.skills__board}>
        <h2>Usando</h2>
        <div className={styles.skills__grid}>
          <div className={styles.skills__item}>
            <SiReact />
            <span>React</span>
          </div>
          <div className={styles.skills__item}>
            <SiNodedotjs />
            <span>Node</span>
          </div>
          <div className={styles.skills__item}>
            <SiTypescript />
            <span>Typescript</span>
          </div>
          <div className={styles.skills__item}>
            <SiMysql />
            <span>MySQL</span>
          </div>
          <div className={styles.skills__item}>
            <SiPrisma />
            <span>Prisma</span>
          </div>
          <div className={styles.skills__item}>
            <SiNextdotjs />
            <span>Next.js</span>
          </div>
          <div className={styles.skills__item}>
            <SiExpress />
            <span>Express</span>
          </div>
        </div>
      </div>
      <div className={styles.skills__board}>
        <h2>Aprendendo</h2>
        <div className={styles.skills__grid}>
          <div className={styles.skills__item}>
            <SiReact />
            <span>RN</span>
          </div>
          <div className={styles.skills__item}>
            <SiExpo />
            <span>Expo</span>
          </div>
          <div className={styles.skills__item}>
            <SiJest />
            <span>Jest</span>
          </div>
          <div className={styles.skills__item}>
            <SiTestinglibrary />
            <span>RTL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
