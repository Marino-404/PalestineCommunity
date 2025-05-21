import React from "react";
import { useAppContext } from "../AppContext";
import Back from "../components/Back";
import DivLinePages from "../components/DivLinePages";
import Footer from "../sections/Footer";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

import arg from "../images/flags/arg.png";
import peru from "../images/flags/peru.png";
import chile from "../images/flags/chile.png";
import uruguay from "../images/flags/uruguay.png";
import nicaragua from "../images/flags/nicaragua.png";
import colombia from "../images/flags/colombia.png";
import españa from "../images/flags/españa.png";

const imgStyle = "w-[34px] h-[34px] mb-2";
const TitleStyle = "font-poppins font-semibold text-md text-gradient";
const UbicationStyle = "flex font-poppins font-semibold text-2xl gap-2";

const CardDetail12 = () => {
  const { mode } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={"Instituciones"} />
      </div>

      <div
        className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>CENTRO PALESTINO</h1>
            <span className={UbicationStyle}>ROSARIO</span>
            <img src={arg} alt="arg" className={imgStyle} />
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/palestinosrosario/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>EMBAJADA DE PALESTINA</h1>
            <span className={UbicationStyle}>ARGENTINA</span>
            <img src={arg} alt="arg" className={imgStyle} />
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/palestinaenargentina?igsh=MXJ5aXo2d2RxbzdhZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://youtube.com/@embajadapalestina6040?si=3ejZUF73KdrHOEON"
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

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>EMBAJADA DE PALESTINA</h1>
            <span className={UbicationStyle}>PERU</span>
            <img src={peru} alt="peru" className={imgStyle} />
            <a
              href="https://www.instagram.com/palestinaenperu?igsh=MWxqZm45dXZ3a3o2Nw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>EMBAJADA DE PALESTINA</h1>
            <span className={UbicationStyle}>CHILE</span>
            <img src={chile} alt="Chile" className={imgStyle} />
            <a
              href="https://www.instagram.com/embajadapalestinachile?igsh=MWdtZTdzenIzbHo2Yw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>EMBAJADA DE PALESTINA</h1>
            <span className={UbicationStyle}>URUGUAY</span>
            <img src={uruguay} alt="Uruguay" className={imgStyle} />
            <a
              href="https://www.instagram.com/palestinaenuruguay?igsh=MTB1aGdlZGppaXpmeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>EMBAJADA DE PALESTINA</h1>
            <span className={UbicationStyle}>NICARAGUA</span>
            <img src={nicaragua} alt="Nicaragua" className={imgStyle} />
            <a
              href="https://www.instagram.com/palestinaennicaragua?igsh=MTFzMHJxeGFtcGliaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>EMBAJADA DE PALESTINA</h1>
            <span className={UbicationStyle}>COLOMBIA</span>
            <img src={colombia} alt="Colombia" className={imgStyle} />
            <a
              href="https://www.instagram.com/embpalcol?igsh=MWo5NHZleDF4OXRnaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>EMBAJADA DE PALESTINA</h1>
            <span className={UbicationStyle}>ESPAÑA</span>
            <img src={españa} alt="Espana" className={imgStyle} />
            <a
              href="https://www.instagram.com/palestinaenespana?igsh=NDY1NHoycHVha2Ry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <Footer />
      </div>
    </>
  );
};

export default CardDetail12;
