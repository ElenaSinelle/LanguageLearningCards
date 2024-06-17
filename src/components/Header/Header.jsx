import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import PlainLink from "../Links/PlainLink/PlainLink";
import Search from "../Inputs/Search";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.header__container}`}>
        <Logo />
        <div className={styles.header__logins}>
          <Search />

          <PlainLink href="./." contents="Log In" />

          <PlainLink href="./." contents="Sign Up" />
        </div>
      </div>
    </header>
  );
}
