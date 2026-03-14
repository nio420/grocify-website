import React from "react";
import HeaderText from "./HeaderText";
import { values } from "../utils/value.js";
import valueImg from "../assets/basket-full-vegetables.png";

const Values = () => {
  const leftValues = values.slice(0, 2);
  const rightValues = values.slice(2, 4);

  return (
    <section className="max-w-330 mx-auto py-20 px-6">
      <HeaderText text1={"Our"} text2={"Values"} />

      {/* card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 md:gap-6 items-center mt-10">
        {/* LEFT VALUES */}
        <div className="flex flex-col lg:gap-y-24 gap-y-6">
          {leftValues.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex gap-3 items-start bg-orange-100 p-6 rounded-xl shadow-sm md:shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <Icon className="text-orange-500 text-2xl mt-1" />
                <div>
                  <h3 className="font-bold text-lg pb-2">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* MIDDLE IMAGE */}
        <div className="flex justify-center">
          <img src={valueImg} alt="organic" className="max-w-sm w-full h-auto" />
        </div>

        {/* RIGHT VALUES */}
        <div className="flex flex-col lg:gap-y-24 gap-y-6">
          {rightValues.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex gap-3 items-start bg-orange-100 p-6 rounded-xl shadow-sm md:shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <Icon className="text-orange-500 text-2xl mt-1" />
                <div>
                  <h3 className="font-bold text-lg pb-2">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
