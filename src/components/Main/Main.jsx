import styles from "./Main.module.scss";
// import PlainLink from "../Links/PlainLink/PlainLink";
import CardsContainer from "../Cards/CardsContainer/CardsContainer";
import Vocabulary from "../Vocabulary/Vocabulary";

import { Context } from "../../Context";

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.main__wrapper}>
          <Context>
            <>
              <CardsContainer />

              {/* <div className={styles.commandArea}>
                <div className={styles.commandArea__commandAreaItem}>
                  <PlainLink
                    className={styles.commandArea__link}
                    href="./."
                    contents="RETRY"
                    id="retryLink"
                  />
                </div>
                <div className={styles.commandArea__commandAreaItem}>
                  <PlainLink
                    className={styles.commandArea__link}
                    href="./."
                    contents="SHUFFLE"
                    id="shuffleLink"
                  />
                </div>
                <div className={styles.commandArea__commandAreaItem}>
                  <PlainLink
                    className={styles.commandArea__link}
                    href="./."
                    contents="RESTART"
                    id="restartLink"
                  />
                </div>
              </div> */}

              <div className={styles.timer}>timer</div>
            </>

            <Vocabulary className={styles.vocabulary} />
          </Context>
        </div>
      </div>
    </main>
  );
}
