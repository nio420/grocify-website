import React from "react";
import { FaAward } from "react-icons/fa6";
import Button from "./Button";
import heroImg from "../assets/grocery.png"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="">
      <div className="max-w-330 mx-auto py-30 px-6 lg:flex items-center justify-center gap-x-10">
        {/* left content */}
        <div className="flex-1 md:text-center md:mb-6 lg:text-left pb-10">
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 text-sm font-medium rounded-full transition hover:bg-orange-200 hover:scale-105">
            <FaAward size={16} />
            Export Best Quality
          </span>
          <h1 className="text-5xl/tight md:text-6xl/tight font-bold text-zinc-800 pt-2.5">
            Tasty Organic <span className="text-orange-500">fruits</span> & <span className="text-orange-500">vegetables</span> in your city.
          </h1>
          <p className="text-lg md:text-base text-gray-700 mt-6 pb-6">
            Grocify is a grocery delivery service that delivers fresh and
            organic produce to your doorstep. We offer a wide range of fruits
            and vegetables from all over the world, and we are committed to
            providing you with the best quality products.
          </p>
         <a href="#products" ><Button text={"Shop Now"} /> </a>  
        </div>

        {/* right image */}
        <div className="flex-1">
            <img src={heroImg} loading="lazy" alt="hero img" className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500 " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
