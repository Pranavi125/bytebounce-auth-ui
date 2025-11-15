import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LatestNews from './components/LatestNews';
import Reviews from './components/Reviews';
import JoinUs from './components/JoinUs';
import NewsletterCard from './components/NewsletterCard';
import SubscribePage from './pages/SubscribePage';
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <BrowserRouter>
      

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
            <Navbar />
              <Hero />
              <NewsletterCard />
              <JoinUs />
              <LatestNews />
              <Reviews />
              <Subscribe />
            </>
          }
        />

        {/* Subscribe Page */}
        <Route path="/subscribe" element={<SubscribePage />} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
