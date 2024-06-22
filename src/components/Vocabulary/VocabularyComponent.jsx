import styles from "./Vocabulary.module.scss";
import VocabItem from "./VocabItem/VocabItem";
import VocabHeader from "./VocabHeader/VocabHeader";
import { useTerms } from "../../hoc/TermsContext";

export default function VocabularyComponent() {
  const { terms } = useTerms();
  return (
    <div className={styles.vocab}>
      <h2 className={styles.vocab__title}>Vocabulary</h2>

      <div className={styles.vocab__container}>
        <VocabHeader />
        {terms.map((term) => (
          <VocabItem key={term.id} {...term} />
        ))}
      </div>
    </div>
  );
}
