import { useState, useEffect } from "react";

const AnimatedLines = () => {
  const [movingLines, setMovingLines] = useState([false, false, false, false]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMovingLines((prev) => prev.map((moving, index) => !moving));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed z-0 opacity-20">
      <div
        className={`line line1 hidden xl:block ${
          movingLines[0] ? "moving" : ""
        }`}
      ></div>
      <div
        className={`line line2 hidden xl:block ${
          movingLines[1] ? "moving" : ""
        }`}
      ></div>
      <div
        className={`line line3 hidden xl:block ${
          movingLines[2] ? "moving" : ""
        }`}
      ></div>
      <div
        className={`line line4 hidden xl:block ${
          movingLines[3] ? "moving" : ""
        }`}
      ></div>
    </div>
  );
};

export default AnimatedLines;
