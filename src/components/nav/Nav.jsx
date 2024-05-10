import React from 'react'


const nav = [
  {
    link: "#about",
    title: "About"
  },
  {
    link: "#experiences",
    title: "Experiences"
  },
  {
    link: "#projects",
    title: "Projects"
  },
  // {
  //   link: "#academics",
  //   title: "Academics (To Be Implemented Soon)"
  // },
]

const Nav = () => {
  return (
    <nav className='nav hidden lg:block'>
      <ul className='mt-16'>
        {nav.map((nav, id) => {
          return (
            <li key={id}> 
              <a className='flex items-center py-3 lg:hover:pl-8 w-[1/2]' href={nav.link}>{nav.title}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav