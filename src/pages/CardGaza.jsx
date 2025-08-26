import { useAppContext } from "../store/AppContext.jsx";
import Back from "../components/Back";
import DivLinePages from "../components/DivLinePages.jsx";
import Footer1 from "../sections/Footer1.jsx";

const CardGaza = () => {
  const { mode } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={"Gaza"} />
      </div>

      <div
        className={`w-[98%] xl:w-[60%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="w-full h-[50vh] flex text-center justify-center items-center">
          Proximamente...
        </div>
      </div>

      <DivLinePages />

      <Footer1 />
    </>
  );
};

export default CardGaza;
