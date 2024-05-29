import React from 'react'
import { FaLongArrowAltDown } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import {motion} from 'framer-motion'

function Landing() {
    

    useGSAP(()=>{
        gsap.to(".arrow",{
            y:35,
            duration: 2,
            delay:1,
            repeat: Infinity
        })
    })

  return (
    
    <div data-scroll data-scroll-section data-scroll-speed="-.5" className=' w-full sm:h-screen bg-zinc-100 pt-1'>
        <div className='textstructure mt-44 px-10 sm:px-20'>
            {["I Create", "Stunning", "Websites & Design"].map((item, index)=>{
           return(
            <div className='masker '>
                <div className=" w-fit flex items-center gap-2">
                {index === 1 && (
                    <motion.div initial={{width:0}} animate={{width: "6.4vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration:1, delay:1}} className=' w-[6.4vw] h-[4.4vw] overflow-hidden bg-red-400 rounded-lg'></motion.div>
                )}
                <h1 key={index} className=' text-black uppercase text-[10vw] sm:text-[6.4vw] leading-8 sm:leading-[5.5vw] tracking-tighter font-semibold'>{item}</h1>
                </div>
            </div>)
            })}
            
        </div>
        <div className=' flex items-center justify-between px-10 sm:px-20 py-2 border-t border-zinc-300 mt-32'>
         <div className='flex items-center gap-1'>
           <p className='  font-bold'>	&#169;</p>
           <p className=' font-light text-[3vw] sm:text-[1vw]'>All Rights Reserved By Rumman Sheikh</p>
         </div>
         <div className=' flex items-center gap-2 border border-zinc-400 px-1 sm:px-2 py-[2px] sm:py-1 rounded-full'>
            <p className='text-[3vw] sm:text-sm font-normal leading-none whitespace-nowrap'>Scroll Down</p>
            <div className=' overflow-hidden sm:w-6 w-4 sm:h-6 h-4 rounded-full border border-zinc-400 flex items-center justify-center text-zinc-600'><FaLongArrowAltDown className='arrow -mt-8'/></div>
         </div>
        </div>
    </div>
  )
}

export default Landing