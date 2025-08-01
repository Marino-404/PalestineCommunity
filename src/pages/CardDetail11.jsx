import { useAppContext } from "../AppContext";
import Back from "../components/Back";
import DivLinePages from "../components/DivLinePages";
import Footer1 from "../sections/Footer1";
import TourismVideo from "../components/TourismVideo";
import DivLineCards from "../components/DivLineCards";

import { TitleStyle, DescriptionStyle } from "./CardDetail1";

const CardDetail11 = () => {
  const { mode } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={"Turismo"} />
      </div>

      <div
        className={`w-[98%] xl:w-[60%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="flex w-full flex-col text-center justify-center items-center mx-auto">
          <h1 className={TitleStyle}>Turismo en Palestina</h1>
          <DivLineCards />
        </div>

        <div className="flex w-full flex-col text-center justify-center items-center mx-auto">
          <span className={DescriptionStyle}>
            Explora las calles de Belén, Palestina, en este recorrido a pie en
            4K, capturando la vida cotidiana, los negocios locales y los
            momentos auténticos desde una perspectiva única. Sin comentarios:
            solo imágenes y sonidos reales.
          </span>
        </div>

        <TourismVideo />

        <DivLinePages />
      </div>
      <Footer1 />
    </>
  );
};

export default CardDetail11;
