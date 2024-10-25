import { div } from "framer-motion/client";


function AnimatedLines() {

    return (
        <div className="fixed z-0 opacity-20">
            <div
            className="fixed infiniteMove4 w-2 rounded  h-screen top-0 right-[10vw]" style={{
            background: '#247043'
            }}
            ></div>
            <div
            className="fixed infiniteMove w-2 rounded  h-screen top-0 right-[15vw] bg-gradient"
            style={{
                background: '#247043'
                }}
            ></div>
            <div
            className="fixed infiniteMove2 w-2 rounded  h-screen top-0 left-[10vw] bg-gradient"
            style={{
                background: '#247043'
                }}
            ></div>
            <div
            className="fixed infiniteMove3 w-2 rounded  h-screen top-0 left-[15vw] bg-gradient"
            style={{
                background: '#247043'
                }}
            ></div>
      </div>
    )
}

export default AnimatedLines