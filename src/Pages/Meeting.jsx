import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './meeting.css'
import { BsInfoCircle } from "react-icons/bs";
import { motion } from 'framer-motion';


function Meeting() {

  const [value, setValue] = useState()
  const navigate = useNavigate()
  const handleJoinRoom = useCallback(()=>{
    navigate(`/room/${value}`)
  },[navigate, value])

  return (
    <div className=' flex flex-col gap-16 items-center justify-center h-[100vh] bg-zinc-800 text-white'>
      <motion.h1 initial={{opacity:0, y: -40}} animate={{opacity: 1, y: 0}} transition={{ease: [0.76, 0, 0.24, 1], duration:0.6, delay:0.7}} className=' text-[5vw] text-center drop-shadow-xl font-medium text-blue-300'>Let's Have a Meeting In 5 Minutes</motion.h1>
      <motion.div initial={{opacity:0, y: 40}} animate={{opacity: 1, y: 0}} transition={{ease: [0.76, 0, 0.24, 1], duration:0.6, delay:0.7}} className='box'>
        <span className=' flex flex-col items-center justify-center gap-10'>
          <div className="tooltip" data-tip="You can name this meeting or just click the next button. After clicking the next button if there is nothing appare then give a reload.">
            <button className=""><BsInfoCircle className=' w-8 h-8 opacity-75 hover:opacity-100 transition'/></button>
          </div>
          <div className=' flex items-center gap-4'>
            <input value={value} onChange={e => setValue(e.target.value.trim())} type="text" placeholder='Enter meeting name' className="input input-bordered w-64 max-w-xs bg-zinc-800 border border-zinc-400 transition  focus:border focus:border-zinc-500 tracking-wide"/>
            <button onClick={handleJoinRoom} className=' border border-zinc-400 px-3 py-2.5 rounded-md bg-blue-700'>Next</button>
          </div>
        </span>
      </motion.div>
    </div>
  )
}

export default Meeting