import React from 'react';
import Back from '../assets/Back';
import PhotoMovie from '../assets/PhotoMovie';
import DivLineCards from '../assets/DivLineCards';
import Footer from '../components/Footer';

import img1 from "/src/images/series/serie1.png"
import img2 from "/src/images/series/serie2.png"
import img3 from "/src/images/series/serie3.png"
import img4 from "/src/images/series/serie4.png"
import img5 from "/src/images/series/serie5.png"
import img6 from "/src/images/series/serie6.png"
import img7 from "/src/images/series/serie7.png"


const CardDetail2 = () => {
  return (
    <>
      <div>
        <Back SectionName={'Peliculas'} />
      </div>
      <section>
        <DivLineCards />
        <PhotoMovie img={img1} />
        <DivLineCards />
        <PhotoMovie img={img2} />
        <DivLineCards />
        <PhotoMovie img={img3} />
        <DivLineCards />
        <PhotoMovie img={img4} />
        <DivLineCards />
        <PhotoMovie img={img5} />
        <DivLineCards />
        <PhotoMovie img={img6} />
        <DivLineCards />
        <PhotoMovie img={img7} />
        <DivLineCards />
        <Footer />
      </section>
    </>
  );
};

export default CardDetail2;