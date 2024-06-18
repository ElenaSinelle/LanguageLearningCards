import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Search from "../Inputs/Search";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.header__container}`}>
        <Logo />
        <div className={styles.header__logins}>
          <Search />

          <a href="./."> contents="Log In"</a>
          <a href="./."> contents="Sign Up" </a>
        </div>
      </div>
    </header>
  );
}
