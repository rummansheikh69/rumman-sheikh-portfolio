import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebook } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaRegPaperPlane } from "react-icons/fa";
import { motion } from 'framer-motion';
import { AiOutlineLoading3Quarters } from "react-icons/ai";




const Contact = () => {

    const form = useRef();
    const [send ,setSend] = useState(false)
    const [click ,setClick] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_eez44fo', 'template_15vsvtl', form.current, {
            publicKey: 'rjkhKT_1lzFF9RSda',
          })
          .then(
            () => setSend(true)
          );
      };

  return (
    <div className=' w-full py-10 md:px-20 px-5'>
        <div className=' w-full md:grid grid-cols-8 gap-5'>
            <div className=' flex flex-col col-span-3 py-5 w-full'>
                <h1 className=' font-bold text-2xl pb-5 text-black'>Contact</h1>  
                <div className=' flex items-center gap-3 mb-3'><FaFacebook className=' w-6 h-6'/><a href='https://www.facebook.com/rummansheikh.66'  className=' tracking-wider font-medium text-zinc-500'>/rummansheikh.66</a></div>
                <div className=' flex items-center gap-3 mb-3'><FaSquareWhatsapp className=' w-6 h-6'/><a className=' tracking-wider font-medium text-zinc-500'>+8801401458564</a></div>
                <div className=' flex items-center gap-3 mb-3'><IoIosMail className=' w-6 h-6'/><a href="mailto:rummanujjaman2019@gmail.com" className=' tracking-wider font-medium text-zinc-500'>rummanujjaman2019@gmail.com</a></div>
            </div>


            <div className=' col-span-5 w-full py-5'>
                <div className="mockup-browser border border-zinc-300">
                    <div className="mockup-browser-toolbar">
                        <div className="input border border-base-300">https://rumman-sheikh.com</div>
                    </div>
                    <div className="flex justify-center px-4 py-5 border-t border-base-300">
                    <div className=' w-full'>
                        <div>
                            <h1 className=' font-bold text-2xl text-black'>Invite</h1>  
                            <p>Send this form. I'll reach you.</p>
                        </div>
                        <div className=' mt-3'>
                            {!send? (
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className=' grid grid-cols-6 w-full gap-4 mb-3'>
                                        <div className='col-span-2'>
                                            <div className=' flex flex-col '>
                                                <label className=' text-[14px]'>Name</label>
                                                <input type="text" name="from_name" className='input input-bordered' placeholder='Your Name'/>
                                            </div>
                                        </div>
                                        <div className=' col-span-4'>
                                            <div className=' flex flex-col '>
                                                <label className=' text-[14px]'>Email</label>
                                                <input type="email" name="from_email" className='input input-bordered' placeholder='Your E-mail'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' flex flex-col '>                          
                                        <label className=' text-[14px]'>Message</label>
                                        <textarea name="message" className="textarea textarea-bordered h-32" placeholder='Your Message' />
                                    </div>
                                    <div className=' w-full pt-5'>                              
                                        <button onClick={()=> setClick(true)} type="submit" className=' float-right px-10 rounded-lg py-4 transition border border-zinc-100 bg-zinc-700 hover:bg-zinc-600 text-white'>{!click? (<FaRegPaperPlane />):(<motion.div animate={{ rotate: 360 }} transition={{duration:1.5, repeat:Infinity}}><AiOutlineLoading3Quarters/></motion.div>)}</button>
                                    </div>                          
                                </form>
                            ):(
                                <div className=' w-full h-32 flex items-center justify-center'>
                                    <div>
                                        <h1 className=' text-[3vw] font-bold text-teal-800'>Thanks For The Invitation "💙"</h1>
                                        <p className=' text-center tracking-wide text-[13.5px]'>I'll reply you shortly</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>             
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact