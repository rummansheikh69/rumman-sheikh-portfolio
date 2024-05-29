import React from 'react'
import Card from './Card'

function Surprise() {
  return (
    <div className=' border-4 rounded-lg border-zinc-950 w-full sm:h-screen bg-yellow-300 px-2 lg:px-20 md:grid grid-cols-8 '>
        <div className=' col-span-4 lg:col-span-5 flex items-center justify-center mt-10'>
          <div>
            {["Just Hit", "That Let's Talk Button", "& Ready For The Surprise"].map((item, index)=>{
                return (
                    <h1 key={index} className=' text-center text-5xl md:text-4xl lg:text-6xl xl:text-7xl font-bold uppercase text-black drop-shadow-2xl'>{item}</h1>
                )
            })}
          </div>
        </div>
        <div className=' col-span-3'>
            <Card />
        </div>
        
    </div>
  )
}

export default Surprise