import { Outlet } from "react-router-dom";
import styles from "../../commonStyles/index.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Context } from "../../Context";

function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Context>
        <main>
          <Outlet />
        </main>
      </Context>
      <Footer />
    </div>
  );
}

export { Layout };
