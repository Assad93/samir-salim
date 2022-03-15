import React from "react";
import styles from "./Course.module.css";
import { FaGraduationCap } from "react-icons/fa";

type CourseProps = {
  endYear: string;
  name: string;
  description: string;
};

const Course: React.FC<CourseProps> = (props: CourseProps) => {
  return (
    <div className={styles.course__box}>
      <FaGraduationCap className={styles.course__icon} />
      <span>{props.endYear}</span>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Course;
