import React, { useContext } from "react";
import styles from "./Vocabulary.module.scss";
import VocabItem from "./VocabItem/VocabItem";
import VocabHeader from "./VocabHeader/VocabHeader";
import { CustomContext } from "../../Context";

export default function Vocabulary() {
  const { terms } = useContext(CustomContext);
  return (
    <div className={styles.vocab}>
      <h2 className={styles.vocab__title2}>Vocabulary Help</h2>
      <h3 className={styles.vocab__title2}>Vocabulary Variants</h3>
      <div className={styles.vocab__container}>
        <VocabHeader />
        {terms.map((term) => (
          <VocabItem key={term.english} {...term} />
        ))}
      </div>
    </div>
  );
}
