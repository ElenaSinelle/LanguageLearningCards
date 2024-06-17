import React from "react";
import Logo from "../Logo/Logo";
import PlayWare from "../../images/png/playwire.png";
import NavItem from "./NavItem/NavItem";
import ImgLink from "../Links/ImgLink/ImgLink";
import PlainLink from "../Links/PlainLink/PlainLink";
import ButtonLink from "../Links/ButtonLink/ButtonLink";
import styles from "./Footer.module.scss";

export default function Footer() {
  const navItems = [
    ["Home", "./."],
    ["Flashcards", "./."],
    ["About", "./."],
    ["FAQ", "./."],
    ["Terms of Service", "./."],
    ["Privacy Statement", "./."],
    ["Contact", "./."],
  ];

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footer__container}`}>
        <Logo />

        <p className={styles.footer__copyRight}>
          Copyright © 2001-2024 StudyStack LLC. All rights reserved.
        </p>

        <div className={styles.footer__line}></div>

        <nav>
          <ul className={styles.footer__nav}>
            {navItems.map((item) => (
              <NavItem key={item[0]} href={item[1]} contents={item[0]} />
            ))}
          </ul>
        </nav>

        <div className={styles.footer__btns}>
          <ButtonLink
            href="/"
            contentsAdd="Browse on Search"
            contents="millions of existing flashcards"
          />

          <ButtonLink
            href="/"
            contentsAdd="Create Flashcards"
            contents="plus a dozen other activities"
          />
        </div>

        <ImgLink
          href="https://www.playwire.com/contact-direct-sales"
          src={PlayWare}
          alt="PlayWare"
        />

        <PlainLink href="/" contents="Advertise on this site" />
      </div>
    </footer>
  );
}
