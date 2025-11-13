import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LatestNews from './components/LatestNews'
import Reviews from './components/Reviews'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <div >
      <Navbar />
      <Hero />
      <LatestNews />
      <Reviews />
    </div>
   </>
  )
}

export default App
