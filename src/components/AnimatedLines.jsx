import React from 'react';

const AnimatedLine = ({ className, position }) => (
    <div
        className={`fixed ${className} w-2 rounded h-screen ${position}`}
        style={{ background: '#247043' }}
    ></div>
);

function AnimatedLines() {
    return (
        <div className="fixed z-0 opacity-20">
            <AnimatedLine className="infiniteMove4" position="top-0 right-[10vw]" />
            <AnimatedLine className="infiniteMove" position="top-0 right-[15vw]" />
            <AnimatedLine className="infiniteMove2" position="top-0 left-[10vw]" />
            <AnimatedLine className="infiniteMove3" position="top-0 left-[15vw]" />
        </div>
    );
}

export default AnimatedLines;
