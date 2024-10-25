import React from 'react'
import { useAppContext } from '../AppContext';


const PhotoInstagram = ({img}) => {
  
  const { mode } = useAppContext();

  return (

    <div className='flex w-[210px] h-[210px]' >
      <img className={`w-full h-full rounded-full z-50`} src={img} alt="" />
    </div>
    
  )
}

export default PhotoInstagram