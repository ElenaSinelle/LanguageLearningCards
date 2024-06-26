import styles from "./LogoutPage.module.scss";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hoc/AuthContext";

export default function LogoutPage() {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  const logoutHandler = (event) => {
    event.preventDefault();
    logOut(() => navigate("/"));
  };

  return (
    <div className={styles.container}>
      <div className={styles.logout}>
        <h2 className={styles.logout__title}>Log Out Page</h2>
        <p className={styles.logout__hint}>
          We were happy to study together. You are welcome to come back!
        </p>

        <form
          className={styles.logout__form}
          name="logout"
          onSubmit={logoutHandler}
        >
          <button className={styles.logout__form_btn} type="submit">
            Log Out
          </button>
        </form>
      </div>
    </div>
  );
}
