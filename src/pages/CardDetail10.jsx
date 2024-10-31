import React from "react";
import { useAppContext } from "../AppContext";
import Back from "../components/Back";
import DivLinePages from "../components/DivLinePages";
import Footer from "../sections/Footer";
import { TitleStyle } from "./CardDetail1";
import { AiFillInstagram } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

const CardDetail10 = () => {
  const { mode } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={"ONG"} />
      </div>

      <div
        className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>YASSSER ARAFAT FOUNDATION</h1>
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

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>FUNDACION BELEN</h1>
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

        <DivLinePages />

        <div className="xl:h-[18vw] flex xl:flex-row flex-col">
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>FUNDACION SIRIO PALESTINA</h1>
            <a
              href="https://www.instagram.com/fundacionsiriopalestina?igsh=MTE2c3k0OXN4bDI2OQ=="
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
            <h1 className={TitleStyle}>DELIA ART FOUNDATION</h1>
            <a
              href="https://www.instagram.com/delia.arts.foundation?igsh=cnM3b2hqYWJqeTlr"
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
            <h1 className={TitleStyle}>QATTAN FOUNDATION</h1>
            <a
              href="https://www.instagram.com/qattanfoundation?igsh=aHJ4OWxvaG14dTY5"
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

export default CardDetail10;
