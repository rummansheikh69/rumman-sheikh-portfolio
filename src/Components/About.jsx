import React from 'react'
import { MdVerified } from "react-icons/md";
import brokenStucture from '../Assets/brokenStracture.png'
import organized from '../Assets/organized.png'
import { BsInfoCircle } from "react-icons/bs";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.05" className=' w-full py-6 sm:pt-20  text-black  bg-yellow-300 rounded-tr-2xl sm:rounded-tr-3xl rounded-tl-2xl sm:rounded-tl-3xl'>
      {/* About 01 */}
      <div>
          <div className='px-10 sm:px-20'>
            <p className=' font-medium text-[5.5vw] sm:text-[4vw] sm:leading-[4vw] '>Rumman Sheikh Is That Individual Person Who Can Complete Your Tasks <span className=' border-b-[1px] sm:border-b-[3px] border-zinc-700'>Related to Web</span>. </p>
          </div>
        <div className=' mt-6 sm:mt-20 border-t-[1px] border-zinc-700 py-2 sm:py-10'>
          <div className=' flex flex-col gap-6 md:grid md:grid-cols-7 xl:grid-cols-8 '>
          
          {/* Experiences */}
            <div className=' col-span-3 xl:col-span-4 px-2 sm:px-8 lg:px-20 '>
              <div className=' flex items-center gap-2'>
                <div className=' w-2 h-2 bg-red-700 rounded-full'></div>
                <p className=' text-lg font-bold'>Experiences</p>
              </div>
              <div className=' lg:w-fit mt-6 '>
                <div className="mockup-code  shadow-xl">
                  <pre data-prefix=">"><code>React JS</code></pre> 
                  <pre data-prefix=">"><code>Next JS With SSR</code></pre> 
                  <pre data-prefix=">"><code>Tailwind CSS</code></pre> 
                  <pre data-prefix=">"><code></code>Node JS</pre> 
                  <pre data-prefix=">"><code>Express JS</code></pre> 
                  <pre data-prefix=">"><code>Mongo DB</code></pre> 
                  <pre data-prefix=">"><code>Firebase</code></pre> 
                  <pre data-prefix=">"><code>Figma</code></pre> 
                  <pre data-prefix=">" className="text-warning"><code>Learning More...</code></pre> 
                  <pre data-prefix="$" className="text-success"><code>Complete Full Stack Web Developer</code></pre>
                </div>
              </div>
            </div>

            {/* About */}
            <div className='  col-span-2 sm:border-l border-zinc-700 px-3 sm:pl-4'>
              <div className=' flex items-center gap-2'>
                <div className=' w-2 h-2 bg-red-700 rounded-full'></div>
                <p className=' text-lg font-bold'>About</p>
              </div>
              <div className=' sm:w-[18vw] mt-4 '>
                <div className=' w-full'>
                  <p>Hi</p>
                  <p>I'm a passionate full stack web developer with expertise in both front-end and back-end technologies. I thrive on creating seamless and user-friendly web applications, utilizing my skills in HTML, CSS, JavaScript, and frameworks like React, Next js, Tailwind, Node.js, django. With a strong foundation in databases and server management, I enjoy solving complex problems and continuously learning new technologies to deliver high-quality, scalable solutions.</p>
                </div>
              
              </div>
            </div>

            {/* Education */}
            <div className=' px-3 lg:px-20'>
              <div className=' flex items-center gap-2'>
                <div className=' w-2 h-2 bg-red-700 rounded-full'></div>
                <p className=' text-lg font-bold'>Education</p>
              </div>
            {/* timeline  */}
              <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="timeline-end md:text-start mb-10">
                    <time className="font-mono italic">2021</time>
                    <div className="text-lg font-black">SSC</div>
                    Passed SSC Examination With GPA 5.00
                  </div>
                  <hr/>
                </li>
                
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="timeline-end md:text-start mb-10">
                    <time className="font-mono italic">2023</time>
                    <div className="text-lg font-black">HSC</div>
                    Passed HSC Examination With GPA 3.92
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* About 02 */}
      <div className=' w-full border-t-[1px] border-zinc-700 py-6 '>
        <div className=' sm:grid grid-cols-5 px-10 sm:px-20'>
          <div className=' col-span-2  sm:px-0 sm:pr-10  py-2'>
            <div className=' text-[8vw] sm:text-[2vw] font-semibold flex items-center gap-2'>
              <p>My Approach</p>
              <MdVerified className=' w-7 h-7'/>
            </div>
            <div className=' tracking-tight mt-4 flex flex-col gap-2'>
              <p>1- Optimized & scaleable web app</p>
              <p>2- Full SEO</p>
              <p>3- Pixel perfect frontend</p>
              <p>4- Responsive across all devices</p>
              <p>5- Fullfill every feature & requirements</p>
              <p>6- Clean code & use comment everywhere</p>
              <p>7- Give work update everyday to client</p>
              <p>8- Fix issue although the project was end</p>
              <p>9- Give advice to the client for better option.</p>
              <p>10- If there is project, any kind of e-com or something like that. I build a recommendation system to grow their sales and engage more user.</p>
            </div>
          </div>
          <div className=' col-span-3 pt-5 sm:pt-0'>
            <div className=' flex items-center justify-between mb-2'>
              <div className=' px-2 py-1'>Before</div>
              <div className=" text-[9px] sm:text-sm tracking-tighter sm:tracking-widest flex items-center gap-2">
                <p>Drag Left to Right to see After</p>
                <div className="tooltip " data-tip="This is a before & after stucture of one of my project">
                  <BsInfoCircle className=' w-4 h-4'/>
                </div>
              </div>
              <div className=' px-2  border bg-zinc-800 text-white rounded-full font-medium'>After</div>
            </div>
            {/* compare  */}
            <div className='compare'>
            <div className="diff aspect-[16/9] rounded-xl shadow-xl">
              <div className="diff-item-1">
                <img alt="rumman" src={brokenStucture} />
              </div>
            <div className="diff-item-2">
                <img alt="rumman" src={organized} />
            </div>
            <div className="diff-resizer"></div>
          </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About