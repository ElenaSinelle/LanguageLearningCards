import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./commonStyles/index.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contacts from "./pages/Contacts/Contacts";
import Cards from "./pages/Cards";
import Card from "./pages/Card";
import Vocabulary from "./pages/Vocabulary";
import NotFound from "./pages/NotFound";
import { Context } from "./Context";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <Router basename="/LanguageLearningCards">
        <Header />
        <Context>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/cards/:id" element={<Card />} />
              <Route path="/vocabulary" element={<Vocabulary />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Context>
        <Footer />
      </Router>
    </div>
  );
}
