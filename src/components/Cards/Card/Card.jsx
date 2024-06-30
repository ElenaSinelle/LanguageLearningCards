import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCounter } from "../../../hoc/CounterContext";
import styles from "./Card.module.scss";

export default function Card({ term, id, isVisible }) {
  const { counter } = useCounter();
  const [translated, setTranslated] = useState(false);

  const handleTranslation = (id) => {
    setTranslated(true);
    counter(id);
  };

  useEffect(() => {
    setTranslated(false);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div id={id} className={styles.card}>
      <h4 className={styles.card__cardTitle}>Term</h4>

      <Link to={`/cards/${id}`} className={styles.card__term}>
        {term.english}
      </Link>
      {!translated ? (
        <button
          className={styles.card__showTranslation}
          onClick={() => handleTranslation(id)}
        >
          Show translation
        </button>
      ) : (
        <div className={styles.card__translation}>{term.russian}</div>
      )}
    </div>
  );
}
