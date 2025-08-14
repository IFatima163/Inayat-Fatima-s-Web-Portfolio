import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Certificates } from './components/sections/Certificates'
import { Testimonials } from './components/sections/Testimonials'
import { Contact } from './components/sections/Contact'
import './index.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
        } bg-black/60 text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Certificates />
        <Testimonials />
        <Contact />
        <footer className="mt-12 text-center">
          <p className="text-gray-500 text-sm pb-6">Last Updated - August 2025 | Thanks for visiting ♥</p>
        </footer>
      </div>
    </>
  )
}

export default App
