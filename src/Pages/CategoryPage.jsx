import React from "react";
import { products } from "../utils/product.js";
import ProductCard from "../Components/ProductCard.jsx";

const CategoryPage = ({ categories = []}) => {
  const filteredProducts = products.filter((item) =>
    categories.includes(item.category)
  );

  const renderProducts = filteredProducts.map((item) => (
    <ProductCard key={item.id} product={item} />
  ));

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {renderProducts}
      </div>
    </div>
  );
};

export default CategoryPage;