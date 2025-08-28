import { useAppContext } from "../store/AppContext.jsx";
import Footer1 from "../sections/Footer1";
import Back from "../components/Back";
import DivLinePages from "../components/DivLinePages";
import SectionPhoto from "../components/SectionPhoto";
import { SectionStyle, TitleStyle, DescriptionStyle } from "./CardDetail1";
import { FaYoutube, FaInstagram } from "react-icons/fa6";
import { celebridadesTextContent } from "../utils/text-content.js";

import img1 from "/src/images/celebridades/1.png";
import img2 from "/src/images/celebridades/2.png";
import img3 from "/src/images/celebridades/3.png";
import img4 from "/src/images/celebridades/4.png";
import img5 from "/src/images/celebridades/5.webp";

const CardDetail7 = () => {
  const { mode, lang } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={lang ? "Celebridades" : "Celebrities"} />
      </div>

      <div
        className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img5} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {celebridadesTextContent(lang).bono.title}
            </h1>
            <span className={DescriptionStyle}>
              {celebridadesTextContent(lang).bono.description}
            </span>
            <a
              href="https://www.youtube.com/watch?v=FV2u0BxNxc8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img1} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {celebridadesTextContent(lang).bella.title}
            </h1>
            <span className={DescriptionStyle}>
              {celebridadesTextContent(lang).bella.description}
            </span>
            <a
              href="https://www.instagram.com/bellahadid?igsh=MTk3N2I3a3RqNHVyeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img2} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {celebridadesTextContent(lang).julia.title}
            </h1>
            <span className={DescriptionStyle}>
              {celebridadesTextContent(lang).julia.description}
            </span>
            <a
              href="https://youtu.be/834tyxBxksU?si=Ov48VDxX7sCFrHkz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaYoutube />
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
              {celebridadesTextContent(lang).roger.title}
            </h1>
            <span className={DescriptionStyle}>
              {celebridadesTextContent(lang).roger.description}
            </span>
            <div className="flex flex-col items-center gap-2">
              <p className="font-poppins">
                {lang ? "Canción para Palestina:" : "Song for Palestine:"}{" "}
                <span className="font-bold">WE SHALL OVERCOME</span>
              </p>
              <a
                href="https://youtu.be/hQxXdNcloik?si=_XrgR8dGvceGQ2x1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img4} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {celebridadesTextContent(lang).residente.title}
            </h1>
            <span className={DescriptionStyle}>
              {celebridadesTextContent(lang).residente.description}
            </span>
            <span className="font-poppins pb-4">
              {lang ? "Canciones para Palestina:" : "Songs for Palestine:"}
            </span>

            <div className="flex flex-col xl:flex-row text-center items-center md:gap-6 gap-4">
              <div className="w-full md:w-auto  flex flex-col items-center text-center gap-1">
                <p className="font-poppins">
                  <span className="font-bold">MULTI VIRAL</span>
                </p>
                <a
                  href="https://youtu.be/EjSCy1GC6Sc?si=K_8Ax1MWQiSzqVdU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl"
                >
                  <FaYoutube />
                </a>
              </div>

              <div className="w-full md:w-auto  flex flex-col items-center text-center gap-1">
                <p className="font-poppins">
                  <span className="font-bold">BAJO LOS ESCOMBROS</span>
                </p>
                <a
                  href="https://youtu.be/COgKs7YcRQE?si=YS97q3jXvCsJlYyv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl"
                >
                  <FaYoutube />
                </a>
              </div>

              <div className="w-full md:w-auto flex flex-col items-center text-center gap-1">
                <p className="font-poppins">
                  <span className="font-bold">GUERRA</span>
                </p>
                <a
                  href="https://youtu.be/Zl_GlPquElI?si=xRXIhwmG16HD2PQe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        <DivLinePages />
      </div>
      <Footer1 />
    </>
  );
};

export default CardDetail7;
