import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Contacts from "./pages/Contacts";
import Cards from "./pages/Cards";
import Card from "./pages/Card";
import Vocabulary from "./pages/Vocabulary";
import NotFound from "./pages/NotFound";
import { Context } from "./Context";

export default function App() {
  return (
    <>
      <Router basename="/LanguageLearningCards">
        <Header />
        <Context>
          <main className="container" style={{ minHeight: "100vh" }}>
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
    </>
  );
}
