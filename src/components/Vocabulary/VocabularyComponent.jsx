import React, { useContext } from "react";
import styles from "./Vocabulary.module.scss";
import VocabItem from "./VocabItem/VocabItem";
import VocabHeader from "./VocabHeader/VocabHeader";
import { CustomContext } from "../../Context";

export default function VocabularyComponent() {
  const { terms } = useContext(CustomContext);
  return (
    <div className={`${styles.vocab} ${styles.container}`}>
      <h3 className={styles.vocab__title}>Vocabulary Variants</h3>
      <div className={styles.vocab__container}>
        <VocabHeader />
        {terms.map((term) => (
          <VocabItem key={term.english} {...term} />
        ))}
      </div>
    </div>
  );
}
