import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useCounter } from "../../../hoc/CounterContext";
import styles from "./Card.module.scss";

function Card({ term, id, isVisible }) {
  const { counter } = useCounter();
  const [translated, setTranslated] = useState(false);
  const translateBtn = useRef(null);

  const handleTranslation = id => {
    setTranslated(true);
    counter(id);
  };

  useEffect(() => {
    setTranslated(false);
    if (isVisible) {
      translateBtn.current.focus();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div id={id} className={styles.card}>
      <h4 className={styles.card__cardTitle}>Term</h4>

      <Link
        to={`/cards/${id}`}
        className={styles.card__term}
      >
        {term.english}
      </Link>
      {!translated ? (
        <button
          className={styles.card__showTranslation}
          onClick={() => handleTranslation(id)}
          ref={translateBtn}
        >
          Show translation
        </button>
      ) : (
        <div className={styles.card__translation}>
          {term.russian}
        </div>
      )}
    </div>
  );
}

export default React.memo(Card);
