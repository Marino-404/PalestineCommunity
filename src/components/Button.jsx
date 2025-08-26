import { useAppContext } from "../store/AppContext";

const Button = () => {
  const { mode, lang } = useAppContext();

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
      {lang ? "Enviar" : "Send"}
    </button>
  );
};

export default Button;
