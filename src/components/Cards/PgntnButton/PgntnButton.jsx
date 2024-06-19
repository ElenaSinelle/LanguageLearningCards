import styles from "./PgntnButton.module.scss";

export default function PgntnButton({ contents, onClick }) {
  return (
    <div className={styles.pgntnButton} onClick={onClick}>
      {contents}
    </div>
  );
}
