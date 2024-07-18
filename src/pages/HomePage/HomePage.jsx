import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";
import { authStoreProvider } from "../../hoc/ObservableAuthStore";
import { observer } from "mobx-react";
import { useContext } from "react";

const HomePage = observer(() => {
  const { user } = useContext(authStoreProvider);
  return (
    <div className={styles.homePage}>
      <h1 className={styles.homePage__title}>LEARNING</h1>
      <p className={styles.homePage__about}>
        Language Learning Cards is a study tool that makes
        learning and memorizing information a fun,
        stress-free, and enjoyable experience.
      </p>
      {!user && (
        <>
          <p className={styles.homePage__toLogin}>
            Please log in to proceed with your studies.
          </p>
          <Link
            className={styles.homePage__linkLogin}
            to="/login"
          >
            {" "}
            Go to Login Page
          </Link>
        </>
      )}
    </div>
  );
});

export default HomePage;
