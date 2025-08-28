import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    src: "https://www.youtube.com/embed/KUnGjjcYRdI",
    title: "Quiero ser como los demás niños: pequeño de Gaza",
    width: 366,
    height: 650,
  },
  {
    src: "https://www.youtube.com/embed/3-XTDXKmNnI",
    title:
      '"Pesaba 40 kilos, ahora pesa 10": los testimonios de la hambruna masiva en Gaza #bbcmundo',
    width: 366,
    height: 650,
  },
  {
    src: "https://www.youtube.com/embed/f_kZ4UCkM6c",
    title: "El testimonio de un médico judío en Gaza #shorts",
    width: 366,
    height: 650,
  },
  {
    src: "https://www.youtube.com/embed/0JP-13BDnYw",
    title: "Estos son los testimonios de niñas y niños en Gaza #Shorts",
    width: 366,
    height: 650,
  },
  {
    src: "https://www.youtube.com/embed/bGjh2LOUGp8",
    title: "¡La cruda realidad! Niños de Gaza viven con miedo constante",
    width: 366,
    height: 650,
  },
  {
    src: "https://www.youtube.com/embed/vPQ6g5n2YBI",
    title:
      "Los niños de Gaza se distraen de la guerra con un poco de diversión",
    width: 366,
    height: 650,
  },
  {
    src: "https://www.youtube.com/embed/BZ8uRIzeg8s",
    title:
      'Una superviviente en Gaza: "Si no arriesgas tu vida, nadie dará de comer a tus hijos"',
    width: 366,
    height: 650,
  },
  {
    src: "https://www.youtube.com/embed/FbenGG-6MdM",
    title: "Niños: las principales víctimas de Israel tras guerra en Palestina",
    width: 366,
    height: 650,
  },
  {
    src: "https://www.youtube.com/embed/Nu3rb_SuKHg",
    title: "HEMOS ENTRADO EN GAZA, EL INFIERNO EN LA TIERRA",
    width: 366,
    height: 650,
  },
];

const CarouselOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevVideo = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? (videos.length - 3 + videos.length) % videos.length
        : (prev - 3 + videos.length) % videos.length
    );
  };

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 3) % videos.length);
  };

  return (
    <div className="relative flex justify-center items-center w-full">
      {/* Flecha izquierda */}
      <button
        onClick={prevVideo}
        className="absolute left-2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Contenedor de videos */}
      <div className="flex gap-4 overflow-hidden">
        {/* Mobile: solo 1 video */}
        <div className="block md:hidden">
          <iframe
            width={videos[currentIndex].width}
            height={videos[currentIndex].height}
            src={videos[currentIndex].src}
            title={videos[currentIndex].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>

        {/* Desktop: mostrar 3 */}
        <div className="hidden md:flex gap-4">
          {videos
            .slice(currentIndex, currentIndex + 3)
            .concat(
              currentIndex + 3 > videos.length
                ? videos.slice(0, (currentIndex + 3) % videos.length)
                : []
            )
            .map((video, idx) => (
              <iframe
                key={idx}
                width={video.width}
                height={video.height}
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-xl shadow-lg"
              ></iframe>
            ))}
        </div>
      </div>

      {/* Flecha derecha */}
      <button
        onClick={nextVideo}
        className="absolute right-2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default CarouselOne;
