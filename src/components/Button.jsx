import React from "react";
import { useAppContext } from "../AppContext";

const Button = () => {
  const { mode } = useAppContext();

  return (
    <button
      type="submit"
      className={`text-sm font-poppins font-normal py-2 px-6 bg-gradient-to-b from-[#247043] to-[#778F43] ${
        mode ? "text-custom-black" : "text-custom-white"
      } rounded-lg`}
    >
      Enviar
    </button>
  );
};

export default Button;
