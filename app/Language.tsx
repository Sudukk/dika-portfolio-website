import React from 'react'

const language_skills = [
    ["Indonesian", "Native"],
    ["English", "Proficient"],
    ["Japanese", "Novice"],
]

const Language = () => {
  return (
    <div className='space-y-6 md:mb-12 intersect:motion-preset-fade md:mt-0 mt-40 md:px-5'>
        <div>
            <h1 className='text-4xl font-bold text-center'>Language</h1>
        </div>
        <hr className="w-1/2 h-0.5 mx-auto rounded-lg bg-[#ffffff21] border-0"></hr> 
        <div className='justify-self-center xl:justify-self-start'>
            {language_skills.map((item,idx) => {
                return (
                    <div key={idx} className='mb-3'>
                        <h2 className='text-lg'>{item[0]}</h2>
                        <a className='text-xs text-[#737373]'>{item[1]}</a>

                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Language