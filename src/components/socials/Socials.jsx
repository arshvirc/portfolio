import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import React from 'react'

const Socials = () => {
  return (
    <ul className='ml-1 mt-8 flex items-center'>
      <li className='mr-5 text-xs shrink-0'>
        <a className='block hover:text-slate-200' href='https://github.com/arshvirc' target='_blank' rel='noreferrer noopener' aria-label='GitHub (opens in a new tab)' title='GitHub'>
          <span className='sr-only'>GitHub</span>
          <GitHub sx={{ color: 'white' }}/>
        </a>
      </li>
      <li className='mr-5 text-xs shrink-0'>
        <a className='block hover:text-slate-200' href='https://www.linkedin.com/in/arshvirchaudhary/' target='_blank' rel='noreferrer noopener' aria-label='LinkedIn (opens in a new tab)' title='LinkedIn'>
          <span className='sr-only'>LinkedIn</span>
          <LinkedIn sx={{ color: 'white' }}/>
        </a>
      </li>
      <li className='mr-5 text-xs shrink-0'>
        <span className='block text-slate-200'>
        {(new Date()).toDateString().toString()}
        </span>
      </li>

    </ul>
  )
}

export default Socials