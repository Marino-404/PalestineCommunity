import { useState, useEffect } from "react";
import { useAppContext } from "../store/AppContext";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillMoon,
  AiFillSun,
} from "react-icons/ai";
import ButtonFixedContact from "../components/ButtonFixedContact";
import { headerTextContent } from "../utils/text-content";
import LanguageSwitch from "../components/icons/LanguajeIcon";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "auto";
  }, [showMenu]);

  const { mode, toggleMode, changeSection, lang, changeLang } = useAppContext();

  useEffect(() => {
    const html = document.querySelector("html");
    if (mode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [mode]);

  const HeaderStyle = "navbar min-w-[120px] flex items-center justify-center";

  const LinkTextStyle = `relative after:absolute after:bottom-0 after:left-0 after:h-[0.5px] ${
    mode ? "after:bg-custom-white" : "after:bg-custom-black"
  } after:w-0 hover:after:w-full after:transition-all after:duration-300 font-light text-md`;

  const handleMenuItemClick = (section) => {
    changeSection(section);
    setShowMenu(false);
  };

  return (
    <>
      <header
        className={`xl:fixed flex items-center justify-between w-full border-b border-[#D4AF37] h-[7vh] xl:h-[5vh] z-50 ${
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
          } transition-[top] duration-500 xl:transition-none xl:static flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-28 z-50`}
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
            <span className={LinkTextStyle}>
              {headerTextContent(lang).connect}
            </span>
          </a>
          <a
            className={HeaderStyle}
            href="#About"
            onClick={() => handleMenuItemClick("about")}
          >
            <span className={LinkTextStyle}>
              {headerTextContent(lang).about}
            </span>
          </a>
          <a
            className={HeaderStyle}
            href="#Projects"
            onClick={() => handleMenuItemClick("projects")}
          >
            <span className={LinkTextStyle}>
              {headerTextContent(lang).projects}
            </span>
          </a>
          <a
            className={HeaderStyle}
            href="#Community"
            onClick={() => handleMenuItemClick("community")}
          >
            <span className={LinkTextStyle}>
              {headerTextContent(lang).contact}
            </span>
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
              className={`relative w-12 h-6 rounded-full  ${
                mode ? "bg-gray-700" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 flex items-center justify-center rounded-full transition-transform duration-300 ${
                  mode
                    ? "translate-x-6 bg-gray-700"
                    : "translate-x-0 bg-gray-300"
                }`}
              >
                {mode ? (
                  <AiFillSun className="w-full h-full" />
                ) : (
                  <AiFillMoon className="w-full h-full" />
                )}
              </span>
            </button>

            <LanguageSwitch
              lang={lang ? "Es" : "En"}
              toggleLang={(newLang) => changeLang(newLang === "Es")}
            />
          </div>
        </nav>

        <div className="xl:hidden flex m-auto justify-center">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-2xl xl:hidden m-auto z-50 relative w-8 h-8"
          >
            <AnimatePresence mode="wait">
              {showMenu ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <AiOutlineClose />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <AiOutlineMenu />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      <ButtonFixedContact onClick={() => handleMenuItemClick("community")} />
    </>
  );
};

export default Header;
