import '../../App.css'
import React from 'react'

const ExpCard = (props) => {
  return (
    <li className='mb-12'>
      <div className='relative pb-1 grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:bg-slate-800/50 
      lg:hover:drop-shadow-lg lg:hover:shadow-[inset_0_1px_0_0_rgba(148, 163, 184, 0.1) lg:hover:rounded-md lg:p-4'
      >
        <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>
          {props.exp.time}
        </header>
        <div className='z-10 sm:col-span-6'>
          <h3 className='font-medium leading-snug text-tertiary'>
            <div>
              <a className='inline-flex items-baseline font-medium leading-tight text-white hover:text-emerald-500 text-base' href={props.exp.link} target='_blank' rel='noreferrer noopener'>
                <span>
                  <p> {props.exp.position} · </p>
                  <p> {props.exp.company} </p>
                </span>
              </a>
            </div>
          </h3>
          <p className='mt-2 text-sm leading-normal'>
            {props.exp.description}
          </p>
          <ul className='mt-2 flex flex-wrap gap-2'>
            {props.exp.tags.map((tag, id) => {
              return (
                <li className='mr-1.5 mt-2' key={id}>
                  <div className='flex items-center rounded-full bg-emerald-600/50 px-3 py-1 text-xs font-medium leading-5 text-white'>
                    {tag}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default ExpCard