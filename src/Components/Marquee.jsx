import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {

    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className=' w-full py-6 sm:py-20 bg-zinc-700 overflow-hidden rounded-tr-2xl sm:rounded-tr-3xl rounded-tl-2xl sm:rounded-tl-3xl'>
        <div className='text uppercase border-t-2 border-b-2 border-zinc-200 flex items-center whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 6 }} className='text-5xl sm:text-[17vw] font-bold text-zinc-200 leading-none pr-4 sm:pr-10' >I'm Rumman Sheikh</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 6 }} className='text-5xl sm:text-[17vw] font-bold text-zinc-200 leading-none'>I'm Rumman Sheikh</motion.h1>
        </div>
    </div>
  )
}

export default Marquee