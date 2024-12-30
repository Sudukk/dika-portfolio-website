import React from 'react'

const language_skills = [
    ["Indonesian", "Native"],
    ["English", "Proficient"],
    ["Japanese", "Novice"],
]

const Language = () => {
  return (
    <div className='space-y-12'>
        <div>
            <h1 className='text-5xl font-bold text-center'>Language</h1>
        </div>

        <div>
            {language_skills.map((item,idx) => {
                return (
                    <div className='my-5'>
                        <h2 key={idx} className='text-lg font-bold'>{item[0]}</h2>
                        <a>{item[1]}</a>

                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Language