import { useState, useEffect } from "react";
import { useAppContext } from "../AppContext";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillMoon,
  AiFillSun,
} from "react-icons/ai";
import ButtonFixedContact from "../components/ButtonFixedContact";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "auto";
  }, [showMenu]);

  const { mode, toggleMode, changeSection, language, toggleLanguage } =
    useAppContext();

  useEffect(() => {
    const html = document.querySelector("html");
    if (mode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [mode]);

  const HeaderStyle =
    "navbar min-w-[120px] flex items-center justify-center hover:text-[#1B5931] transition";

  const LinkTextStyle =
    "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-current after:w-0 hover:after:w-full after:transition-all after:duration-300";

  const handleMenuItemClick = (section) => {
    changeSection(section);
    setShowMenu(false);
  };

  const translations = {
    es: {
      connect: "Conectar",
      about: "Sobre Nosotros",
      projects: "Proyectos",
      community: "Contacto",
    },
    en: {
      connect: "Connect",
      about: "About Us",
      projects: "Projects",
      community: "Contact",
    },
  };

  const t = translations[language] || translations["es"];

  return (
    <>
      <header
        className={`xl:fixed flex items-center justify-between w-full border-b border-[#D4AF37] h-[7vh] xl:h-[6vh] z-50 ${
          mode ? "text-custom-white" : "text-custom-black"
        } xl:animate-fade-down animate-duration-[1000ms]`}
      >
        <nav
          className={`fixed flex-1 text-center w-full h-full ${
            mode ? "text-custom-white" : "text-custom-black"
          } ${showMenu ? "top-0" : "-top-full"} ${
            mode ? "bg-[#000000e7]" : "bg-[#ffffffea]"
          } ${
            mode ? "xl:bg-[#000000cc]" : "xl:bg-[#ffffffef]"
          } transition-all duration-500 xl:transition-none xl:static flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-28 z-50`}
          onClick={() => {
            if (showMenu) {
              setShowMenu(false);
            }
          }}
        >
          <a
            className={HeaderStyle}
            href="#Connect"
            onClick={() => handleMenuItemClick("connect")}
          >
            <span className={LinkTextStyle}>{t.connect}</span>
          </a>

          <a
            className={HeaderStyle}
            href="#About"
            onClick={() => handleMenuItemClick("about")}
          >
            <span className={LinkTextStyle}>{t.about}</span>
          </a>

          <a
            className={HeaderStyle}
            href="#Projects"
            onClick={() => handleMenuItemClick("projects")}
          >
            <span className={LinkTextStyle}>{t.projects}</span>
          </a>

          <a
            className={HeaderStyle}
            href="#Community"
            onClick={() => handleMenuItemClick("community")}
          >
            <span className={LinkTextStyle}>{t.community}</span>
          </a>

          <div
            className={`flex ${
              showMenu ? "flex-col gap-2 pt-8" : "xl:flex-row gap-2"
            } items-center justify-center min-w-[120px]`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMode();
              }}
              className="w-[24px] h-[24px] xl:w-[18px] xl:h-[18px] flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110"
            >
              {mode ? (
                <AiFillSun className="w-full h-full transition-all duration-300 ease-in-out opacity-100 scale-100" />
              ) : (
                <AiFillMoon className="w-full h-full transition-all duration-300 ease-in-out opacity-100 scale-100" />
              )}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleLanguage(language === "es" ? "en" : "es");
              }}
              className="text-base font-semibold hover:text-[#1B5931] transition"
            >
              {language === "es" ? "en" : "es"}
            </button>
          </div>
        </nav>

        <div className="xl:hidden flex m-auto justify-center">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-2xl xl:hidden m-auto z-50"
          >
            {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </header>

      <ButtonFixedContact onClick={() => handleMenuItemClick("community")} />
    </>
  );
};

export default Header;
