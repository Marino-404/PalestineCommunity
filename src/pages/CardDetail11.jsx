import React from 'react';
import { useAppContext } from '../AppContext';
import Back from '../components/Back';
import DivLinePages from '../components/DivLinePages';
import Footer from '../sections/Footer';
import { FaYoutube } from 'react-icons/fa';
import TourismVideo from '../components/TourismVideo';
import DivLineCards from '../components/DivLineCards';

const TitleStyle = 'font-poppins font-bold text-xl xl:pt-0 md:pt-0 px-6 md:px-0 text-gradient uppercase'

const CardDetail11 = () => {

  const { mode } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={'Turismo'} />
      </div>

      <div className={`w-[98%] xl:w-[60%] xl:mx-auto md:mx-auto flex flex-col ${ mode ? 'text-custom-white' : 'text-custom-black'} z-50`} >
      
        <DivLinePages />

        <div className='flex w-full flex-col text-center justify-center items-center mx-auto' >
          <h1 className={TitleStyle} >
            Turismo en Palestina
          </h1>
          <DivLineCards />
        </div>

        
 
        <TourismVideo />
           
        <DivLinePages />

        <Footer />
         
      </div>

    </>
  );
};

export default CardDetail11;