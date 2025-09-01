import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "/src/images/gaza/shorts/short1.jpg";
import img2 from "/src/images/gaza/shorts/short2.jpg";

import img3 from "/src/images/gaza/shorts/short3.jpg";
import img4 from "/src/images/gaza/shorts/short4.jpg";

const images = [
  {
    src: img1,
    alt: "Short 1",
    link: "https://www.youtube.com/shorts/KUnGjjcYRdI",
  },
  {
    src: img2,
    alt: "Short 2",
    link: "https://www.youtube.com/shorts/3-XTDXKmNnI",
  },
  {
    src: img3,
    alt: "Short 3",
    link: "https://www.youtube.com/shorts/f_kZ4UCkM6c",
  },
  {
    src: img4,
    alt: "Short 4",
    link: "https://www.youtube.com/shorts/0JP-13BDnYw",
  },
];

const CarouselImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? images.length - 1
        : (prev - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Mostrar 1 imagen en mobile, 2 en desktop
  const visibleImages = isMobile
    ? [images[currentIndex]]
    : [images[currentIndex], images[(currentIndex + 1) % images.length]];

  return (
    <div className="relative flex justify-center items-center w-full">
      {/* Flecha izquierda */}
      <button
        onClick={prevSlide}
        className="absolute left-2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Contenedor de imágenes */}
      <div className="flex gap-6 overflow-hidden">
        {visibleImages.map((img, idx) => (
          <a
            key={idx}
            href={img.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className="
    w-full max-w-[300px] h-[400px] 
    md:w-[280px] md:h-[450px]
    rounded-md shadow-lg overflow-hidden
  "
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center hover:opacity-80 transition"
              />
            </div>
          </a>
        ))}
      </div>

      {/* Flecha derecha */}
      <button
        onClick={nextSlide}
        className="absolute right-2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default CarouselImages;
