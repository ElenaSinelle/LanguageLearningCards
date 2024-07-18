import React, {
  useEffect,
  useState,
  useContext,
} from "react";
import styles from "./CardsContainer.module.scss";
import { useCounter } from "../../../hoc/CounterContext";
import Card from "../Card/Card";
import PgntnButton from "../PgntnButton/PgntnButton";
import { termsStoreContext } from "../../../hoc/ObservableTermsStore";
import { observer } from "mobx-react";

const CardsContainer = observer(() => {
  const { terms } = useContext(termsStoreContext);
  const { count } = useCounter();

  const userTermId = !localStorage.getItem("userTermId")
    ? 0
    : JSON.parse(localStorage.getItem("userTermId")) <
      terms.length
    ? JSON.parse(localStorage.getItem("userTermId"))
    : terms.length - 1;

  const [currentTerm, setCurrentTerm] =
    useState(userTermId);

  const handleNextWord = () => {
    setCurrentTerm(prev =>
      prev === terms.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrevWord = () => {
    setCurrentTerm(prev =>
      prev === 0 ? terms.length - 1 : prev - 1,
    );
  };

  const errorMessageRender = (
    <div className={styles.errorMessage}>
      No terms available
    </div>
  );

  useEffect(() => {
    localStorage.setItem(
      "userTermId",
      JSON.stringify(currentTerm),
    );
  }, [currentTerm]);

  return (
    <div className={styles.cardsContainer}>
      <div
        className={
          styles.cardsContainer__currentCardContainer
        }
      >
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
          <span
            className={
              styles.cardsContainer__pagination_num
            }
          >
            {currentTerm + 1}
          </span>{" "}
          / Words Total:{" "}
          <span
            className={
              styles.cardsContainer__pagination_num
            }
          >
            {terms.length}
          </span>
        </div>

        <div className={styles.cardsContainer__total}>
          You have learned{" "}
          <span
            className={styles.cardsContainer__total_num}
          >
            {count}
          </span>{" "}
          {count === 1 ? "word" : "words"} during current
          training
        </div>
      </div>
    </div>
  );
});
export default CardsContainer;
