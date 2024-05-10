import '../../App.css'
import React from 'react'

const ProjectCard = (props) => {
  console.log(props)
  return (
    <li className='mb-12'>
      <div className='relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover:opacity-50'
      >
        <div className='z-10 sm:order-2 sm:col-span-6'>
          <h3>
            <a className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300' href={props.project.link} target='_blank'>
              <span>{props.project.title}</span>
            </a>
          </h3>
          <p className='mt-2 text-sm leading-normal'>
            {props.project.desc}
          </p>
          {/* <img alt='' className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1' src={props.project.img}/> */}
        </div>
      </div>
    </li>
  )
}

export default ProjectCard