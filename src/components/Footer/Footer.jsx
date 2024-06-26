import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";
import { useAuth } from "../../hoc/AuthContext";

const setActiveLink = ({ isActive }) =>
  isActive
    ? `${styles.footer__nav_link} ${styles.footer__nav_link_active}`
    : `${styles.footer__nav_link}`;

export default function Footer() {
  const { user } = useAuth();
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footer__container}`}>
        <Logo />
        <div className={styles.footer__line}></div>
        <ul className={styles.footer__nav}>
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
        </ul>
      </div>
    </footer>
  );
}
