import { motion } from 'framer-motion'
import React from 'react'
import { FaRegStar } from "react-icons/fa";

function Hobby() {
    
    
  return (
    <div  className=' relative w-full bg-[#e9e8e8] h-[50vh] sm:h-screen'>  
    <div className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full px-10 sm:px-20'>
            <h1 className=' font-bold text-2xl md:pb-10 pb-3 text-black'>Hobby</h1>  
            {/* for mobile  */}
            <div className=' main sm:hidden flex flex-col gap-2 pb-5'>
                <div className=' w-full flex items-center gap-2 '>
                    <div className=' w-full h-24 bg-[url("./Assets/Garden.jpg")] bg-cover bg-center overflow-hidden  rounded-xl '>
                        <div className=' w-full h-full bg-zinc-900 bg-opacity-70 relative'>
                            <div className=' flex gap-2 items-center absolute bottom-3 text-white px-3'>
                                <div className=' text-yellow-400 p-1 rounded-md border border-yellow-400'><FaRegStar className=' w-3 h-3'/></div>
                                <div className=' text-sm tracking-wide'>Gardening</div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full h-24 bg-[url("./Assets/Football.jpg")] bg-cover bg-center overflow-hidden rounded-xl '>
                        <div className=' w-full h-full bg-zinc-900 bg-opacity-70 relative'>
                            <div className=' flex gap-2 items-center absolute bottom-3 text-white px-3'>
                                <div className=' text-yellow-400 p-1 rounded-md border border-yellow-400'><FaRegStar className=' w-3 h-3'/></div>
                                <div className=' text-sm tracking-wide'>Gardening</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-full h-24 bg-[url("./Assets/Swiss.jpg")] bg-cover bg-center overflow-hidden rounded-xl'>
                    <div className=' w-full h-full bg-zinc-900 bg-opacity-70 relative'>
                        <div className=' flex gap-2 items-center absolute bottom-3 text-white px-3'>
                            <div className=' text-yellow-400 p-1 rounded-md border border-yellow-400'><FaRegStar className=' w-3 h-3'/></div>
                            <div className=' text-sm tracking-wide'>Travelling Around The World</div>
                        </div>
                    </div>
                </div>
            </div>
                
                {/* end  */}         
            <div className=' w-full sm:grid grid-cols-12 gap-6 sm:h-[50vh]'>
                {/* garden  */}
                <div className=' col-span-2 bg-green-400 rounded-2xl hidden sm:block bg-[url("./Assets/Garden.jpg")] bg-cover bg-center overflow-hidden'>
                    <div className=' w-full h-full bg-zinc-900 bg-opacity-70 relative'>
                        <div className=' flex gap-2 items-center absolute bottom-3 text-white px-3'>
                            <div className=' text-yellow-400 p-1 rounded-md border border-yellow-400'><FaRegStar/></div>
                            <div className=' font-medium text-xl tracking-wide'>Gardening</div>
                        </div>
                    </div>
                </div>
                {/* football  */}
                <div className=' col-span-3 bg-red-400 rounded-2xl hidden sm:block bg-[url("./Assets/Football.jpg")] bg-cover bg-center overflow-hidden'>
                    <div className=' w-full h-full bg-zinc-900 bg-opacity-70 relative'>
                        <div className=' flex gap-2 items-center absolute bottom-3 text-white px-3'>
                            <div className=' text-yellow-400 p-1 rounded-md border border-yellow-400'><FaRegStar/></div>
                            <div className=' font-medium text-xl tracking-wide'>Playing Football</div>
                        </div>
                    </div>
                </div>
                {/* travel */}
                <motion.div initial={{width:0}} animate={{width: "100%"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1.2, delay:1}} className=' col-span-7 bg-slate-500 rounded-2xl hidden sm:block bg-[url("./Assets/Swiss.jpg")] bg-cover bg-center overflow-hidden'>
                    <div className=' w-full h-full bg-zinc-900 bg-opacity-70 relative'>
                        <div className=' flex gap-2 items-center absolute bottom-3 right-0 text-white px-3'>
                            <div className=' font-medium text-xl tracking-wide'>Travelling Around The World</div>
                            <div className=' text-yellow-400 p-1 rounded-md border border-yellow-400'><FaRegStar/></div>
                        </div>
                    </div>
                </motion.div>
            </div>
    </div>
                  
    </div>
  )
}

export default Hobby