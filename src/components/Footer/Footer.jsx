import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

import styles from "./Footer.module.scss";

import { navItems } from "../../navItems";

const setActiveLink = ({ isActive }) =>
  isActive
    ? `${styles.footer__nav_link} ${styles.footer__nav_link_active}`
    : `${styles.footer__nav_link}`;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footer__container}`}>
        <Logo />
        <div className={styles.footer__line}></div>
        <ul className={styles.footer__nav}>
          {navItems.map((item) => (
            <NavLink to={item[1]} key={item[0]} className={setActiveLink}>
              {item[0]}
            </NavLink>
          ))}
        </ul>
      </div>
    </footer>
  );
}
