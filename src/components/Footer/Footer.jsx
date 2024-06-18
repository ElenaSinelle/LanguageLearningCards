import React from "react";
import Logo from "../Logo/Logo";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footer__container}`}>
        <Logo />
      </div>
    </footer>
  );
}
