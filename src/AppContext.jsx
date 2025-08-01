import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") === "true";
  });

  const [activeSection, setActiveSection] = useState("about");

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "es";
  });

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

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

  useEffect(() => {
    document.body.className = mode ? "dark" : "light";
  }, [mode]);

  useEffect(() => {
    language === "es"
      ? document.documentElement.setAttribute("lang", "es")
      : document.documentElement.setAttribute("lang", "en");
  }, [language]);

  return (
    <AppContext.Provider
      value={{
        mode,
        toggleMode,
        activeSection,
        changeSection,
        language,
        toggleLanguage,
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
