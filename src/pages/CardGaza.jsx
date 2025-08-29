import { useAppContext } from "../store/AppContext.jsx";
import Back from "../components/Back.jsx";
import DivLinePages from "../components/DivLinePages.jsx";
import Footer1 from "../sections/Footer1.jsx";
import SectionPhoto from "../components/SectionPhoto.jsx";
import CarouselGaza from "../components/CarouselGaza.jsx";

import img1 from "/src/images/gaza/almuariza.jpg";
import img2 from "/src/images/gaza/huda.jpg";
import img3 from "/src/images/gaza/mikel.jpg";
import { DescriptionStyle, SectionStyle, TitleStyle } from "./CardDetail1.jsx";
import { gazaTextContent } from "../utils/text-content.js";
import InstagramIcon from "../components/icons/InstagramIcon.jsx";
import TwitterIcon from "../components/icons/TwitterIcon.jsx";
import EarthIcon from "../components/icons/EarthIcon.jsx";

const CardGaza = () => {
  const { mode, lang } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={"Gaza"} />
      </div>

      <div
        className={`w-[98%] xl:w-[60%] mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="flex w-full flex-col text-center justify-center items-center gap-4">
          <h1 className="font-poppins font-bold text-xl md:text-2xl px-6 md:px-0 text-gradient uppercase">
            Shorts
          </h1>
          <CarouselGaza />
        </div>

        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img1} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {gazaTextContent(lang).almudena.title}
            </h1>
            <span className={DescriptionStyle}>
              {gazaTextContent(lang).almudena.description}
            </span>
            <div className="flex gap-4">
              <a
                href="https://cadenaser.com/nacional/2025/05/28/almudena-ariza-denuncia-lo-que-pasa-cada-vez-que-escribe-gaza-en-x-cadena-ser/?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl"
              >
                <EarthIcon />
              </a>
              <a
                href="https://www.instagram.com/almudena.ariza/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://x.com/almuariza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img2} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>{gazaTextContent(lang).huda.title}</h1>
            <span className={DescriptionStyle}>
              {gazaTextContent(lang).huda.description}
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.rtve.es/play/videos/fin-de-semana-24h/huda-emad-voz-espanol-franja-gaza/16678809/?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl"
              >
                <EarthIcon />
              </a>
              <a
                href="https://www.instagram.com/hudaemad_98/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl"
              >
                <InstagramIcon />
              </a>
            </div>
            <p className="font-semibold text-xs ">
              {lang
                ? "Cobertura reciente: “Me quedé para hacer llegar mi voz a oyentes hispanohablantes”"
                : "Recent coverage: 'I stayed to make my voice heard to Spanish-speaking listeners.'"}
            </p>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img3} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>{gazaTextContent(lang).mikel.title}</h1>
            <span className={DescriptionStyle}>
              {gazaTextContent(lang).mikel.description}
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.mikelayestaran.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl"
              >
                <EarthIcon />
              </a>
              <a
                href="https://www.instagram.com/mikelayestaran/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl"
              >
                <InstagramIcon />
              </a>
            </div>
            <p className="font-semibold text-xs flex flex-col gap-1">
              {lang
                ? "Reciente columna en HuffPost califica la situación en Gaza como una “animalización absoluta del ser humano”, con visión crítica y humana de los hechos."
                : "A recent column in HuffPost describes the situation in Gaza as an 'absolute animalization of the human being', with a critical and humane view of the facts."}
              <a
                className="hover:underline"
                href="https://www.huffingtonpost.es/global/mikelayestaran.html?utm_source=chatgpt.com"
              >
                {lang ? "Ir a la nota" : "Go to article"}
              </a>
            </p>
          </div>
        </div>
      </div>

      <DivLinePages />

      <Footer1 />
    </>
  );
};

export default CardGaza;
