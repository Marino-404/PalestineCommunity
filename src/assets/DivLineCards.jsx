import { div } from "framer-motion/client";
import React from "react";
import { useAppContext } from "../AppContext";

function DivLine () {

    const { mode } = useAppContext();

    return (
        <div 
        className={`mx-auto w-[90%] xl:w-[40%] h-[1px] my-6
         ${mode ? 'divisorDark' : 'divisorLight'} z-50`} >
        </div>
    );
}

export default DivLine