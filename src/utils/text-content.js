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

export const cardTextContent = (lang = true) => {
  if (lang) {
    return {
      intro: "Tu enlace con la Cultura, Historia y Resistencia.",
      Peliculas: "Películas",
      Series: "Series",
      Cocina: "Cocina",
      Spotify: "Spotify",
      Instagram: "Instagram",
      Arte: "Arte",
      Celebridades: "Celebridades",
      Podcast: "Podcast",
      Media: "Media/TV/Radio",
      ONG: "ONG",
      Turismo: "Turismo",
      Instituciones: "Instituciones",
    };
  } else {
    return {
      intro: "Your link to Culture, History and Resistance.",
      Peliculas: "Movies",
      Series: "TV Shows",
      Cocina: "Cooking",
      Spotify: "Spotify",
      Instagram: "Instagram",
      Arte: "Art",
      Celebridades: "Celebrities",
      Podcast: "Podcast",
      Media: "Media/TV/Radio",
      ONG: "NGOs",
      Turismo: "Tourism",
      Instituciones: "Institutions",
    };
  }
};

export const aboutTextContent = (lang = true) => {
  if (lang) {
    return {
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
    };
  } else {
    return {
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
    };
  }
};

export const contactTextContent = (lang = true) => {
  if (lang) {
    return {
      title: "¡Ponete en contacto!",
      placeholders: {
        name: "Nombre",
        email: "Email",
        number: "Número de celular (opcional)",
        message: "Escribe tu mensaje (opcional)",
      },
      warnings: {
        emptyFields: "Por favor completa todos los campos.",
        invalidEmail: "Email inválido.",
        invalidNumber: "Número de celular inválido.",
        sendError: "Hubo un error al enviar el mensaje.",
        sentSuccess: "¡Enviado correctamente!",
        sending: "Enviando...",
      },
    };
  } else {
    return {
      title: "Get in touch!",
      placeholders: {
        name: "Name",
        email: "Email",
        number: "Phone number (optional)",
        message: "Write your message (optional)",
      },
      warnings: {
        emptyFields: "Please fill in all required fields.",
        invalidEmail: "Invalid email.",
        invalidNumber: "Invalid phone number.",
        sendError: "There was an error sending the message.",
        sentSuccess: "Sent successfully!",
        sending: "Sending...",
      },
    };
  }
};
