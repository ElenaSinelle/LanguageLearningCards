import { useState } from "react";
import styles from "./Vocabulary.module.scss";
import VocabItem from "./VocabItem/VocabItem";
import VocabHeader from "./VocabHeader/VocabHeader";
import { useTerms } from "../../hoc/TermsContext";

export default function VocabularyComponent({
  query,
  startsFrom,
}) {
  const { terms, isLoading, error } = useTerms();
  const [isAddingNew, setIsAddingNew] = useState(false);

  return (
    <div className={styles.vocab}>
      <h2 className={styles.vocab__title}>Vocabulary</h2>

      <div className={styles.vocab__container}>
        <VocabHeader />

        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          terms
            .filter(term => {
              return (
                term.english
                  .toLowerCase()
                  .includes(query.toLowerCase()) &&
                term.id >= startsFrom
              );
            })
            .map(term => (
              <VocabItem key={term.id} {...term} />
            ))
        )}

        {isAddingNew && (
          <VocabItem
            isNew={true}
            setIsNew={setIsAddingNew}
          />
        )}
      </div>

      <button
        className={styles.vocab__addBtn}
        onClick={() => setIsAddingNew(true)}
      >
        Add New Term
      </button>
    </div>
  );
}
