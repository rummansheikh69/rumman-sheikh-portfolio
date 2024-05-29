import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";


function Eyes() {
    

    const [rotate, setRotate] = useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let delX = mouseX - window.innerWidth/2;
            let delY = mouseY - window.innerHeight/2;

            let angel = Math.atan2(delY, delX) * (180/Math.PI);

            setRotate(angel-180)
        })
    })

  return (
    <div   className=' w-full py-10 sm:py-0 sm:h-screen flex items-center justify-center drop-shadow-2xl overflow-hidden '>
        <div data-scroll data-scroll-speed="-.4">
            <CardContainer  className="inter-var">
                <CardBody className="bg-[#e9e8e8] shadow-lg relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  lg:h-auto rounded-xl p-6 border  ">
                    <CardItem translateZ="50">
                        <div  className='w-[80vw] sm:w-[50vw] h-[40vh] sm:h-[70vh] bg-zinc-700 rounded-3xl text-white shadow-inner relative '>
                            <div className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center gap-2 sm:gap-10 justify-center'>
                                
                                <div className=' flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-200 rounded-full'>                  
                                    <div className=' w-[10vw] h-[10vw] bg-zinc-900 rounded-full relative drop-shadow-2xl'>
                                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className=' w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                            <div className=' w-[2.5vw] h-[2.5vw] bg-zinc-100 rounded-full'></div>
                                        </div>
                                    </div>                            
                                </div>
                                <div className=' flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-200 rounded-full'>       
                                            <div className=' w-[10vw] h-[10vw] bg-zinc-900 rounded-full relative drop-shadow-2xl'>
                                                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className=' w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                                    <div className=' w-[2.5vw] h-[2.5vw] bg-zinc-100 rounded-full'></div>
                                                </div>
                                            </div>                          
                                </div>
                                
                            </div>
                            <code className=' absolute bottom-4  w-full text-center tracking-wide text-[3vw] sm:textarea-md'>Just Look Around & Click The <Link to="/meeting" className=' font-bold text-zinc-400 underline'>"Let's Talk"</Link> Button For Immidiate Contact</code> 
                        </div>
                    </CardItem>       
                </CardBody>
            </CardContainer>
        </div>
    </div>
  )
}

export default Eyes