import { useAppContext } from "../store/AppContext.jsx";
import Contact from "../components/Contact.jsx";
import DivLineAbout from "../components/DivLineAbout.jsx";
import { BsArrowRightShort } from "react-icons/bs";
import { CiCircleChevDown } from "react-icons/ci";
import { aboutTextContent } from "../utils/text-content.js";

const About = () => {
  const { mode, activeSection, changeSection, lang } = useAppContext();
  const t = aboutTextContent(lang);

  const buttonClasses = `xl:text-xl text-sm ${
    mode ? "text-custom-white" : "text-custom-black"
  } hover:text-gradient font-poppins font-normal flex justify-center w-1/3 xl:w-1/4 items-center`;

  const activeStyle = (section) => ({
    background: activeSection === section ? "#1b5931" : "",
    WebkitBackgroundClip: activeSection === section ? "text" : "",
    color: activeSection === section ? "transparent" : "",
    fontWeight: activeSection === section ? "bold" : "normal",
  });

  return (
    <div
      className={`w-full h-auto flex flex-col items-center text-center xl:justify-start ${
        mode ? "text-custom-white" : "text-custom-black"
      } z-50`}
    >
      <div className="w-[94%] xl:w-[55%] h-auto flex flex-row items-center justify-center xl:gap-24 gap-8 z-10">
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
        <div className="xl:w-[40%] w-[96%] m-auto h-auto font-poppins flex flex-col items-center py-32 animate-fade-down animate-duration-[800ms] animate-delay-0 animate-ease-in-out">
          {/* Mission Section */}
          <div className="flex flex-row items-center text-start justify-start mb-4">
            <div className="text-xl mr-1">
              <CiCircleChevDown />
            </div>
            <h4 className="text-xl text-gradient font-bold my-2">
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

          {/* Who We Are Section */}
          <div className="flex flex-row items-center text-start justify-start mb-4">
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
        <div className="xl:w-[40%] w-[96%] mx-auto h-auto font-poppins flex flex-col py-32 animate-fade-down animate-duration-[800ms] animate-delay-0 animate-ease-in-out">
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
                <div className="flex flex-row justify-start ml-8 underline font-light mb-2">
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
        <div className="xl:w-[40%] w-[96%] m-auto h-auto font-poppins flex flex-col py-32 animate-fade-down animate-duration-[800ms] animate-delay-0 animate-ease-in-out">
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
