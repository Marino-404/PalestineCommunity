import React from 'react'
import { useAppContext } from '../AppContext'

const TheNew = () => {

  const { mode } = useAppContext();

  return (
    <div className={`w-full h-[30vw] flex items-center justify-center font-poppins ${ mode ? 'text-white' : 'text-black' } `} >
      The New ...
    </div>
  )
}

export default TheNew
