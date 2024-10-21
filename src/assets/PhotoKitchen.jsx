import React from 'react'


const PhotoKitchen = ({img}) => {
  return (
  
    <div className='flex w-[150px] h-[150px]' >
      <img className='w-full h-full rounded-full z-50' src={img} alt="" />
    </div>
  )
}

export default PhotoKitchen