import { useAppContext } from "../store/AppContext";

const texts = {
  es: {
    reserved: "© 2025 - Todos los derechos reservados",
    center: "| Centro Palestino de Rosario |",
    designedBy: "Diseñado y desarrollado por",
  },
  en: {
    reserved: "© 2025 - All rights reserved",
    center: "| Palestinian Center of Rosario |",
    designedBy: "Designed and developed by",
  },
};

const Footer = () => {
  const { mode, lang } = useAppContext();
  const t = lang ? texts.es : texts.en;

  return (
    <footer className="w-full h-auto overflow-hidden flex flex-col items-center justify-center font-poppins py-6">
      <div
        className={`${
          mode ? "text-custom-white" : "text-custom-black"
        } w-[96%] xl:w-[40%] h-auto flex flex-col items-center justify-center mb-12 z-10`}
      >
        <div
          className={`xl:w-1/2 w-[100%] flex flex-col items-center justify-center text-center ${
            mode ? "text-custom-white" : "text-custom-black"
          }`}
        >
          <h1 className="text-2xl text-[#1B5931] font-poppins font-medium flex text-center justify-center xl:justify-start xl:text-start">
            Connect Palestine
          </h1>
          <h2 className="text-md font-cairo font-light text-[#D4AF37]">
            المجتمع الفلسطيني
          </h2>
        </div>
      </div>

      <div
        className={`${
          mode ? "text-custom-white" : "text-custom-black"
        } w-[96%] xl:w-[50%] h-auto flex flex-col gap-2 xl:flex-row text-center justify-center`}
      >
        <h1 className="font-poppins font-light text-xs">{t.reserved}</h1>
        <h1 className="font-poppins font-light text-xs">{t.center}</h1>
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

export default Footer;
