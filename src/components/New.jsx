import { useAppContext } from "../AppContext";
import ReactPlayer from "react-player";

const Video = () => {
  const { mode, language } = useAppContext();

  const text = {
    es: "Últimos contenidos",
    en: "Latest content",
  };

  return (
    <>
      <div className="w-[95%] h-[70vw] xl:h-[26vw] xl:w-[50%] md:h-[26vw] md:w-[50%] flex flex-col justify-center text-center items-center z-10 gap-4 mb-8">
        <span
          className={`text-center font-poppins font-light text-xs ${
            mode ? "text-custom-white" : "text-custom-black"
          }`}
        >
          {text[language] || text.es}
        </span>
        <div className="w-full h-[68vw] xl:h-[26vw] md:h-[26vw] rounded-lg mx-auto">
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url="https://youtu.be/h1BcLcn85gs?si=EYJ4-im92VYHE8o1"
          />
        </div>
      </div>
    </>
  );
};

export default Video;
