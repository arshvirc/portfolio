import React from 'react'

const Nav = () => {
  return (
    <nav className='nav hidden lg:block'>
      <ul className='mt-16 w-max'>
        <li>
          <a className='group flex items-center py-3 active' href='#about'> About </a>
          <a className='group flex items-center py-3' href='#experiences'> Experiences </a>
          <a className='group flex items-center py-3' href='#projects'> Projects </a>
          <a className='group flex items-center py-3' href='#academics'> Academics </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav