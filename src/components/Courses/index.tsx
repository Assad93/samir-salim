import React from "react";
import styles from "./Courses.module.css";
import Course from "../Course";

const Courses: React.FC = () => {
  return (
    <section id="courses" className={styles.courses}>
      <h1 className={styles.courses__heading}>
        Meus <span>Cursos</span>
      </h1>
      <div className={styles.courses__boxContainer}>
        <Course
          endYear="2022"
          name="Bacharel"
          description="Curso de Sistemas de Informação no Instituto Federal Fluminense - IFF (conclusão em jul. 2022)."
        />
        <Course
          endYear="2022"
          name="Formação React com Typescript"
          description="Curso de Front End fornecido pela Alura."
        />
        <Course
          endYear="2020"
          name="Scrum Fundamentals Certified"
          description="Certificação Profissional em Fundamentos de Scrum pela SCRUMStudy."
        />
        <Course
          endYear="2020"
          name="CS50x"
          description="Certificado de conclusão do curso CS50 oferecido pela Universidade de Harvard."
        />
        <Course
          endYear="2018"
          name="Curso de UX/UI"
          description="Curso de UX/UI oferecido pela TIMTec."
        />
      </div>
    </section>
  );
};

export default Courses;
