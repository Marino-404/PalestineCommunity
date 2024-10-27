import React, { useState, useEffect } from 'react';

const AnimatedLines = () => {
    const [isMoving, setIsMoving] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsMoving((prev) => !prev); 
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed z-0 opacity-20">
            <div className={`line line1 ${isMoving ? 'moving' : ''}`}></div>
            <div className={`line line2 ${isMoving ? 'moving' : ''}`}></div>
            <div className={`line line3 ${isMoving ? 'moving' : ''}`}></div>
            <div className={`line line4 ${isMoving ? 'moving' : ''}`}></div>
        </div>
    );
};

export default AnimatedLines;


