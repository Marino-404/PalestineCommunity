import { useAppContext } from "../store/AppContext.jsx";
import Footer1 from "../sections/Footer1";
import Back from "../components/Back";
import DivLinePages from "../components/DivLinePages";
import SectionPhoto from "../components/SectionPhoto";
import { SectionStyle, TitleStyle, DescriptionStyle } from "./CardDetail1";
import SpotifyIcon from "../components/icons/SpotifyIcon.jsx";
import { spotifyTextContent } from "../utils/text-content.js";

import img1 from "/src/images/spotify/1.png";
import img2 from "/src/images/spotify/2.png";
import img3 from "/src/images/spotify/3.png";
import img4 from "/src/images/spotify/4.png";
import img5 from "/src/images/spotify/5.png";
import img6 from "/src/images/spotify/6.png";
import img7 from "/src/images/spotify/7.png";
import img8 from "/src/images/spotify/8.png";
import ShareIcon from "../components/icons/ShareIcons.jsx";

const CardDetail4 = () => {
  const { mode, lang } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={lang ? "Música" : "Music"} />
      </div>

      <div
        className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img7} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {spotifyTextContent(lang).Spotify1.title}
              <ShareIcon url="https://open.spotify.com/intl-es/artist/0jIWKlfmD4Ew7HeVVrq03g" />
            </h1>
            <span className={DescriptionStyle}>
              {spotifyTextContent(lang).Spotify1.description}
            </span>
            <a
              href="https://open.spotify.com/intl-es/artist/0jIWKlfmD4Ew7HeVVrq03g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpotifyIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img2} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {spotifyTextContent(lang).Spotify2.title}
              <ShareIcon url="https://open.spotify.com/artist/0IjIdnhlsKfAfOl5ph5TsE?si=C7fVhF_vQgqWdOZVluNTTQ" />
            </h1>
            <span className={DescriptionStyle}>
              {spotifyTextContent(lang).Spotify2.description}
            </span>
            <a
              href="https://open.spotify.com/artist/0IjIdnhlsKfAfOl5ph5TsE?si=C7fVhF_vQgqWdOZVluNTTQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpotifyIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img8} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {spotifyTextContent(lang).Spotify3.title}
              <ShareIcon url="https://open.spotify.com/playlist/37i9dQZF1DZ06evO2Si3L2" />
            </h1>
            <span className={DescriptionStyle}>
              {spotifyTextContent(lang).Spotify3.description}
            </span>
            <a
              href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO2Si3L2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpotifyIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img1} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {spotifyTextContent(lang).Spotify4.title}
              <ShareIcon url="https://open.spotify.com/artist/17WvUHY56BGNm6i6uTqyj1?si=KDZlkivOQxi-k6GPXmAtQA" />
            </h1>
            <span className={DescriptionStyle}>
              {spotifyTextContent(lang).Spotify4.description}
            </span>
            <a
              href="https://open.spotify.com/artist/17WvUHY56BGNm6i6uTqyj1?si=KDZlkivOQxi-k6GPXmAtQA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpotifyIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img3} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {spotifyTextContent(lang).Spotify5.title}
              <ShareIcon url="https://open.spotify.com/artist/1ATrNccUrhiYSQ3B08VQrz?si=ZlqMOt-bS2-p5fGZePsV-w" />
            </h1>
            <span className={DescriptionStyle}>
              {spotifyTextContent(lang).Spotify5.description}
            </span>
            <a
              href="https://open.spotify.com/artist/1ATrNccUrhiYSQ3B08VQrz?si=ZlqMOt-bS2-p5fGZePsV-w"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpotifyIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img4} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {spotifyTextContent(lang).Spotify6.title}
              <ShareIcon url="https://open.spotify.com/artist/35Or8bOOKNt9UJKHcySKdP?si=9xX5RLKpR6Kib3TgN3RYgQ" />
            </h1>
            <span className={DescriptionStyle}>
              {spotifyTextContent(lang).Spotify6.description}
            </span>
            <a
              href="https://open.spotify.com/artist/35Or8bOOKNt9UJKHcySKdP?si=9xX5RLKpR6Kib3TgN3RYgQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpotifyIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img5} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {spotifyTextContent(lang).Spotify7.title}
              <ShareIcon url="https://open.spotify.com/playlist/3vV7dd0tQdhUXRhst9Y4H2?si=9i555wutQ7Kc4NDa1z24Ug&pi=u-0xUNXZPrRP-j" />
            </h1>
            <span className={DescriptionStyle}>
              {spotifyTextContent(lang).Spotify7.description}
            </span>
            <a
              href="https://open.spotify.com/playlist/3vV7dd0tQdhUXRhst9Y4H2?si=9i555wutQ7Kc4NDa1z24Ug&pi=u-0xUNXZPrRP-j"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpotifyIcon />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <SectionPhoto img={img6} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>
              {spotifyTextContent(lang).Spotify8.title}
              <ShareIcon url="https://open.spotify.com/artist/7BbiOEvJs6qrSDp54s1EUB?si=gX-GU6XsR7Kk0oidck9rcA" />
            </h1>
            <span className={DescriptionStyle}>
              {spotifyTextContent(lang).Spotify8.description}
            </span>
            <a
              href="https://open.spotify.com/artist/7BbiOEvJs6qrSDp54s1EUB?si=gX-GU6XsR7Kk0oidck9rcA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpotifyIcon />
            </a>
          </div>
        </div>

        <DivLinePages />
      </div>
      <Footer1 />
    </>
  );
};

export default CardDetail4;
