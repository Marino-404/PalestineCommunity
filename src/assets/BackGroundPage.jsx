import React from "react";
import { useAppContext } from '../AppContext'; // Asegúrate de que la ruta sea correcta

function BackGroundPage() {
  const { mode } = useAppContext(); // Accede al estado del modo

  return (
    <div
      className={`fixed inset-0 -z-10 h-screen w-full ${
        mode
          ? 'bg-black bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:14px_24px]'
          : 'bg-white bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px]'


          
      }`}
    ></div>
  );
}

export default BackGroundPage;
