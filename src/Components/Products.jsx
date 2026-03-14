import React, { useState } from "react";
import HeaderText from "./HeaderText";
import { products } from "../utils/product.js";
import ProductCard from "./ProductCard.jsx";
import Button from "./Button.jsx";

const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "Seafood"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [show, setShow] = useState(false);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((item) => item.category === activeCategory);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <section id="products" className="max-w-330 mx-auto py-20 px-6">
      <HeaderText text1={"Our"} text2={"Products"} />

      {/* tabs */}
      <div className="grid grid-cols-3 md:flex md:justify-center gap-4 mt-10 max-w-md mx-auto">
        {categories.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(item)}
            className={`px-5 py-2 text-md rounded-xl cursor-pointer transition-all duration-00
        ${activeCategory === item ? "bg-linear-to-b from-orange-400 to-orange-600 text-white" : "bg-zinc-200 hover:bg-zinc-300"}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* products */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {filteredProducts
          .slice(0, show ? filteredProducts.length : 8)
          .map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
      </div>

      {/* btn */}
      {filteredProducts.length > 8 && (
        <div className="mx-auto mt-15 w-fit">
          <Button onClick={handleShow} text={show ? "See Less" : "See More"} />
        </div>
      )}
    </section>
  );
};

export default Products;
