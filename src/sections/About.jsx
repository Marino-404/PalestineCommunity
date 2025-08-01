import React from "react";
import { useAppContext } from "../AppContext.jsx";
import Contact from "../components/Contact.jsx";
import DivLineAbout from "../components/DivLineAbout.jsx";
import { BsArrowRightShort } from "react-icons/bs";
import { CiCircleChevDown } from "react-icons/ci";

const texts = {
  es: {
    buttons: {
      about: "Sobre Connect Palestine",
      projects: "Nuestros proyectos",
      community: "Sumate a la Comunidad",
    },
    about: {
      missionTitle: "Nuestra Misión",
      missionPoints: [
        "Nuestra misión es crear una comunidad digital global que, a través de la tecnología y el acceso a contenido, impulse la visibilidad de Palestina.",
        "Queremos que los usuarios se conecten, interactúen y aprendan, apoyando una red donde converjan la información, las voces y los talentos que defienden la identidad palestina.",
      ],
      whoWeAreTitle: "Quiénes Somos",
      whoWeArePoints: [
        "Connect Palestine es una plataforma digital innovadora diseñada para centralizar y compartir lo mejor de la cultura, historia, gastronomía, arte y actualidad de Palestina.",
        "Un portal dinámico que conecta a personas de todo el mundo interesadas en la riqueza de Palestina, y se convierte en una poderosa herramienta para fortalecer la narrativa de resistencia palestina en el mundo digital.",
      ],
    },
    projects: {
      title: "Nuestros Proyectos",
      list: [
        {
          title: "Biblioteca Digital Multimedia",
          description:
            "Un centro de contenidos con acceso a películas, documentales, series y más, todo centrado en la narrativa palestina.",
        },
        {
          title: "Explora la Cocina Palestina",
          description:
            "Un espacio donde chefs y foodies pueden descubrir y compartir recetas tradicionales, interactuando con la comunidad y conectándose a través de la gastronomía.",
        },
        {
          title: "Celebrities for Palestine",
          description:
            "Un espacio donde destacamos a personalidades públicas que muestran su apoyo y solidaridad con Palestina, amplificando su impacto en redes y medios.",
        },
        {
          title: "Arte y Poesía Digital",
          description:
            "Una galería virtual que celebra el talento de artistas palestinos, conectando a los usuarios con la vibrante escena artística y poética de Palestina.",
        },
        {
          title: "Podcasts y Opiniones",
          description:
            "Una sección dedicada a reseñas de podcasts, con análisis actuales sobre la cultura, política y resistencia palestina.",
        },
        {
          title: "Redes y Medios Sociales",
          description:
            "Un radar que monitorea las principales cuentas y medios que están en la vanguardia de la narrativa digital sobre Palestina.",
        },
      ],
    },
    community: {
      title: "Sumate a la Comunidad",
      points: [
        "Te invitamos a ser parte de esta comunidad en constante expansión, donde cada conexión amplifica las voces palestinas y refuerza una red de resistencia.",
        "¡Conectate! Recibí todas las novedades de connect palestine en tu casilla de mail.\nHagamos que el mundo escuche a Palestina.",
      ],
    },
  },
  en: {
    buttons: {
      about: "About Connect Palestine",
      projects: "Our Projects",
      community: "Join the Community",
    },
    about: {
      missionTitle: "Our Mission",
      missionPoints: [
        "Our mission is to create a global digital community that, through technology and content access, boosts the visibility of Palestine.",
        "We want users to connect, interact, and learn, supporting a network where information, voices, and talents defending the Palestinian identity converge.",
      ],
      whoWeAreTitle: "Who We Are",
      whoWeArePoints: [
        "Connect Palestine is an innovative digital platform designed to centralize and share the best of Palestinian culture, history, gastronomy, art, and current affairs.",
        "A dynamic portal connecting people worldwide interested in Palestine's richness, becoming a powerful tool to strengthen the Palestinian resistance narrative in the digital world.",
      ],
    },
    projects: {
      title: "Our Projects",
      list: [
        {
          title: "Digital Multimedia Library",
          description:
            "A content center with access to films, documentaries, series, and more, all centered on the Palestinian narrative.",
        },
        {
          title: "Explore Palestinian Cuisine",
          description:
            "A space where chefs and foodies can discover and share traditional recipes, interacting with the community and connecting through gastronomy.",
        },
        {
          title: "Celebrities for Palestine",
          description:
            "A space highlighting public figures who show their support and solidarity with Palestine, amplifying their impact on networks and media.",
        },
        {
          title: "Digital Art and Poetry",
          description:
            "A virtual gallery celebrating the talent of Palestinian artists, connecting users with Palestine’s vibrant artistic and poetic scene.",
        },
        {
          title: "Podcasts and Opinions",
          description:
            "A section dedicated to podcast reviews, with current analyses on Palestinian culture, politics, and resistance.",
        },
        {
          title: "Social Networks and Media",
          description:
            "A radar monitoring main accounts and media at the forefront of the digital narrative about Palestine.",
        },
      ],
    },
    community: {
      title: "Join the Community",
      points: [
        "We invite you to be part of this ever-growing community, where every connection amplifies Palestinian voices and strengthens a resistance network.",
        "Connect! Receive all the news from Connect Palestine in your email inbox.\nLet's make the world hear Palestine.",
      ],
    },
  },
};

const About = () => {
  const { mode, activeSection, changeSection, language } = useAppContext();

  const lang = language || "es";
  const t = texts[lang] || texts["es"];

  const buttonClasses = `xl:text-xl text-sm ${
    mode ? "text-custom-white" : "text-custom-black"
  } 
                          hover:text-gradient font-poppins font-normal flex  justify-center w-1/3 xl:w-1/4  items-center`;

  const activeStyle = (section) => ({
    background: activeSection === section ? "#1b5931" : "",
    WebkitBackgroundClip: activeSection === section ? "text" : "",
    color: activeSection === section ? "transparent" : "",
    fontWeight: activeSection === section ? "bold" : "normal",
  });

  return (
    <div
      className={`w-full h-auto flex flex-col items-center text-center xl:justify-start ${
        mode ? "text-custom-white" : "text-custom-black "
      } z-50`}
    >
      <div
        className={` w-[94%] xl:w-[55%] h-auto flex flex-row items-center justify-center xl:gap-24 gap-8 z-10`}
      >
        <button
          id="About"
          className={buttonClasses}
          style={activeStyle("about")}
          onClick={() => changeSection("about")}
        >
          {t.buttons.about}
        </button>
        <button
          id="Projects"
          className={buttonClasses}
          style={activeStyle("projects")}
          onClick={() => changeSection("projects")}
        >
          {t.buttons.projects}
        </button>
        <button
          id="Community"
          className={buttonClasses}
          style={activeStyle("community")}
          onClick={() => changeSection("community")}
        >
          {t.buttons.community}
        </button>
      </div>

      <DivLineAbout />

      {activeSection === "about" && (
        <div
          className={`xl:w-[40%] w-[96%] m-auto h-auto font-poppins flex flex-col items-center py-32 animate-fade-down animate-duration-[800ms] animate-delay-0 animate-ease-in-out`}
        >
          <div className="flex flex-row items-center text-start justify-start mb-4">
            <div className="text-xl mr-1">
              <CiCircleChevDown />
            </div>
            <h4 className="text-xl text-gradient font-bold my-2 ">
              {t.about.missionTitle}
            </h4>
          </div>

          {t.about.missionPoints.map((point, i) => (
            <div
              key={"mission-" + i}
              className="flex flex-row items-center text-start justify-start font-light mb-4"
              style={{
                marginBottom:
                  i === t.about.missionPoints.length - 1 ? "3rem" : undefined,
              }}
            >
              <div className="text-2xl mr-2">
                <BsArrowRightShort />
              </div>
              <span>{point}</span>
            </div>
          ))}

          <div className="flex flex-row items-center text-start justify-start  mb-4">
            <div className="text-xl mr-1">
              <CiCircleChevDown />
            </div>
            <h4 className="text-xl text-gradient font-bold my-2">
              {t.about.whoWeAreTitle}
            </h4>
          </div>

          {t.about.whoWeArePoints.map((point, i) => (
            <div
              key={"who-" + i}
              className="flex flex-row items-center text-start justify-start font-light mb-4"
              style={{
                marginBottom:
                  i === t.about.whoWeArePoints.length - 1 ? "2rem" : undefined,
              }}
            >
              <div className="text-2xl mr-2">
                <BsArrowRightShort />
              </div>
              <span>{point}</span>
            </div>
          ))}
        </div>
      )}

      {activeSection === "projects" && (
        <div
          className={`xl:w-[40%] w-[96%] mx-auto h-auto font-poppins flex flex-col py-32 animate-fade-down animate-duration-[800ms] animate-delay-0 animate-ease-in-out`}
        >
          <div className="flex flex-row items-center text-center justify-center mb-4">
            <div className="text-xl mr-1">
              <CiCircleChevDown />
            </div>
            <h4 className="text-xl text-gradient font-bold my-2">
              {t.projects.title}
            </h4>
          </div>

          <ul>
            {t.projects.list.map((project, index) => (
              <li key={index} className="flex flex-col text-start mb-6">
                <div className="flex flex-row justify-start ml-8 underline font-light mb-2 ">
                  <span>{project.title}</span>
                </div>
                <div className="flex flex-row items-center text-start justify-center font-light">
                  <div className="text-2xl mr-2">
                    <BsArrowRightShort />
                  </div>
                  <span>{project.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeSection === "community" && (
        <div
          className={`xl:w-[40%] w-[96%] m-auto h-auto font-poppins flex flex-col py-32 animate-fade-down animate-duration-[800ms] animate-delay-0 animate-ease-in-out`}
        >
          <div className="flex flex-row items-center text-center justify-center mb-4">
            <div className="text-xl mr-1">
              <CiCircleChevDown />
            </div>
            <h4 className="text-xl text-gradient font-bold my-2">
              {t.community.title}
            </h4>
          </div>

          {t.community.points.map((point, i) => (
            <div
              key={"community-" + i}
              className="flex flex-row items-center text-start justify-start font-light mb-4"
            >
              <div className="text-2xl mr-2">
                <BsArrowRightShort />
              </div>
              <span style={{ whiteSpace: "pre-line" }}>{point}</span>
            </div>
          ))}

          <Contact />
        </div>
      )}
    </div>
  );
};

export default About;
