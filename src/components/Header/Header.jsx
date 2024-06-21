import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Search from "../Inputs/Search";
import { navItems } from "../../navItems";

const setActiveLink = ({ isActive }) =>
  isActive
    ? `${styles.header__nav_link} ${styles.header__nav_link_active}`
    : `${styles.header__nav_link}`;

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.header__container}`}>
        <Logo />
        <nav className={styles.header__nav}>
          <Search />

          {navItems.map((item) => (
            <NavLink to={item[1]} key={item[0]} className={setActiveLink}>
              {item[0]}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
