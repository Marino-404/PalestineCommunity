import React from 'react';
import Back from '../assets/Back';
import PhotoMovie from '../assets/PhotoMovie';
import DivLineCards from '../assets/DivLineCards';
import Footer from '../components/Footer';
import { div } from 'framer-motion/client';
import img1 from "/src/images/peliculas/pelicula1.png"
import img2 from "/src/images/peliculas/pelicula2.png"
import img3 from "/src/images/peliculas/pelicula3.png"


const CardDetail1 = () => {
  return (
    <>
      <div>
        <Back SectionName={'Peliculas'} />
      </div>
      <section>
        <DivLineCards />
        <PhotoMovie img={img2} />
        <DivLineCards />
        <PhotoMovie img={img1} />
        <DivLineCards />
        <PhotoMovie img={img3} />
        <DivLineCards />
        <Footer />
      </section>
    </>
  );
};

export default CardDetail1;