import React from 'react';
import Back from '../assets/Back';
import PhotoMovie from '../assets/PhotoMovie';
import DivLineCards from '../assets/DivLineCards';
import Footer from '../components/Footer';
import { SectionStyle } from './CardDetail1';

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
        <Back SectionName={'Series'} />
      </div>

      <div className='w-[98%] xl:w-[68%] mx-auto flex flex-col' >
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
      <section className={SectionStyle} >
        <PhotoMovie img={img4} />
      </section>
      <DivLineCards />
      <section className={SectionStyle} >
        <PhotoMovie img={img5} />
      </section>
      <DivLineCards />
      <section className={SectionStyle} >
        <PhotoMovie img={img6} />
      </section>
      <DivLineCards />
      <section className={SectionStyle} >
        <PhotoMovie img={img7} />
      </section>
      <DivLineCards />
      <Footer />
    </div>
    </>
  );
};

export default CardDetail2;