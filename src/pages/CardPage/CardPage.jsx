import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import styles from "./CardPage.module.scss";
import {
  GoBackButton,
  GoHomeButton,
} from "../../components/NavigateButtons/NavigateButtons";
import { termsStoreContext } from "../../hoc/ObservableTermsStore";
import { observer } from "mobx-react";

const CardPage = observer(() => {
  const { id } = useParams();
  const { terms } = useContext(termsStoreContext);
  const [term, setTerm] = useState(null);

  useEffect(() => {
    const foundTerm = terms.find(
      term => term.id.toString() === id,
    );
    setTerm(foundTerm);
  }, [terms, id]);

  if (!term) {
    return (
      <div className={styles.container}>
        <h3>
          We are sorry, there is no such word in our
          dictionary. We will add it later.
        </h3>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <GoBackButton />
      <div className={styles.cardPage}>
        <h2 className={styles.cardPage__title}>
          Details of word "{term.english}"
        </h2>
        <div className={styles.cardPage__item}>
          <p>
            English:{" "}
            <span
              className={styles.cardPage__item_description}
            >
              {term.english}
            </span>
          </p>
          <p>
            Transcription:{" "}
            <span
              className={styles.cardPage__item_description}
            >
              {term.transcription}
            </span>
          </p>
          <p>
            Translation into Russian:{" "}
            <span
              className={styles.cardPage__item_description}
            >
              {term.russian}
            </span>
          </p>
          <p>
            The word belongs to the category:{" "}
            <span
              className={styles.cardPage__item_description}
            >
              {term.tags}
            </span>
          </p>
        </div>
      </div>

      <GoHomeButton />
    </div>
  );
});

export default CardPage;
