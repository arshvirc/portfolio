/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-scroll'
import { social } from '../../data.jsx'
import { Divider } from '@mui/material'

const LinksTab = () => {
  return (
    <div className='flex flex-row w-[90%] m-4 bg-[#124559] rounded-md p-4 justify-between'>
      <p className='w-1/2'>Useful Links:</p>
      <div className='flex flex-row w-1/2 justify-around'>
          {social.map((item, index) => {
            return (
              <div className=' hover:text-white cursor-pointer' key={index}>
                <Link to={item.href} activeClass='active' spy={true} smooth={true} duration={500} offset={-70} className='transition-all duration-300' > 
                  {item.icon}
                </Link>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default LinksTab