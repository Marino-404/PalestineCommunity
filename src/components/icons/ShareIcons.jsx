import { Share2 } from "lucide-react";
import { useAppContext } from "../../store/AppContext";

const ShareIcon = ({ url, title = "Compartir este contenido" }) => {
  const { mode } = useAppContext();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.error("Error al compartir:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert("Enlace copiado al portapapeles ✅");
      } catch (err) {
        console.error("No se pudo copiar el enlace:", err);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`
      flex items-center justify-center p-2 rounded-full`}
    >
      <Share2
        size={18}
        className={`${mode ? "text-custom-white" : "text-custom-black"}`}
      />
    </button>
  );
};

export default ShareIcon;
