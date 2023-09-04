/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'

// import components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
     <div>
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <div style={{ height: '2000px' }}></div>
     </div>
    </>
  )
}

export default App
