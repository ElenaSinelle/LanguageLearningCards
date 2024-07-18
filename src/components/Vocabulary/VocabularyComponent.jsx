import { useContext, useEffect, useState } from "react";
import styles from "./Vocabulary.module.scss";
import VocabItem from "./VocabItem/VocabItem";
import VocabHeader from "./VocabHeader/VocabHeader";
import Loader from "../Loader/Loader";
import { termsStoreContext } from "../../hoc/ObservableTermsStore";
import { observer } from "mobx-react";

const VocabularyComponent = observer(
  ({ query, startsFrom }) => {
    const { terms, loading, error, fetchTerms } =
      useContext(termsStoreContext);
    const [isAddingNew, setIsAddingNew] = useState(false);

    useEffect(() => {
      fetchTerms();
    }, []);

    return (
      <div className={styles.vocab}>
        <h2 className={styles.vocab__title}>Vocabulary</h2>

        <div className={styles.vocab__container}>
          <VocabHeader />

          {loading ? (
            <Loader />
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
  },
);

export default VocabularyComponent;
