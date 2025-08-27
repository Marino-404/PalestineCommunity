import { useAppContext } from "../store/AppContext.jsx";
import Footer1 from "../sections/Footer1";
import Back from "../components/Back";
import DivLinePages from "../components/DivLinePages";
import SectionPhoto from "../components/SectionPhoto";
import { SectionStyle, TitleStyle, DescriptionStyle } from "./CardDetail1";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { artTextContent } from "../utils/text-content.js";

import img1 from "/src/images/art/1.png";
import img2 from "/src/images/art/2.png";
import img3 from "/src/images/art/3.png";
import img4 from "/src/images/art/4.png";
import img5 from "/src/images/art/5.png";
import img6 from "/src/images/art/6.png";
import img7 from "/src/images/art/7.png";
import img8 from "/src/images/art/8.webp";

const CardDetail6 = () => {
  const { mode, lang } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={lang ? "Arte" : "Art"} />
      </div>

      <div
        className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img8} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {artTextContent(lang).RAFEEF_ZIADAH.title}
            </h1>
            <span className={DescriptionStyle}>
              {artTextContent(lang).RAFEEF_ZIADAH.description}
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/rafeef.ziadah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.youtube.com/watch?v=neYO0kJ-6XQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.rafeefziadah.net/about/"
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

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img1} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {artTextContent(lang).MAHMOUD_DARWISH.title}
            </h1>
            <span className={DescriptionStyle}>
              {artTextContent(lang).MAHMOUD_DARWISH.description}
            </span>
            <a
              href="http://www.poesiaarabe.com/mahmud%20darwish.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <BiWorld />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img2} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {artTextContent(lang).SLIMAN_MANZOUR.title}
            </h1>
            <span className={DescriptionStyle}>
              {artTextContent(lang).SLIMAN_MANZOUR.description}
            </span>
            <a
              href="https://www.instagram.com/sliman.mansour/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img3} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {artTextContent(lang).RAWAN_ANANI.title}
            </h1>
            <span className={DescriptionStyle}>
              {artTextContent(lang).RAWAN_ANANI.description}
            </span>
            <a
              href="https://www.instagram.com/rawan_anani_artgallery/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img4} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {artTextContent(lang).RANA_SAMARA.title}
            </h1>
            <span className={DescriptionStyle}>
              {artTextContent(lang).RANA_SAMARA.description}
            </span>
            <a
              href="https://www.instagram.com/rana.samara85/A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img5} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {artTextContent(lang).MALAK_MATTAR.title}
            </h1>
            <span className={DescriptionStyle}>
              {artTextContent(lang).MALAK_MATTAR.description}
            </span>
            <a
              href="https://www.instagram.com/malakmattarart/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img6} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {artTextContent(lang).HEL_FUNOUN.title}
            </h1>
            <span className={DescriptionStyle}>
              {artTextContent(lang).HEL_FUNOUN.description}
            </span>
            <a
              href="https://www.instagram.com/elfunoun_troupe/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img7} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>{artTextContent(lang).TATREEZ.title}</h1>
            <span className={DescriptionStyle}>
              {artTextContent(lang).HEL_FUNOUN.description}
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/tatreeztraditions?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.youtube.com/watch?v=QC15tZuAkYI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.tatreeztraditions.com/"
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
      </div>
      <Footer1 />
    </>
  );
};

export default CardDetail6;
