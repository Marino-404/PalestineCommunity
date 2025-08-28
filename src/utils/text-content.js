import { title } from "framer-motion/client";

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
      Spotify: "Música",
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
      Spotify: "Music",
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

export const peliculasTextContent = (lang = true) => {
  if (lang) {
    return {
      Pelicula1: {
        title: "NO OTHER LAND",
        description:
          "Basel Adra, activista palestino que lucha contra el desplazamiento forzado de su comunidad en Cisjordania. A través de su cámara, documenta la destrucción de su tierra natal a manos del ejército israelí. En Argentina, podés encontrarla en streaming en Prime Video, Filmin y Movistar+.",
      },
      Pelicula2: {
        title: "FARHA",
        description:
          "Farha, una niña de catorce años que vive con su padre en un pueblo palestino. Sus planes de estudiar en la ciudad se ven interrumpidos por la Nakba. Desde Argentina, Netflix muestra que este título no está disponible, pero se puede acceder cambiando el idioma de la cuenta a inglés.",
      },
      Pelicula3: {
        title: "A 200 Metros",
        description:
          "Mustafa y su esposa Salwa provienen de dos aldeas palestinas separadas por el muro. La situación de vida afecta su matrimonio, pero hacen lo posible para que funcione. Censurada recientemente por Netflix.",
      },
      Pelicula4: {
        title: "EL IDOLO",
        description:
          "Película sobre el cantante palestino Mohammad Assaf, desde su niñez hasta su etapa adulta, y su vida en Gaza hasta su triunfo en 'Arab Idol'.",
      },
      Pelicula5: {
        title: "Nacido en GAZA",
        description:
          "Rodada durante la última ofensiva israelí en Gaza (2014). Sigue a diez niños que muestran su día a día bajo las bombas y el embargo.",
      },
      Pelicula6: {
        title: "La sal de este mar",
        description:
          "Soraya nació y se educó en Brooklyn, pero regresa a Palestina, país del que su familia tuvo que exiliarse en 1948. Su hermano Emad ha conocido toda su vida la ocupación y sueña con obtener un visado para estudiar en Canadá.",
      },
    };
  } else {
    return {
      Pelicula1: {
        title: "NO OTHER LAND",
        description:
          "Basel Adra, a Palestinian activist, fights against the forced displacement of his community in the West Bank. Through his camera, he documents the destruction of his homeland. In Argentina, you can stream it on Prime Video, Filmin, and Movistar+.",
      },
      Pelicula2: {
        title: "FARHA",
        description:
          "Farha, a fourteen-year-old girl living with her father in a Palestinian village, has her plans to study in the city interrupted by the Nakba. From Argentina, Netflix shows the title is not available, but it can be accessed by changing the account language to English.",
      },
      Pelicula3: {
        title: "A 200 Metros",
        description:
          "Mustafa and his wife Salwa come from two Palestinian villages separated by the wall. Their unusual living situation affects their marriage, but they do their best to make it work. Recently censored by Netflix.",
      },
      Pelicula4: {
        title: "EL IDOLO",
        description:
          "Film about Palestinian singer Mohammad Assaf, from childhood to adulthood, and his life in Gaza until his triumph in 'Arab Idol'.",
      },
      Pelicula5: {
        title: "Born in GAZA",
        description:
          "Filmed during the last Israeli offensive in Gaza (2014). Follows ten children showing their daily lives under bombs and blockade.",
      },
      Pelicula6: {
        title: "Salt of this Sea",
        description:
          "Soraya was born and raised in Brooklyn but returns to Palestine, from where her family was exiled in 1948. Her brother Emad has known the occupation all his life and dreams of getting a visa to study in Canada.",
      },
    };
  }
};

export const seriesTextContent = (lang = true) => {
  if (lang) {
    return {
      Serie1: {
        title: "MO",
        description:
          "Mo Najjar, palestino que vive en Houston y lleva años intentando conseguir la ciudadanía estadounidense mientras trabaja en empleos informales y enfrenta múltiples obstáculos. La segunda temporada incluye un viaje a México, una visita a Palestina y referencias directas a la Nakba y la identidad cultural.",
      },
      Serie2: {
        title: "East Side",
        description:
          "Una serie basada en hechos reales que denuncia la ocupación de Jerusalén Este, de mayoría árabe, por parte de poderosos grupos israelíes.",
      },
      Serie3: {
        title: "Gaza Mon Amour",
        description:
          "Narra un delicado romance entre dos ancianos en medio de la frontera del horror. Gaza, hoy.",
      },
      Serie4: {
        title: "Lo que Walaa quiere",
        description:
          "Walaa, una chica adolescente criada en un campo de refugiados, rompe todas las reglas al decidir convertirse en una de las pocas mujeres policías de las fuerzas de seguridad palestinas.",
      },
      Serie5: {
        title: "El color de los Olivos",
        description:
          "Diversos personajes muestran la vulneración de derechos humanos que sufre diariamente la población palestina en la Franja de Gaza y la situación de bloqueo y posguerra en la que trata de sobrevivir.",
      },
      Serie6: {
        title: "Inch Allah",
        description:
          "La familia Amer vive rodeada por el muro en Cisjordania, puertas electrificadas, candados y la presencia constante de soldados. Se revelan sus luchas constantes y los pequeños detalles de su vida.",
      },
      Serie7: {
        title: "GAZA",
        description:
          "Chloe es una joven tocóloga que se ocupa de mujeres embarazadas bajo la supervisión de Michael, un médico francés, en un ambulatorio improvisado en un campo de refugiados de Cisjordania. Debe enfrentarse a diario a los controles y al conflicto que afectan a la vida de las personas.",
      },
      Serie8: {
        title: "Fauda",
        description:
          "Un veterano agente israelí vuelve a la caza en busca de un luchador palestino que creía muerto, poniendo en marcha una serie de eventos caóticos.",
      },
    };
  } else {
    return {
      Serie1: {
        title: "MO",
        description:
          "Mo Najjar, a Palestinian living in Houston, has struggled for years to obtain US citizenship while working informal jobs and facing multiple obstacles. The second season includes a trip to Mexico, a visit to Palestine, and direct references to the Nakba and cultural identity.",
      },
      Serie2: {
        title: "East Side",
        description:
          "A series based on real events that denounces the occupation of East Jerusalem, predominantly Arab, by powerful Israeli groups.",
      },
      Serie3: {
        title: "Gaza Mon Amour",
        description:
          "Narrates a delicate romance between two elderly people amid the horror border. Gaza, today.",
      },
      Serie4: {
        title: "What Walaa Wants",
        description:
          "Walaa, a teenage girl raised in a refugee camp, breaks all the rules by deciding to become one of the few female police officers in the Palestinian security forces.",
      },
      Serie5: {
        title: "The Color of Olives",
        description:
          "Various characters show the daily human rights violations suffered by the Palestinian population in the Gaza Strip and the post-war blockade conditions they try to survive.",
      },
      Serie6: {
        title: "Inch Allah",
        description:
          "The Amer family lives surrounded by the wall in the West Bank, electrified doors, padlocks, and the constant presence of soldiers. Their constant struggles and the small details of their lives are revealed.",
      },
      Serie7: {
        title: "GAZA",
        description:
          "Chloe is a young midwife who cares for pregnant women under the supervision of Michael, a French doctor, in a makeshift clinic in a West Bank refugee camp. She faces daily controls and the conflict affecting people's lives.",
      },
      Serie8: {
        title: "Fauda",
        description:
          "A veteran Israeli agent resumes hunting a Palestinian fighter he believed dead, setting off a series of chaotic events.",
      },
    };
  }
};

export const cocinaTextContent = (lang = true) => {
  if (lang) {
    return {
      Cocina1: {
        title: "JOUDIE KALLA - PALESTINE ON A PLATE",
        description:
          "Joudie Kalla es una talentosa cocinera, nacida en Londres, de padres de origen palestino. Su familia tiene sus raíces en Nazaret, Ramallah, Jaffa, Lydda, Safed y Belén. Su amor por la cocina comenzó desde muy joven, influenciada por las tradiciones culinarias de su familia. A lo largo de los años, ha dedicado su vida a preservar y compartir las ricas costumbres gastronómicas de Palestina, ha escrito dos libros: 'Palestine on a Plate' y 'Baladi: A Celebration of Food from Land and Sea'.",
      },
      Cocina2: {
        title: "HAMADA SHAQOURA",
        description:
          "Un 'influencer' gastronómico palestino le pone “amor y resistencia” a sus platos para alimentar a los desplazados en Gaza. Hamada Shaqoura emplea ahora las redes sociales para mostrar al mundo el hambre que padecen los gazatíes y la dificultad para alimentarse con los escasos bienes básicos y ayuda humanitaria que Israel permite que llegue a la Franja.",
      },
      Cocina3: {
        title: "MARK WIENS",
        description:
          "Mark Wiens es un joven Youtuber estadounidense, apasionado viajero y amante de la gastronomía, que ha conquistado el corazón de miles de seguidores en su canal de YouTube. Uno de sus destinos más memorables ha sido Palestina.",
      },
      Cocina4: {
        title: "LUKE MARTIN",
        description:
          "Luke Martin es un influencer que ha conquistado el mundo digital con su canal de YouTube. Desde que comenzó su aventura, ha recorrido continentes, capturando la esencia de cada país a través de sus sabores. En este video viaja a Palestina y nos recuerda que la comida es más que solo un plato; es una forma de conectar con las personas y las culturas que nos rodean.",
      },
    };
  } else {
    return {
      Cocina1: {
        title: "JOUDIE KALLA - PALESTINE ON A PLATE",
        description:
          "Joudie Kalla is a talented chef, born in London to Palestinian parents. Her family has roots in Nazareth, Ramallah, Jaffa, Lydda, Safed, and Bethlehem. Her love for cooking began at a young age, influenced by her family's culinary traditions. Over the years, she has dedicated her life to preserving and sharing the rich culinary heritage of Palestine, writing two cookbooks: 'Palestine on a Plate' and 'Baladi: A Celebration of Food from Land and Sea'.",
      },
      Cocina2: {
        title: "HAMADA SHAQOURA",
        description:
          "A Palestinian culinary influencer who adds 'love and resistance' to his dishes to feed displaced people in Gaza. Hamada Shaqoura now uses social media to show the world the hunger Gazans face and the difficulty of accessing basic goods and humanitarian aid permitted by Israel to reach the Strip.",
      },
      Cocina3: {
        title: "MARK WIENS",
        description:
          "Mark Wiens is a young American YouTuber, passionate traveler and food lover, who has won the hearts of thousands of followers on his YouTube channel. One of his most memorable destinations has been Palestine.",
      },
      Cocina4: {
        title: "LUKE MARTIN",
        description:
          "Luke Martin is an influencer who has conquered the digital world with his YouTube channel. Since beginning his adventure, he has traveled continents, capturing the essence of each country through its flavors. In this video he travels to Palestine, reminding us that food is more than a plate; it’s a way to connect with people and the cultures around us.",
      },
    };
  }
};

export const spotifyTextContent = (lang = true) => {
  if (lang) {
    return {
      Spotify1: { title: "ELYANNA", description: "- 7.3M Oyentes mensuales." },
      Spotify2: {
        title: "MOHAMMED ASSAF",
        description: "- 131.803 Oyentes mensuales.",
      },
      Spotify3: {
        title: "TRIO JUBRAN",
        description: "- 137.400 Oyentes mensuales.",
      },
      Spotify4: {
        title: "ROLA AZAR",
        description: "- 93.238 Oyentes mensuales.",
      },
      Spotify5: { title: "DAM", description: "- 33.782 Oyentes mensuales." },
      Spotify6: {
        title: "AMAL MURKUS",
        description: "- 52.535 Oyentes mensuales.",
      },
      Spotify7: {
        title: "YACOUB SHAHEEN",
        description: "- 4.741 Oyentes mensuales.",
      },
      Spotify8: {
        title: "HAYA ZAATRY",
        description: "- 11.800 Oyentes mensuales.",
      },
    };
  } else {
    return {
      Spotify1: { title: "ELYANNA", description: "- 7.3M Monthly listeners." },
      Spotify2: {
        title: "MOHAMMED ASSAF",
        description: "- 131,803 Monthly listeners.",
      },
      Spotify3: {
        title: "TRIO JUBRAN",
        description: "- 137,400 Monthly listeners.",
      },
      Spotify4: {
        title: "ROLA AZAR",
        description: "- 93,238 Monthly listeners.",
      },
      Spotify5: { title: "DAM", description: "- 33,782 Monthly listeners." },
      Spotify6: {
        title: "AMAL MURKUS",
        description: "- 52,535 Monthly listeners.",
      },
      Spotify7: {
        title: "YACOUB SHAHEEN",
        description: "- 4,741 Monthly listeners.",
      },
      Spotify8: {
        title: "HAYA ZAATRY",
        description: "- 11,800 Monthly listeners.",
      },
    };
  }
};

export const instagramTextContent = (lang = true) => {
  if (lang) {
    return {
      SALMA: {
        title: "SALMA",
        description: "Creadora de contenido palestino desde Gaza.",
      },
      MOTAZ_AZIZA: { title: "MOTAZ AZIZA", description: "Fotógrafo." },
      BISAN_OWDA: {
        title: "BISAN OWDA",
        description: "Cineasta, viajera y soñadora.",
      },
      HOSSAM_SHBAT: { title: "HOSSAM SHBAT", description: "Periodista." },
      WISSAM_NASSAR: { title: "WISSAM NASSAR", description: "Fotógrafo." },
      NOOH_AL_SHAGHNOBI: {
        title: "NOOH AL-SHAGHNOBI",
        description: "Fotógrafo.",
      },
      SALEH_ALJAFARAWI: {
        title: "SALEH ALJAFARAWI",
        description: "Fotógrafo.",
      },
    };
  } else {
    return {
      SALMA: {
        title: "SALMA",
        description: "Palestinian content creator from Gaza.",
      },
      MOTAZ_AZIZA: { title: "MOTAZ AZIZA", description: "Photographer." },
      BISAN_OWDA: {
        title: "BISAN OWDA",
        description: "Filmmaker, traveler and dreamer.",
      },
      HOSSAM_SHBAT: { title: "HOSSAM SHBAT", description: "Journalist." },
      WISSAM_NASSAR: { title: "WISSAM NASSAR", description: "Photographer." },
      NOOH_AL_SHAGHNOBI: {
        title: "NOOH AL-SHAGHNOBI",
        description: "Photographer.",
      },
      SALEH_ALJAFARAWI: {
        title: "SALEH ALJAFARAWI",
        description: "Photographer.",
      },
    };
  }
};

export const artTextContent = (lang = true) => {
  if (lang) {
    return {
      RAFEEF_ZIADAH: {
        title: "Rafeef Ziadah",
        description:
          "Periodista, poeta y activista de los Derechos Humanos nacida en el Líbano, pero de ascendencia palestina. Saltó a la fama con el poema “Nosotros enseñamos vida señor”, durante la operación Plomo Fundido en 2008-2009. Sus poemas y escritos tratan del sufrimiento del pueblo palestino, el derecho al retorno de los refugiados y descendientes y de la hipocresía del sionismo.",
      },
      MAHMOUD_DARWISH: {
        title: "MAHMOUD DARWISH",
        description:
          "Poeta Nacional Palestino y símbolo de la cultura palestina.",
      },
      SLIMAN_MANZOUR: {
        title: "SLIMAN MANZOUR",
        description:
          "Artista palestino clave en el desarrollo de la educación artística palestina, cofundador y director del Centro de Arte al-Wasiti de Jerusalén Este, y miembro fundador de la Academia Internacional de Arte Palestina de Ramala.",
      },
      RAWAN_ANANI: {
        title: "RAWAN ANANI",
        description:
          "Nacida en Jerusalén en 1978, sus pinturas reflejan la herencia palestina mediante vestidos folclóricos, caligrafía, paisajes y casas antiguas.",
      },
      RANA_SAMARA: {
        title: "RANA SAMARA",
        description:
          "Pintora palestina de Jerusalén. Su trabajo explora las expectativas y tabúes de la sociedad respecto a la sexualidad y roles de género de las mujeres palestinas.",
      },
      MALAK_MATTAR: {
        title: "MALAK MATTAR",
        description:
          "Artista gazatí cuya obra refleja las distintas emociones humanas ligadas a la guerra.",
      },
      HEL_FUNOUN: {
        title: "HEL FUNOUN",
        description:
          "Organización independiente de danza palestina, combinando música y danza tradicional, reviviendo y reactivando la danza folclórica palestina.",
      },
      TATREEZ: {
        title: "TATREEZ",
        description:
          "Forma de arte del bordado tradicional palestino. Simboliza la resistencia, oportunidades económicas para mujeres palestinas y transmite historias de su tierra natal.",
      },
    };
  } else {
    return {
      RAFEEF_ZIADAH: {
        title: "Rafeef Ziadah",
        description:
          "Journalist, poet, and human rights activist born in Lebanon of Palestinian descent. Rose to fame with the poem 'We Teach Life, Sir' during Operation Cast Lead in 2008-2009. Her writings deal with the suffering of the Palestinian people, the right of return for refugees and descendants, and the hypocrisy of Zionism.",
      },
      MAHMOUD_DARWISH: {
        title: "MAHMOUD DARWISH",
        description:
          "Palestinian national poet and symbol of Palestinian culture.",
      },
      SLIMAN_MANZOUR: {
        title: "SLIMAN MANZOUR",
        description:
          "Key Palestinian artist in developing Palestinian art education, cofounder and director of al-Wasiti Art Center in East Jerusalem, and founding member of the International Academy of Palestinian Art in Ramallah.",
      },
      RAWAN_ANANI: {
        title: "RAWAN ANANI",
        description:
          "Born in Jerusalem in 1978, her paintings reflect Palestinian heritage through folk costumes, calligraphy, landscapes, and old Palestinian houses.",
      },
      RANA_SAMARA: {
        title: "RANA SAMARA",
        description:
          "Palestinian painter from Jerusalem. Her work explores societal expectations and taboos regarding sexuality and gender roles of Palestinian women.",
      },
      MALAK_MATTAR: {
        title: "MALAK MATTAR",
        description:
          "Gazan artist whose work reflects the various human emotions linked to war.",
      },
      HEL_FUNOUN: {
        title: "HEL FUNOUN",
        description:
          "Independent Palestinian dance organization combining music and traditional dance, reviving and reactivating Palestinian folk dance.",
      },
      TATREEZ: {
        title: "TATREEZ",
        description:
          "Traditional Palestinian embroidery art. Symbolizes resistance, economic opportunities for Palestinian women, and tells stories of their homeland.",
      },
    };
  }
};

export const celebridadesTextContent = (lang = true) => {
  if (lang) {
    return {
      bono: {
        title: "BONO – U2",
        description:
          "U2 ha cambiado la letra de una de sus canciones más icónicas, Pride (In the Name of Love), para recordar a las víctimas que han muerto en los primeros días del conflicto entre Israel y Gaza.",
      },
      bella: {
        title: "BELLA HADID",
        description: "Modelo estadounidense de origen palestino.",
      },
      julia: {
        title: "JULIA BOUTROS",
        description: "Cantante libanesa.",
      },
      roger: {
        title: "ROGER WATERS",
        description: "Compositor y músico británico.",
      },
      residente: {
        title: "RESIDENTE",
        description: "Rapero y compositor puertorriqueño.",
      },
    };
  } else {
    return {
      bono: {
        title: "BONO – U2",
        description:
          "U2 changed the lyrics of one of their most iconic songs, Pride (In the Name of Love), to remember the victims who died in the first days of the conflict between Israel and Gaza.",
      },
      bella: {
        title: "BELLA HADID",
        description: "American model of Palestinian descent.",
      },
      julia: {
        title: "JULIA BOUTROS",
        description: "Lebanese singer.",
      },
      roger: {
        title: "ROGER WATERS",
        description: "British composer and musician.",
      },
      residente: {
        title: "RESIDENTE",
        description: "Puerto Rican rapper and songwriter.",
      },
    };
  }
};

export const gazaTextContent = (lang = true) => {
  if (lang) {
    return {
      almudena: {
        title: "ALMUDENA ARIZA",
        description:
          "Periodista española, corresponsal de TVE con décadas de experiencia en zonas de conflicto. Denuncia el “shadow ban” que afectan contenidos sobre Gaza en redes sociales, y explica por qué escribe “G*aza” para evitar censura algorítmica.",
      },
      huda: {
        title: "HUDA EMAD HEGAZI",
        description:
          "La voz en español desde Gaza-  Corresponsal de La W Radio (Colombia) Su cobertura diaria lleva a la audiencia hispanohablante una mirada directa desde el terreno del conflicto.",
      },
      mikel: {
        title: "MIKEL AYESTARAN",
        description:
          "Periodista y corresponsal basado en Jerusalén, con amplia experiencia en Oriente Medio - Ganador del Premio Ortega y Gasset 2025 por Menú de Gaza, un proyecto de fotoperiodismo que narra la vida cotidiana y el hambre en la Franja mediante fotos de platos y notas de voz.",
      },
    };
  } else {
    return {
      almudena: {
        title: "ALMUDENA ARIZA",
        description:
          "Spanish journalist, TVE correspondent with decades of experience in conflict zones. Denounces the 'shadow ban' affecting content about Gaza on social media, and explains why she writes 'G*aza' to avoid algorithmic censorship.",
      },
      huda: {
        title: "HUDA EMAD HEGAZI",
        description:
          "The Spanish Voice from Gaza- Correspondent of La W Radio (Colombia) Its daily coverage brings the Spanish-speaking audience a direct look from the terrain of the conflict.",
      },
      mikel: {
        title: "MIKEL AYESTARAN",
        description:
          "Journalist and correspondent based in Jerusalem, with extensive experience in the Middle East - Winner of the Ortega y Gasset Award 2025 for Menu de Gaza, a photojournalism project that narrates daily life and hunger in the Strip through photos of dishes and voice notes.",
      },
    };
  }
};
