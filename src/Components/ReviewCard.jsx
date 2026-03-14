import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ name, designation, rating, para, image }) => {
  return (
    <div className="bg-zinc-100 shadow-md hover:-translate-y-2 rounded-2xl p-6 md:p-8 hover:shadow-lg transition duration-300">
      {/* top section */}
      <div className="flex items-center gap-4">

        {/* avatar */}
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-orange-400 shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* name */}
        <div>
          <h5 className="text-lg md:text-xl font-semibold text-zinc-800">
            {name}
          </h5>
          <p className="text-sm text-zinc-500">{designation}</p>

          {/* rating */}
          <span className="text-orange-500 text-lg font-medium flex mt-2 gap-1.5 ">
            {Array.from({length: rating}, (_, index) =>(
                <FaStar key={index}/>
            ))}
          </span>
        </div>
      </div>

      {/* review text */}
      <div className="mt-6">
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
          {para}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
