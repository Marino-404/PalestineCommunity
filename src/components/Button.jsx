import { useAppContext } from "../AppContext";

const texts = {
  es: {
    send: "Enviar",
  },
  en: {
    send: "Send",
  },
};

const Button = () => {
  const { mode, language } = useAppContext();
  const lang = language || "es";
  const t = texts[lang];

  return (
    <button
      type="submit"
      className={`text-sm font-poppins font-medium px-6 py-2 rounded-xl transition-all duration-300 shadow-md
        ${
          mode
            ? "bg-[#1B5931] text-white hover:bg-[#154826]"
            : "bg-[#1B5931] text-white hover:bg-[#247043]"
        }`}
    >
      {t.send}
    </button>
  );
};

export default Button;
