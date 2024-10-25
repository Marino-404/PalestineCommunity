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
import { div } from 'framer-motion/client';
import { Link } from 'react-router-dom';

const Connect = () => {

    const { mode } = useAppContext();

    return (
      <div className={`flex items-center w-[98%] xl:w-[68%] justify-center gap-0 xl:gap-6 my-6 xl:my-2 ${mode ? 'bg-[#00000097]' : 'bg-[#ffffff97]'}`}>

        <Link to={'/cards/detail7'}>
          <BsFillPeopleFill className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        </Link>

        <Link to={'/cards/detail8'}>
          <FaPodcast className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        </Link>

        <Link to={'/cards/detail9'}>
          <IoPlayCircleSharp className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        </Link>

        <Link to={'/cards/detail10'}>
          <RiOrganizationChart className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        </Link>

        <Link to={'/cards/detail11'}>
          <MdOutlineTravelExplore className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        </Link>

        <Link to={'/cards/detail12'}>
          <BiSolidInstitution className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        </Link>
        
        <Link to={'/cards/detail1'}>
          <PiFilmSlateBold className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        </Link>
        
        <Link to={'/cards/detail2'}>
          <GiFilmProjector className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        </Link>
        
        <Link to={'/cards/detail3'}>
          <TbToolsKitchen2 className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        </Link>
        
        <Link to={'/cards/detail4'}>
          <FaSpotify className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        </Link>
        
        <Link to={'/cards/detail5'}>
          <AiFillInstagram className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        </Link>
        
        <Link to={'/cards/detail6'}>
          <FaPaintbrush className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        </Link>

        
      </div>
    );
    
    
}

export default Connect;


