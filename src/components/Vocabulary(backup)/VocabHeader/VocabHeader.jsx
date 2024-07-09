import styles from "../Vocabulary.module.scss";

export default function VocabHeader() {
  return (
    <div className={styles.vocab__line}>
      <div className={styles.vocab__itemContainer}>
        <VocabHeaderItem contents="Term" />
        <VocabHeaderItem contents="Transcription" />
        <VocabHeaderItem contents="Translation" />
        <VocabHeaderItem contents="Category" />
      </div>

      <VocabHeaderItem contents="" />
    </div>
  );
}

const VocabHeaderItem = ({ contents }) => {
  return (
    <div className={`${styles.vocab__item} ${styles.vocab__headerItem}`}>
      {contents}
    </div>
  );
};
