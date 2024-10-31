import React from "react";
import { useAppContext } from "../AppContext";
import Footer from "../sections/Footer";
import Back from "../components/Back";
import DivLinePages from "../components/DivLinePages";
import SectionPhoto from "../components/SectionPhoto";
import { SectionStyle, TitleStyle, DescriptionStyle } from "./CardDetail1";
import { FaSpotify } from "react-icons/fa";

import img1 from "/src/images/spotify/1.png";
import img2 from "/src/images/spotify/2.png";
import img3 from "/src/images/spotify/3.png";
import img4 from "/src/images/spotify/4.png";
import img5 from "/src/images/spotify/5.png";
import img6 from "/src/images/spotify/6.png";

const CardDetail4 = () => {
  const { mode } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={"Spotify"} />
      </div>

      <div
        className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img2} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>MOHAMMED ASSAF</h1>
            <span className={DescriptionStyle}>
              - 131.803 Oyentes mensuales.
            </span>
            <a
              href="https://open.spotify.com/artist/0IjIdnhlsKfAfOl5ph5TsE?si=C7fVhF_vQgqWdOZVluNTTQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaSpotify />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img1} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>ROLA AZAR</h1>
            <span className={DescriptionStyle}>
              - 93.238 Oyentes mensuales.
            </span>
            <a
              href="https://open.spotify.com/artist/17WvUHY56BGNm6i6uTqyj1?si=KDZlkivOQxi-k6GPXmAtQA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaSpotify />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img3} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>DAM</h1>
            <span className={DescriptionStyle}>
              - 33.782 Oyentes mensuales.
            </span>
            <a
              href="https://open.spotify.com/artist/1ATrNccUrhiYSQ3B08VQrz?si=ZlqMOt-bS2-p5fGZePsV-w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaSpotify />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img4} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>AMAL MURKUS</h1>
            <span className={DescriptionStyle}>
              - 52.535 Oyentes mensuales.
            </span>
            <a
              href="https://open.spotify.com/artist/35Or8bOOKNt9UJKHcySKdP?si=9xX5RLKpR6Kib3TgN3RYgQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaSpotify />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img5} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>YACOUB SHAHEEN</h1>
            <span className={DescriptionStyle}>- 4.741 Oyentes mensuales.</span>
            <a
              href="https://open.spotify.com/playlist/3vV7dd0tQdhUXRhst9Y4H2?si=9i555wutQ7Kc4NDa1z24Ug&pi=u-0xUNXZPrRP-j"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaSpotify />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img6} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>HAYA ZAATRY</h1>
            <span className={DescriptionStyle}>
              - 11.800 Oyentes mensuales.
            </span>
            <a
              href="https://open.spotify.com/artist/7BbiOEvJs6qrSDp54s1EUB?si=gX-GU6XsR7Kk0oidck9rcA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaSpotify />
            </a>
          </div>
        </div>

        <DivLinePages />

        <Footer />
      </div>
    </>
  );
};

export default CardDetail4;
