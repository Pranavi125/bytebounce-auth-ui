
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LatestNews from './components/LatestNews'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import JoinUs from './components/JoinUs'
import NewsletterCard from './components/NewsletterCard'
import Subscribe from './components/Subscribe'


function App() {

  return (
   <>
  <div >
      <Navbar />
      <Hero />
      <LatestNews />
      <Reviews />
    </div>
   <Subscribe/>
   <Footer/>

   </>
  )
}

export default App
