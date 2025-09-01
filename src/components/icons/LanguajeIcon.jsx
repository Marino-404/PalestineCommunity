import { GrLanguage } from "react-icons/gr";
import { useAppContext } from "../../store/AppContext";

const LanguageSwitch = ({ lang, toggleLang }) => {
  const { mode } = useAppContext();
  const isSpanish = lang === "Es";

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleLang(isSpanish ? "En" : "Es");
      }}
      className={`relative w-12 h-6 flex items-center justify-between p-2 rounded-full  ${
        mode ? "bg-gray-700" : "bg-gray-300"
      }`}
    >
      {/* Texto */}
      <span
        className={`text-[8px] font-medium ${
          mode ? "text-custom-white" : "text-custom-black"
        }`}
      >
        Es
      </span>
      <span
        className={`text-[8px] font-medium ${
          mode ? "text-custom-white" : "text-custom-black"
        } `}
      >
        En
      </span>

      {/* Bolita con icono */}
      <span
        className={`absolute top-1 left-1 w-4 h-4 flex items-center justify-center rounded-full z-10 transition-transform duration-300 ${
          mode ? "bg-gray-700" : "bg-gray-300"
        } ${isSpanish ? "translate-x-0" : "translate-x-6"}`}
      >
        <GrLanguage
          size={12}
          className={`${mode ? "text-custom-white" : "text-custom-black"}`}
        />
      </span>
    </button>
  );
};

export default LanguageSwitch;
