/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import SideBar from './components/SidePanels/SideBar'
import Main from './components/MainPanels/Main'

// import components
import NavMobile from './components/SidePanels/NavMobile'
import Intro from './components/MainPanels/Intro'

function App() {
    return (
        <div>
            <div className='flex flex-row bg-[#01161E] gap-2 p-2'>
                {/* <div className='hidden md:block'>
                    <SideBar />
                </div>
                <Main /> */}

                <Intro />

            </div>
            <div className='lg:hidden'>
                <NavMobile />
            </div>
        </div>
    )
}

export default App
