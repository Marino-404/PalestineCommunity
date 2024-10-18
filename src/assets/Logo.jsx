import { div } from "framer-motion/client";
import heroImg from "/src/images/Logo.png";

function Logo() {
    return (
        <div className="flex justify-center items-center ">
            <img src={heroImg} alt="logo" className="xl:w-[230px] xl:h-[220px] h-[180px] z-10 items-center justify-center hover:animate-spin hover:animate-once animate-duration-[1000ms] animate-delay-[500ms] animate-ease-in-out" />
        </div>
    )
}

export default Logo
