import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";


const Back = () => {
  return (
    <div className='w-full h-auto flex justify-start pl-60 pt-12'>
      <Link 
        className='flex font-poppins font-normal items-center text-md'
        to={'/'}>
        <IoIosArrowBack />
        <span>Atras</span>
      </Link>
    </div>
  )
}

export default Back
