import React from 'react'
import { useAppContext } from '../AppContext';
import Logo from '../assets/Logo.jsx';
import { AiOutlineDown } from "react-icons/ai";
import DivLine from '../assets/DivLine.jsx'

const Hero = () => {

  const { mode } = useAppContext();

  return (
    <section id='Home' className='w-full  xl:h-[62vh] flex flex-col items-center font-poppins animate-fade-down animate-duration-[1000ms]' >
      <div className=' w-full md:w-[80%] xl:h-[67vh] flex flex-col items-center  font-poppins  xl:pt-[10vh]' >
        <div className='w-[100%] flex justify-center items-center p-4' >
            <Logo />
        </div>
        <div className={`xl:w-1/2 w-[100%] flex flex-col items-center justify-center text-center ${mode ? 'text-custom-white' : 'text-custom-black'}`}  >
            <h1 className='text-5xl xl:text-6xl text-gradient font-bebas font-light flex text-center justify-center xl:justify-start xl:text-start' >Connect Palestine</h1>  
            <h2 className='text-3xl font-poppins font-light xl:pb-2 pb-4'>Community</h2> 
            <a className='text-2xl flex justify-center items-center'  href="#Connect"><AiOutlineDown className='animate-bounce animate-infinite animate-ease-in-out' /></a>
        </div>
      </div>
    </section>
  )
}

export default Hero
