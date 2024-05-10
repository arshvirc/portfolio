import React from 'react'
import ProjectCard from './ProjectCard'


const projects = [
  {
    title: "Lions Cage MMA",
    desc: "Collaborated with a colleague on a mobile and desktop solution for a local MMA gym to aid management to streamline the registration process, monitor payments and attendance while notifying members of upcoming payments due dates and gym notices",
    img: "/temp.jpeg"
  },
  {
    title: "Theia",
    desc: "Created a full-stack application that leverages various prediction models for NBA statistics such as points, rebounds and assists to suggest players to trade/add/drop for the 2023-2024 NBA fantasy season ",
    img: "/temp.jpeg"
  },
  {
    title: "House Price Prediction Model",
    desc: "Engineered features and sanitized an existing dataset to train a ridge regression model using kfold and random search for cross-validation and hyperparameter tuning to predict house prices with an MAPE of 8%",
    img: "/temp.jpeg"
  },

]

const Projects = () => {
  return (
    <section id='projects' className='mb-15 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
      {/* <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200'> Projects </h2>
      </div> */}
      <h2 className='my-8 text-sm font-bold uppercase tracking-widest text-slate-200'> Projects </h2>
      <div className='mx-4'>
        <ul className=''>
          {projects.map((project, id) => {
            return (
              <ProjectCard project={project} key={id} />
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Projects