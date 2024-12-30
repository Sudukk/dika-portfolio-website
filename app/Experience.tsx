import React from 'react'

const exp_list = [
    ["2023","Atsanti Youth Camp","Documentation"],
    ["2022","asderassa","asddsfs"],
    ["2021","asdsasdaserha","assdvds"],
    ["2020","asasmutdsa","aszxvds"],
    
]

const Experience = () => {
  return (
    <>
    <div className='flex-col space-y-12'>
        <div>
            <h1 className='text-5xl font-bold text-center'>Experience</h1>
        </div> 
        <div className='justify-self-center md:justify-self-left'>
            {exp_list.map((item, idx) => {
                return (
                
                <div className='flex my-2 p-1 space-x-5'>
                    <div className='place-content-center'>
                        <h2 key={idx} className='font-bold text-2xl'>{item[0]}</h2>
                    </div>
                    
                    <div>
                        <a className='text-xl'>{item[1]}</a><br/>
                        <a>{item[2]}</a>
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