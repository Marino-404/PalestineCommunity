import React from "react";
import { useAppContext } from "../AppContext";
import Footer from "../sections/Footer";
import Back from "../components/Back";
import DivLinePages from "../components/DivLinePages";
import SectionPhoto from "../components/SectionPhoto";
import { SectionStyle, TitleStyle, DescriptionStyle } from "./CardDetail1";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

import img1 from "/src/images/art/1.png";
import img2 from "/src/images/art/2.png";
import img3 from "/src/images/art/3.png";
import img4 from "/src/images/art/4.png";
import img5 from "/src/images/art/5.png";
import img6 from "/src/images/art/6.png";
import img7 from "/src/images/art/7.png";

const CardDetail6 = () => {
  const { mode } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={"Art"} />
      </div>

      <div
        className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img1} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>MAHMOUD DARWISH</h1>
            <span className={DescriptionStyle}>
              Poeta Nacional Palestino y símbolo de la cultura palestina.
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
            <h1 className={TitleStyle}>SLIMAN MANZOUR</h1>
            <span className={DescriptionStyle}>
              Es el artista palestino más conocido, fue clave en el desarrollo
              de la educación artística palestina, como cofundador y director
              del Centro de Arte al-Wasiti de Jerusalén Este, y miembro fundador
              de la Academia Internacional de Arte Palestina de Ramala.
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
            <h1 className={TitleStyle}>RAWAN ANANI</h1>
            <span className={DescriptionStyle}>
              Rawan Anani nacida en Jerusalén en 1978, en sus pinturas, la
              herencia palestina siempre está presente a través de los vestidos
              folclóricos palestinos, la caligrafía, el paisaje palestino o
              incluso las casas antiguas palestinas.
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
            <h1 className={TitleStyle}>RANA SAMARA</h1>
            <span className={DescriptionStyle}>
              Rana Samara es una pintora palestina, nacida en Jerusalen. Su
              trabajo explora las expectativas y los tabúes de la sociedad con
              respecto a la sexualidad y los roles de género de las mujeres
              palestinas.
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
            <h1 className={TitleStyle}>MALAK MATTAR</h1>
            <span className={DescriptionStyle}>
              Malak Mattar es una artista gazatí cuya obra refleja las distintas
              emociones humanas ligadas a la guerra.
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
            <h1 className={TitleStyle}>HEL FUNOUN</h1>
            <span className={DescriptionStyle}>
              El-Funoun es una organización independiente y sin fines de lucro,
              coronada como la más prominente compañía de danza palestina del
              país, con más de mil presentaciones locales e internacionales.
              El-Funoun ha buscado expresar el espíritu del folclore árabe y
              palestino así como de la cultura contemporánea a través de
              originales combinaciones de música y danza tradicional. El-Funoun
              es la entidad cultural que ha jugado el rol más significativo en
              revivir y reactivar la danza folclórica palestina.
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
            <h1 className={TitleStyle}>TATREEZ</h1>
            <span className={DescriptionStyle}>
              Tatreez es una forma de arte del bordado tradicional palestino con
              siglos de antigüedad. Tatreez significa bordado en árabe,
              simboliza la eterna resistencia palestina, impulsa oportunidades
              económicas para las mujeres palestinas y presenta historias de su
              tierra natal.Cada pueblo y ciudad de Palestina tiene diseños
              específicos de su región.Detrás de los textiles hay historia,
              identidad y hogar.
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

        <Footer />
      </div>
    </>
  );
};

export default CardDetail6;
