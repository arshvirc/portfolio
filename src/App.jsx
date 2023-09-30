/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import SideBar from './components/SidePanels/SideBar'
import Main from './components/MainPanels/Main'

// import components

function App() {
  return (
    <div className='flex flex-row bg-[#01161E] gap-2 p-2'>
      <SideBar />
      <Main />
    </div>
  )
}

export default App
