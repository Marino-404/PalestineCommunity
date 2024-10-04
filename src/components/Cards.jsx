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
    Media: <IoPlayCircleSharp className="text-6xl md:text-7xl opacity-10" />,
    Ong: <RiOrganizationChart className="text-6xl md:text-7xl opacity-10" />,
    Turismo: <MdOutlineTravelExplore className="text-6xl md:text-7xl opacity-10" />,
    Instituciones: <BiSolidInstitution className="text-6xl md:text-7xl opacity-10" />,
  };

  return (
    <section
      id="Connect"
      className={'w-full h-auto flex flex-col items-center justify-center text-[#ffffffd9] px-2 py-12 z-10'}
    >
      <div className="xl:w-[68%] w-full flex flex-wrap justify-center xl:gap-8 gap-4 z-10">
        {[
          { title: 'Peliculas', className: 'card-1' },
          { title: 'Series', className: 'card-2' },
          { title: 'Cocina', className: 'card-3' },
          { title: 'Spotify', className: 'card-4' },
          { title: 'Instagram', className: 'card-5' },
          { title: 'Arte', className: 'card-6' },
          { title: 'Celebridades', className: 'card-7' },
          { title: 'Podcast', className: 'card-8' },
          { title: 'Media', className: 'card-9' },
          { title: 'Ong', className: 'card-10' },
          { title: 'Turismo', className: 'card-11' },
          { title: 'Instituciones', className: 'card-12' },
        ].map((card, index) => (
          <a
            key={index}
            href="#"
            className={`w-[45%] md:w-1/4 xl:w-1/4 xl:h-[6vw] h-[16vw] flex justify-center items-center relative ${card.className} rounded-lg` }
          >
            <h1 className="absolute text-lg font-normal">{card.title}</h1>
            <span className='xl:hover:scale-125 transition-transform duration-300 xl:py-2 xl:px-24' >
                {cardIcons[card.title]}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Cards;



  


  

