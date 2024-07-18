import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import { authStoreProvider } from "../../hoc/ObservableAuthStore";
import { observer } from "mobx-react";
import { useContext } from "react";

const setActiveLink = ({ isActive }) =>
  isActive
    ? `${styles.header__nav_link} ${styles.header__nav_link_active}`
    : `${styles.header__nav_link}`;

const Header = observer(() => {
  const { user } = useContext(authStoreProvider);
  return (
    <header className={styles.header}>
      <div
        className={`${styles.container} ${styles.header__container}`}
      >
        <Logo />
        <nav className={styles.header__nav}>
          <NavLink to="/cards" className={setActiveLink}>
            Cards
          </NavLink>
          <NavLink
            to="/vocabulary"
            className={setActiveLink}
          >
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
});

export default Header;
