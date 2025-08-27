import { useAppContext } from "../store/AppContext.jsx";
import Back from "../components/Back";
import MoviePhoto from "../components/MoviePhoto";
import DivLinePages from "../components/DivLinePages.jsx";
import Footer1 from "../sections/Footer1.jsx";
import img1 from "/src/images/peliculas/pelicula1.png";
import img2 from "/src/images/peliculas/pelicula2.png";
import img3 from "/src/images/peliculas/pelicula3.png";
import img4 from "/src/images/peliculas/pelicula4.png";
import img5 from "/src/images/peliculas/5.webp";
import img6 from "/src/images/peliculas/6.webp";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { peliculasTextContent } from "../utils/text-content.js";

export const SectionStyle =
  "flex flex-col xl:flex-row justify-center items-center xl:justify-center xl:items-center md:items-center md:justify-center";
export const TitleStyle =
  "font-poppins font-bold text-xl md:text-2xl pt-10 xl:pt-0 md:pt-0 px-6 md:px-0 text-gradient uppercase";
export const DescriptionStyle = "font-poppins font-normal text-md py-4 px-6";
export const Stars = "flex flex-row text-xl pb-4";

const CardDetail1 = () => {
  const { mode, lang } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={lang ? "Peliculas" : "Movies"} />
      </div>

      <div
        className={`w-[98%] xl:w-[60%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img5} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {peliculasTextContent(lang).Pelicula1.title}
            </h1>
            <span className={DescriptionStyle}>
              {peliculasTextContent(lang).Pelicula1.description}
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStarHalfAlt className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.youtube.com/watch?v=-pI2IXKtlew&source_ve_path=OTY3MTQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaPlayCircle />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img6} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {peliculasTextContent(lang).Pelicula2.title}
            </h1>
            <span className={DescriptionStyle}>
              {peliculasTextContent(lang).Pelicula2.description}
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStarHalfAlt className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.youtube.com/watch?v=-pI2IXKtlew&source_ve_path=OTY3MTQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaPlayCircle />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img2} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {peliculasTextContent(lang).Pelicula3.title}
            </h1>
            <span className={DescriptionStyle}>
              {peliculasTextContent(lang).Pelicula3.description}
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStarHalfAlt className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.netflix.com/search?q=200%20metros&jbv=81443440"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaPlayCircle />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img4} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {peliculasTextContent(lang).Pelicula4.title}
            </h1>
            <span className={DescriptionStyle}>
              {peliculasTextContent(lang).Pelicula4.description}
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.primevideo.com/region/na/detail/0QSVJZ84KNE0W5VN4D9SHBFJIN/ref=atv_sr_fle_c_Tn74RA_2_1_2?sr=1-2&pageTypeIdSource=ASIN&pageTypeId=B085LSTJ48&qid=1730756211723"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaPlayCircle />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img3} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {peliculasTextContent(lang).Pelicula5.title}
            </h1>
            <span className={DescriptionStyle}>
              {peliculasTextContent(lang).Pelicula5.description}
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.youtube.com/watch?v=zMEWDj7CXd0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaPlayCircle />
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
              {peliculasTextContent(lang).Pelicula6.title}
            </h1>
            <span className={DescriptionStyle}>
              {peliculasTextContent(lang).Pelicula6.description}
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStarHalfAlt className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.netflix.com/title/70117041?preventIntent=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaPlayCircle />
            </a>
          </div>
        </div>

        <DivLinePages />
      </div>
      <Footer1 />
    </>
  );
};

export default CardDetail1;
