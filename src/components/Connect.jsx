import { useAppContext } from "../store/AppContext";
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
import { Link } from "react-router-dom";

const Connect = () => {
  const { mode } = useAppContext();

  return (
    <div
      className={`flex items-center w-[98%] xl:w-[68%] justify-center gap-0 xl:gap-6 my-6 xl:my-2 ${
        mode ? "bg-[#00000097]" : "bg-[#ffffff97]"
      }`}
    >
      <Link to={"/Celebrities"}>
        <BsFillPeopleFill
          className={`text-3xl xl:text-6xl text-[#247043] ${
            mode ? "opacity-30" : "opacity-40"
          }`}
        />
      </Link>

      <Link to={"/Podcast"}>
        <FaPodcast
          className={`text-3xl xl:text-6xl text-[#247043] ${
            mode ? "opacity-30" : "opacity-40"
          }`}
        />
      </Link>

      <Link to={"/Media"}>
        <IoPlayCircleSharp
          className={`text-3xl xl:text-6xl text-[#247043] ${
            mode ? "opacity-30" : "opacity-40"
          }`}
        />
      </Link>

      <Link to={"/NGO"}>
        <RiOrganizationChart
          className={`text-3xl xl:text-6xl text-[#247043] ${
            mode ? "opacity-30" : "opacity-40"
          }`}
        />
      </Link>

      <Link to={"/Tourism"}>
        <MdOutlineTravelExplore
          className={`text-3xl xl:text-6xl text-[#247043] ${
            mode ? "opacity-30" : "opacity-40"
          }`}
        />
      </Link>

      <Link to={"/Institutions"}>
        <BiSolidInstitution
          className={`text-3xl xl:text-6xl text-[#247043] ${
            mode ? "opacity-30" : "opacity-40"
          }`}
        />
      </Link>

      <Link to={"/Movies"}>
        <PiFilmSlateBold
          className={`text-3xl xl:text-6xl text-[#247043] ${
            mode ? "opacity-30" : "opacity-40"
          }`}
        />
      </Link>

      <Link to={"/TVShows"}>
        <GiFilmProjector
          className={`text-3xl xl:text-6xl text-[#247043] ${
            mode ? "opacity-30" : "opacity-40"
          }`}
        />
      </Link>

      <Link to={"/Cooking"}>
        <TbToolsKitchen2
          className={`text-3xl xl:text-6xl text-[#247043] ${
            mode ? "opacity-30" : "opacity-40"
          }`}
        />
      </Link>

      <Link to={"/Music"}>
        <FaSpotify
          className={`text-3xl xl:text-6xl text-[#247043] ${
            mode ? "opacity-30" : "opacity-40"
          }`}
        />
      </Link>

      <Link to={"/Instagram"}>
        <AiFillInstagram
          className={`text-3xl xl:text-6xl text-[#247043] ${
            mode ? "opacity-30" : "opacity-40"
          }`}
        />
      </Link>

      <Link to={"/Art"}>
        <FaPaintbrush
          className={`text-3xl xl:text-6xl text-[#247043] ${
            mode ? "opacity-30" : "opacity-40"
          }`}
        />
      </Link>
    </div>
  );
};

export default Connect;
