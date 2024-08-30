const projects = [
  {
    title: "Lions Cage MMA",
    desc: "Collaborated with a colleague on a mobile and desktop solution for a local MMA gym to aid management to streamline the registration process, monitor payments and attendance while notifying members of upcoming payments due dates and gym notices",
    img: "/background1.jpg",
    skills: ['React', 'Electron']
  },
  {
    title: "Theia",
    desc: "Created a full-stack application that leverages various prediction models for NBA statistics such as points, rebounds and assists to suggest players to trade/add/drop for the 2023-2024 NBA fantasy season ",
    img: "/background1.jpg",
    skills: ['Jupyter Notebook']
  },
  {
    title: "House Price Prediction Model",
    desc: "Engineered features and sanitized an existing dataset to train a ridge regression model using kfold and random search for cross-validation and hyperparameter tuning to predict house prices with an MAPE of 8%",
    img: "/background1.jpg",
    skills: ['Jupyter Notebook']
  },

]

const Projects = () => {
  return (
    <div className="flex flex-col sm:p-16 p-12 gap-24 w-screen">
      <h1 className='text-2xl font-bold uppercase tracking-widest text-slate-200 md:text-left text-center'> PROJECTS </h1>
      <div className='flex flex-col gap-2'>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            } space-y-4 md:space-y-0 md:space-x-8`}
          >
            <div className="w-full md:w-1/2">
              <img src={project.img} alt={project.title} className="w-full h-auto" />
            </div>
            <div className="w-full md:w-1/2 p-8 text-white flex flex-col gap-2 justify-center">
              <h5 className='font-light text-md text-emerald-400'>Featured Project</h5>
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <div>
                <p className=' text-white'>{project.desc}</p>
              </div>
              <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
                {project.skills.map((skill, skillIndex) => (
                  <li className='mr-1.5 mt-2' key={skillIndex}>
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