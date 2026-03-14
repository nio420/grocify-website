import React from "react";
import HeaderText from "./HeaderText";
import { steps } from "../utils/value";

const Process = () => {
  return (
    <section className="max-w-330 mx-auto py-20 px-6">
      <HeaderText text1={"Our"} text2={"Process"} />

      {/* steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-18 mt-20 md:pt-20 lg:pt-50">
        {steps.map((item, index) => {
          const NumberIcon = item.number;
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`flex-1 ${
                index % 2 === 0 ? "lg:-mt-50 md:-mt-20 mt-0" : ""
              }`}
            >
              {/* Number */}
              <NumberIcon className="w-12 h-12 md:w-14 md:h-14 lg:w-15 lg:h-15 rounded-full bg-zinc-800 text-white outline-[3px] outline-offset-4 outline-zinc-800 outline-dotted mx-auto" />

              <div className="flex flex-col sm:flex-row items-center mt-6 gap-4 sm:gap-x-5 text-center sm:text-left">
                {/* Icon */}
                <div className="flex bg-linear-to-b from-orange-400 to-orange-500 text-white text-2xl md:text-3xl rounded-full items-center justify-center w-9 h-9 md:w-10 md:h-10 p-2">
                  <Icon />
                </div>
                {/* Content */}
                <div>
                  <h4 className="text-zinc-800 text-xl md:text-2xl font-bold">
                    {item.name}
                  </h4>
                  <p className="text-zinc-600 text-sm mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Process;
