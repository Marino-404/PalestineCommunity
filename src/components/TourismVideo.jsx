import React from 'react'
import ReactPlayer from 'react-player'
import DivLinePages from '../components/DivLinePages.jsx';


const VideoStyle = 'w-[68%] h-[50vw] md:h-[26vw] mx-auto'

const TourismVideo = () => {
  return (
    <div className='flex flex-col gap-8' >

        <div className={VideoStyle} >
          <ReactPlayer controls width='100%' height='100%' url='https://www.youtube.com/watch?v=MJ339LbuByM' />
        </div>

        <DivLinePages />

        <div className={VideoStyle} >
          <ReactPlayer controls width='100%' height='100%' url='https://www.youtube.com/watch?v=QDkeiezIOdY' />
        </div>

        <DivLinePages />

        <div className={VideoStyle} >
          <ReactPlayer controls width='100%' height='100%' url='https://www.youtube.com/watch?v=arfeUUdAZHY' />
        </div>

        <DivLinePages />

        <div className={VideoStyle} >
          <ReactPlayer controls width='100%' height='100%' url='https://www.youtube.com/watch?v=v8ACR1Jn9k4' />
        </div>
        
    </div>
  )
}

export default TourismVideo
