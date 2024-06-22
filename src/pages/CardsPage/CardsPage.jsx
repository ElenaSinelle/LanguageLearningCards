import CardsContainer from "../../components/Cards/CardsContainer/CardsContainer";
import { GoBackButton } from "../../components/NavigateButtons/NavigateButtons";
import styles from "./CardsPage.module.css";

export default function CardsPage() {
  return (
    <div className={styles.container}>
      <GoBackButton />
      <CardsContainer />
    </div>
  );
}
