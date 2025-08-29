import { Earth } from "lucide-react";
import { useAppContext } from "../../store/AppContext";
const EarthIcon = () => {
  const { mode } = useAppContext();

  return (
    <div
      className={` ${
        mode ? "bg-gray-700" : "bg-gray-300"
      } flex items-center justify-center p-2 rounded-full`}
    >
      <Earth
        size={28}
        className={`${mode ? "text-custom-white" : "text-custom-black"}`}
      />
    </div>
  );
};

export default EarthIcon;
