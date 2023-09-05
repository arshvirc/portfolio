/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'

// import components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
     <div>
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
     </div>
    </>
  )
}

export default App
