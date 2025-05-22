import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Photos from "./pages/Photos";
import AdminPage from "./pages/AdminPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LegalNotice from "./pages/LegalNotice";
import TermsAndConditions from "./pages/TermsAndConditions";
import Faq from "./pages/Faq";
import Professional from "./pages/Professional";
import Contact from "./pages/Contact";
import UploadForm from "./components/UploadForm";
import LoginPage from "./components/LoginPage"; // 👈
import PrivateRoute from "./routes/PrivateRoute"; // 👈
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import DashboardAdmin from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/login" element={<LoginPage />} /> {/* 👈 nouvelle route */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <DashboardAdmin />
            </PrivateRoute>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pro" element={<Professional />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test-upload" element={<UploadForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
