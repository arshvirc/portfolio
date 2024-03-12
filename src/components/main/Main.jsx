import About from '../about/About'
import { Divider } from '@mui/material'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'

const Main = () => {
  return (
    <div className='pt-24 lg:w-[1/2] lg:py-24 text-center sm:text-left'>
      <Divider orientation='horizontal' className='font-semibold'> About </Divider>
      <About/>
      <Divider orientation='horizontal' className='font-semibold'> Technical Skills </Divider>
      <Skills />
      <Divider orientation='horizontal' className='font-semibold'> Featured Projects </Divider>
      <Projects />
      {/* <Divider orientation='horizontal'> Contact </Divider>
      <Contact /> */}
    </div>
  )
}

export default Main