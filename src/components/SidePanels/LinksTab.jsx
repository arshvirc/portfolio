/* eslint-disable no-unused-vars */
import React from 'react'
import {Link } from 'react-scroll'
import { social } from '../../data.jsx'

const LinksTab = () => {
  return (
    <div className='w-[90%] m-4 bg-[#124559] rounded-md p-4'>
      Arshvir Chaudhary
      <nav>
        <ul className='flex flex-col space-x-8 capitalize text-[15px]'>
          {social.map((item, index) => {
            return (
              <li className='text-white hover:text-accent cursor-pointer' key={index}>
                <Link to={item.href} activeClass='active' spy={true} smooth={true} duration={500} offset={-70} className='transition-all duration-300' > 
                  {item.name} 
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default LinksTab