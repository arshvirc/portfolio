/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'

// import components
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <>
     <div>
        <Header />
        <Hero />
        <div style={{ height: '2000px' }}></div>
     </div>
    </>
  )
}

export default App
