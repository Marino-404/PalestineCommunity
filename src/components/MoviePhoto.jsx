import React from "react";

const PhotoMovie = ({ img }) => {
  return (
    <div className="flex w-[250px] h-[330px]">
      <img className="w-full h-full z-50" src={img} alt="" />
    </div>
  );
};

export default PhotoMovie;
