import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Menu.module.css";

type MenuProps = {
  toggle: boolean;
  onClick: () => void;
};

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  return (
    <button className={styles.menu} onClick={props.onClick}>
      {props.toggle ? <FaTimes /> : <FaBars />}
    </button>
  );
};

export default Menu;
