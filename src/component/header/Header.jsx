import React from 'react'
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'

const Header = () => {
  return (
    <header className='
      lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[1/3] lg:flex-col lg:py-24 lg:justify-center 
      text-center lg:text-left pt-8
    '>
      <h1 className='font-semibold text-4xl'>ARSHVIR CHAUDHARY</h1>
      <h2 className='font-medium lg:mt-0 mt-8'>Software Developer X Cross Country Runner X Music Enthusiast X Binge-Watcher/Reader </h2>
      <div className='mt-16 lg:mt-36 font-light'> "I like building cool ideas. The more thought-provoking, the better." </div>
      <div className='sm:mt-12 sm:flex sm:flex-row sm:gap-4 sm:visible hidden'> 
        <GitHub />
        <LinkedIn />
        <Instagram />
        {(new Date()).toDateString()}
      </div>
    </header>
  )
}

export default Header