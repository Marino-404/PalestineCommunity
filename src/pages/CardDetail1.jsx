import React from 'react';
import Back from '../assets/Back';
import PhotoMovie from '../assets/PhotoMovie';
import DivLineCards from '../assets/DivLineCards';
import Footer from '../components/Footer';
import { div } from 'framer-motion/client';
import img1 from "/src/images/peliculas/pelicula1.png"
import img2 from "/src/images/peliculas/pelicula2.png"
import img3 from "/src/images/peliculas/pelicula3.png"

export const SectionStyle = 'flex flex-col xl:flex-row justify-center items-center xl:justify-start xl:items-start md:items-start md:justify-start ';

const CardDetail1 = () => {

  return (
   <>
    <div>
      <Back SectionName={'Peliculas'} />
    </div>

    <div className='w-[98%] xl:w-[68%] xl:mx-auto md:mx-auto flex flex-col' >
      <DivLineCards />
      <section className={SectionStyle} >
        <PhotoMovie img={img2} />
      </section>
      <DivLineCards />
      <section className={SectionStyle} >
        <PhotoMovie img={img1} />
      </section>
      <DivLineCards />
      <section className={SectionStyle} >
        <PhotoMovie img={img3} />
      </section>
      <DivLineCards />
      <Footer />
    </div>
    </>
  );
};

export default CardDetail1;