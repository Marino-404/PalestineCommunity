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

const Connect = () => {

    const { mode } = useAppContext();

    return (
      <div className={`flex items-center w-[98%] xl:w-[68%] justify-center gap-1 xl:gap-6 my-6 xl:my-2 ${mode ? 'bg-[#00000097]' : 'bg-[#ffffff97]'}`}>
        <BsFillPeopleFill className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        <FaPodcast className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        <IoPlayCircleSharp className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        <RiOrganizationChart className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        <MdOutlineTravelExplore className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        <BiSolidInstitution className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        <PiFilmSlateBold className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        <GiFilmProjector className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        <TbToolsKitchen2 className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        <FaSpotify className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        <FaPaintbrush className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
        <AiFillInstagram className={`text-3xl xl:text-6xl text-[#247043] ${mode ? 'opacity-30' : 'opacity-40'}`} />
      </div>
    );
    
    
}

export default Connect;


