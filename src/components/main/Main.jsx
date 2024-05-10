import React from 'react'
import About from '../about/About'
import Experience from '../experience/Experience'
import Projects from '../projects/Projects'

const Main = () => {
  return (
    <main id='content' className='pt-24 lg:w-1/2 lg:py-24'>
      <About />
      <Experience />
      <Projects />
    </main>
  )
}

export default Main