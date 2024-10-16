import React from 'react'
import { useAppContext } from '../AppContext';
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";



const Back = ({SectionName}) => {

  const {mode} = useAppContext(); 

  return (
    <div className={`w-full h-auto flex justify-start md:text-sm text-md font-poppins font-normal xl:pl-60 pl-20 pt-6 ${mode ? 'text-[#ffffffc2]' : 'text-[#000000c2]'}`}>
      <Link 
        className='flex items-center'
        to={'/'}>
        <IoIosArrowBack />
        <span>Inicio</span>
        <span className='px-1' >|</span>
      </Link>
      <span className='underline'>{SectionName}</span>
    </div>
  )
}

export default Back
