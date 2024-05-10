import React from 'react'

const About = () => {
  return (
    <section id='about' className='mb-15 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
      {/* <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'> About </h2>
      </div> */}
      <h2 className='my-8 text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'> About </h2>
      <div>
        <p className='mb-4'>
          For as long as I can remember, I have always had a strong interest in creating something cool. As a result, I would spend my evenings as a child building legos and then later breaking apart old VCR units and broken PCs just to see how they work and then  fail to rebuild it.
        </p>
        <p className='mb-4'> 
          So it comes as no shock to those close to me that out of my many, MANY interests, I choose to attend the University of Waterloo for their Computer Science program where I ended up trading in my LEGO blocks for the opportunity to contribute and build some cool technology. 
        </p>
        <p className='mb-4'> 
          Outside of software development, you can usually find me hitting the pavement for a run, reading, walking my dog or catching a Leafs game. 
        </p>
      </div>
    </section>
  )
}

export default About