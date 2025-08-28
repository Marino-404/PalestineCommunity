import { useAppContext } from "../store/AppContext.jsx";
import Back from "../components/Back";
import DivLinePages from "../components/DivLinePages";
import DivLineCards from "../components/DivLineCards";
import Footer1 from "../sections/Footer1";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube, FaInstagram, FaDesktop } from "react-icons/fa6";
import SectionPhoto from "../components/SectionPhoto";
import { SectionStyle, TitleStyle } from "./CardDetail1";

import img1 from "/src/images/media/1.png";
import img2 from "/src/images/media/2.png";
import img3 from "/src/images/media/3.png";
import img4 from "/src/images/media/4.png";
import img5 from "/src/images/media/5.png";
import img6 from "/src/images/media/6.png";

import img7 from "/src/images/media/tv/1.png";
import img8 from "/src/images/media/tv/2.png";
import img9 from "/src/images/media/tv/3.png";

import img10 from "/src/images/media/radio/1.png";
import img11 from "/src/images/media/radio/2.png";
import img12 from "/src/images/media/radio/3.png";
import img13 from "/src/images/media/radio/4.png";

const CardDetail9 = () => {
  const { mode } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={"Media/TV/Radio"} />
      </div>

      <div
        className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="flex w-[60%] flex-col text-center justify-center items-center mx-auto">
          <h1
            className={`font-semibold font-poppins text-2xl ${
              mode ? "text-custom-white" : "text-custom-black"
            }`}
          >
            Media
          </h1>
          <DivLineCards />
        </div>

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img1} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>AJ PLUS ESPAÑOL</h1>
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@ajplusespanol?_t=8pl92L9knaA&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <AiFillTikTok />
              </a>
            </div>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img2} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>COMUNIDAD PALESTINA DE CHILE</h1>
            <a
              href="https://www.tiktok.com/@comunidadpalestinachile?_t=8pl97e7k9RN&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillTikTok />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img3} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>EL CALAMO</h1>
            <a
              href="https://www.tiktok.com/@elcalamo?_t=8pl9KmjLbWA&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillTikTok />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img4} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>ANNUR TV</h1>
            <a
              href="https://www.instagram.com/annurtv?igsh=MW5vdHp5enB5c2d4cQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img5} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>PALESTINA HOY</h1>
            <a
              href="https://www.instagram.com/palestinahoy1?igsh=MWZ2c2k5bnYxOGs4bA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img6} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>EYE ON PALESTINE</h1>
            <a
              href="https://www.instagram.com/eye.on.palestine?igsh=MWJmOGM1dDg1ZXA2OQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="flex w-[60%] flex-col text-center justify-center items-center mx-auto pb-8">
          <h1
            className={`font-semibold font-poppins text-2xl ${
              mode ? "text-custom-white" : "text-custom-black"
            }`}
          >
            TV
          </h1>
          <DivLineCards />
        </div>

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img7} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>PALESTINE TV CHANNEL</h1>
            <a
              href="https://www.youtube.com/@palestinetvchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img8} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>PALESTINE TV CHANNEL</h1>
            <a
              href="https://www.youtube.com/@palestinetvchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img9} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>PALESTINE TV CHANNEL</h1>
            <a
              href="https://www.youtube.com/@palestinetvchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="flex w-[60%] flex-col text-center justify-center items-center mx-auto">
          <h1
            className={`font-semibold font-poppins text-2xl ${
              mode ? "text-custom-white" : "text-custom-black"
            }`}
          >
            Radio
          </h1>
          <DivLineCards />
        </div>

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img10} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>Shabab FM</h1>
            <a
              href="http://tun.in/se4VO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaDesktop />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img11} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>Raya FM</h1>
            <a
              href="http://tun.in/seLHR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaDesktop />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img12} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>Radio Bethlehem</h1>
            <a
              href="http://tun.in/seS0j"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaDesktop />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img13} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>Radio Mawwa</h1>
            <a
              href="http://tun.in/seLL7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaDesktop />
            </a>
          </div>
        </div>

        <DivLinePages />
      </div>

      <Footer1 />
    </>
  );
};

export default CardDetail9;
