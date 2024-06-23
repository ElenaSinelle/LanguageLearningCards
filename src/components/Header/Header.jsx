import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Search from "../Inputs/Search";
import { useAuth } from "../../hoc/AuthContext";

const setActiveLink = ({ isActive }) =>
  isActive
    ? `${styles.header__nav_link} ${styles.header__nav_link_active}`
    : `${styles.header__nav_link}`;

export default function Header() {
  const { user } = useAuth();
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.header__container}`}>
        <Logo />
        <nav className={styles.header__nav}>
          <Search />

          <NavLink to="/cards" className={setActiveLink}>
            Cards
          </NavLink>
          <NavLink to="/vocabulary" className={setActiveLink}>
            Vocabulary
          </NavLink>
          <NavLink to="/contacts" className={setActiveLink}>
            Contacts
          </NavLink>
          {!user ? (
            <NavLink to="/login" className={setActiveLink}>
              Login
            </NavLink>
          ) : (
            <NavLink to="/logout" className={setActiveLink}>
              Logout
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}
