import styles from "./CardMini.module.scss";

export default function Card({ term, id = "" }) {
  return (
    <div id={id} className={styles.cardMini}>
      <h4 className={styles.cardMini__cardTitle}>Term</h4>

      <div className={styles.cardMini__term}>{term}</div>
    </div>
  );
}
