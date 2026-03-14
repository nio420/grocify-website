import React from "react";
import HeaderText from "./HeaderText";
import { categories } from "../utils/categories";
import Button from "./Button";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section className="max-w-330 mx-auto py-20 px-6">
      <HeaderText text1={"Shop"} text2={"by Category"} />

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group bg-orange-100/50 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* image */}
              <div className="overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* content */}
              <div className="p-6 flex flex-col gap-3">
                <h2 className="text-xl font-semibold capitalize text-gray-800">
                  {cat.name}
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {cat.description}
                </p>

                <div className="mt-3">
                  <Link to={cat.path} ><Button text={"See All"} /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
