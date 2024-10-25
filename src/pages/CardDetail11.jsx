import React from 'react';
import { useAppContext } from '../AppContext';
import Back from '../components/Back';
import DivLinePages from '../components/DivLinePages';
import Footer from '../sections/Footer';
import { FaYoutube } from 'react-icons/fa';
import { TitleStyle } from './CardDetail1';

const UbicationStyle = 'font-poppins font-bold text-3xl mb-4 '

const CardDetail11 = () => {

  const { mode } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={'Turismo'} />
      </div>

      <div className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${ mode ? 'text-custom-white' : 'text-custom-black'} z-50`} >
      
        <DivLinePages />

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              Turismo en Palestina
            </h1>
            <span className={UbicationStyle} >
              Videos:
            </span>
            <div className='flex gap-4' >
              <a href='https://www.youtube.com/watch?v=QDkeiezIOdY' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <FaYoutube />
              </a> 
              <a href='https://www.youtube.com/watch?v=arfeUUdAZHY' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <FaYoutube />
              </a>
              <a href='https://www.youtube.com/watch?v=MJ339LbuByM' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <FaYoutube />
              </a>
              <a href='https://www.youtube.com/watch?v=v8ACR1Jn9k4' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <DivLinePages />

        <Footer />
         
      </div>

    </>
  );
};

export default CardDetail11;