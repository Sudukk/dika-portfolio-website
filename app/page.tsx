import React from 'react'
import Navbar from './Navbar'
import Introduction from './Introduction'
import Footer from './Footer'
import Experience from './Experience'
import Skills from './Skills'
import Language from './Language'
import PersonalProjects from './PersonalProjects'
import WorkExperience from './WorkExperience'
import ObserverProvider from './ObserverProvide'
import Achievements from './Achievements'



const Homepage = () => {
  return (
    <>
    <Navbar/>
    <ObserverProvider>
      <div id="home" className='my-36 mx-12 md:mx-40'>
        
        <Introduction/>
        <hr id="about_me" className="w-4/5 h-0.5 mx-auto mt-40 mb-24 rounded-lg bg-[#ffffff21] border-0"></hr>
        <h1 className='text-5xl font-bold text-center mb-24'>About Me</h1>
        <div className='md:flex justify-center m-5'>
          
          <Experience/>
          <Skills/>
          <Language/>
        </div>
        <hr id="achievements" className="w-4/5 h-0.5 mx-auto mt-40 mb-12 rounded-lg bg-[#ffffff21] border-0"></hr>
        <Achievements/>
        <hr id="personal_projects" className="w-4/5 h-0.5 mx-auto mt-40 mb-12 rounded-lg bg-[#ffffff21] border-0"></hr>
        <PersonalProjects/>
        <hr id="work_experience" className="w-4/5 h-0.5 mx-auto mt-40 mb-12 rounded-lg bg-[#ffffff21] border-0"></hr>
        <WorkExperience/>
        <Footer/>
      </div>
    </ObserverProvider>
    
    
    </>
  )
}

export default Homepage