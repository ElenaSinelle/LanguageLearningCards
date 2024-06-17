import React from "react";
import PlainLink from "../../Links/PlainLink/PlainLink";
import styles from "./NavItem.module.scss";

export default function NavItem({ href, contents }) {
  return (
    <li className={styles.navLink}>
      <PlainLink href={href} contents={contents} />
    </li>
  );
}
