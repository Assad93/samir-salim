import React from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  showInMobile: boolean;
  headerToggle: (showInMobile: boolean) => void;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header
      className={styles.header}
      style={props.showInMobile ? { left: 0 } : {}}
    >
      <div className="user">
        <img
          src="/images/me.jpg"
          alt="Samir Salim"
          className={styles.user__img}
        />
        <h3 className={styles.user__name}>Samir Salim</h3>
        <p className={styles.user__description}>Desenvolvedor Front End</p>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navbar__menu}>
          <li>
            <a
              className={styles.navbar__link}
              href="#about"
              onClick={() => {
                props.headerToggle(!props.showInMobile);
              }}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              className={styles.navbar__link}
              href="#skills"
              onClick={() => {
                props.headerToggle(!props.showInMobile);
              }}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              className={styles.navbar__link}
              href="#courses"
              onClick={() => {
                props.headerToggle(!props.showInMobile);
              }}
            >
              Cursos
            </a>
          </li>
          <li>
            <a
              className={styles.navbar__link}
              href="#portfolio"
              onClick={() => {
                props.headerToggle(!props.showInMobile);
              }}
            >
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
