import React from 'react'


const courses = [
  {
    link: "https://cardeahealth.io/",
    title: "Lions Cage MMA",
    desc: "Built a mobile and desktop solution to ahahaha. Leveraged ",
    img: "/temp.jpeg"
  },
  {
    link: "",
    title: "",
    desc: "Implemented Lambda functions for S3 updates, reducing expenses by 30%. Developed SQL queries for reports, collaborated on QA. Configured Glue crawlers, enhanced Athena, and engineered Step Functions for clinical trial screening and NLP automation.",
    img: "/temp.jpeg"
  }
]

const Academics = () => {
  return (
    <section id='projects' className='mb-15 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200'> Projects </h2>
      </div>
      <div className='mx-4'>
        <ul className=''>
          {courses.map((course, id) => {
            return (
              <AcademicCard course={course} key={id} />
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Academics