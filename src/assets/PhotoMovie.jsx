import React from 'react'


const PhotoMovie = ({img}) => {
  return (
  
    <div className='flex w-[200px] h-[280px]' >
      <img className='w-full h-full z-50' src={img} alt="" />
    </div>
  )
}

export default PhotoMovie
