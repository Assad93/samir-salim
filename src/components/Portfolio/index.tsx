import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import PortfolioItem from "../PortfolioItem";
import Swiper from "../Swiper";
import styles from "./Portfolio.module.css";

export interface IRepository {
  link: string;
  repo: string;
}

const Portfolio: React.FC = (props) => {
  const [repos, setRepos] = useState<IRepository[]>();

  useEffect(() => {
    async function getRepos() {
      const { data } = await axios.get(
        "https://gh-pinned-repos.egoist.sh/?username=Assad93"
      );

      const arrRepos: IRepository[] = [];

      data.forEach((item: IRepository) => {
        const newRepo = {
          link: item.link,
          repo: item.repo,
        };

        arrRepos.push(newRepo);
      });

      setRepos(arrRepos);
    }
    getRepos();
  }, []);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <h1 className={styles.portfolio__heading}>
        <span>Meu</span> Portfolio
      </h1>

      <div className={styles.portfolio__boxContainer}>
        {repos?.map((item, index) => {
          if (index === 0) {
            return;
          }
          return (
            <PortfolioItem key={index} link={item.link} name={item.repo} />
          );
        })}
      </div>

      <a
        href="https://github.com/Assad93/"
        className={styles.portfolio__link}
        target="_blank"
      >
        <span>+ no</span>
        <FaGithub size={40} />
      </a>
    </section>
  );
};

export default Portfolio;
