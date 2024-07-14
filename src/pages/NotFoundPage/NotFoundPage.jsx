import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={styles.notFound}>
        <h2 className={styles.notFound__404}>404</h2>
        <p className={styles.notFound__title}>
          This page does not exist
        </p>

        <Link className={styles.notFound__homeLink} to="/">
          {" "}
          Go to Home Page
        </Link>
      </div>
    </div>
  );
}
