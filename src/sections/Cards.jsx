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
import DivLineCards from "../components/DivLineCards";
import { Link } from "react-router-dom";
import New from "../components/New";
import { cardTextContent } from "../utils/text-content";

const Cards = () => {
  const { mode, lang } = useAppContext();

  const cardIcons = {
    Peliculas: <PiFilmSlateBold className="text-6xl xl:text-7xl opacity-10" />,
    Series: <GiFilmProjector className="text-6xl md:text-7xl opacity-10" />,
    Cocina: <TbToolsKitchen2 className="text-6xl md:text-7xl opacity-10" />,
    Spotify: <FaSpotify className="text-6xl md:text-7xl opacity-10" />,
    Instagram: <AiFillInstagram className="text-6xl md:text-7xl opacity-10" />,
    Arte: <FaPaintbrush className="text-6xl md:text-7xl opacity-10" />,
    Celebridades: (
      <BsFillPeopleFill className="text-6xl md:text-7xl opacity-10" />
    ),
    Podcast: <FaPodcast className="text-6xl md:text-7xl opacity-10" />,
    Media: <IoPlayCircleSharp className="text-6xl md:text-7xl opacity-10" />,
    ONG: <RiOrganizationChart className="text-6xl md:text-7xl opacity-10" />,
    Turismo: (
      <MdOutlineTravelExplore className="text-6xl md:text-7xl opacity-10" />
    ),
    Instituciones: (
      <BiSolidInstitution className="text-6xl md:text-7xl opacity-10" />
    ),
  };

  const cardsData = [
    {
      id: "Peliculas",
      title: cardTextContent(lang).Peliculas,
      className: "card-1",
      path: "/Movies",
    },
    {
      id: "Series",
      title: cardTextContent(lang).Series,
      className: "card-2",
      path: "/TVShows",
    },
    {
      id: "Cocina",
      title: cardTextContent(lang).Cocina,
      className: "card-3",
      path: "/Cooking",
    },
    {
      id: "Spotify",
      title: cardTextContent(lang).Spotify,
      className: "card-4",
      path: "/Music",
    },
    {
      id: "Instagram",
      title: cardTextContent(lang).Instagram,
      className: "card-5",
      path: "/Instagram",
    },
    {
      id: "Arte",
      title: cardTextContent(lang).Arte,
      className: "card-6",
      path: "/Art",
    },
    {
      id: "Celebridades",
      title: cardTextContent(lang).Celebridades,
      className: "card-7",
      path: "/Celebrities",
    },
    {
      id: "Podcast",
      title: cardTextContent(lang).Podcast,
      className: "card-8",
      path: "/Podcast",
    },
    {
      id: "Media",
      title: cardTextContent(lang).Media,
      className: "card-9",
      path: "/Media",
    },
    {
      id: "ONG",
      title: cardTextContent(lang).ONG,
      className: "card-10",
      path: "/NGO",
    },
    {
      id: "Turismo",
      title: cardTextContent(lang).Turismo,
      className: "card-11",
      path: "/Tourism",
    },
    {
      id: "Instituciones",
      title: cardTextContent(lang).Instituciones,
      className: "card-12",
      path: "/Institutions",
    },
  ];

  return (
    <section
      className="w-full h-auto flex flex-col items-center justify-center text-custom-white px-2 z-10 scroll-mt-[10vh]"
      id="Connect"
    >
      <div className="flex items-center justify-center">
        <span
          className={` ${
            mode ? "text-custom-white" : "text-custom-black"
          }  flex items-center justify-center text-center xl:text-3xl text-md font-poppins font-light`}
        >
          {cardTextContent(lang).intro}
        </span>
      </div>

      <DivLineCards />
      <New />
      <DivLineCards />

      {/* Card Gaza */}
      <Link
        to="/Gaza"
        className={`w-[96%] xl:w-[55%] xl:h-[8vw] h-[24vw] flex justify-center items-center relative card-gaza  backdrop-blur-md mt-12`}
      >
        <h1 className="absolute text-3xl xl:text-5xl font-semibold text-custom-white">
          Gaza {cardTextContent(lang).featured}
        </h1>
      </Link>

      <div className="xl:w-[68%] w-full flex flex-wrap justify-center mb-12 pt-3 xl:pt-8 xl:gap-8 gap-3 z-10">
        {cardsData.map((card, id) => (
          <Link
            key={id}
            to={card.path}
            className={`w-[47%] md:w-1/4 xl:w-1/4 xl:h-[6vw] h-[21vw] flex justify-center items-center relative ${card.className} rounded-md backdrop-blur-md bg-opacity-80`}
          >
            <h1 className="absolute text-sm xl:text-xl font-light text-custom-white">
              {card.title}
            </h1>
            <span className="xl:hover:scale-125 transition-transform duration-300 xl:py-2 xl:px-24">
              {cardIcons[card.id]}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Cards;
