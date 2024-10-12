import React, { useState, useEffect } from 'react';
import { useAppContext } from '../AppContext';

/* Icons */
import { 
  AiOutlineMenu,
  AiOutlineClose,
  AiFillMoon,
  AiFillSun,
} from "react-icons/ai";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMenu ? 'hidden' : 'auto';
  }, [showMenu]);

  const { mode, toggleMode } = useAppContext();

  useEffect(() => {
    const html = document.querySelector('html');
    if (mode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [mode]);

  const handleMenuItemClick = () => {
    setShowMenu(false); // Cierra el menú
  };

  return (
    <header className="xl:fixed flex items-center justify-between w-full h-[7vh] xl:h-[8vh] z-50 xl:animate-fade-down xl:animate-once xl:animate-duration-[2000ms] xl:animate-delay-[500ms] xl:animate-ease-in-out">
      <nav className={`fixed flex-1 text-center w-full h-full ${showMenu ? "top-0" : "-top-full"} ${mode ? "bg-[#000000e7]" : "bg-[#ffffffea]"} ${mode ? "xl:bg-[#000000cc]" : "xl:bg-[#ffffffef]"} transition-all duration-500 xl:transition-none xl:static flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-28 z-50`}>
      <a className="navbar dark:text-white hover:text-gradient dark:hover:text-gradient transition-none" href="#Connect" onClick={handleMenuItemClick}>Connect</a>
        <a className="navbar dark:text-white hover:text-gradient dark:hover:text-gradient transition-none" href="#About" onClick={() => { handleMenuItemClick; changeSection('about');  }}>Sobre Nosotros</a>
        <a className='navbar dark:text-white hover:text-gradient dark:hover:text-gradient transition-none' href="#About" onClick={() => { handleMenuItemClick; changeSection('projects'); }}>Proyectos</a>
        <a className='navbar dark:text-white hover:text-gradient dark:hover:text-gradient transition-none' href="#About" onClick={() => { handleMenuItemClick; changeSection('community'); }}>Contacto</a>
        <button 
            onClick={toggleMode}
            className='text-2xl justify-center items-center pt-10 xl:p-0 text-black dark:text-white hover:animate-rotate-y hover:animate-once hover:animate-ease-in-out'>
            {mode ? <AiFillSun /> : <AiFillMoon />}
        </button>
      </nav>
      <div className='xl:hidden flex m-auto justify-center'>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className='text-2xl xl:hidden text-black dark:text-white m-auto z-50'> 
          {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
    </header>
  );
};

export default Header;

