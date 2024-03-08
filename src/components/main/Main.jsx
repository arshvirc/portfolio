import React from 'react'
import About from '../about/About'
import Misc from '../miscellanous/Misc'
import { Divider } from '@mui/material'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'
// import Experience from '../experience/Experience'

const Main = () => {
  return (
    <div className='pt-24 lg:w-[1/2] lg:py-24 text-center sm:text-left'>
        <Divider orientation='horizontal'> About </Divider>
        <About/>
        <Divider orientation='horizontal'> Fun Facts </Divider>
        <Misc />
        {/* <Divider orientation='horizontal'> Experience </Divider>
        <Experience /> */}
        <Divider orientation='horizontal'> Projects </Divider>
        <Projects />
        <Divider orientation='horizontal'> Contact </Divider>
        <Contact />
    </div>
  )
}

export default Main