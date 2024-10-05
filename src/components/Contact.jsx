import React from 'react'
import { useAppContext } from '../AppContext'
import Button from '../assets/Button'

const Contact = () => {
   
  const { mode } = useAppContext();

  return (
    <div className="w-full h-[50vh] flex flex-col items-center justify-center dark:text-white">
      <h2 id='Contact' className='text-3xl text-gradient font-bebas font-light flex justify-center mb-4' >¡Ponete en contacto!</h2>
      <form action="" className='w-[73%] xl:w-[30%] flex flex-col items-center' >
        <input 
              type="text"
              placeholder='Nombre'
              className='bg-gray-100 dark:bg-[#131313] w-[90%] h-[8vw] xl:h-[2vw] rounded-lg p-1 mb-4 focus:outline-none px-4 font-poppins font-normal  placeholder:text-sm' 
              />
        <input 
              type="text" 
              placeholder='Email'
              className='bg-gray-100 dark:bg-[#131313] border-5 w-[90%] h-[8vw] xl:h-[2vw] rounded-lg p-1 mb-4 focus:outline-none px-4 font-poppins font-normal placeholder:text-sm' 
              />
        <textarea
              type="text" 
              placeholder='Escribe tu mensaje'
              id="message"
              cols="30"
              rows="10" 
              className='bg-gray-100 dark:bg-[#131313] w-[90%] h-[20vw] xl:h-[6vw] rounded-lg p-1 mb-4 focus:outline-none px-4 font-poppins font-normal resize-none placeholder:text-sm' >   
        </textarea>
      </form>
      <Button />
    </div>
  )
}

export default Contact
