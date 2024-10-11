import React, { useState } from 'react';
import { useAppContext } from '../AppContext';
import Contact from '../assets/Contact.jsx';
import DivLineAbout from '../assets/DivLineAbout.jsx';
import { FaCircle } from "react-icons/fa";


const About = () => {
  const { mode } = useAppContext();
  const [activeSection, setActiveSection] = useState('about'); 

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div id='About' className={`w-full h-auto flex flex-col items-center text-center xl:justify-start ${mode ? 'text-[#ffffffc2]' : 'text-[#000000c2]'} z-10`}>
      <div className={`w-[96%] xl:w-[55%] h-auto flex flex-row items-center justify-center xl:gap-20 pt-2 z-10`}>
        <button 
          className={`text-xl ${mode ? 'text-[#ffffffc2]' : 'text-[#000000c2]'} hover:text-gradient font-bebas font-light flex justify-center`}
          style={{ 
                  background: activeSection === 'about' ? 'linear-gradient(to bottom, #247043, #778F43)' : '', 
                  WebkitBackgroundClip: activeSection === 'about' ? 'text' : '',
                  color: activeSection === 'about' ? 'transparent' : ''
          }}
          onClick={() => handleSectionChange('about')}>
          Sobre Connect Palestine
        </button>
        <button 
          className={`text-xl ${mode ? 'text-[#ffffffc2]' : 'text-[#000000c2]'} hover:text-gradient font-bebas font-light flex justify-center`}
          style={{ 
                  background: activeSection === 'projects' ? 'linear-gradient(to bottom, #247043, #778F43)' : '', 
                  WebkitBackgroundClip: activeSection === 'projects' ? 'text' : '',
                  color: activeSection === 'projects' ? 'transparent' : ''
          }}
          onClick={() => handleSectionChange('projects')}>
          Nuestros proyectos
        </button>
        <button
          className={`text-xl ${mode ? 'text-[#ffffffc2]' : 'text-[#000000c2]'} hover:text-gradient font-bebas font-light flex justify-center`}
          style={{ 
                  background: activeSection === 'community' ? 'linear-gradient(to bottom, #247043, #778F43)' : '', 
                  WebkitBackgroundClip: activeSection === 'community' ? 'text' : '',
                  color: activeSection === 'community' ? 'transparent' : ''
          }}
          onClick={() => handleSectionChange('community')}>
          Sumate a la Comunidad
        </button>
      </div>

      <DivLineAbout />

      <div className={`xl:w-[55%] w-[96%] h-auto font-poppins flex flex-col items-center pt-12`} style={{ display: activeSection === 'about' ? 'flex' : 'none' }}>

        <h4 className='text-md font-bold m-4'>Nuestra Misión</h4>

        <div className='flex flex-row gap-1 items-start ' >
          <FaCircle className='text-xl' />
          <span>
              Nuestra misión es crear una comunidad digital global que, a través de la tecnología y el acceso a contenido, impulse
              la visibilidad de Palestina.
          </span>
        </div>


        <div className='flex flex-row gap-1 items-start ' >
          <FaCircle className='text-xl' />
          <span>
              Queremos que los usuarios se conecten, interactúen y aprendan, mientras apoyan una red
              donde converjan la información, las voces y los talentos que defienden la identidad palestina.
          </span>
        </div>


        <h4 className='text-md font-bold m-4'>Quiénes Somos</h4>

        <div className='flex flex-row gap-1 items-start ' >
          <FaCircle className='text-xl' />
          <span>
              Connect Palestine es una plataforma digital innovadora diseñada para centralizar y compartir lo mejor de la cultura,
              historia, gastronomía, arte y actualidad de Palestina.
          </span>
        </div>


        <div className='flex flex-row gap-1 items-start ' >
          <FaCircle className='text-xl' />
          <span>
              Un portal dinámico que conecta a personas de todo el mundo
              interesadas en la riqueza de Palestina, y se convierta en una poderosa herramienta para fortalecer la narrativa de
              resistencia palestina en el mundo digital.
          </span>
        </div>

      </div>

 
      <div className={`xl:w-[55%] w-[96%] h-auto font-poppins flex flex-col items-center pt-12 p-6 z-10`} style={{ display: activeSection === 'projects' ? 'flex' : 'none' }}>
        
        <span>
          <ul>
          <li className='flex flex-col pb-4'> 
          <span className='font-bold p-2'>Biblioteca Digital Multimedia</span>
          <span>
            Un centro de contenidos con acceso a películas, documentales, series y más, todo centrado en la narrativa palestina.
          </span>
          </li>
          <li className='flex flex-col pb-4'>
          <span className='font-bold p-2'>Explora la Cocina Palestina</span>
          <span>
            Un espacio donde chefs y foodies pueden descubrir y compartir recetas tradicionales, interactuando con la comunidad y conectándose a través de la gastronomía.
          </span>
        </li>
        <li className='flex flex-col pb-4'>
          <span className='font-bold p-2'>Celebrities for Palestine</span>
          <span>
            Un espacio donde destacamos a personalidades públicas que muestran su apoyo y solidaridad con Palestina, amplificando su impacto en redes y medios.
          </span>
        </li>
        <li className='flex flex-col pb-4'>
        <span className='font-bold p-2'>Arte y Poesía Digital</span>
        <span>
          Una galería virtual que celebra el talento de artistas palestinos, conectando a los usuarios con la vibrante escena artística y poética de Palestina.
        </span>
      </li>
      <li className='flex flex-col pb-4'>
        <span className='font-bold p-2'>Podcasts y Opiniones</span>
        <span>
          Una sección dedicada a reseñas de podcasts, con análisis actuales sobre la cultura, política y resistencia palestina.
      </span>
      </li>
      <li className='flex flex-col pb-4'>
    <span className='font-bold p-2'>Redes y Medios Sociales</span>
    <span>
      Un radar que monitorea las principales cuentas y medios que están en la vanguardia de la narrativa digital sobre Palestina.
    </span>
    </li>
          </ul>
        </span>
      </div>

      <div className={`xl:w-[55%] w-[96%] h-auto font-poppins flex flex-col items-center pt-12 p-6 z-10`} style={{ display: activeSection === 'community' ? 'flex' : 'none' }}>
        <h3 className='text-4xl text-gradient font-bold mb-6'>Sumate a la Comunidad</h3>
        <span className='mb-6' >
          Te invitamos a ser parte de esta comunidad en constante expansión, donde cada conexión amplifica las voces palestinas y refuerza una red de resistencia. Conéctate, colabora y comparte.
          ¡Hagamos que el mundo escuche a Palestina!
        </span>
        <Contact />
      </div>
    </div>
  );
}

export default About;

