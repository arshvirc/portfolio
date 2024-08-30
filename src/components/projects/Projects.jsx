import { LinkSharp } from '@mui/icons-material';

const projects = [
  // {
  //   title: 'Lions Cage MMA',
  //   type: 'Personal Project',
  //   desc: 'Built a mobile and desktop application for an MMA gym to streamline registration, payments, attendance track and customer notifications, resulting in a 35% increase in operational efficiency and improved customer engagement',
  //   img: '/background1.jpg',
  //   skills: ['React Native', 'Electron', 'TypeScript', 'Firebase']
  // },
  {
    title: 'Mercury',
    type: 'Personal Project',
    link: 'https://watstreet.netlify.app/',
    desc: 'Built a user-based web application that displays NBA sports data along with stat predictions and milestone predictions. Developed several classification and prediction models using Scikit-Learn with a success accuracy of 85% for the 23-24 season',
    img: '/assets/images/mercury.png',
    skills: ['React', 'Python', 'Flask', 'Scikit-learn']
  },
  {
    title: 'Wat Street Backend Team',
    type: 'Design Team',
    link: 'https://watstreet.netlify.app/',
    desc: 'Built an internal tool to allow members to access and use PC to train models on a queue with live updates on the model’s performance and their position within the queue',
    img: '/assets/images/watstreet.png',
    skills: ['Python', 'Firebase', 'Flask', 'SocketIO']
  },

]

const Projects = () => {
  return (
    <div className='flex flex-col sm:p-16 p-12 gap-24 w-screen'>
      <h1 className='text-2xl font-bold uppercase tracking-widest text-slate-200 md:text-left text-center'> PROJECTS </h1>
      <div className='flex flex-col gap-2'>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-8 flex flex-col md:flex-row items-center justify-center ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            } space-y-4 md:space-y-0 md:space-x-8`}
          >
            <div className='w-full md:w-2/5'>
              <img src={project.img} alt={project.title} className='w-full h-auto rounded-lg' />
            </div>
            <div className='w-full md:w-3/5 text-white flex flex-col gap-2 justify-center'>
              <h5 className='font-light text-md text-emerald-400 uppercase'>{project.type}</h5>
              <h2 className='text-2xl font-semibold mb-2 flex gap-2'>{project.title}
              {project.link && 
                <a href={project.link} className='text-emerald-600'>
                  <LinkSharp />
                </a>
              }
              </h2>
              <div>
                <p className=' text-white'>{project.desc}</p>
              </div>
              <ul className='flex flex-wrap gap-2 justify-center md:justify-start'>
                {project.skills.map((skill, skillIndex) => (
                  <li className='mt-2' key={skillIndex}>
                  <div className='flex items-center rounded-full bg-emerald-600/50 px-3 py-1 text-xs font-medium leading-5 text-white'>
                    {skill}
                  </div>
                </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects