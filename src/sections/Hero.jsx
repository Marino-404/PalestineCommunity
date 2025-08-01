import { useAppContext } from "../AppContext";
import Logo from "../components/Logo.jsx";
import AnimatedLines from "../components/AnimatedLines.jsx";

const Hero = () => {
  const { mode } = useAppContext();

  return (
    <>
      <AnimatedLines />
      <section
        id="Home"
        className="w-full  xl:h-[68vh] flex flex-col items-center justify-center font-poppins animate-fade animate-duration-[2000ms]"
      >
        <div className=" w-full md:w-[80%] xl:h-[67vh] flex flex-col items-center justify-center gap-8 font-poppins  xl:pt-[10vh] py-16 xl:py-0">
          <div className="w-[100%] flex justify-center items-center ">
            <Logo />
          </div>
          <div
            className={`xl:w-1/2 w-[100%] flex flex-col items-center justify-center text-center ${
              mode ? "text-custom-white" : "text-custom-black"
            }`}
          >
            <h1 className="text-5xl xl:text-6xl text-[#1B5931] font-poppins font-medium flex text-center justify-center xl:justify-start xl:text-start">
              Connect Palestine
            </h1>
            <h2 className="text-3xl font-cairo font-light text-[#D4AF37]">
              المجتمع الفلسطيني
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
