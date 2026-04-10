import Image from 'next/image';

const MenuCard = ({ food }) => {
  const {
    dish_name,
    image_link,
    category,
    cuisine,
    price,
    rating,
    main_ingredients,
    approximate_nutrition_per_serving,
  } = food;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      {/* Image */}
      {/* <img
        src={image_link}
        alt={dish_name}
        className="w-full h-52 object-cover"
      /> */}

      <Image
        width="200"
        height={400}
        src={image_link}
        alt="imageFood"
        className="mx-auto"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 truncate">
          {dish_name}
        </h2>

        {/* Category + Cuisine */}
        <p className="text-sm text-gray-500">
          {category} • {cuisine}
        </p>

        {/* Price + Rating */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-blue-600">৳{price}</span>
          <span className="text-yellow-500">⭐ {rating}</span>
        </div>

        {/* Ingredients */}
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Ingredients:</span>{' '}
          {main_ingredients.slice(0, 3).join(', ')}...
        </p>

        {/* Nutrition */}
        <div className="text-xs text-gray-500">
          <p>🔥 {approximate_nutrition_per_serving.calories}</p>
          <p>💪 Protein: {approximate_nutrition_per_serving.protein}</p>
        </div>

        {/* Button */}
        <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
