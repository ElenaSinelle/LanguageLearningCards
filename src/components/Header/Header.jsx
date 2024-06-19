import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Search from "../Inputs/Search";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.header__container}`}>
        <Logo />
        <nav className={styles.header__nav}>
          <Search />

          <Link className={styles.header__nav_link} to="/login">
            Login
          </Link>
          <Link className={styles.header__nav_link} to="/cards">
            Cards
          </Link>
          <Link className={styles.header__nav_link} to="/vocabulary">
            Vocabulary
          </Link>
          <Link className={styles.header__nav_link} to="/contacts">
            Contacts
          </Link>
        </nav>
      </div>
    </header>
  );
}
