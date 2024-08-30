import { useState } from 'react'
// import ExpCard from './ExpCard'


const experiences = {
  'chi': {
    time: "Sept 2023 - Dec 2023",
    link: "https://cardeahealth.io/",
    position: "Data and Software Engineer",
    company: "Cardea Health Inc",
    description: "Collaborated with a cross-functional team to optimize the S3 Data Lake for SQL queries and ETL pipeline. Communicated findings from QA sessions with the medical team to the data modelling team to improve on NLP models.",
    tags: ["JavaScript", "TypeScript", "AWS", "Python", "Jupter Notebook"]
  },
  'road': {
    time: "Jan 2023 - Apr 2023",
    link: "https://www.roadpost.ca/",
    position: "AWS Developer",
    company: "Roadpost Inc",
    description: "Designed and presented proof-of-concept, showcasing AWS console feasibility. Engineered event-driven microservices syncing Mailchimp-DynamoDB. Streamlined deployments with AWS CDK. Implemented secure authentication with AWS Cognito and SSM for internal API calls.",
    tags: ["JavaScript", "TypeScript", "AWS", "MailChimp", "Event-Driven Architecture"]
  },
  'surf': {
    time: "Oct 2021 - Jul 2022",
    link: "https://app.joinsurf.com/",
    position: "Product Development Intern",
    company: "Surf",
    description: "Contributed to CI/CD with GitHub Actions, deploying services by branch. Enhanced modularity with factory design pattern, dynamically modifying queries and files for accurate S3 synchronization. Developed proof of concepts for URL creation.",
    tags: ["JavaScript", "TypeScript", "AWS", "GitHub Actions", "Python"]
  },
  'we': {
    time: "May 2021 - Aug 2021",
    link: "#",
    position: "SEO Consultant",
    company: "Waterloo WE Experience",
    description: "Conducted an SEO audit of a local business and remodelled the website to reflect on the client's needs and SEO best practices. Created a quote generator to streamline business inquiries",
    tags: ["Wordpress", "SEO", "Digitial Marketing"]
  }
}

const Experience = () => {
  const [selectedContent, setSelectedContent] = useState('chi');

  return (
    <div className="flex flex-col sm:p-16 p-12 gap-24 w-screen">
      <h1 className='text-2xl font-bold uppercase tracking-widest text-slate-200 md:text-left text-center'> PROFESSIONAL EXPERIENCE </h1>
      <div className='flex flex-col sm:flex-row sm:px-16 sm:gap-0 gap-8'>
        <div className="sm:w-1/3">
          <div className="flex flex-col text-slate-200">
            {Object.keys(experiences).map((key, id) => {
              return (
                <div 
                  key={id} 
                  className={`border-l-4 p-4 text-lg tracking-wide ${key === selectedContent ? 'border-emerald-400 text-emerald-400 shadow-sm': ' border-slate-700'}`}
                  onClick={() => setSelectedContent(key)}
                > 
                  {experiences[key].company} 
                </div>
              )
            })}
          </div>
        </div>
        <div className="md:w-2/3 sm:px-4 text-slate-200 text-xl flex flex-col justify-center">
          <div className='flex sm:flex-row flex-col sm:gap-2'>
            <h1 className='font-medium leading-snug'>
              {experiences[selectedContent].position}
            </h1>
            <h1>
              @ <span className='font-medium leading-snug text-emerald-500 text-base'>{experiences[selectedContent].company}</span>
            </h1>
          </div>
          <h1 className='font-light text-sm leading-snug'>
              {experiences[selectedContent].time}
            </h1>
          <p className='mt-4 text-sm leading-normal'>
            {experiences[selectedContent].description}
          </p>
          <ul className='mt-2 flex flex-wrap gap-2'>
            {experiences[selectedContent].tags.map((tag, id) => {
              return (
                <li className='mr-1.5 mt-2' key={id}>
                  <div className='flex items-center rounded-lg bg-emerald-600/50 px-3 py-1 text-xs font-medium leading-5 text-white'>
                    {tag}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience