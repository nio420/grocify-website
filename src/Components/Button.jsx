import React from "react";

const Button = ( {text, onClick }) => {
  return (
    <button onClick={onClick}
      className="
  relative inline-flex items-center justify-center gap-2
  bg-linear-to-b from-orange-400 to-orange-500
  text-white font-semibold
  px-8 py-3 rounded-full
  shadow-md overflow-hidden
  transition-all duration-300
  hover:shadow-xl hover:-translate-y-1
  active:scale-95 cursor-pointer hover:to-orange-700
"
    >
      <span className="relative z-10">
        {text} 
      </span>

      <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition duration-300"></span>
    </button>
  );
};

export default Button;
