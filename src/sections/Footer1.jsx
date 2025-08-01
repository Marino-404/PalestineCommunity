import { useAppContext } from "../AppContext";

const texts = {
  es: {
    reserved: "© 2025 - Todos los derechos reservados.",
    designedBy: "Diseñado y desarrollado por",
  },
  en: {
    reserved: "© 2025 - All rights reserved.",
    designedBy: "Designed and developed by",
  },
};

const Footer1 = () => {
  const { mode, language } = useAppContext();

  const lang = language || "es";
  const t = texts[lang];

  return (
    <footer className="w-full h-auto overflow-hidden flex flex-col items-center justify-center font-poppins py-6">
      <div
        className={` ${
          mode ? "text-custom-white" : "text-custom-black"
        } w-[96%] xl:w-[40%] h-auto flex flex-col text-center gap-2 xl:flex-row xl:justify-between xl:gap-auto `}
      >
        <h1 className="font-poppins font-light text-xs">{t.reserved}</h1>

        <h1 className="font-poppins font-light text-xs">
          {t.designedBy}{" "}
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
