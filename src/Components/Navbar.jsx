import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  useGSAP(()=>{
    gsap.from(".dot",{
      x:-86,
      duration:1,
      delay:1
    })
  })
  
  return (
    <div className=' w-full px-10 sm:px-20 py-5 flex items-center justify-between fixed z-[999]'>
      <div >
        <Link to='/' className=' uppercase text-2xl font-bold tracking-wider text-zinc-500'><code>RUMMAN</code></Link>
      </div>
      <Link to='/meeting'>
        <button className=' relative font-light border border-dashed  border-zinc-400 px-3 sm:px-5 sm:py-1 rounded-full hover:bg-zinc-300 '>
          <p className=''>Let's talk</p>
          <div className='dot w-2 h-2 rounded-full bg-green-500 absolute -top-0.5 right-0 '></div>
        </button>
      </Link>
    </div>
  )
}

export default Navbar