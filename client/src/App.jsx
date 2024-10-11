import "./App.css";

import { Routes, Route } from "react-router-dom";
import FeedbackPage from "./pages/FeedbackPage";
import Header from "./components/Header";
import CommentsPage from "./pages/CommentsPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/comments" element={<CommentsPage />} />
      </Routes>
      <Footer />
    </>
  );
}
