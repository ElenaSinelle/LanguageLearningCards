// - а хранить состояние переведена ли карточка или нет , следует в компоненте самой карточки, ведь у каждой карточки это состояние должно быть уникально
import React, { useState } from "react";
import ImgLink from "../../Links/ImgLink/ImgLink";
import audio from "../../../images/icons/audio.svg";

import styles from "./Card.module.scss";

export default function Card({ term, id, isVisible }) {
  const [translated, setTranslated] = useState(false);

  const handleTranslation = () => setTranslated(true);

  if (!isVisible) return null;

  return (
    <div id={id} className={styles.card}>
      <h4 className={styles.card__cardTitle}>Term</h4>

      <ImgLink
        className={styles.card__readCardBtn}
        src={audio}
        alt="read card button"
      />

      <div className={styles.card__term}>{term.english}</div>

      {!translated ? (
        <button
          className={styles.card__showTranslation}
          onClick={handleTranslation}
        >
          Show translation
        </button>
      ) : (
        <div className={styles.card__translation}>{term.russian}</div>
      )}
    </div>
  );
}
