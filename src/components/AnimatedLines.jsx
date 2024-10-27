import React, { useState, useEffect } from 'react';

const AnimatedLines = () => {
    const [movingLines, setMovingLines] = useState([false, false, false, false]);

    useEffect(() => {
        const interval = setInterval(() => {
            setMovingLines((prev) => 
                prev.map((moving, index) => !moving) 
            );
        }, 1500); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed z-0 opacity-20">
            <div className={`line line1 ${movingLines[0] ? 'moving' : ''}`}></div>
            <div className={`line line2 ${movingLines[1] ? 'moving' : ''}`}></div>
            <div className={`line line3 ${movingLines[2] ? 'moving' : ''}`}></div>
            <div className={`line line4 ${movingLines[3] ? 'moving' : ''}`}></div>
        </div>
    );
};

export default AnimatedLines;



