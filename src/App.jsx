import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import LogoutPage from "./pages/LogoutPage/LogoutPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import CardsPage from "./pages/CardsPage/CardsPage";
import CardPage from "./pages/CardPage/CardPage";
import VocabularyPage from "./pages/VocabularyPage/VocabularyPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RequireAuth from "./hoc/RequireAuth";
import { AuthContextProvider } from "./hoc/AuthContext";
import { CounterContextProvider } from "./hoc/CounterContext";

export default function App() {
  return (
    <AuthContextProvider>
      <CounterContextProvider>
        <Router basename="/LanguageLearningCards">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route
                path="contacts"
                element={
                  <RequireAuth>
                    <ContactsPage />
                  </RequireAuth>
                }
              ></Route>
              <Route
                path="cards"
                element={
                  <RequireAuth>
                    <CardsPage />
                  </RequireAuth>
                }
              />
              <Route
                path="cards/:id"
                element={
                  <RequireAuth>
                    <CardPage />
                  </RequireAuth>
                }
              />
              <Route
                path="vocabulary"
                element={
                  <RequireAuth>
                    <VocabularyPage />
                  </RequireAuth>
                }
              />
              <Route
                path="logout"
                element={
                  <RequireAuth>
                    <LogoutPage />
                  </RequireAuth>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Router>
      </CounterContextProvider>
    </AuthContextProvider>
  );
}
