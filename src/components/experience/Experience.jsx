import React from 'react'
import ExpCard from './ExpCard'


const experiences = [
  {
    time: "Sept 2023 - Dec 2023",
    link: "https://cardeahealth.io/",
    position: "Data and Software Engineer",
    company: "Cardea Health Inc",
    description: "Collaborated with a cross-functional team to optimize the S3 Data Lake for SQL queries and ETL pipeline. Communicated findings from QA sessions with the medical team to the data modelling team to improve on NLP models.",
    tags: ["JavaScript", "TypeScript", "AWS", "Python", "Jupter Notebook"]
  },
  {
    time: "Jan 2023 - Apr 2023",
    link: "https://www.roadpost.ca/",
    position: "AWS Developer",
    company: "Roadpost Inc",
    description: "Designed and presented proof-of-concept, showcasing AWS console feasibility. Engineered event-driven microservices syncing Mailchimp-DynamoDB. Streamlined deployments with AWS CDK. Implemented secure authentication with AWS Cognito and SSM for internal API calls.",
    tags: ["JavaScript", "TypeScript", "AWS", "MailChimp", "Event-Driven Architecture"]
  },
  {
    time: "Oct 2021 - Jul 2022",
    link: "https://app.joinsurf.com/",
    position: "Product Development Intern",
    company: "Surf",
    description: "Contributed to CI/CD with GitHub Actions, deploying services by branch. Enhanced modularity with factory design pattern, dynamically modifying queries and files for accurate S3 synchronization. Developed proof of concepts for URL creation.",
    tags: ["JavaScript", "TypeScript", "AWS", "GitHub Actions", "Python"]
  },
  {
    time: "May 2021 - Aug 2021",
    link: "#",
    position: "SEO Consultant",
    company: "Waterloo WE Experience",
    description: "Conducted an SEO audit of a local business and remodelled the website to reflect on the client's needs and SEO best practices. Created a quote generator to streamline business inquiries",
    tags: ["Wordpress", "SEO", "Digitial Marketing"]
  }
]

const Experience = () => {
  return (
    <section id='experience' className='mb-15 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
      {/* <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200'> Experience </h2>
      </div> */}
      <h2 className='my-8 text-sm font-bold uppercase tracking-widest text-slate-200'> Experience </h2>
      <div className='mx-4'>
        <ol className=''>
          {experiences.map((exp, id) => {
            return (
              <ExpCard exp={exp} key={id} />
            )
          })}
        </ol>
        <div className='mt-12'>
          <a className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base' href='/resume.pdf' target='_blank'>
            <span>
              View Full Resume
            </span>

          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience