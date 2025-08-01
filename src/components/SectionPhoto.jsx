import { useAppContext } from "../AppContext";

const PhotoSections = ({ img }) => {
  const { mode } = useAppContext();

  return (
    <div className="flex w-[210px] h-[210px]">
      <img
        className={`w-full h-full rounded-full border ${
          mode ? "border-custom-white" : "border-custom-black"
        } z-50`}
        src={img}
        alt=""
      />
    </div>
  );
};

export default PhotoSections;
