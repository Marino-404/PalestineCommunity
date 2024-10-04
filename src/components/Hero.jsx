import React from 'react'
import Logo from '../assets/Logo.jsx';
import { AiOutlineDown } from "react-icons/ai";
import AnimatedLines from '../assets/animatedLines.jsx';
import DivLine from '../assets/DivLine.jsx'

const Hero = () => {
  return (
    <section id='Home' className='w-full  xl:h-[62vh] flex flex-col items-center font-poppins ' >
      <div className=' w-full md:w-[80%] xl:h-[67vh] flex flex-col items-center  font-poppins  xl:pt-[10vh]' >
        <div className='w-[100%] flex justify-center items-center p-4 animate-fade animate-once animate-duration-[3000ms]  animate-delay-[200ms] animate-ease-in-out' >
            <Logo />
        </div>
        <div className='xl:w-1/2 w-[100%] flex flex-col items-center justify-center animate-fade animate-once animate-duration-[3000ms] animate-delay-[1000ms] animate-ease-in-out'  >
            <h1 className='text-5xl xl:text-6xl text-gradient font-bebas font-light flex text-center justify-center xl:justify-start xl:text-start' >Connect Palestine</h1>  
            <h2 className='text-3xl dark:text-white font-poppins font-light xl:pb-2 pb-4 text-shadow'>Community</h2> 
            <a className='text-2xl text-current flex justify-center items-center dark:text-white'  href="#Connect"><AiOutlineDown className='animate-bounce animate-infinite animate-ease-in-out' /></a>
        </div>
      </div>
    </section>
  )
}

export default Hero
