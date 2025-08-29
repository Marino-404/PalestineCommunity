import { FaSpotify } from "react-icons/fa";
import { useAppContext } from "../../store/AppContext";
const SpotifyIcon = () => {
  const { mode } = useAppContext();

  return (
    <div
      className={` ${
        mode ? "bg-gray-700" : "bg-gray-300"
      } flex items-center justify-center p-2 rounded-full`}
    >
      <FaSpotify
        size={28}
        className={`${mode ? "text-custom-white" : "text-custom-black"}`}
      />
    </div>
  );
};

export default SpotifyIcon;
