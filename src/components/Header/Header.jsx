import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Search from "../Inputs/Search";
import { navItems } from "../../navItems";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.header__container}`}>
        <Logo />
        <nav className={styles.header__nav}>
          <Search />

          {navItems.map((item) => (
            <Link to={item[1]} className={styles.header__nav_link}>
              {item[0]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
