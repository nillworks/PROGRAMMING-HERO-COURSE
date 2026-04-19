import React from 'react';

const ProductCard = ({ product }) => {
  const { title, category, price, rating, description } = product || {};

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-4 flex flex-col justify-between">
      {/* Image Placeholder */}
      <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
        <span className="text-gray-400 text-sm">Product Image</span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h2>

        <p className="text-sm text-gray-500">{category}</p>

        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        {/* Price + Rating */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-blue-600 font-bold text-lg">${price}</span>

          <span className="text-yellow-500 text-sm">⭐ {rating}</span>
        </div>
      </div>

      {/* Button */}
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
