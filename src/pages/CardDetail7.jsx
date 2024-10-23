import React from 'react';
import { useAppContext } from '../AppContext';
import Footer from '../components/Footer';
import Back from '../assets/Back';
import DivLinePages from '../assets/DivLinePages';
import PhotoSections from '../assets/PhotoSections';
import { SectionStyle, TitleStyle, DescriptionStyle} from './CardDetail1';
import { FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";


import img1 from '/src/images/celebridades/1.png';
import img2 from '/src/images/celebridades/2.png';
import img3 from '/src/images/celebridades/3.png';
import img4 from '/src/images/celebridades/4.png';


const CardDetail7 = () => {

  const { mode } = useAppContext(); 

  return (
    <>
    <div>
      <Back SectionName={'Celebridades'} />
    </div>

    <div className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${ mode ? 'text-custom-white' : 'text-custom-black'} z-50`} >
      
      <DivLinePages />

      <div className='xl:h-[20vw] flex xl:flex-row flex-col' >
        <section className={SectionStyle} >
          <PhotoSections img={img1} />
        </section>
        <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
          <h1 className={TitleStyle} >
            BELLA HADID
          </h1>
          <span className={DescriptionStyle} >
          Modelo estadounidense de origen palestino.
          </span>
          <a href='https://www.instagram.com/bellahadid?igsh=MTk3N2I3a3RqNHVyeA==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
            <AiFillInstagram />
          </a>
        </div>
      </div>

      <DivLinePages />

      <div className='xl:h-[20vw] flex xl:flex-row flex-col' >
        <section className={SectionStyle} >
          <PhotoSections img={img2} />
        </section>
        <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
          <h1 className={TitleStyle}>
            JULIA BOUTROS
          </h1>
          <span className={DescriptionStyle} >
            Cantante Libanesa.
          </span>
          <a href='https://youtu.be/834tyxBxksU?si=Ov48VDxX7sCFrHkz' target="_blank" rel="noopener noreferrer" className='text-5xl' >
            <FaYoutube />
          </a>
        </div>
      </div>

      <DivLinePages />

      <div className='xl:h-[20vw] flex xl:flex-row flex-col' >
        <section className={SectionStyle} >
          <PhotoSections img={img3} />
        </section>
        <div className='flex w-full flex-col text-center justify-center items-center gap-2' >
          <h1 className={TitleStyle} >
            ROGER WATERS
          </h1>
          <span className={DescriptionStyle} >
            Compositor y músico británico.
          </span>
          <div className='flex flex-col items-center gap-2' >
            <p className='font-poppins' >
              Canción para Palestina: <span className='font-bold' >WE SHALL OVERCOME</span>
            </p>
            <a href='https://youtu.be/hQxXdNcloik?si=_XrgR8dGvceGQ2x1' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <DivLinePages />

      <div className='xl:h-auto flex xl:flex-row flex-col' >
        <section className={SectionStyle} >
          <PhotoSections img={img4} />
        </section>
        <div className='flex w-full flex-col text-center justify-center items-center gap-2' >
          <h1 className={TitleStyle} >
            Residente
          </h1>
          <span className={DescriptionStyle} >
            Rapero y compositor puertorriqueño.
          </span>

          <div className='flex flex-col text-start items-center gap-1' >

            <div className='w-full flex flex-col items-center text-start gap-0' >
              <p className='font-poppins' >
                <span className='font-bold'>Bajo los escombros</span>
              </p>
              <a href='https://youtu.be/COgKs7YcRQE?si=YS97q3jXvCsJlYyv' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <FaYoutube />
              </a>
            </div>

            <div className='w-full flex flex-col items-center text-start gap-0' >
              <p className='font-poppins' >
                <span className='font-bold'>Multi Viral</span>
              </p>
              <a href='https://youtu.be/EjSCy1GC6Sc?si=K_8Ax1MWQiSzqVdU' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <FaYoutube />
              </a>
            </div>

            <div className='w-full flex flex-col items-center text-start gap-0' >
              <p className='font-poppins' >
                <span className='font-bold'>Guerra</span>
              </p>
              <a href='https://youtu.be/Zl_GlPquElI?si=xRXIhwmG16HD2PQe' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <FaYoutube />
              </a>
            </div>

          </div>
        </div>
      </div>

      <DivLinePages />

      <Footer />
    </div>
    </>
  );
};

export default CardDetail7