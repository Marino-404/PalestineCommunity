import React from 'react';
import { useAppContext } from '../AppContext.jsx';
import Contact from '../assets/Contact.jsx';
import DivLineAbout from '../assets/DivLineAbout.jsx';
import { BsArrowRightShort } from "react-icons/bs";
import { CiCircleChevDown } from "react-icons/ci";


const About = () => {
  const { mode, activeSection, changeSection } = useAppContext();

  const buttonClasses = `text-xl ${mode ? 'text-[#ffffffc2]' : 'text-[#000000c2]'} 
                          hover:text-gradient font-bebas font-light flex justify-center`;

  const activeStyle = (section) => ({
    background: activeSection === section ? 'linear-gradient(to bottom, #247043, #778F43)' : '',
    WebkitBackgroundClip: activeSection === section ? 'text' : '',
    color: activeSection === section ? 'transparent' : ''
  });

  return (
    <div className={`w-full h-auto flex flex-col items-center text-center xl:justify-start ${mode ? 'text-[#ffffffc2]' : 'text-[#000000c2]'} z-50`}>

      <div className={`w-[96%] xl:w-[55%] h-auto flex flex-row items-center justify-center xl:gap-20 gap-6 z-10`}>
        <button id='About' className={buttonClasses} style={activeStyle('about')} onClick={() => changeSection('about')}>
          Sobre Connect Palestine
        </button>
        <button id='Projects' className={buttonClasses} style={activeStyle('projects')} onClick={() => changeSection('projects')}>
          Nuestros proyectos
        </button>
        <button id='Community' className={buttonClasses} style={activeStyle('community')} onClick={() => changeSection('community')}>
          Sumate a la Comunidad
        </button>
      </div>

      <DivLineAbout />

    
      {activeSection === 'about' && (
        <div className={`xl:w-[55%] w-[96%] h-auto font-poppins flex flex-col items-center pt-12`}>

          <div className='flex flex-row items-center text-start justify-start mb-4' >
            <div className='text-xl mr-1'>
            <CiCircleChevDown />
            </div>
            <h4 className='text-xl text-gradient font-bold my-2'>Nuestra Misión</h4>
          </div>

          <div className='flex flex-row items-center text-start justify-start mb-4'>
            <div className='text-2xl mr-2' >
            <BsArrowRightShort />
            </div>
            <span>Nuestra misión es crear una comunidad digital global que, a través de la tecnología y el acceso a contenido, impulse la visibilidad de Palestina.</span>
          </div>

          <div className='flex flex-row items-center text-start justify-start mb-4'>
            <div className='text-2xl mr-2' >
            <BsArrowRightShort />
            </div>
            <span>Queremos que los usuarios se conecten, interactúen y aprendan, apoyando una red donde converjan la información, las voces y los talentos que defienden la identidad palestina.</span>
          </div>
          
          <div className='flex flex-row items-center text-start justify-start mb-4' >
            <div className='text-xl mr-1'>
            <CiCircleChevDown />
            </div>
            <h4 className='text-xl text-gradient font-bold my-2'>Quiénes Somos</h4>
          </div>
 
          <div className='flex flex-row items-center text-start justify-start mb-4'>
            <div className='text-2xl mr-2' >
            <BsArrowRightShort />
            </div>
            <span>Connect Palestine es una plataforma digital innovadora diseñada para centralizar y compartir lo mejor de la cultura, historia, gastronomía, arte y actualidad de Palestina.</span>
          </div>

          <div className='flex flex-row items-center text-start justify-start mb-4'>
            <div className='text-2xl mr-2' >
            <BsArrowRightShort />
            </div>
            <span>Un portal dinámico que conecta a personas de todo el mundo interesadas en la riqueza de Palestina, y se convierte en una poderosa herramienta para fortalecer la narrativa de resistencia palestina en el mundo digital.</span>
          </div>

        </div>
      )}


      {activeSection === 'projects' && (
      <div className={`xl:w-[55%] w-[96%] h-auto font-poppins flex flex-col pt-12`}>

        <div className='flex flex-row items-center text-center justify-center mb-4'>
          <div className='text-xl mr-1'>
            <CiCircleChevDown />
          </div>
          <h4 className='text-xl text-gradient font-bold my-2'>Nuestros Proyectos</h4>
        </div>
    
        <ul>
          {[ 
            {
              title: 'Biblioteca Digital Multimedia',
              description: 'Un centro de contenidos con acceso a películas, documentales, series y más, todo centrado en la narrativa palestina.'
            },
            {
              title: 'Explora la Cocina Palestina',
              description: 'Un espacio donde chefs y foodies pueden descubrir y compartir recetas tradicionales, interactuando con la comunidad y conectándose a través de la gastronomía.'
            },
            {
              title: 'Celebrities for Palestine',
              description: 'Un espacio donde destacamos a personalidades públicas que muestran su apoyo y solidaridad con Palestina, amplificando su impacto en redes y medios.'
            },
            {
              title: 'Arte y Poesía Digital',
              description: 'Una galería virtual que celebra el talento de artistas palestinos, conectando a los usuarios con la vibrante escena artística y poética de Palestina.'
            },
            {
              title: 'Podcasts y Opiniones',
              description: 'Una sección dedicada a reseñas de podcasts, con análisis actuales sobre la cultura, política y resistencia palestina.'
            },
            {
              title: 'Redes y Medios Sociales',
              description: 'Un radar que monitorea las principales cuentas y medios que están en la vanguardia de la narrativa digital sobre Palestina.'
            },
          ].map((project, index) => (
            <li key={index} className='flex flex-col text-start mb-4'>
              <div className='flex flex-row justify-start ml-8 underline font-semibold mb-2 '>
                <span >{project.title}</span>
              </div>
              <div className='flex flex-row items-center text-start justify-center '>
                <div className='text-2xl mr-2'>
                  <BsArrowRightShort />
                </div>
                <span>{project.description}</span>
              </div>
          
            </li>
          ))}
        </ul>
      </div>
      )}


      {activeSection === 'community' && (

        <div className={`xl:w-[55%] w-[96%] h-auto font-poppins flex flex-col pt-12`}>

            <div className='flex flex-row items-center text-center justify-center mb-4'>
              <div className='text-xl mr-1'>
                <CiCircleChevDown />
              </div>
              <h4 className='text-xl text-gradient font-bold my-2'>Sumate a la Comunidad</h4>
            </div>

            <div className='flex flex-row items-center text-start justify-start mb-4'>
              <div className='text-2xl mr-2' >
                <BsArrowRightShort />
              </div>
              <span>Te invitamos a ser parte de esta comunidad en constante expansión, donde cada conexión amplifica las voces palestinas y refuerza una red de resistencia.</span>
            </div>

            <div className='flex flex-row items-center text-start justify-start mb-4'>
              <div className='text-2xl mr-2' >
                <BsArrowRightShort />
              </div>
              <span>¡Conectate, colaborá y compartí!<br />Hagamos que el mundo escuche a Palestina.</span>
            </div>

            <Contact />


        </div>
      )}
    </div>
  );
}

export default About;



