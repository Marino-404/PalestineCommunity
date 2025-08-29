import { Share2 } from "lucide-react";
import { useAppContext } from "../store/AppContext";

const ShareButton = ({ SectionName }) => {
  const { mode, lang } = useAppContext(); // lang: true = español, false = inglés
  const url = typeof window !== "undefined" ? window.location.href : "";

  // Mensaje según idioma
  const text = lang
    ? "Mirá esta sección increíble 🚀"
    : "Look at this amazing section 🚀";

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: text,
          text: text,
          url: url,
        });
      } catch (err) {
        console.log("El usuario canceló el compartir o hubo un error:", err);
      }
    } else {
      // fallback: copiar mensaje + URL
      navigator.clipboard.writeText(`${text} ${url}`);
      alert("Tu navegador no soporta compartir. Mensaje copiado ✅");
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`${
        mode ? "text-custom-white" : "text-custom-black"
      } text-lg flex items-center`}
    >
      <div
        className={`${
          mode ? "bg-gray-700" : "bg-gray-300"
        } rounded-full px-3 py-1 flex flex-row text-center items-center gap-1`}
      >
        <span className={`text-sm`}>{SectionName}</span>
        <Share2 size={16} />
      </div>
    </button>
  );
};

export default ShareButton;
