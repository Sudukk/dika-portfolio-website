import React from 'react'

const exp_list = [
    ["2023","Atsanti Youth Camp","Documentation"],
    ["2023","Temu Kolese","Documentation & Video Editor"],
    ["2022","Tigrius Patronus","Documentation"],
    ["2022","Sembagi Arutala","Documentation"],
    
]

const Experience = () => {
  return (
    <>
    <div className='flex-col space-y-6 md:mb-12 intersect:motion-preset-fade md:px-5'>
        <div>
            <h1 className='text-4xl font-bold text-center'>Experience</h1>
        </div>
        <hr className="w-1/2 h-0.5 mx-auto rounded-lg bg-[#ffffff21] border-0"></hr> 
        <div className='justify-self-center md:justify-self-left'>
            {exp_list.map((item, idx) => {
                return (
                
                <div key={idx} className='flex space-x-5'>
                    <div className='place-content-center'>
                        <h2 className='font-bold text-2xl'>{item[0]}</h2>
                    </div>
                    
                    <div>
                        <h2 className='text-lg'>{item[1]}</h2>
                        <p className='text-[#737373] mb-3 text-xs'>{item[2]}</p>
                    </div>                    
                </div>                
            )
            })}
        </div>
    </div>
    
    </>
  )
}

export default Experience