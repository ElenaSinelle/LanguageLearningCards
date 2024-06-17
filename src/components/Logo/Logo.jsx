import React from "react";
import styles from "./Logo.module.scss";
import logo from "../../images/icons/logo.svg";
import ImgLink from "../Links/ImgLink/ImgLink";

export default function Logo() {
  return <ImgLink className={styles.logo} href="./." src={logo} alt="logo" />;
}
