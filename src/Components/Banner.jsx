import React from "react";

const Banner = ({ title, image }) => {
  return (
    <div
      className="w-full h-72 md:h-96 bg-zinc-200 bg-center bg-cover flex items-center justify-center relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="max-w-330 mx-auto p-6 rounded-2xl text-center backdrop-blur-md tracking-wider shadow-lg shadow-blue-200/50">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-200 drop-shadow-lg tracking-wider">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
