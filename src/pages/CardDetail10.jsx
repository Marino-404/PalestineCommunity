import { useAppContext } from "../store/AppContext.jsx";
import Back from "../components/Back";
import DivLinePages from "../components/DivLinePages";
import Footer1 from "../sections/Footer";
import SectionPhoto from "../components/SectionPhoto";
import { TitleStyle, SectionStyle } from "./CardDetail1";
import { BiWorld } from "react-icons/bi";

import img1 from "/src/images/ong/1.png";
import img2 from "/src/images/ong/2.png";
import img3 from "/src/images/ong/3.png";
import img4 from "/src/images/ong/4.png";
import img5 from "/src/images/ong/5.png";

const CardDetail10 = () => {
  const { mode, lang } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={lang ? "ONG" : "NGO"} />
      </div>

      <div
        className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img1} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>YASSSER ARAFAT FOUNDATION</h1>
            <div className="flex gap-4">
              <a
                href="https://www.yaf.ps/index-en.html"
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

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img2} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>FUNDACION BELEN</h1>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/fundacionbelen2000?igsh=MTA0amk5MnU2YW84ZQ=="
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

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img3} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>FUNDACION SIRIO PALESTINA</h1>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/fundacionsiriopalestina?igsh=MTE2c3k0OXN4bDI2OQ==="
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

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img4} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>DELIA ART FOUNDATION</h1>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/delia.arts.foundation?igsh=cnM3b2hqYWJqeTlr"
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

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img5} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>QATTAN FOUNDATION</h1>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/qattanfoundation?igsh=aHJ4OWxvaG14dTY5"
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

export default CardDetail10;
