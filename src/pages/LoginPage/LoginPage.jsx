import styles from "./LoginPage.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { authStoreProvider } from "../../stores/ObservableAuthStore";
import { observer } from "mobx-react";

const LoginPage = observer(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logIn } = useContext(authStoreProvider);

  const fromPage = location.state?.from?.pathname || "/";

  const loginHandler = event => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;
    logIn(user, () =>
      navigate(fromPage, { replace: true }),
    );
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h2 className={styles.login__title}>Log In Page</h2>
        <p className={styles.login__hint_top}>
          Please login to be able to use the application
        </p>

        <form
          className={styles.login__form}
          name="login"
          onSubmit={loginHandler}
        >
          <label>
            User Name:{" "}
            <input
              type="text"
              placeholder="user name"
              name="username"
            />
          </label>

          <button
            className={styles.login__form_btn}
            type="submit"
          >
            Log In
          </button>
        </form>

        <p className={styles.login__hint_bottom}>
          Hint: please enter any user name
        </p>
      </div>
    </div>
  );
});

export default LoginPage;
