import { useAppContext } from "../store/AppContext.jsx";
import Back from "../components/Back";
import DivLinePages from "../components/DivLinePages";
import Footer1 from "../sections/Footer1";
import InstagramIcon from "../components/icons/InstagramIcon.jsx";
import YoutubeIcon from "../components/icons/YoutubeIcon.jsx";
import arg from "../images/flags/arg.png";
import peru from "../images/flags/peru.png";
import chile from "../images/flags/chile.png";
import uruguay from "../images/flags/uruguay.png";
import nicaragua from "../images/flags/nicaragua.png";
import colombia from "../images/flags/colombia.png";
import españa from "../images/flags/españa.png";
import ShareIcon from "../components/icons/ShareIcons.jsx";

const imgStyle = "w-[34px] h-[34px] mb-2";
const TitleStyle =
  "font-poppins font-semibold text-lg text-gradient flex flex-row items-center gap-2 text-center";
const UbicationStyle = "flex font-poppins font-semibold text-2xl gap-2";

const CardDetail12 = () => {
  const { mode, lang } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={lang ? "Instituciones" : "Institutions"} />
      </div>

      <div
        className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {lang ? "CENTRO PALESTINO" : "PALESTINIAN CENTER"}{" "}
              <ShareIcon url="https://www.instagram.com/palestinosrosario/?hl=es" />
            </h1>
            <span className={UbicationStyle}>ROSARIO</span>
            <img src={arg} alt="arg" className={imgStyle} />
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/palestinosrosario/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {lang ? "EMBAJADA DE PALESTINA" : "PALESTINIAN EMBASSY"}{" "}
              <ShareIcon url="https://www.instagram.com/palestinaenargentina?igsh=MXJ5aXo2d2RxbzdhZA==" />
            </h1>
            <span className={UbicationStyle}>ARGENTINA</span>
            <img src={arg} alt="arg" className={imgStyle} />
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/palestinaenargentina?igsh=MXJ5aXo2d2RxbzdhZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://youtube.com/@embajadapalestina6040?si=3ejZUF73KdrHOEON"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {lang ? "EMBAJADA DE PALESTINA" : "PALESTINIAN EMBASSY"}{" "}
              <ShareIcon url="https://www.instagram.com/palestinaenperu?igsh=MWxqZm45dXZ3a3o2Nw==" />
            </h1>
            <span className={UbicationStyle}>PERU</span>
            <img src={peru} alt="peru" className={imgStyle} />
            <a
              href="https://www.instagram.com/palestinaenperu?igsh=MWxqZm45dXZ3a3o2Nw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {lang ? "EMBAJADA DE PALESTINA" : "PALESTINIAN EMBASSY"}{" "}
              <ShareIcon url="https://www.instagram.com/embajadapalestinachile?igsh=MWdtZTdzenIzbHo2Yw==" />
            </h1>
            <span className={UbicationStyle}>CHILE</span>
            <img src={chile} alt="Chile" className={imgStyle} />
            <a
              href="https://www.instagram.com/embajadapalestinachile?igsh=MWdtZTdzenIzbHo2Yw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {lang ? "EMBAJADA DE PALESTINA" : "PALESTINIAN EMBASSY"}{" "}
              <ShareIcon url="https://www.instagram.com/palestinaenuruguay?igsh=MTB1aGdlZGppaXpmeA==" />
            </h1>
            <span className={UbicationStyle}>URUGUAY</span>
            <img src={uruguay} alt="Uruguay" className={imgStyle} />
            <a
              href="https://www.instagram.com/palestinaenuruguay?igsh=MTB1aGdlZGppaXpmeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {lang ? "EMBAJADA DE PALESTINA" : "PALESTINIAN EMBASSY"}{" "}
              <ShareIcon url="https://www.instagram.com/palestinaennicaragua?igsh=MTFzMHJxeGFtcGliaA==" />
            </h1>
            <span className={UbicationStyle}>NICARAGUA</span>
            <img src={nicaragua} alt="Nicaragua" className={imgStyle} />
            <a
              href="https://www.instagram.com/palestinaennicaragua?igsh=MTFzMHJxeGFtcGliaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {lang ? "EMBAJADA DE PALESTINA" : "PALESTINIAN EMBASSY"}{" "}
              <ShareIcon url="https://www.instagram.com/embpalcol?igsh=MWo5NHZleDF4OXRnaA==" />
            </h1>
            <span className={UbicationStyle}>COLOMBIA</span>
            <img src={colombia} alt="Colombia" className={imgStyle} />
            <a
              href="https://www.instagram.com/embpalcol?igsh=MWo5NHZleDF4OXRnaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {lang ? "EMBAJADA DE PALESTINA" : "PALESTINIAN EMBASSY"}{" "}
              <ShareIcon url="https://www.instagram.com/palestinaenespana?igsh=NDY1NHoycHVha2Ry" />
            </h1>
            <span className={UbicationStyle}>ESPAÑA</span>
            <img src={españa} alt="Espana" className={imgStyle} />
            <a
              href="https://www.instagram.com/palestinaenespana?igsh=NDY1NHoycHVha2Ry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <DivLinePages />
      </div>
      <Footer1 />
    </>
  );
};

export default CardDetail12;
