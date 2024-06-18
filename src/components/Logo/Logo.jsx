import React from "react";
import styles from "./Logo.module.scss";
import logo from "../../images/icons/logo.svg";

export default function Logo() {
  return (
    <a className={styles.logo} href="./.">
      <img src={logo} alt="logo" />
    </a>
  );
}
