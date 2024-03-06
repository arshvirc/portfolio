/* eslint-disable no-unused-vars */
import React from 'react'

import pfp from '../../assets/celebrating.gif'

import { Button } from 'react-scroll'

const Intro = () => {
  return (
    <div className='flex flex-col h-screen w-screen bg-[#01161E] items-center justify-center gap-4'>
        <img src={pfp} className='rounded-full h-48 w-48' />
        <div className='md:text-left text-center'>
            <h1>Arshvir Chaudhary</h1>
            <p>I like building cool ideas ... sometimes not to completion</p>
        </div>
        <div className='pt-16'>
            <button className='btn input'>
                View Some of My Work
            </button>
        </div>
    </div>
  )
}

export default Intro