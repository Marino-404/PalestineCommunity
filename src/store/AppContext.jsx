import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") === "true";
  });

  const [activeSection, setActiveSection] = useState("about");

  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") === "true";
  });

  const toggleMode = () => {
    setMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("mode", newMode);
      return newMode;
    });
  };

  const changeSection = (section) => {
    setActiveSection(section);
  };

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  useEffect(() => {
    document.body.className = mode ? "dark" : "light";
  }, [mode]);

  return (
    <AppContext.Provider
      value={{
        mode,
        toggleMode,
        activeSection,
        changeSection,
        lang,
        changeLang,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
