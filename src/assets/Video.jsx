import React from 'react'
import ReactPlayer from 'react-player'

const Video = () => {
  return (
    <div className='w-[98%] h-[44vw] xl:h-[20vw] xl:w-[40%] md:h-[20vw] md:w-[40%] flex items-center justify-center z-50' >
      <ReactPlayer controls width='100%' height='100%' url='https://youtu.be/h1BcLcn85gs?si=EYJ4-im92VYHE8o1' />
    </div>
  )
}

export default Video
