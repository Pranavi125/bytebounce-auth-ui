
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import JoinUs from './components/JoinUs'
import NewsletterCard from './components/NewsletterCard'
import Subscribe from './components/Subscribe'
import WhyUs from './components/WhyUs'
import WhyUsnew from './components/WhyUsnew'
import Suceed from './components/Succeed'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LatestNews from './components/LatestNews';
import Reviews from './components/Reviews';


import SubscribePage from './pages/SubscribePage';
import ContactUsPage from "./pages/ContactUsPage";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
            <div className="bg-[#EAF3FF] min-h-screen">
            <Navbar />
              <Hero />
              <Suceed />
              <JoinUs />
              <NewsletterCard /> 
              <Reviews />
              
              <WhyUsnew/>
              <Subscribe />
            <Footer/>
            </div>
            </>
          }
        />

        {/* Subscribe Page */}
        <Route path="/subscribe" element={<SubscribePage />} />

      <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
