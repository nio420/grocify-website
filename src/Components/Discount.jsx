import React from "react";
import Button from "./Button";
import bgImg from "../assets/fresh-fruits.png";


const Discount = () => {
  return (
    <section className="md:py-25 px-4 sm:px-6">
      <div
        className="max-w-330 mx-auto lg:px-6 mb-20 py-10 bg-transparent md:bg-zinc-200 bg-no-repeat bg-right md:bg-cover bg-contain rounded-2xl"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-6">
          {/* 20% Badge */}
          <div className="flex items-center justify-center min-w-15 md:min-w-25">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-orange-500 font-bold transform -rotate-90 h-fit leading-none">
              20%
            </span>
          </div>

          {/* Content Area */}
          <div className="max-w-175 flex-1">
            <h3 className="text-3xl sm:text-4xl md:text-6xl text-zinc-700 font-bold uppercase tracking-wide leading-tight">
              First Order <br className="md:hidden" /> Discount
            </h3>
            <p className="text-zinc-600 text-base sm:text-lg md:text-xl pt-2 md:pt-4 pb-4 max-w-70 sm:max-w-md">
              Get 20% discount on your first purchase
            </p>
            <div className="w-fit">
              <Button text={"Get a Discount"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
