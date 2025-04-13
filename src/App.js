import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Stats from './components/Stats/Stats'
import Skills from './components/Skills/Skills'
import Resume from './components/Resume/Resume'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />

        <main className="main">
          <Hero />
          <About />
          <Stats />
          {/* <Skills /> */}
          {/* <Resume /> */}
          <Portfolio />
          <Services />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App
