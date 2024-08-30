import { ArrowRight } from '@mui/icons-material';
import { useState } from 'react'
// import ExpCard from './ExpCard'


const experiences = {
  'chi': {
    time: "May 2024 - Aug 2024, Sept 2023 - Dec 2023",
    link: "https://cardeahealth.io/",
    position: "Data and Software Engineer",
    company: "Cardea Health Inc",
    description: [
      "Developed an API layer using AWS CDK to automate infrastructure deployment and reduce manual time by 30%",
      "Implement an microservice using AWS services (Lambda, Athena, SQS) to determine patient eligibility for trials",
      "Created wrappers and internal tools to automate repetitive and labor-extensive tasks, reducing total time spent on trials by 40%",
      "Applied OOP principles and the Decorator design pattern to develop a flexible and extensible system to build and process clinical trials, enabling easy integration of new trial criteria with minimal modifications to the existing framework",
      "Developed clinical trial reports using AWS Athena, SQL and MedSpaCy models to extract and present relevant data",
      "Collaborated with a cross-disciplinary team on QA sessions to validate clinical reports and determine shortcomings in NER results",
      "Updated pattern matching rules and expanding the context windows, resulting in a 10% increase in the model’s accuracy ",
      "Configured crawlers in AWS Glue and restructuring of Athena databases to streamline data ingestions and transformations",
      "Implemented internal tools to provide flexibility to selectively refresh sections of data lake, reducing operational costs by 10%",
      "Integrated an AWS Step Function module using MongoDB, Athena and Lambda to automate patient eligibility screening",
      "Integrated and containerized a Jupyter Notebook script within a Step Function using Docker to automate false positive checks",

    ],
    tags: ["JavaScript", "TypeScript", "AWS", "Python", "Jupter Notebook"]
  },
  'road': {
    time: "Jan 2023 - Apr 2023",
    link: "https://www.roadpost.ca/",
    position: "AWS Developer",
    company: "Roadpost Inc",
    description: [
      "Developed microservices within an event-driven architecture using CDK in TypeScript to handle thousands of events", 
      "Built a MailChimp Integration using AWS services (Lambda, DynamoDB, SQS, CloudWatch) to consolidate customer data", 
      "Coordinated requirements with stakeholders to determine the scope of projects and ensure stakeholder satisfaction",
      "Designed and presented a proof-of-concept of projects to demonstrate feasibility and value of new features to senior developers", 
      "Developed comprehensive tests and CloudWatch alerts for efficient events consumption, ensuring high performance and reliability",
      "Designed the company-wide API authentication system using user pools and parameters stores via AWS Cognito and SSM",
    ],
    tags: ["JavaScript", "TypeScript", "AWS", "MailChimp", "Event-Driven Architecture"]
  },
  'surf': {
    time: "Oct 2021 - Jul 2022",
    link: "https://app.joinsurf.com/",
    position: "Product Development Intern",
    company: "Surf",
    description: [
      "Collaborated with a colleague to refactor an Instagram Scraper to reduce repetitive code by 33% and improve maintainability",
      "Designed and built a GitHub Action to automate deployment of microservices to different environments to reduce manual work",
      "Developed an automated data consolidation tool using AWS Services and boto3 to consolidate data between different databases",
      "Conducted extensive research on URL creation for industry-leading search engines and media platforms to build proof-of-concepts for senior management to serve as a roadmap for the future data analytics product",
    ],
    tags: ["JavaScript", "TypeScript", "AWS", "GitHub Actions", "Python"]
  },
  'we': {
    time: "May 2021 - Aug 2021",
    link: "#",
    position: "SEO Consultant",
    company: "Waterloo WE Experience",
    description: [
      "Conducted an SEO audit of a local business and remodelled the website to reflect on the client's needs and SEO best practices", 
      "Created a quote generator to streamline business inquiries",
    ],
    tags: ["Wordpress", "SEO", "Digitial Marketing"]
  }
}

const Experience = () => {
  const [selectedContent, setSelectedContent] = useState('chi');

  return (
    <div id='experience' className="flex flex-col sm:p-16 p-12 gap-24 w-screen">
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
              @ <span className='font-medium leading-snug text-emerald-500 text-base'>
                <a href={experiences[selectedContent].link}>
                  {experiences[selectedContent].company}
                </a>
                </span>
            </h1>
          </div>
          <h1 className='font-light text-sm leading-snug'>
              {experiences[selectedContent].time}
            </h1>
          <div className='mt-4 text-sm leading-normal'>
            {experiences[selectedContent].description.map((point, index) => {
              return (
                <div key={index} className='flex gap-2'>
                  <ArrowRight className='text-emerald-400' />
                  <p>
                    {point} <br></br>
                  </p>
                </div>
              )
            })}
          </div>
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