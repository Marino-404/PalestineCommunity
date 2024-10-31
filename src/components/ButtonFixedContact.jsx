import React from "react";
import { FiMessageCircle } from "react-icons/fi";

const ButtonFixedContact = ({ onClick }) => {
  return (
    <a
      href="#Contact"
      onClick={onClick}
      className="fixed rounded-full flex items-center justify-center w-[58px] h-[58px] bg-gradient-to-b from-[#247043] to-[#778F43] text-custom-white bottom-[8vw] right-[6vw]  md:bottom-[3vw] md:right-[3vw] z-50 "
    >
      <FiMessageCircle className="text-custom-white text-3xl" />
    </a>
  );
};

export default ButtonFixedContact;
