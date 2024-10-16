import React from 'react';
import Back from '../assets/Back';
import { div } from 'framer-motion/client';
import img1 from "/src/images/peliculas/pelicula1.png"
import img2 from "/src/images/peliculas/pelicula2.png"
import img3 from "/src/images/peliculas/pelicula3.png"

const PhotoStyle = {
  width: '200px',
  height: '200px',
};

const CardDetail1 = () => {
  return (
    <>
      <div>
        <Back SectionName={'Peliculas'} />
      </div>
      <section>
        <div>
           <img src={img2} alt="" />
        </div>
        <div>
            <img src={img1} alt="" />
        </div>
        <div>
            <img src={img3} alt="" />
        </div>
      </section>
    </>
  );
};

export default CardDetail1;