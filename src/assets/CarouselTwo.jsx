import React from 'react';
import { useAppContext } from '../AppContext';
import img1 from "/src/images/carrusel/chanel/3.jpg";
import img2 from "/src/images/carrusel/spotify/2.jpg";
import img3 from "/src/images/carrusel/pelicula/1.jpg";
import img4 from "/src/images/carrusel/chanel/4.jpg";
import img5 from "/src/images/carrusel/ong/2.jpg";
import img6 from "/src/images/carrusel/comida/2.jpg";

const images = [
  { src: img1, width: '270px' },
  { src: img2, width: '150px' },
  { src: img3, width: '270px' },
  { src: img4, width: '228px' },
  { src: img5, width: '315px' },
  { src: img6, width: '160px' },
  { src: img1, width: '270px' },
  { src: img2, width: '150px' },
  { src: img3, width: '270px' },
  { src: img4, width: '228px' },
  { src: img5, width: '315px' },
  { src: img6, width: '160px' },
  { src: img1, width: '270px' },
  { src: img2, width: '150px' },
  { src: img3, width: '270px' },
  { src: img4, width: '228px' },
  { src: img5, width: '315px' },
  { src: img6, width: '160px' },
  { src: img1, width: '270px' },
  { src: img2, width: '150px' },
  { src: img3, width: '270px' },
  { src: img4, width: '228px' },
  { src: img5, width: '315px' },
  { src: img6, width: '160px' },
  { src: img1, width: '270px' },
  { src: img2, width: '150px' },
  { src: img3, width: '270px' },
  { src: img4, width: '228px' },
  { src: img5, width: '315px' },
  { src: img6, width: '160px' },
  { src: img1, width: '270px' },
  { src: img2, width: '150px' },
  { src: img3, width: '270px' },
  { src: img4, width: '228px' },
  { src: img5, width: '315px' },
  { src: img6, width: '160px' },
  { src: img1, width: '270px' },
  { src: img2, width: '150px' },
  { src: img3, width: '270px' },
  { src: img4, width: '228px' },
  { src: img5, width: '315px' },
  { src: img6, width: '160px' },
  { src: img1, width: '270px' },
  { src: img2, width: '150px' },
  { src: img3, width: '270px' },
  { src: img4, width: '228px' },
  { src: img5, width: '315px' },
  { src: img6, width: '160px' },
  { src: img1, width: '270px' },
  { src: img2, width: '150px' },
  { src: img3, width: '270px' },
  { src: img4, width: '228px' },
  { src: img5, width: '315px' },
  { src: img6, width: '160px' },
  { src: img1, width: '270px' },
  { src: img2, width: '150px' },
  { src: img3, width: '270px' },
  { src: img4, width: '228px' },
  { src: img5, width: '315px' },
  { src: img6, width: '160px' },
  { src: img1, width: '270px' },
  { src: img2, width: '150px' },
  { src: img3, width: '270px' },
  { src: img4, width: '228px' },
  { src: img5, width: '315px' },
  { src: img6, width: '160px' },
];

const CarouselTwo = () => {
    const { mode } = useAppContext();
  
    return (
        <div className="w-full xl:w-[68%] h-[34vw] xl:h-[11vw] flex items-center justify-center overflow-hidden  mx-auto">
          <div className={`flex whitespace-nowrap h-full animate-scroll-1 gap-2 xl:gap-5`}>
            {[...images].map((img, index) => (
              <div
                key={index}
                href="#"
                className='inline-block'
                style={{
                  width: img.width, 
                  opacity: 0.8,
                  maxWidth: '100%', 
                }}
              >
                <img
                  src={img.src}
                  alt={`Imagen ${index + 1}`}
                  className='w-full h-full object-cover object-center hover:scale-105 transition-all duration-300'
                  style={{ height: '100%', maxHeight: '100%' }}
                />
              </div>
            ))}
          </div>
        </div>
      );
    };  
  
  export default CarouselTwo;
  
  
  
  