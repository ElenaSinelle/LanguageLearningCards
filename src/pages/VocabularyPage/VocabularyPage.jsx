import { useSearchParams } from "react-router-dom";
import VocabularyComponent from "../../components/Vocabulary/VocabularyComponent";
import { GoBackButton } from "../../components/NavigateButtons/NavigateButtons";
import styles from "./VocabularyPage.module.scss";
import Search from "../../components/Inputs/Search";

export default function VocabularyPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("term") || "";
  const startsFrom = searchParams.has("new") ? 21 : 0;

  return (
    <div className={`${styles.container} ${styles.vocabPage}`}>
      <div className={styles.vocabPage__header}>
        <GoBackButton />
        <Search
          setSearchParams={setSearchParams}
          query={query}
          startsFrom={startsFrom}
        />
      </div>

      <VocabularyComponent query={query} startsFrom={startsFrom} />
    </div>
  );
}
