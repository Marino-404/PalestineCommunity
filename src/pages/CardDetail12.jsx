import React from 'react';
import { useAppContext } from '../AppContext';
import Back from '../assets/Back';
import DivLinePages from '../assets/DivLinePages';
import Footer from '../components/Footer';
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from 'react-icons/fa';

import arg from '../images/flags/arg.png';
import peru from '../images/flags/peru.png';
import chile from '../images/flags/chile.png';
import uruguay from '../images/flags/uruguay.png';
import nicaragua from '../images/flags/nicaragua.png';
import colombia from '../images/flags/colombia.png';
import españa from '../images/flags/españa.png';

const imgStyle = 'w-full h-full w-[34px] h-[34px]'
const TitleStyle = 'font-poppins font-semibold text-2xl text-gradient'
const UbicationStyle = 'flex flex-row font-poppins font-semibold text-3xl mb-4 gap-2'

const CardDetail12 = () => {

  const { mode } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={'Instituciones'} />
      </div>

      <div className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${ mode ? 'text-custom-white' : 'text-custom-black'} z-50`} >
      
        <DivLinePages />

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA
            </h1>
            <span className={UbicationStyle} >
              ARGENTINA
              <img src={arg} alt="arg" className={imgStyle} />
            </span>
            <div className='flex gap-4' >
              <a href='https://www.instagram.com/palestinaenargentina?igsh=MXJ5aXo2d2RxbzdhZA==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <AiFillInstagram />
              </a> 
              <a href='https://youtube.com/@embajadapalestina6040?si=3ejZUF73KdrHOEON' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA
            </h1>
            <span className={UbicationStyle} >
              PERU
              <img src={peru} alt="peru" className={imgStyle} />
            </span>
            <a href='https://www.instagram.com/palestinaenperu?igsh=MWxqZm45dXZ3a3o2Nw==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <AiFillInstagram />
            </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA
            </h1>
            <span className={UbicationStyle} >
              CHILE
              <img src={chile} alt="Chile" className={imgStyle} />
            </span>
            <a href='https://www.instagram.com/embajadapalestinachile?igsh=MWdtZTdzenIzbHo2Yw==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <AiFillInstagram />
            </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA
            </h1>
            <span className={UbicationStyle} >
              URUGUAY
              <img src={uruguay} alt="Uruguay" className={imgStyle} />
            </span>
            <a href='https://www.instagram.com/palestinaenuruguay?igsh=MTB1aGdlZGppaXpmeA==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <AiFillInstagram />
            </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA
            </h1>
            <span className={UbicationStyle} >
              NICARAGUA
              <img src={nicaragua} alt="Nicaragua" className={imgStyle} />
            </span>
            <a href='https://www.instagram.com/palestinaennicaragua?igsh=MTFzMHJxeGFtcGliaA==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <AiFillInstagram />
            </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA
            </h1>
            <span className={UbicationStyle} >
              COLOMBIA
              <img src={colombia} alt="Colombia" className={imgStyle} />
            </span>
            <a href='https://www.instagram.com/embpalcol?igsh=MWo5NHZleDF4OXRnaA==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <AiFillInstagram />
            </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA
            </h1>
            <span className={UbicationStyle} >
              ESPAÑA
              <img src={españa} alt="Espana" className={imgStyle} />
            </span>
            <a href='https://www.instagram.com/palestinaenespana?igsh=NDY1NHoycHVha2Ry' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <AiFillInstagram />
            </a> 
          </div>
        </div>

        <DivLinePages />

        <Footer />
         
      </div>

    </>
  );
};

export default CardDetail12;