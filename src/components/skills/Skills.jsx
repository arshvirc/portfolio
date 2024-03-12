import React from 'react'

const Skills = () => {
  return (
    <div className='flex flex-col p-4 gap-4 text-md'>
      <div className='flex flex-col'>
        <h6 className='font-semibold'>
          Languages:
        </h6>
        <p className='text-wrap'>
          JavaScript/TypeScript, Python, C/C++, Bash, SQL, GraphQL, Kotlin, HTML5, CSS3
        </p>
      </div>
      <div className='flex flex-col'>
        <h6 className='font-semibold'>
          Frameworks/Libraries/Tools:
        </h6>
        <p className=''>
          PyTorch, Pandas, TensorFlow, NumPy, Flask, Express, React, Redux, Node, TailwindCSS, Matplotlib, AWS, Git, PostgreSQL, GitHub, Postman, Jira, Vite, MongoDB, Jupyter Notebook
        </p>
      </div>
    </div>
  )

}

export default Skills