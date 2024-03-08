import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  {
    name: "Projects",
    link: "#"
  },
  {
    name: "About",
    link: "#"
  },
  {
    name: " Academics",
    link: "#"
  }
]

const circleVariants = {
  hidden: {
      scale: 0
  },
  visible: {
      scale: 180,
      transition: {
          type: 'spring',
          stiffness: 160,
          damping: 60,
      }
  }
}

const ulVariants = {
  hidden: {
      opacity: 0
  },
  visible: {
      opacity: 1,
      transition: {
          delay: 0.1
      }
  }
}




const Nav = () => {
  const [toggleOn, toggleMenu] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));

    if (matches) toggleMenu(false);
  }, [matches]);


  return (
    <nav className='fixed flex flex-row justify-between items-center px-3 py-8 overflow-hidden z-10 w-screen bg-[#ffe556]'>
      <p className='pl-8 hover:text-blue-400'>ARSHVIR CHAUDHARY.</p>

      { matches ?
        (
            <div className='flex flex-row pl-0 mr-[10%] gap-1'>
                <ul className='flex flex-row pl-0 mr-[10%] gap-1'>
                    {navItems.map((item, id ) => { 
                        return (
                            <div key={id} className='hover:text-blue-400'>
                                {item.name},
                            </div> 
                        )
                    })}
                </ul>
            </div>
        )
      :
        (
            <div className='flex flex-row pl-0 mr-[10%] gap-1'>
                { toggleOn ? 
                    <div onClick={() =>toggleMenu(false)} className='hover:text-blue-400'>
                        <p className=''>Close</p>
                    </div>
                :
                    <div onClick={() => toggleMenu(true)} className='hover:text-blue-400'>
                        <p className=''>Menu</p>
                    </div>
                }
            </div>
        ) 
      }
      <motion.div 
            variants={circleVariants} 
            initial='hidden' 
            animate={toggleOn ? 'visible' : 'hidden'} 
            className='circle below'
          >
          </motion.div>
    
          <motion.ul
            variants={ulVariants} 
            initial='hidden' 
            animate={toggleOn ? 'visible' : ''} 
            className={ `${toggleOn ? '' : 'none'} fixed top-0 bottom-0 w-screen flex flex-col justify-center items-center transition-all duration-300 overflow-hidden bg-[#ffe556]`}
          >
            {navItems.map((item, id ) => { 
                        return (
                            <div key={id} className='nav-opt'>
                                {item.name},
                            </div> 
                        )
                    })}
          </motion.ul>
    </nav>
  )
}

export default Nav