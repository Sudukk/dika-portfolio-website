import React from 'react'

const coding_skills = [
    "Python",
    "Java",
    "C++",
    "C#",
]

const software_skills = [
    "After Effects",
    "Premiere Pro",
    "Photoshop",
    "Blender",
    "Figma",
    "Canva",
]


const Skills = () => {
  return (
    <>
    <div className='flex-col space-y-12'>
        <div>
            <h1 className='text-5xl font-bold text-center'>Skills</h1>
        </div>
        <div>
            <div>
                <h2 className='font-bold text-lg'>Coding</h2>
            </div>
            <div className='md:flex'>
                {coding_skills.map((item,idx) => {
                    return (
                        <p key={idx} className='justify-self-center bg-purple-500 m-1 p-2 px-5 rounded-lg text-white'>{item}</p>
                    )
                })}
            </div>
        </div>
        <div>
            <div>
                <h2 className='font-bold text-lg'>Software</h2>
            </div>
            <div className='md:flex'>
                {software_skills.map((item,idx) => {
                    return (
                        <p key={idx} className=' justify-self-center bg-purple-500 m-1 p-2 px-5 rounded-lg text-white'>{item}</p>
                    )
                })}
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Skills