import Socials from '../socials/Socials'
const Contact = () => {
  return (
    <div className="flex flex-col sm:p-16 p-12 mt-16 gap-2 w-screen items-center">
      <h1 className='text-2xl font-bold uppercase tracking-widest text-slate-200 md:text-left text-center'>         
        INTERESTED IN WORKING TOGETHER? 
      </h1>
      <p className='text-md font-light uppercase tracking-widest text-slate-200 md:text-left text-center'>         
        CONTACT ME AT ANY OF THE FOLLOWING: 
      </p>
      <Socials />
    </div>
  )
}

export default Contact