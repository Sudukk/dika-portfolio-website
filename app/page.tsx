import React from 'react'
import Navbar from './Navbar'
import Introduction from './Introduction'
import Footer from './Footer'
import Experience from './Experience'
import Skills from './Skills'
import Language from './Language'
import PersonalProjects from './PersonalProjects'
import WorkExperience from './WorkExperience'



const Homepage = () => {
  return (
    <>
    <Navbar/>
    <div id="home" className='px-8 my-24'>
      
      <Introduction/>
      <hr className="w-full h-0.5 mx-auto mt-8 mb-8 bg-neutral-200 border-0"></hr>
      <div id="experience" className='md:flex justify-center m-2 md:space-x-48'>
        <Experience/>
        <Skills/>
        <Language/>
      </div>
      <hr id="personal_projects" className="w-full h-0.5 mx-auto mt-8 mb-8 bg-neutral-200 border-0"></hr>
      <PersonalProjects/>
      <hr id="work_experience" className="w-full h-0.5 mx-auto mt-8 mb-8 bg-neutral-200 border-0"></hr>
      <WorkExperience/>
      <Footer/>
    </div>
    
    </>
  )
}

export default Homepage