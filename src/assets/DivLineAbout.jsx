import { div } from "framer-motion/client";
import React from "react";
import { useAppContext } from "../AppContext";

function DivLine () {

    const { mode } = useAppContext();

    return (
        <div 
        className={`absolute mx-auto my-14 w-[90%] xl:w-[40%] h-[1px] 
         ${mode ? 'divisorDark' : 'divisorLight'} z-50`} >
        </div>
    );
}

export default DivLine