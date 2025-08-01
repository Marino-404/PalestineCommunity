import CarouselOne from "../components/CarouselOne.jsx";
import CarouselTwo from "../components/CarouselTwo.jsx";
import Connect from "../components/Connect.jsx";

const Main = () => {
  return (
    <main className="w-[98%] xl:w-full md:h-[30vw] h-[95vw] m-auto flex flex-col items-center justify-center animate-fade-down animate-duration-[1000ms]">
      <CarouselOne />
      <Connect />
      <CarouselTwo />
    </main>
  );
};

export default Main;
