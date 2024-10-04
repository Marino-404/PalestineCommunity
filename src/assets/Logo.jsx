import { div } from "framer-motion/client";
import heroImg from "/src/images/Logo.png";

function Logo() {
    return (
        <div className="flex justify-center items-center ">
            <img src={heroImg} alt="logo" className="xl:w-[230px] h-[220px] z-10 items-center justify-center" />
        </div>
    )
}

export default Logo
