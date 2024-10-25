import React from 'react';
import { useAppContext } from '../AppContext';
import Back from '../assets/Back';
import DivLinePages from '../assets/DivLinePages';
import DivLineCards from '../assets/DivLineCards';
import Footer from '../components/Footer';
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from 'react-icons/fa';
import { BiWorld } from "react-icons/bi";
import PhotoSections from '../assets/PhotoSections';
import { SectionStyle, TitleStyle } from './CardDetail1';


import img1 from '/src/images/media/1.png';
import img2 from '/src/images/media/2.png';
import img3 from '/src/images/media/3.png';
import img4 from '/src/images/media/4.png';
import img5 from '/src/images/media/5.png';
import img6 from '/src/images/media/6.png';

import img7 from '/src/images/media/tv/1.png';
import img8 from '/src/images/media/tv/2.png';
import img9 from '/src/images/media/tv/3.png';



const CardDetail9 = () => {

  const { mode } = useAppContext();

  return ( 
    <>
      <div>
        <Back SectionName={'Media'} />
      </div>

      <div className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${ mode ? 'text-custom-white' : 'text-custom-black'} z-50`} >
      
        <DivLinePages />

        <div className='flex w-[60%] flex-col text-center justify-center items-center mx-auto' >
         <h1 className={`font-semibold font-poppins text-2xl ${mode ? 'text-custom-white' : 'text-custom-black'}`} >
           Media
          </h1>
          <DivLineCards />
        </div>

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <section className={SectionStyle} >
            <PhotoSections img={img1} />
          </section>
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              AJ PLUS ESPAÑOL
            </h1>
            <div className='flex gap-4' >
              <a href='https://www.tiktok.com/@ajplusespanol?_t=8pl92L9knaA&_r=1' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <AiFillTikTok />
              </a> 
            </div>
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <section className={SectionStyle} >
            <PhotoSections img={img2} />
          </section> 
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              COMUNIDAD PALESTINA DE CHILE
            </h1>
            <a href='https://www.tiktok.com/@comunidadpalestinachile?_t=8pl97e7k9RN&_r=1' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <AiFillTikTok />
            </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <section className={SectionStyle} >
            <PhotoSections img={img3} />
          </section> 
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EL CALAMO
            </h1>
            <a href='https://www.tiktok.com/@elcalamo?_t=8pl9KmjLbWA&_r=1' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <AiFillTikTok />
            </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <section className={SectionStyle} >
            <PhotoSections img={img4} />
          </section> 
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              ANNUR TV
            </h1>
            <a href='https://www.instagram.com/annurtv?igsh=MW5vdHp5enB5c2d4cQ==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <AiFillInstagram />
            </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <section className={SectionStyle} >
            <PhotoSections img={img5} />
          </section> 
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              PALESTINA HOY
            </h1>
            <a href='https://www.instagram.com/palestinahoy1?igsh=MWZ2c2k5bnYxOGs4bA==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <AiFillInstagram />
            </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <section className={SectionStyle} >
            <PhotoSections img={img6} />
          </section> 
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EYE ON PALESTINE
            </h1>
            <a href='https://www.instagram.com/eye.on.palestine?igsh=MWJmOGM1dDg1ZXA2OQ==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <AiFillInstagram />
            </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='flex w-[60%] flex-col text-center justify-center items-center mx-auto pb-8' >
         <h1 className={`font-semibold font-poppins text-2xl ${mode ? 'text-custom-white' : 'text-custom-black'}`} >
           TV
          </h1>
          <DivLineCards />
        </div>

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <section className={SectionStyle} >
            <PhotoSections img={img7} />
          </section> 
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              PALESTINE TV CHANNEL
            </h1>
            <a href='https://www.youtube.com/@palestinetvchannel' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <FaYoutube />
            </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <section className={SectionStyle} >
            <PhotoSections img={img8} />
          </section> 
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              PALESTINE TV CHANNEL
            </h1>
            <a href='https://www.youtube.com/@palestinetvchannel' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <FaYoutube />
            </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[18vw] flex xl:flex-row flex-col' >
          <section className={SectionStyle} >
            <PhotoSections img={img9} />
          </section> 
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              PALESTINE TV CHANNEL
            </h1>
            <a href='https://www.youtube.com/@palestinetvchannel' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <FaYoutube />
            </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='flex w-[60%] flex-col text-center justify-center items-center mx-auto' >
         <h1 className={`font-semibold font-poppins text-2xl ${mode ? 'text-custom-white' : 'text-custom-black'}`} >
           Radio
          </h1>
          <DivLineCards />
        </div>
 
        <div className='xl:h-auto justify-center items-center flex flex-col'>

            <div className='md:h-[14vw] flex flex-col w-full text-center justify-center items-center gap-2'>
              <h1 className={TitleStyle}>
                AJYAL Radio (راديو أجيال)
              </h1>
              <a href='https://mytuner-radio.com/es/emisora/ajyal-radio-rdyw-jyl-397032/' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <BiWorld />
              </a>
            </div>

            <DivLinePages />

            <div className='md:h-[14vw] flex flex-col w-full text-center justify-center items-center gap-2'>
              <h1 className={TitleStyle}>
                Raya FM (اذاعة راية اف ام)
              </h1>
              <a href='https://mytuner-radio.com/es/emisora/raya-fm-dh-ry-f-m-432682/' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <BiWorld />
              </a>
            </div>

            <DivLinePages />

            <div className='md:h-[14vw] flex flex-col w-full text-center justify-center items-center gap-2'>
              <h1 className={TitleStyle}>
                Al Huriya News Agency (شبكة الحرية الإعلامية )
              </h1>
              <a href='https://mytuner-radio.com/es/emisora/al-huriya-news-agency-shbk-lhry-llmy-396823/' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <BiWorld />
              </a>
            </div>

            <DivLinePages />

            <div className='md:h-[14vw] flex flex-col w-full text-center justify-center items-center gap-2'>
              <h1 className={TitleStyle}>
                Radio Mawwal (راديو موال) 
              </h1>
              <a href='https://mytuner-radio.com/es/emisora/radio-mawwal-rdyw-mwl-410844/' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <BiWorld />
              </a>
            </div>

            <DivLinePages />

            <div className='md:h-[14vw] flex flex-col w-full text-center justify-center items-center gap-2'>
              <h1 className={TitleStyle}>
                Alaqsa Voice (اذاعة صوت الأقصى)
              </h1>
              <a href='https://mytuner-radio.com/es/emisora/alaqsa-voice-dh-swt-lqs-409637/' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <BiWorld />
              </a>
            </div>

            <DivLinePages />

            <div className='md:h-[14vw] flex flex-col w-full text-center justify-center items-center gap-2'>
              <h1 className={TitleStyle}>
                Gaza FM en vivo
              </h1>
              <a href='https://mytuner-radio.com/es/emisora/gaza-fm-432683/' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <BiWorld />
              </a>
            </div>

            <DivLinePages />

            <div className='md:h-[14vw] flex flex-col w-full text-center justify-center items-center gap-2'>
              <h1 className={TitleStyle}>
                Palestine Youth Radio (راديو شبا )
              </h1>
              <a href='https://mytuner-radio.com/es/emisora/palestine-youth-radio-rdyw-shbb-flstyn-440150/' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <BiWorld />
              </a>
            </div>

          </div>

        
        <DivLinePages />

        </div>

        <Footer />
         
      

    </>
  );

};

export default CardDetail9;