import React from 'react';
import { useAppContext } from '../AppContext'; 

const Footer = () => {
  const { mode } = useAppContext(); 

  return (
    <footer className="w-full h-[4vh]  overflow-hidden mb-4">
      <div className={`w-full h-full flex flex-col justify-center items-center ${mode ? 'text-custom-white' : 'text-custom-black'}`}>
        <h1 className='font-poppins font-light text-xs'>© 2024 - Todos los derechos reservados.</h1>
      </div>
    </footer>
  );
};

export default Footer;

