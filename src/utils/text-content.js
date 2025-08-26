export const headerTextContent = (lang = true) => {
  if (lang) {
    return {
      connect: "Conectar",
      about: "Sobre nosotros",
      projects: "Proyectos",
      contact: "Contacto",
    };
  } else {
    return {
      connect: "Connect",
      about: "About Us",
      projects: "Projects",
      contact: "Contact",
    };
  }
};
