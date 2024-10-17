import React from 'react';
import { useAppContext } from '../AppContext.jsx';
import Back from '../assets/Back';
import PhotoMovie from '../assets/PhotoMovie';
import DivLinePages from '../assets/DivLinePages.jsx';
import Footer from '../components/Footer';
import { div } from 'framer-motion/client';
import img1 from "/src/images/peliculas/pelicula1.png"
import img2 from "/src/images/peliculas/pelicula2.png"
import img3 from "/src/images/peliculas/pelicula3.png"
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";


export const SectionStyle = 'flex flex-col xl:flex-row justify-center items-center xl:justify-center xl:items-start md:items-start md:justify-start ';
export const TitleStyle = 'font-poppins font-bold text-3xl pt-10'
export const DescriptionStyle = 'font-poppins font-normal text-xl py-4  px-6'
export const Stars = 'flex flex-row text-xl pb-4'

const CardDetail1 = () => {

  const {mode} = useAppContext();

  return (
   <>
    <div>
      <Back SectionName={'Peliculas'} />
    </div>

    <div className={`w-[98%] xl:w-[60%] xl:mx-auto md:mx-auto flex flex-col ${ mode ? 'text-[#ffffffc2]' : 'text-[#000000c2]'} z-50`} >
      
      <DivLinePages />

      <div className='flex xl:flex-row flex-col' >
        <section className={SectionStyle} >
          <PhotoMovie img={img2} />
        </section>
        <div className='flex flex-col text-center justify-center items-center gap-2' >
          <h1 className={TitleStyle} >
            A 200 Metros
          </h1>
          <span className={DescriptionStyle} >
            Mustafa y su esposa Salwa provienen de dos aldeas palestinas que están a solo 200 metros de distancia, pero separadas por el muro. Su situación de vida inusual está comenzando a afectar su matrimonio feliz, pero la pareja hace lo que puede para que funcione. 
          </span>
          <div className={Stars} >
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
          <a href='https://www.netflix.com/search?q=200%20metros&jbv=81443440' target="_blank" rel="noopener noreferrer" className='text-5xl' >
            <FaPlayCircle />
          </a>
        </div>
      </div>

      <DivLinePages />

      <div className='flex xl:flex-row flex-col' >
        <section className={SectionStyle} >
          <PhotoMovie img={img1} />
        </section>
        <div className='flex flex-col text-center justify-center items-center gap-2' >
          <h1 className={TitleStyle} >
            La sal de este mar
          </h1>
          <span className={DescriptionStyle} >
            Soraya nació y se educó en Brooklyn, pero ha decidido regresar a Palestina, país del que su familia tuvo que exiliarse en 1948. Por su parte Emad, nacido en los territorios palestinos, ha conocido toda su vida la ocupación y la realidad palestina, y sueña con obtener un visado para ir a estudiar a Canadá y marcharse de allí.  
          </span>
          <div className={Stars} >
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
          </div>
          <a href='https://www.netflix.com/title/70117041?preventIntent=true' target="_blank" rel="noopener noreferrer" className='text-5xl' >
            <FaPlayCircle />
          </a>
        </div>
      </div>

      <DivLinePages />

      <div className='flex xl:flex-row flex-col' >
        <section className={SectionStyle} >
          <PhotoMovie img={img3} />
        </section>
        <div className='flex flex-col text-center justify-center items-center gap-2' >
          <h1 className={TitleStyle} >
            Nacido en GAZA
          </h1>
          <span className={DescriptionStyle} >
            Rodada durante la última ofensiva israelí que asoló la Franja de Gaza, 2014. Nacido en Gaza sigue a diez niños que nos cuentan cómo es su día a día bajo las bombas y el embargo.
          </span>
          <div className={Stars} >
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          <a href='https://www.justwatch.com/mx/pelicula/nacido-en-gaza' target="_blank" rel="noopener noreferrer" className='text-5xl' >
            <FaPlayCircle />
          </a>
        </div>
      </div>

      <DivLinePages />

      <Footer />
    </div>
    </>
  );
};

export default CardDetail1;