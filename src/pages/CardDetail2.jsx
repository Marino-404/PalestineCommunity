import { useAppContext } from "../AppContext";
import Back from "../components/Back";
import MoviePhoto from "../components/MoviePhoto";
import DivLinePages from "../components/DivLinePages";
import Footer1 from "../sections/Footer1";
import {
  SectionStyle,
  TitleStyle,
  DescriptionStyle,
  Stars,
} from "./CardDetail1";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

import img1 from "/src/images/series/serie1.png";
import img2 from "/src/images/series/serie2.png";
import img3 from "/src/images/series/serie3.png";
import img4 from "/src/images/series/serie4.png";
import img5 from "/src/images/series/serie5.png";
import img6 from "/src/images/series/serie6.png";
import img7 from "/src/images/series/serie7.png";
import img8 from "/src/images/series/serie8.webp";

const CardDetail2 = () => {
  const { mode } = useAppContext();
  return (
    <>
      <div>
        <Back SectionName={"Series"} />
      </div>

      <div
        className={`w-[98%] xl:w-[68%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img8} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>MO</h1>
            <span className={DescriptionStyle}>
              Mo Najjar, palestino que vive en Houston y lleva años intentando
              conseguir la ciudadanía estadounidense mientras trabaja en empleos
              informales y enfrenta múltiples obstáculos. La segunda temporada
              incluye un viaje a México, una visita a Palestina y referencias
              directas a la Nakba y la identidad cultural.
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.netflix.com/ar/title/81134264"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaPlayCircle />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img2} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>East Side</h1>
            <span className={DescriptionStyle}>
              Una serie basada en hechos reales que denuncia la ocupación de
              Jerusalén Este, de mayoría árabe, por parte de poderosos grupos
              israelíes.
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStarHalfAlt className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.filmin.es/serie/east-side"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaPlayCircle />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img3} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>Gaza Mon Amour</h1>
            <span className={DescriptionStyle}>
              Narra un delicado romance entre dos ancianos en medio de la
              frontera del horror. Gaza, hoy.
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStarHalfAlt className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.filmin.es/pelicula/gaza-mon-amour"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaPlayCircle />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img4} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>Lo que Walaa quiere</h1>
            <span className={DescriptionStyle}>
              Walaa, una chica adolescente criada en un campo de refugiados, que
              rompe todas las reglas al decidir convertirse en una de las pocas
              mujeres policías de las fuerzas de seguridad palestinas.
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.filmin.es/pelicula/lo-que-walaa-quiere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaPlayCircle />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img5} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>El color de los Olivos</h1>
            <span className={DescriptionStyle}>
              Diversos personajes muestran la vulneración de derechos humanos
              que sufre diariamente la población palestina en la Franja de Gaza
              y la situación de bloqueo y posguerra en la que trata de
              sobrevivir.
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.filmin.es/pelicula/el-color-de-los-olivos?origin=searcher&origin-query=primary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaPlayCircle />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img6} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>Inch Allah</h1>
            <span className={DescriptionStyle}>
              La familia Amer vive rodeada por el muro en Cisjordania, puertas
              electrificadas, candados y la presencia constante de soldados. Se
              revelan sus luchas constantes y los pequeños detalles de su vida.
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStarHalfAlt className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.primevideo.com/-/es/detail/InchAllah/0OEET133USRQRFE1EYASVS6VRG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaPlayCircle />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img7} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>GAZA</h1>
            <span className={DescriptionStyle}>
              Chloe es una joven tocóloga que se ocupa de mujeres embarazadas
              bajo la supervisión de Michael, un médico francés, en un
              ambulatorio improvisado en un campo de refugiados de Cisjordania.
              Debe enfrentarse a diario a los controles y al conflicto que
              afectan a la vida de las personas.
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.filmin.es/corto/gaza?origin=searcher&origin-query=primary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaPlayCircle />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img1} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>Fauda</h1>
            <span className={DescriptionStyle}>
              Un veterano agente israelí vuelve a la caza en busca de un
              luchador palestino que creía muerto, poniendo en marcha una serie
              de eventos caóticos.
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStarHalfAlt className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.netflix.com/ar/title/80113612"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaPlayCircle />
            </a>
          </div>
        </div>

        <DivLinePages />
      </div>
      <Footer1 />
    </>
  );
};

export default CardDetail2;
