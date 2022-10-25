import React, { createRef, useRef } from 'react'
import Typed from 'react-typed';
import { FiChevronDown, FiChevronRight  } from "react-icons/fi";
import ProjectsIntroduction from './ProjectsIntroduction';



const Hero = () => {

const ref = createRef()

const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <section id='hero' className='dark:bg-[#0D0D0D]'>
      <div className='container mx-auto flex flex-col items-center py-48  dark:text-white'>
         <p className='text-lg md:text-xl'>HELLO, NICE TO MEET YOU</p>
        <h1 className='font-[800] mt-6 text-[32px] md:text-7xl  text-deepBlack dark:text-white'>I am <span><Typed strings={['Victor', 'Creative']} typeSpeed={120} backSpeed={140} loop/></span></h1>
       
        <p className='font-light sm:w-[85%] md:w-[45%] text-center text-[22.8px] mt-3 md:text-2xl leading-9'>A product designer based in Abuja, Nigeria.
          Currently, I am designing engaging experiences for users in healthtech. Previously, I have worked as a product designer in the proptech and fintech industry.</p>
          <button onClick={handleClick} className='hidden md:flex text-white dark:text-black mt-16 items-center text-lg bg-black dark:bg-[rgb(242,242,247)] px-8 py-4 space-x-2 rounded-[3px]'>
            <p> See My Projects</p> <FiChevronDown/></button>
            <button onClick={handleClick}  className='md:hidden text-white dark:bg-[rgb(242,242,247)] dark:text-black mt-16 flex items-center text-lg bg-black dark:bg- px-8 py-4 space-x-2 rounded-r-lg rounded-tl-lg'>
            <p> See My Projects</p><FiChevronDown /></button>
      </div>

      <ProjectsIntroduction ref={ref}/>

    </section>
  )
}

export default Hero