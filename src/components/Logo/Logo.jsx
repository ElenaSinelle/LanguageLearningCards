import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";
import logo from "../../images/png/logo.png";

export default function Logo() {
  return (
    <Link to="/">
      <img className={styles.logo} src={logo} alt="logo" />
    </Link>
  );
}
