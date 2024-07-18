import { Outlet } from "react-router-dom";
import styles from "../../commonStyles/index.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export { Layout };
