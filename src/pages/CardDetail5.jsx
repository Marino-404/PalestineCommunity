import { useAppContext } from "../store/AppContext.jsx";
import Footer1 from "../sections/Footer1";
import Back from "../components/Back";
import DivLinePages from "../components/DivLinePages";
import InstagramPhoto from "../components/InstagramPhoto";
import { SectionStyle, TitleStyle, DescriptionStyle } from "./CardDetail1";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

import img1L from "/src/images/instagram/l1.png";
import img2L from "/src/images/instagram/l2.png";
import img3L from "/src/images/instagram/l3.png";
import img4L from "/src/images/instagram/l4.png";
import img5L from "/src/images/instagram/l5.png";
import img6L from "/src/images/instagram/l6.png";
import img7L from "/src/images/instagram/l7.png";

import img1B from "/src/images/instagram/1b.png";
import img2B from "/src/images/instagram/2b.png";
import img3B from "/src/images/instagram/3b.png";
import img4B from "/src/images/instagram/4b.png";
import img5B from "/src/images/instagram/5b.png";
import img6B from "/src/images/instagram/6b.png";
import img7B from "/src/images/instagram/7b.png";

const images = {
  SALMA: { light: img1L, dark: img1B },
  MOTAZ_AZIZA: { light: img2L, dark: img2B },
  BISAN_OWDA: { light: img3L, dark: img3B },
  HOSSAM_SHBAT: { light: img4L, dark: img4B },
  WISSAM_NASSAR: { light: img5L, dark: img5B },
  NOOH_AL_SHAGHNOBI: { light: img6L, dark: img6B },
  SALEH_ALJAFARAWI: { light: img7L, dark: img7B },
};

const CardDetail5 = () => {
  const { mode } = useAppContext();

  const salmaImg = mode ? images.SALMA.dark : images.SALMA.light;
  const motazImg = mode ? images.MOTAZ_AZIZA.dark : images.MOTAZ_AZIZA.light;
  const bisanImg = mode ? images.BISAN_OWDA.dark : images.BISAN_OWDA.light;
  const hossamImg = mode ? images.HOSSAM_SHBAT.dark : images.HOSSAM_SHBAT.light;
  const wissamImg = mode
    ? images.WISSAM_NASSAR.dark
    : images.WISSAM_NASSAR.light;
  const noohImg = mode
    ? images.NOOH_AL_SHAGHNOBI.dark
    : images.NOOH_AL_SHAGHNOBI.light;
  const salehImg = mode
    ? images.SALEH_ALJAFARAWI.dark
    : images.SALEH_ALJAFARAWI.light;

  return (
    <>
      <div>
        <Back SectionName={"Instagram"} />
      </div>

      <div
        className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${
          mode ? "text-custom-white" : "text-custom-black"
        } z-50`}
      >
        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <InstagramPhoto img={salmaImg} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>SALMA</h1>
            <span className={DescriptionStyle}>
              Creadora de contenido palestino desde Gaza.
            </span>
            <div className="flex">
              <a
                href="https://www.instagram.com/salma.shawa_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@salma.shawa?_t=8pl8wmCJP8A&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl"
              >
                <AiFillTikTok />
              </a>
            </div>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <InstagramPhoto img={motazImg} />
          </section>
          <div className="flex flex-col w-full text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>MOTAZ AZIZA</h1>
            <span className={DescriptionStyle}>Fotógrafo.</span>
            <a
              href="https://www.instagram.com/motaz_azaiza?igsh=aDFvZDg0Y2p4cmY0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <InstagramPhoto img={bisanImg} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>BISAN OWDA</h1>
            <span className={DescriptionStyle}>
              Cineasta, viajera y soñadora.
            </span>
            <a
              href="https://www.instagram.com/wizard_bisan1?igsh=MTFtczFlYjJvZzlsbA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <InstagramPhoto img={hossamImg} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>HOSSAM SHBAT</h1>
            <span className={DescriptionStyle}>Periodista.</span>
            <a
              href="https://www.instagram.com/hossam_shbat?igsh=MWs1aW56MmpoZXA1dQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <InstagramPhoto img={wissamImg} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>WISSAM NASSAR</h1>
            <span className={DescriptionStyle}>Fotógrafo.</span>
            <a
              href="https://www.facebook.com/wissamnassargaza/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <InstagramPhoto img={noohImg} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>NOOH AL-SHAGHNOBI</h1>
            <span className={DescriptionStyle}>Fotógrafo.</span>
            <a
              href="https://www.instagram.com/nooh.xp?igsh=MW9kbTYwYnpnaGZ4Yw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />

        <div className="xl:h-[20vw] flex xl:flex-row flex-col">
          <section className={SectionStyle}>
            <InstagramPhoto img={salehImg} />
          </section>
          <div className="flex w-full flex-col text-center justify-center items-center gap-2">
            <h1 className={TitleStyle}>SALEH ALJAFARAWI</h1>
            <span className={DescriptionStyle}>Fotógrafo.</span>
            <p className="font-semibold mb-2">
              Si no funciona es probable que haya sido censurado.
            </p>
            <a
              href="https://www.instagram.com/saleh_aljafarawi?igsh=MWphdjI0dnF0aGkw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <DivLinePages />
      </div>
      <Footer1 />
    </>
  );
};

export default CardDetail5;
