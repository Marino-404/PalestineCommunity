import { useAppContext } from "../store/AppContext.jsx";
import Back from "../components/Back";
import MoviePhoto from "../components/MoviePhoto";
import DivLinePages from "../components/DivLinePages";
import Footer1 from "../sections/Footer1";
import { seriesTextContent } from "../utils/text-content.js";
import {
  SectionStyle,
  TitleStyle,
  DescriptionStyle,
  Stars,
} from "./CardDetail1";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import PlayIcon from "../components/icons/PlayIcon.jsx";

import img1 from "/src/images/series/serie1.png";
import img2 from "/src/images/series/serie2.png";
import img3 from "/src/images/series/serie3.png";
import img4 from "/src/images/series/serie4.png";
import img5 from "/src/images/series/serie5.png";
import img6 from "/src/images/series/serie6.png";
import img7 from "/src/images/series/serie7.png";
import img8 from "/src/images/series/serie8.webp";
import ShareIcon from "../components/icons/ShareIcons.jsx";

const CardDetail2 = () => {
  const { mode, lang } = useAppContext();
  return (
    <>
      <div>
        <Back SectionName={lang ? "Series" : "TV Shows"} />
      </div>

      <div
        className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img8} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {seriesTextContent(lang).Serie1.title}
              <ShareIcon url="https://www.netflix.com/ar/title/81134264" />
            </h1>
            <span className={DescriptionStyle}>
              {seriesTextContent(lang).Serie1.description}
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.netflix.com/ar/title/81134264"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img2} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {seriesTextContent(lang).Serie2.title}
              <ShareIcon url="https://www.filmin.es/serie/east-side" />
            </h1>
            <span className={DescriptionStyle}>
              {seriesTextContent(lang).Serie2.description}
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStarHalfAlt className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.filmin.es/serie/east-side"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img3} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {seriesTextContent(lang).Serie3.title}
              <ShareIcon url="https://www.filmin.es/pelicula/gaza-mon-amour" />
            </h1>
            <span className={DescriptionStyle}>
              {seriesTextContent(lang).Serie3.description}
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStarHalfAlt className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.filmin.es/pelicula/gaza-mon-amour"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img4} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {seriesTextContent(lang).Serie4.title}
              <ShareIcon url="https://www.filmin.es/pelicula/lo-que-walaa-quiere" />
            </h1>
            <span className={DescriptionStyle}>
              {seriesTextContent(lang).Serie4.description}
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.filmin.es/pelicula/lo-que-walaa-quiere"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img5} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {seriesTextContent(lang).Serie5.title}
              <ShareIcon url="https://www.filmin.es/pelicula/el-color-de-los-olivos?origin=searcher&origin-query=primary" />
            </h1>
            <span className={DescriptionStyle}>
              {seriesTextContent(lang).Serie5.description}
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.filmin.es/pelicula/el-color-de-los-olivos?origin=searcher&origin-query=primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img6} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {seriesTextContent(lang).Serie6.title}
              <ShareIcon url="https://www.primevideo.com/-/es/detail/InchAllah/0OEET133USRQRFE1EYASVS6VRG" />
            </h1>
            <span className={DescriptionStyle}>
              {seriesTextContent(lang).Serie6.description}
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStarHalfAlt className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.primevideo.com/-/es/detail/InchAllah/0OEET133USRQRFE1EYASVS6VRG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img7} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {seriesTextContent(lang).Serie7.title}
              <ShareIcon url="https://www.filmin.es/corto/gaza?origin=searcher&origin-query=primary" />
            </h1>
            <span className={DescriptionStyle}>
              {seriesTextContent(lang).Serie7.description}
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.filmin.es/corto/gaza?origin=searcher&origin-query=primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img1} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {seriesTextContent(lang).Serie8.title}
              <ShareIcon url="https://www.netflix.com/ar/title/80113612" />
            </h1>
            <span className={DescriptionStyle}>
              {seriesTextContent(lang).Serie8.description}
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStarHalfAlt className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.netflix.com/ar/title/80113612"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayIcon />
            </a>
          </div>
        </div>

        <DivLinePages />
      </div>
      <Footer1 />
    </>
  );
};

export default CardDetail2;
