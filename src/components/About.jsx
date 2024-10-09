import React from 'react'
import { useAppContext } from '../AppContext'

const About = () => {
   
  const { mode } = useAppContext();

  return (
    <div id='About' className="w-full h-[50vh] flex flex-col items-center text-center justify-center dark:text-white">
      <h2 id='Contact' className='text-3xl text-gradient font-bebas font-light flex justify-center mb-4' >¡Sobre nosotros!</h2>
      <span className={`w-auto h-auto xl:w-1/2 flex flex-col items-center justify-center ${mode ? 'text-white' : 'text-black'} ${mode ? 'bg-[#00000097]' : 'bg-[#ffffff97]'} px-6 z-10` } ><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, quos? Voluptates tenetur quo voluptatum sapiente suscipit reprehenderit reiciendis dolores eaque mollitia aliquid. Ut, deserunt! Tenetur soluta, mollitia dolorum obcaecati, maiores consectetur ab sint perferendis veritatis, repellendus maxime adipisci! Nisi illum nihil eum adipisci laborum perferendis? Quos enim aliquam doloremque aut!</p></span>
    </div>
  )
}

export default About
