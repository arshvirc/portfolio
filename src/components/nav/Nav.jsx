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
]

const Nav = () => {
  return (
    <nav className='py-12'>
      <ul className='flex gap-4 justify-end'>
        {nav.map((nav, id) => {
          return (
            <li key={id}> 
              <a className='' href={nav.link}>{nav.title}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav