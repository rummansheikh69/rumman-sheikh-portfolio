import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { motion } from 'framer-motion'
import emailjs from'@emailjs/browser'
import { FaRegPaperPlane } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Room({seconds}) {
    const {roomId} = useParams()
    const form = useRef();
    const [send ,setSend] = useState(false)
    const [click ,setClick] = useState(false)
    const [countdown ,setCountdown] = useState(seconds)
    const timerId = useRef()

    useEffect(()=>{
        timerId.current = setInterval(() => {
            setCountdown(prev => prev -1)
        }, 1000);
        return () => clearInterval(timerId.current)
    },[])
    
    useEffect(()=> {
        if(countdown <= 0){
            clearInterval(timerId.current)
        }
    },[countdown])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_eez44fo', 'template_57l28g4', form.current, {
            publicKey: 'rjkhKT_1lzFF9RSda',
          })
          .then(() => setSend(true));
      };
    

    const myMeeting = async(element) =>{
        const appID = 2098237027;
        const serverSecret= "e1b50fbfc55933e6e31ece3abee81f34";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Your name")
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom(
            {
                container: element,
                sharedLinks:[
                    {
                        name: "Scroll & Send The Link",
                        url: `http://portfolio-para-rumman.vercel.app/room/${roomId}`
                    }
                ],
                scenario:{
                    mode: ZegoUIKitPrebuilt.OneONoneCall
                },
                showScreenSharingButton: true,
            }
        )
    }
  return (
    <div className='bg-zinc-800 text-white'>
        <div className='min-h-[80vh] w-full'>
            {!send? (
                <motion.div initial={{opacity:0, y: -40}} animate={{opacity: 1, y: 0}} transition={{ease: [0.76, 0, 0.24, 1], duration:0.6, delay:0.7}} className=' w-full flex items-center justify-center pt-1 pb-5  text-[6vw] font-medium text-blue-300'>Scroll Down & Send The Link To Me</motion.div>
            ):(
                null
            )}
            <motion.div initial={{opacity:0, y: 40}} animate={{opacity: 1, y: 0}} transition={{ease: [0.76, 0, 0.24, 1], duration:0.6, delay:0.7}} className='h-[90vh] w-full pt-5' ref={myMeeting}/>
        </div>
        <div className=' w-full flex items-center justify-center h-[30vh] mt-10'>

            {!send? (
            <div className=' w-[25vw] h-[20vh] p-5 border border-zinc-200 rounded-md'>
                <form ref={form} onSubmit={sendEmail}>
                    <h1 className=' mb-3 text-[1.5vw]'>Paste The Link Here</h1>
                    <div className=' flex items-center gap-3'>
                        <input required name="message" placeholder="Paste here" className="input bg-transparent border border-zinc-200 focus:border-zinc-400 transition w-full max-w-xs" />
                        <button type='submit' className=' py-3.5 rounded-md px-3 hover:bg-zinc-700 transition border border-zinc-200' onClick={()=> setClick(true)} >{!click? (<FaRegPaperPlane />):(<motion.div animate={{ rotate: 360 }} transition={{duration:1.5, repeat:Infinity}}><AiOutlineLoading3Quarters/></motion.div>)}</button>
                    </div>
                </form>
            </div>
            ):(
                <div>
                    <h1 className=' text-[3vw]'>Thank You For The Meeting "💙"</h1>
                    <h1 className=' text-[1.5vw]'>I'll be in the meeting within 5 munites. Till then keep your patient.</h1>
                    <h1 className=' text-[1.5vw] text-center'>Click That Join Button.</h1>
                    <h1 className=' pt-2 text-2xl font-medium tracking-widest text-center'>Count Down: <span className=' text-blue-500'>{countdown}</span> sec</h1>
                </div>
            )}
        </div>
    </div>
  )
}

export default Room