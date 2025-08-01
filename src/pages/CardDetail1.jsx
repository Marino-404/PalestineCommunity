import { useAppContext } from "../AppContext.jsx";
import Back from "../components/Back";
import MoviePhoto from "../components/MoviePhoto";
import DivLinePages from "../components/DivLinePages.jsx";
import Footer1 from "../sections/Footer1.jsx";
import img1 from "/src/images/peliculas/pelicula1.png";
import img2 from "/src/images/peliculas/pelicula2.png";
import img3 from "/src/images/peliculas/pelicula3.png";
import img4 from "/src/images/peliculas/pelicula4.png";
import img5 from "/src/images/peliculas/5.webp";
import img6 from "/src/images/peliculas/6.webp";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

export const SectionStyle =
  "flex flex-col xl:flex-row justify-center items-center xl:justify-center xl:items-center md:items-center md:justify-center";
export const TitleStyle =
  "font-poppins font-bold text-xl md:text-2xl pt-10 xl:pt-0 md:pt-0 px-6 md:px-0 text-gradient uppercase";
export const DescriptionStyle = "font-poppins font-normal text-md py-4 px-6";
export const Stars = "flex flex-row text-xl pb-4";

const CardDetail1 = () => {
  const { mode } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={"Peliculas"} />
      </div>

      <div
        className={`w-[98%] xl:w-[60%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="xl:h-[24vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img5} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>NO OTHER LAND</h1>
            <span className={DescriptionStyle}>
              Basel Adra, activista palestino que lucha contra el desplazamiento
              forzado de su comunidad en Cisjordania. A través de su cámara,
              documenta la destrucción de su tierra natal a manos del ejército
              israelí, que derrumba casas y expulsa a los residentes para
              instalar una zona de tiro militar. En medio de este conflicto,
              Basel entabla una inesperada amistad con Yuval, un periodista
              israelí judío que apoya su causa.
              <br />
              <br />
              En Argentina, podés encontrarla en streaming en tres plataformas:
              Prime Video, Filmin y Movistar+.
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStarHalfAlt className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.youtube.com/watch?v=-pI2IXKtlew&source_ve_path=OTY3MTQ"
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
            <h1 className={TitleStyle}>FARHA</h1>
            <span className={DescriptionStyle}>
              Farha, una niña de catorce años que vive con su padre en un pueblo
              palestino. Amante de los libros, decide irse a vivir a la ciudad
              para estudiar, pero sus planes se ven interrumpidos por la Nakba,
              el conflicto político que derivo en la creación del estado de
              Israel y que hizo que más de 800 mil palestinos abandonen sus
              hogares.
              <br />
              <br />
              Al intentar ver la película desde Argentina, Netflix muestra un
              anuncio en la pantalla: "este título no está disponible en su
              país". Sin embargo, se puede acceder a ella cambiando el idioma de
              la cuenta a inglés.
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStarHalfAlt className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.youtube.com/watch?v=-pI2IXKtlew&source_ve_path=OTY3MTQ"
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
            <h1 className={TitleStyle}>A 200 Metros</h1>
            <span className={DescriptionStyle}>
              <p className="font-semibold mb-2">
                Censurada por Netflix recientemente.
              </p>
              Mustafa y su esposa Salwa provienen de dos aldeas palestinas que
              están a solo 200 metros de distancia, pero separadas por el muro.
              Su situación de vida inusual está comenzando a afectar su
              matrimonio feliz, pero la pareja hace lo que puede para que
              funcione.
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStarHalfAlt className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.netflix.com/search?q=200%20metros&jbv=81443440"
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
            <h1 className={TitleStyle}>EL IDOLO</h1>
            <span className={DescriptionStyle}>
              Película sobre el popular cantante palestino Mohammad Assaf, desde
              su niñez a su etapa adulta, y su vida en Gaza hasta su triunfo en
              el concurso de talentos 'Arab Idol'.
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.primevideo.com/region/na/detail/0QSVJZ84KNE0W5VN4D9SHBFJIN/ref=atv_sr_fle_c_Tn74RA_2_1_2?sr=1-2&pageTypeIdSource=ASIN&pageTypeId=B085LSTJ48&qid=1730756211723"
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
            <h1 className={TitleStyle}>Nacido en GAZA</h1>
            <span className={DescriptionStyle}>
              Rodada durante la última ofensiva israelí que asoló la Franja de
              Gaza, 2014. Nacido en Gaza sigue a diez niños que nos cuentan cómo
              es su día a día bajo las bombas y el embargo.
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.youtube.com/watch?v=zMEWDj7CXd0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaPlayCircle />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-auto flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <MoviePhoto img={img1} />
          </section>
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>La sal de este mar</h1>
            <span className={DescriptionStyle}>
              <p className="font-semibold mb-2">
                Censurada por Netflix recientemente.
              </p>
              Soraya nació y se educó en Brooklyn, pero ha decidido regresar a
              Palestina, país del que su familia tuvo que exiliarse en 1948. Por
              su parte Emad, nacido en los territorios palestinos, ha conocido
              toda su vida la ocupación y la realidad palestina, y sueña con
              obtener un visado para ir a estudiar a Canadá y marcharse de allí.
            </span>
            <div className={Stars}>
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStar className="text-[#D4AF37]" />
              <FaStarHalfAlt className="text-[#D4AF37]" />
              <FaRegStar className="text-[#D4AF37]" />
            </div>
            <a
              href="https://www.netflix.com/title/70117041?preventIntent=true"
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

export default CardDetail1;
