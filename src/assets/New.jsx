import React from 'react'
import { useAppContext } from '../AppContext';
import ReactPlayer from 'react-player'

const Video = () => {

  const { mode } = useAppContext();

  return (
    <>
      <div className='w-[98%] h-[48vw] xl:h-[20vw] xl:w-[40%] md:h-[20vw] md:w-[40%] flex flex-col  z-50 mb-6 gap-4' >
          <span className={`items-start text-center justify-start font-poppins font-semibold ${mode ? 'text-[#ffffffc2]' : 'text-[#000000c2]'}`} >
            Últimos contenidos
          </span>
        <ReactPlayer controls width='100%' height='100%' url='https://youtu.be/h1BcLcn85gs?si=EYJ4-im92VYHE8o1' />
      </div>
    </>
  )
}

export default Video
