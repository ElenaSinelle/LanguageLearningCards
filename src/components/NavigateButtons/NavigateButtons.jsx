import { useNavigate } from "react-router-dom";
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
    <button className={styles.btn} onClick={() => navigate("/")}>
      Go Home
    </button>
  );
}

export { GoBackButton, GoForwardButton, GoHomeButton };
