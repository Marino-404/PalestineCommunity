import { useAppContext } from "../store/AppContext.jsx";
import Back from "../components/Back";
import Footer1 from "../sections/Footer1";
import DivLinePages from "../components/DivLinePages";
import SectionPhoto from "../components/SectionPhoto";
import { SectionStyle, TitleStyle, DescriptionStyle } from "./CardDetail1";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { cocinaTextContent } from "../utils/text-content.js";

import img1 from "/src/images/comida/comida1.png";
import img2 from "/src/images/comida/comida2.png";
import img3 from "/src/images/comida/comida3.png";
import img4 from "/src/images/comida/comida4.png";

const CardDetail3 = () => {
  const { mode, lang } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={lang ? "Cocina" : "Cooking"} />
      </div>

      <div
        className={`w-[98%] xl:w-[60%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img1} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {cocinaTextContent(lang).Cocina1.title}
            </h1>
            <span className={DescriptionStyle}>
              {cocinaTextContent(lang).Cocina1.description}
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/palestineonaplate?igsh=MTdmNHJ4amJ1aG9ndA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.youtube.com/@palestineonaplate8553"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.palestineonaplate.com/cooking-classes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <BiWorld />
              </a>
            </div>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img2} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {cocinaTextContent(lang).Cocina2.title}
            </h1>
            <span className={DescriptionStyle}>
              {cocinaTextContent(lang).Cocina2.description}
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/hamadashoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.facebook.com/share/jGxNevTXZUk9p3vj/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img3} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {cocinaTextContent(lang).Cocina3.title}
            </h1>
            <span className={DescriptionStyle}>
              {cocinaTextContent(lang).Cocina3.description}
            </span>
            <a
              href="https://www.youtube.com/watch?v=FLmNLrog6dQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img4} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {cocinaTextContent(lang).Cocina4.title}
            </h1>
            <span className={DescriptionStyle}>
              {cocinaTextContent(lang).Cocina4.description}
            </span>
            <a
              href="https://www.youtube.com/watch?v=fSuN9xPKUMw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <DivLinePages />
      </div>
      <Footer1 />
    </>
  );
};

export default CardDetail3;
