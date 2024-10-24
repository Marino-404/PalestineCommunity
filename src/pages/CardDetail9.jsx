import React from 'react';
import { useAppContext } from '../AppContext';
import Back from '../assets/Back';
import DivLinePages from '../assets/DivLinePages';
import Footer from '../components/Footer';
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from 'react-icons/fa';
import { BiWorld } from "react-icons/bi";



const TitleStyle = 'font-poppins font-semibold text-2xl text-gradient'

const CardDetail9 = () => {

  const { mode } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={'Media'} />
      </div>

      <div className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${ mode ? 'text-custom-white' : 'text-custom-black'} z-50`} >
      
        <DivLinePages />

        <div className='xl:h-[12vw] flex xl:flex-row flex-col' >
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

        <div className='xl:h-[12vw] flex xl:flex-row flex-col' >
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

        <div className='xl:h-[12vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA
            </h1>
            <a href='https://www.instagram.com/embajadapalestinachile?igsh=MWdtZTdzenIzbHo2Yw==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <AiFillInstagram />
            </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[12vw] flex xl:flex-row flex-col' >
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

        <div className='xl:h-[12vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA
            </h1>
            <a href='https://www.instagram.com/palestinaennicaragua?igsh=MTFzMHJxeGFtcGliaA==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
              <AiFillInstagram />
            </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[12vw] flex xl:flex-row flex-col' >
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

        <div className='xl:h-[12vw] flex xl:flex-row flex-col' >
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

        <div className='xl:h-[12vw] flex xl:flex-row flex-col' >
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

        <div className='xl:h-auto justify-center items-center flex flex-col'>
            <h1 className='font-poppins font-bold text-3xl mb-12'>
              TV PALESTINAS
            </h1>

            <div className='flex flex-col w-full text-center justify-center items-center gap-2 mb-6'>
              <h1 className={TitleStyle}>
                PALESTINE TV CHANNEL
              </h1>
              <a href='https://www.youtube.com/@palestinetvchannel' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <FaYoutube />
              </a>
            </div>

            <div className='flex flex-col w-full text-center justify-center items-center gap-2 mb-6'>
              <h1 className={TitleStyle}>
                AL QUDS TV
              </h1>
              <a href='https://www.youtube.com/@livequds' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <FaYoutube />
              </a>
            </div>

            <div className='flex flex-col w-full text-center justify-center items-center gap-2 '>
              <h1 className={TitleStyle}>
                MUSAWA CHANNEL
              </h1>
              <a href='https://www.youtube.com/@MusawaChannel' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <FaYoutube />
              </a>
            </div>
          </div>


        <DivLinePages />

        <div className='xl:h-auto justify-center items-center flex flex-col'>
            <h1 className='font-poppins font-bold text-3xl mb-12'>
              RADIOS PALESTINAS
            </h1>

            <div className='flex flex-col w-full text-center justify-center items-center gap-2 mb-12'>
              <h1 className={TitleStyle}>
                AJYAL Radio (راديو أجيال) en vivo:
              </h1>
              <a href='https://mytuner-radio.com/es/emisora/ajyal-radio-rdyw-jyl-397032/' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <BiWorld />
              </a>
            </div>

            <div className='flex flex-col w-full text-center justify-center items-center gap-2 mb-12'>
              <h1 className={TitleStyle}>
                Raya FM (اذاعة راية اف ام) en vivo
              </h1>
              <a href='https://mytuner-radio.com/es/emisora/raya-fm-dh-ry-f-m-432682/' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <BiWorld />
              </a>
            </div>

            <div className='flex flex-col w-full text-center justify-center items-center gap-2 mb-12'>
              <h1 className={TitleStyle}>
                Al Huriya News Agency (شبكة الحرية الإعلامية ) en vivo
              </h1>
              <a href='https://mytuner-radio.com/es/emisora/al-huriya-news-agency-shbk-lhry-llmy-396823/' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <BiWorld />
              </a>
            </div>

            <div className='flex flex-col w-full text-center justify-center items-center gap-2 mb-12'>
              <h1 className={TitleStyle}>
                Radio Mawwal (راديو موال) en vivo              </h1>
              <a href='https://mytuner-radio.com/es/emisora/radio-mawwal-rdyw-mwl-410844/' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <BiWorld />
              </a>
            </div>

            <div className='flex flex-col w-full text-center justify-center items-center gap-2 mb-12'>
              <h1 className={TitleStyle}>
                Alaqsa Voice (اذاعة صوت الأقصى) en vivo              </h1>
              <a href='https://mytuner-radio.com/es/emisora/alaqsa-voice-dh-swt-lqs-409637/' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <BiWorld />
              </a>
            </div>

            <div className='flex flex-col w-full text-center justify-center items-center gap-2 mb-12'>
              <h1 className={TitleStyle}>
                Gaza FM en vivo
              </h1>
              <a href='https://mytuner-radio.com/es/emisora/gaza-fm-432683/' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <BiWorld />
              </a>
            </div>

            <div className='flex flex-col w-full text-center justify-center items-center gap-2 mb-12'>
              <h1 className={TitleStyle}>
                Palestine Youth Radio (راديو شبا ) en vivo
              </h1>
              <a href='https://mytuner-radio.com/es/emisora/palestine-youth-radio-rdyw-shbb-flstyn-440150/' target="_blank" rel="noopener noreferrer" className='text-5xl'>
                <BiWorld />
              </a>
            </div>

          </div>

          


        <DivLinePages />

        <Footer />
         
      </div>

    </>
  );
};

export default CardDetail9;