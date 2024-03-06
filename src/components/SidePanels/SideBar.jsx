/* eslint-disable no-unused-vars */
import React from 'react'

import NavTab from './NavTab'
import LinksTab from './LinksTab'
import InterestTab from './InterestTab'
import MusicTab from './MusicTab'

const SideBar = () => {
  return (
    <div className='items-center h-screen w-1/4 hidden lg:block'>
        <NavTab />
        <LinksTab />
        <InterestTab />
        <MusicTab />
    </div>
  )
}

export default SideBar