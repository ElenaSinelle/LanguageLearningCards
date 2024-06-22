import { Outlet } from "react-router-dom";
import styles from "../../commonStyles/index.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { TermsContextProvider } from "../../hoc/TermsContext";

function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <TermsContextProvider>
        <main>
          <Outlet />
        </main>
      </TermsContextProvider>
      <Footer />
    </div>
  );
}

export { Layout };
