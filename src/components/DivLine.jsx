import { div } from "framer-motion/client";
import React from "react";
import { useAppContext } from "../AppContext";

function DivLine() {
  const { mode } = useAppContext();

  return (
    <div
      className={`mx-auto my-8 w-full xl:w-[75%] h-[2px] 
         ${
           mode ? "divisorDark" : "divisorLight"
         } xl:animate-fade-down animate-duration-[2000ms]`}
    ></div>
  );
}

export default DivLine;
