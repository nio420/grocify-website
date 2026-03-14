import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa6";
import Button from "./Button";
import { underConstruction } from "../utils/toast";

const ProductCard = ({ product  }) => {
  return (
    <div
     // key={index}
      className="bg-orange-100 p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl transition"
    >
      {/* product likes and add to cart */}
      <div className="flex justify-between items-center">
        <span className="text-zinc-300 text-xl md:text-2xl">
          <FaHeart />
        </span>
        <button className="bg-linear-to-b from-orange-400 to-orange-500 text-white p-2 rounded-full hover:scale-105 transition">
          <FaPlus />
        </button>
      </div>

      {/* product image */}
      <div className="w-full h-32 sm:h-36 md:h-40 flex items-center justify-center mt-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="max-h-full object-contain"
        />
      </div>

      {/* product info */}
      <div className="mt-4 md:mt-6 text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold pb-1">
          {product.name}
        </h3>
        <p className="text-zinc-700 text-base sm:text-lg md:text-xl pb-3">
          {product.price}
        </p>
        {/* button */}
        <div className="inline-block scale-90 md:scale-95">
          <Button onClick={underConstruction} text={"Shop Now"} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
