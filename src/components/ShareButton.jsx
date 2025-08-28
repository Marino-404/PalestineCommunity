import { IoShareOutline } from "react-icons/io5";
import { useAppContext } from "../store/AppContext";

const ShareButton = ({ title, SectionName }) => {
  const { mode } = useAppContext();
  const url = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || "Mirá esto",
          url: url,
        });
      } catch (err) {
        console.log("El usuario canceló el compartir o hubo un error:", err);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert("Tu navegador no soporta compartir. Enlace copiado ✅");
    }
  };

  return (
    <button
      onClick={handleShare}
      className={` ${
        mode ? "text-custom-white" : "text-custom-black"
      } text-lg flex items-center`}
    >
      <div
        className={`${
          mode ? "bg-gray-700" : "bg-gray-300"
        } rounded-full px-3 py-1 flex flex-row text-center items-center gap-1`}
      >
        <span className={`text-sm`}>{SectionName}</span>
        <IoShareOutline />
      </div>
    </button>
  );
};

export default ShareButton;
