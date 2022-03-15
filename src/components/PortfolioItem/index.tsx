import React from "react";
import { FaEye } from "react-icons/fa";
import styles from "./PortfolioItem.module.css";

type PortfolioItemProps = {
  link: string;
  name: string;
};

const PortfolioItem: React.FC<PortfolioItemProps> = (
  props: PortfolioItemProps
) => {
  return (
    <div className={styles.portfolioItem}>
      <img
        src={`/images/${props.name}.png`}
        alt={props.name}
        className={styles.portfolioItem__img}
        title={props.name}
      />
      <div className={styles.portfolioItem__legend}>
        <a href={props.link}>
          <FaEye size={24} />
          <span>Ver repositório</span>
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
