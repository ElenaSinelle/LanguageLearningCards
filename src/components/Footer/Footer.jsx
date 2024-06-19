import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

import styles from "./Footer.module.scss";

import { navItems } from "../../navItems";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footer__container}`}>
        <Logo />
        <div className={styles.footer__line}></div>
        <ul className={styles.footer__nav}>
          {navItems.map((item) => (
            <Link to={item[1]} className={styles.footer__nav_link}>
              {item[0]}
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
}
