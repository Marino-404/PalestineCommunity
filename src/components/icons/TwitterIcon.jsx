import { FaXTwitter } from "react-icons/fa6";
import { useAppContext } from "../../store/AppContext";
const TwitterIcon = () => {
  const { mode } = useAppContext();

  return (
    <div
      className={` ${
        mode ? "bg-gray-700" : "bg-gray-300"
      } flex items-center justify-center p-2 rounded-full`}
    >
      <FaXTwitter
        size={28}
        className={`${mode ? "text-custom-white" : "text-custom-black"}`}
      />
    </div>
  );
};

export default TwitterIcon;
