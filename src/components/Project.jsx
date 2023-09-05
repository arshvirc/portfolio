/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Project = ({item}) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
        <div className='mb-8'>
            <img className=' w-64 h-64 rounded-2xl' src={item.image} alt=''></img>
        </div>
        <p className='capitalize text-accent text-sm mb-3'> {item.category} </p>
        <h3 className='text-2xl font-semibold capitalize mb-3'> {item.name} </h3>
    </div>
  )
}


export default Project