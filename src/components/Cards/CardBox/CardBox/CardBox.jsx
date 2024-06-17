import styles from "./CardBox.module.scss";
import CardMini from "../CardMini/CardMini";

export default function CardBox({ id, term, cardHolderContents, theme }) {
  return (
    <div className={styles.cardBox}>
      <CardMini id={id} term={term} />
      <div className={`${styles.cardBox__cardHolder} ${theme.bg}`}>
        {cardHolderContents}
      </div>
    </div>
  );
}
