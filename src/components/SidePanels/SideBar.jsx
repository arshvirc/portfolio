/* eslint-disable no-unused-vars */
import React from 'react'

import NavTab from './NavTab'
import LinksTab from './LinksTab'

const SideBar = () => {
  return (
    <div className='flex flex-col items-center h-screen w-1/4'>
        <NavTab />
        <LinksTab />
    </div>
  )
}

export default SideBar