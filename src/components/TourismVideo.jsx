import React from 'react'
import ReactPlayer from 'react-player'

const VideoStyle = 'w-[68%] h-[50vw] md:h-[26vw] mx-auto'

const TourismVideo = () => {
  return (
    <div className='flex flex-col md:flex-row gap-8' >
     <div className={VideoStyle} >
       <ReactPlayer controls width='100%' height='100%' url='https://www.youtube.com/watch?v=QDkeiezIOdY' />
    </div>
    <div className={VideoStyle} >
        <ReactPlayer controls width='100%' height='100%' url='https://www.youtube.com/watch?v=arfeUUdAZHY' />
    </div>
    <div className={VideoStyle} >
        <ReactPlayer controls width='100%' height='100%' url='https://www.youtube.com/watch?v=MJ339LbuByM' />
    </div>
    <div className={VideoStyle} >
        <ReactPlayer controls width='100%' height='100%' url='https://www.youtube.com/watch?v=v8ACR1Jn9k4' />
    </div>
    </div>
  )
}

export default TourismVideo
