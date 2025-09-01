import ReactPlayer from "react-player";
import DivLinePages from "../components/DivLinePages.jsx";

const VideoStyle = "w-[68%] h-[50vw] md:h-[26vw] mx-auto";

const GazaVideo = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className={VideoStyle}>
        <ReactPlayer
          controls
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=bGjh2LOUGp8&t=41s"
        />
      </div>

      <DivLinePages />
      <div className={VideoStyle}>
        <ReactPlayer
          controls
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=vPQ6g5n2YBI"
        />
      </div>

      <DivLinePages />

      <div className={VideoStyle}>
        <ReactPlayer
          controls
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=BZ8uRIzeg8s"
        />
      </div>

      <DivLinePages />

      <div className={VideoStyle}>
        <ReactPlayer
          controls
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=FbenGG-6MdM"
        />
      </div>

      <DivLinePages />

      <div className={VideoStyle}>
        <ReactPlayer
          controls
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=Nu3rb_SuKHg"
        />
      </div>
      <DivLinePages />
    </div>
  );
};

export default GazaVideo;
