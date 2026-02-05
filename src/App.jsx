import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import NewsletterCard from "./components/NewsletterCard";
import Subscribe from "./components/Subscribe";
import WhyUs from "./components/WhyUs";
import Suceed from "./components/Succeed";
import Reviews from "./components/Reviews";

import SubscribePage from "./pages/SubscribePage";
import ContactUsPage from "./pages/ContactUsPage";
import NewsletterDetail from "./components/NewsletterDetails";

/* ---------- PAGES ---------- */
import Jobs from "./pages/Jobs";
import LoginEmail from "./pages/LoginEmail";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {

  /* -------- HANDLE LOGIN REDIRECT -------- */
  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const userParam = params.get("user");

  if (userParam) {
    try {
      let decoded = decodeURIComponent(userParam);
      if (decoded.startsWith("%7B")) decoded = decodeURIComponent(decoded);

      const parsedUser = JSON.parse(decoded);

      localStorage.setItem("user", JSON.stringify(parsedUser));
      localStorage.setItem("authUser", JSON.stringify(parsedUser));

      /* IMPORTANT: notify navbar to refresh */
      window.dispatchEvent(new Event("storage"));

    } catch (err) {
      console.error("Invalid user data", err);
    }

    window.history.replaceState({}, document.title, "/");
  }
}, []);


  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Navbar />
              <Hero id="Home" />
              <Suceed />
              {/* <JoinUs /> */}
              <NewsletterCard id="newsletter" />
              <Reviews />
              <WhyUs />
              <Subscribe />
              <Footer />
            </div>
          }
        />

        {/* Newsletter Detail */}
        <Route
          path="/newsletter/:id"
          element={
            <div className="min-h-screen">
              <Navbar />
              <NewsletterDetail />
              <Footer />
            </div>
          }
        />

        {/* Jobs Page (no header/footer) */}
        <Route path="/jobs" element={<Jobs />} />

        {/* ---------- AUTH ROUTES ---------- */}
        <Route path="/login-email" element={<LoginEmail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Subscribe Page */}
        <Route path="/subscribe" element={<SubscribePage />} />

        {/* Contact Us Page */}
        <Route path="/contactus" element={<ContactUsPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
