import React, { useState, useEffect } from 'react';
import { useAppContext } from '../AppContext';

import { 
  AiOutlineMenu,
  AiOutlineClose,
  AiFillMoon,
  AiFillSun,
} from "react-icons/ai";
import ButtonFixedContact from '../components/ButtonFixedContact';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMenu ? 'hidden' : 'auto';
  }, [showMenu]);

  const { mode, toggleMode, changeSection } = useAppContext();

  useEffect(() => {
    const html = document.querySelector('html');
    if (mode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [mode]);

  const HeaderStyle = 'navbar hover:text-gradient transition-none';

    const handleMenuItemClick = (section) => {
    changeSection(section);
    setShowMenu(false); 
  };

  return (
    <>
    <header  className={`xl:fixed flex items-center justify-between w-full h-[7vh] xl:h-[6vh] z-50 ${mode ? "text-custom-white" : "text-custom-black"} xl:animate-fade-down animate-duration-[1000ms]`}>
      <nav className={`fixed flex-1 text-center w-full h-full ${mode ? "text-custom-white" : "text-custom-black"} ${showMenu ? "top-0" : "-top-full"} ${mode ? "bg-[#000000e7]" : "bg-[#ffffffea]"} ${mode ? "xl:bg-[#000000cc]" : "xl:bg-[#ffffffef]"} transition-all duration-500 xl:transition-none xl:static flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-28 z-50`}>
        <a className={HeaderStyle} href="#Connect" onClick={() => handleMenuItemClick('connect')}>Connect</a>
        <a className={HeaderStyle} href="#About" onClick={() => handleMenuItemClick('about')}>Sobre Nosotros</a>
        <a className={HeaderStyle} href="#Projects" onClick={() => handleMenuItemClick('projects')}>Proyectos</a>
        <a className={HeaderStyle} href="#Community" onClick={() => handleMenuItemClick('community')}>Contacto</a>
        <div 
            className={` ${ showMenu ? "block" : "hidden xl:block"} flex flex-col items-center pt-10 cursor-default`}>
            <AiFillMoon
              onClick={toggleMode}
              className={`${
                !mode ? "bottom-[200px] xl:top-[12px]" : "bottom-[-400px] xl:top-[-150px]"
                } cursor-pointer transition-all duration-100 xl:duration-300 absolute w-[30px] h-[30px] xl:h-[20px] xl:w-[20px]`} 
              />
            <AiFillSun
              onClick={toggleMode}
              className={`${
                mode ? "bottom-[200px] xl:top-[12px]" : "bottom-[-400px] xl:top-[-150px]"
                } cursor-pointer transition-all duration-100 xl:duration-300 absolute w-[30px] h-[30px] xl:h-[20px] xl:w-[20px]`} 
            />
        </div>
      </nav>
      <div className='xl:hidden flex m-auto justify-center'>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className='text-2xl xl:hidden m-auto z-50'> 
          {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
    </header>
    <ButtonFixedContact onClick={() => handleMenuItemClick('community')}/>
    </>
  );
};

export default Header;

