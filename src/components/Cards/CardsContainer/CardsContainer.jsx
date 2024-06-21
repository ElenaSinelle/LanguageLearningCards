import React, { useContext, useEffect, useState } from "react";
import styles from "./CardsContainer.module.scss";
import { CustomContext } from "../../../Context";

import Card from "../Card/Card";
import PgntnButton from "../PgntnButton/PgntnButton";
import { GoBackButton } from "../../../components/NavigateButtons/NavigateButtons";

export default function CardsContainer() {
  const { terms } = useContext(CustomContext);

  const userTermId = localStorage.getItem("userTermId")
    ? JSON.parse(localStorage.getItem("userTermId"))
    : 0;

  const [currentTerm, setCurrentTerm] = useState(userTermId);

  const handleNextWord = () => {
    setCurrentTerm((prev) => (prev === terms.length - 1 ? 0 : prev + 1));
  };

  const handlePrevWord = () => {
    setCurrentTerm((prev) => (prev === 0 ? terms.length - 1 : prev - 1));
  };

  const errorMessageRender = (
    <div className={styles.errorMessage}>No terms available</div>
  );

  useEffect(() => {
    localStorage.setItem("userTermId", JSON.stringify(currentTerm));
  }, [currentTerm]);

  return (
    <div className={styles.container}>
      <GoBackButton className={styles.goBackButton} />

      <div className={styles.cardsContainer}>
        <div className={styles.cardsContainer__currentCardContainer}>
          <PgntnButton
            className={styles.cardsContainer__prev}
            onClick={handlePrevWord}
            contents="Previous Word"
          />

          {!terms || terms.length === 0
            ? errorMessageRender
            : terms.map((term, index) => (
                <Card
                  key={term.english}
                  id={term.id}
                  className={styles.cardsContainer__card}
                  term={term}
                  isVisible={index === currentTerm}
                />
              ))}

          <PgntnButton
            className={styles.cardsContainer__next}
            onClick={handleNextWord}
            contents="Next Word"
          />

          <div className={styles.cardsContainer__pagination}>
            Current Word:{" "}
            <span className={styles.cardsContainer__pagination_num}>
              {currentTerm + 1}
            </span>{" "}
            / Words Total:{" "}
            <span className={styles.cardsContainer__pagination_num}>
              {terms.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
