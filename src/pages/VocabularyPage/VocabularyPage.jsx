import VocabularyComponent from "../../components/Vocabulary/VocabularyComponent";
import { GoBackButton } from "../../components/NavigateButtons/NavigateButtons";
import styles from "./VocabularyPage.module.scss";

export default function VocabularyPage() {
  return (
    <div className={styles.container}>
      <GoBackButton />
      <VocabularyComponent />
    </div>
  );
}
