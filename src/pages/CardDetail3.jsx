import React from "react";
import { useAppContext } from "../AppContext";
import Back from "../components/Back";
import Footer from "../sections/Footer";
import DivLinePages from "../components/DivLinePages";
import SectionPhoto from "../components/SectionPhoto";
import { SectionStyle, TitleStyle, DescriptionStyle } from "./CardDetail1";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

import img1 from "/src/images/comida/comida1.png";
import img2 from "/src/images/comida/comida2.png";
import img3 from "/src/images/comida/comida3.png";
import img4 from "/src/images/comida/comida4.png";

const CardDetail3 = () => {
  const { mode } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={"Cocina"} />
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
            <h1 className={TitleStyle}>JOUDIE KALLA - PALESTINE ON A PLATE</h1>
            <span className={DescriptionStyle}>
              Joudie Kalla es una talentosa cocinera, nacida en Londres, de
              padres de origen palestino. Su familia tiene sus raíces en
              Nazaret, Ramallah, Jaffa, Lydda, Safed y Belén. Su amor por la
              cocina comenzó desde muy joven, influenciada por las tradiciones
              culinarias de su familia. A lo largo de los años, ha dedicado su
              vida a preservar y compartir las ricas costumbres gastronómicas de
              Palestina, ha escrito dos libros, el primer libro de cocina,
              "Palestine on a Plate"y el segundo libro de cocina " Baladi: A
              Celebration of Food from Land and Sea.
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
            <h1 className={TitleStyle}>HAMADA SHAQOURA</h1>
            <span className={DescriptionStyle}>
              Un 'influencer' gastronómico palestino le pone “amor y
              resistencia” a sus platos para alimentar a los desplazados en
              Gaza. Hamada Shaqoura emplea ahora las redes sociales para mostrar
              al mundo el hambre que padecen los gazatíes y la dificultad para
              alimentarse con los escasos bienes básicos y ayuda humanitaria que
              Israel permite que llegue a la Franja.
            </span>
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

        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img3} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>MARK WIENS</h1>
            <span className={DescriptionStyle}>
              Mark Wiens es un joven Youtuber estadoundense, apasionado viajero
              y amante de la gastronomía, que ha conquistado el corazón de miles
              de seguidores en su canal de YouTube, uno de sus destinos más
              memorables ha sido Palestina.
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
            <h1 className={TitleStyle}>LUKE MARTIN</h1>
            <span className={DescriptionStyle}>
              Luke Martin es un influencer que ha conquistado el mundo digital
              con su canal de YouTube. Desde que comenzó su aventura, ha
              recorrido continentes, capturando la esencia de cada país a través
              de sus sabores. En este video viaja Palestina y nos recuerda que
              la comida es más que solo un plato; es una forma de conectar con
              las personas y las culturas que nos rodean.
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

        <Footer />
      </div>
    </>
  );
};

export default CardDetail3;
