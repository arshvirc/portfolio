/* eslint-disable no-multi-str */
import React from 'react'

const experiences = [
  {
    id: 1,
    span: 'SEPT - DEC 2023',
    company: 'Cardea Health',
    title: 'Data and Software Engineer',
    desc: 'Coming Out Soon',
    tags: ['AWS', 'AWS SDK/CDK', 'SQL', 'MongoDB', 'JavaScript', 'Python', 'JupterNotebook']
  },
  {
    id: 2,
    span: 'JAN - APR 2023',
    company: 'Roadpost Inc',
    title: 'AWS Developer',
    desc: 'Coming Out Soon',
    tags: ['AWS', 'TypeScript', 'Mailchimp API']
  },
  {
    id: 3,
    span: 'OCT 2021 - JULY 2022',
    company: 'Surf',
    title: 'Product Intern',
    desc: 'Coming Out Soon',
    tags: ['GitHub Actions', 'JIRA', 'Python']
  },
  {
    id: 4,
    span: 'MAY 2021 - AUG 2021',
    company: 'WE Accelerate',
    title: 'SEO Consultant',
    desc: 'Coming Out Soon',
    tags: ['AWS', 'TypeScript', 'Mailchimp API']
  }
]

const Experience = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col items-center gap-8'>
            {experiences.map((exp, id) => {
                return (
                    <div key={id} className='container mx-auto w-full bg-slate-200'>
                       <div className='flex flex-row justify-center gap-8'>
                          <div className='w-1/2'>
                            {exp.span}
                          </div>
                          <div className='w-1/2 flex flex-col'>
                            <h1>{exp.title}</h1>
                            <p>{exp.company}</p>
                            <p>{exp.desc}</p>
                            {exp.tags.map((tag, id)=> {
                              return tag
                            })}
                          </div>
                       </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Experience