import styles from "./ContactsPage.module.scss";
import {
  GoBackButton,
  GoForwardButton,
  GoHomeButton,
} from "../../components/NavigateButtons/NavigateButtons";

export default function ContactsPage() {
  return (
    <div
      className={`${styles.container} ${styles.contacts}`}
    >
      <h3 className={styles.contacts__title}>
        You can contact us at{" "}
        <a
          href="https://github.com/ElenaSinelle"
          target="_blank"
          rel="noreferrer"
        >
          this page
        </a>
      </h3>
      <div className={styles.contacts__btns}>
        <GoBackButton />
        <GoForwardButton />
        <GoHomeButton />
      </div>
    </div>
  );
}
