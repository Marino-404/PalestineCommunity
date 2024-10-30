import React from 'react';
import { useAppContext } from '../AppContext';
import { PiFilmSlateBold } from "react-icons/pi";
import { GiFilmProjector } from "react-icons/gi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaSpotify, FaPaintbrush } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaPodcast } from "react-icons/fa";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiOrganizationChart } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
import { BiSolidInstitution } from "react-icons/bi";
import { text } from 'framer-motion/client';
import DivLineCards from '../components/DivLineCards';
import { Link } from 'react-router-dom';
import New from '../components/New';

const Cards = () => {
  const { mode } = useAppContext();

  const cardIcons = {
    Peliculas: <PiFilmSlateBold className="text-6xl xl:text-7xl opacity-10" />,
    Series: <GiFilmProjector className="text-6xl md:text-7xl opacity-10" />,
    Cocina: <TbToolsKitchen2 className="text-6xl md:text-7xl opacity-10" />,
    Spotify: <FaSpotify className="text-6xl md:text-7xl opacity-10" />,
    Instagram: <AiFillInstagram className="text-6xl md:text-7xl opacity-10" />,
    Arte: <FaPaintbrush className="text-6xl md:text-7xl opacity-10" />,
    Celebridades: <BsFillPeopleFill className="text-6xl md:text-7xl opacity-10" />,
    Podcast: <FaPodcast className="text-6xl md:text-7xl opacity-10" />,
    "Media/TV/Radio": <IoPlayCircleSharp className="text-6xl md:text-7xl opacity-10" />,
    ONG: <RiOrganizationChart className="text-6xl md:text-7xl opacity-10" />,
    Turismo: <MdOutlineTravelExplore className="text-6xl md:text-7xl opacity-10" />,
    Instituciones: <BiSolidInstitution className="text-6xl md:text-7xl opacity-10" />,
  };

  return (
    <section
      className={'w-full h-auto flex flex-col items-center justify-center text-custom-white px-2 z-10 '}
    >
      <div className='flex items-center justify-center' >
        <span className='flex items-center justify-center text-center text-4xl text-gradient font-bebas' >
            Tu enlace con la Cultura, Historia y Resistencia. 
        </span>
      </div>

      <DivLineCards />

      <New />      

      <DivLineCards />

      <div 
        id="Connect" 
        className="xl:w-[68%] w-full flex flex-wrap justify-center py-8 xl:gap-8 gap-3 z-10">
        {[
          { title: 'Peliculas', className: 'card-1', path: '/cards/detail1' },
          { title: 'Series', className: 'card-2', path: '/cards/detail2' },
          { title: 'Cocina', className: 'card-3', path: '/cards/detail3' },
          { title: 'Spotify', className: 'card-4', path: '/cards/detail4' },
          { title: 'Instagram', className: 'card-5', path: '/cards/detail5' },
          { title: 'Arte', className: 'card-6', path: '/cards/detail6' },
          { title: 'Celebridades', className: 'card-7', path: '/cards/detail7' },
          { title: 'Podcast', className: 'card-8', path: '/cards/detail8' },
          { title: 'Media/TV/Radio', className: 'card-9', path: '/cards/detail9' },
          { title: 'ONG', className: 'card-10', path: '/cards/detail10' },
          { title: 'Turismo', className: 'card-11', path: '/cards/detail11' },
          { title: 'Instituciones', className: 'card-12', path: '/cards/detail12' },
        ].map((card, index) => (
          <Link
            key={index}
            to={card.path}
            className={`w-[47%] md:w-1/4 xl:w-1/4 xl:h-[6vw] h-[21vw] flex justify-center items-center relative ${card.className} rounded-md`}
          >
            <h1 className="absolute text-lg font-normal">{card.title}</h1>
            <span className='xl:hover:scale-125 transition-transform duration-300 xl:py-2 xl:px-24'>
              {cardIcons[card.title]}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Cards;



  


  

