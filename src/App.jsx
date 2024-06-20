import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import CardsPage from "./pages/CardsPage/CardsPage";
import CardPage from "./pages/CardPage/CardPage";
import VocabularyPage from "./pages/VocabularyPage/VocabularyPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <Router basename="/LanguageLearningCards">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="cards/:id" element={<CardPage />} />
          <Route path="vocabulary" element={<VocabularyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
