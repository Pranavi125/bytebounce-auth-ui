import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function App() {
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
              <JoinUs />
              <NewsletterCard id="newsletter" />
              <Reviews />
              <WhyUs />
              <Subscribe />
              <Footer />
            </div>
          }
        />

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

        {/* Subscribe Page */}
        <Route path="/subscribe" element={<SubscribePage />} />

        {/* Contact Us Page */}
        <Route path="/contactus" element={<ContactUsPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
