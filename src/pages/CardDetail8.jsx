import React from 'react';
import { useAppContext } from '../AppContext';
import Back from '../assets/Back';
import PhotoSections from '../assets/PhotoSections';
import DivLinePages from '../assets/DivLinePages';
import Footer from '../components/Footer';
import { FaSpotify } from 'react-icons/fa';
import { SectionStyle, TitleStyle } from './CardDetail1';
import img1 from '../images/podcast/1.png';


const UbicationStyle = 'font-poppins font-bold text-3xl mb-4'

const CardDetail8 = () => {

  const { mode } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={'Podcast'} />
      </div>

      <div className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${ mode ? 'text-custom-white' : 'text-custom-black'} z-50`} >
      
        <DivLinePages />

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <section className={SectionStyle} >
            <PhotoSections img={img1} />
          </section>
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              ETERNAMENTE PALESTINA
            </h1>
            <span className={UbicationStyle} >
              Podcast:
            </span>
            <div className='flex gap-4' >
              <a href='https://open.spotify.com/show/1qNAYiKEpHl46T56xevlh4?si=1Lq7aUPQS6eo2qsLUahjNg' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <FaSpotify />
              </a> 
              <a href='https://open.spotify.com/episode/6oakJF9Bqz7kgzIMsPTk6T?si=yjwC5XvsQ-aJDzWLsFeZKQ' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <FaSpotify />
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

export default CardDetail8;