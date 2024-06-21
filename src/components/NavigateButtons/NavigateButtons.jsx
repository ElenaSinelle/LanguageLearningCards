import { useNavigate, Link } from "react-router-dom";
import styles from "./NavigateButtons.module.scss";

function GoBackButton() {
  const navigate = useNavigate();
  return (
    <button className={styles.btn} onClick={() => navigate(-1)}>
      Go Back
    </button>
  );
}

function GoForwardButton() {
  const navigate = useNavigate();
  return (
    <button className={styles.btn} onClick={() => navigate(+1)}>
      Go Forward
    </button>
  );
}

function GoHomeButton() {
  const navigate = useNavigate();
  return (
    <Link className={styles.btn} to="/">
      Go Home
    </Link>
  );
}

export { GoBackButton, GoForwardButton, GoHomeButton };
