import { useAppContext } from "../store/AppContext";

const Footer1 = () => {
  const { mode, lang } = useAppContext();

  return (
    <footer className="w-full h-auto overflow-hidden flex flex-col items-center justify-center font-poppins py-6">
      <div
        className={` ${
          mode ? "text-custom-white" : "text-custom-black"
        } w-[96%] xl:w-[50%] h-auto flex flex-col text-center gap-2 xl:flex-row text-center justify-center`}
      >
        <h1 className="font-poppins font-light text-xs">
          {lang
            ? "© 2025 - Todos los derechos reservados"
            : "© 2025 - All rights reserved"}
        </h1>
        <h1 className="font-poppins font-light text-xs">
          {lang
            ? "| Centro Palestino de Rosario |"
            : "| Palestinian Center of Rosario |"}
        </h1>
        <h1 className="font-poppins font-light text-xs">
          {lang ? "Diseñado y desarrollado por" : "Designed and developed by"}{" "}
          <a
            className="text-[#1B5931] hover:text-[#154826] hover:underline transition-colors duration-300 font-bold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://portfoliojuanmarino.vercel.app/"
          >
            Juan Marino
          </a>
          .
        </h1>
      </div>
    </footer>
  );
};

export default Footer1;
