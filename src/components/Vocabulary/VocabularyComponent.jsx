import React, { useContext } from "react";
import styles from "./Vocabulary.module.scss";
import VocabItem from "./VocabItem/VocabItem";
import VocabHeader from "./VocabHeader/VocabHeader";
import { CustomContext } from "../../Context";
import { GoBackButton } from "../../components/NavigateButtons/NavigateButtons";

export default function VocabularyComponent() {
  const { terms } = useContext(CustomContext);
  return (
    <div className={styles.container}>
      <GoBackButton />
      <div className={styles.vocab}>
        <h2 className={styles.vocab__title}>Vocabulary</h2>

        <div className={styles.vocab__container}>
          <VocabHeader />
          {terms.map((term) => (
            <VocabItem key={term.english} {...term} />
          ))}
        </div>
      </div>
    </div>
  );
}
