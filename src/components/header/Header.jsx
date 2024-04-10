import React from 'react'
import Nav from '../nav/Nav'
import Socials from '../socials/Socials'

const Header = () => {
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
          <a href='/'>Arshvir Chaudhary</a>
        </h1>
        <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
          Software Developer
        </h2>
        <p className='mt-4 max-w-xs leading-normal'>
          I like building cool ideas. The more complicated, the better I find them.
        </p>
        <Nav />
        <Socials />
      </div>
    </header>
  )
}

export default Header