import Image from 'next/image';

const SingleFoodCard = async ({ expectedDataFoods }) => {
  const {
    dish_name,
    image_link,
    cuisine,
    category,
    price,
    rating,
    main_ingredients,
    approximate_nutrition_per_serving,
    cooking_steps,
  } = expectedDataFoods.data;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Image */}
        <Image
          width="200"
          height={400}
          src={image_link}
          alt="imageFood"
          className="mx-auto"
        />

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800">{dish_name}</h1>

          {/* Category + Cuisine */}
          <p className="text-gray-500">
            {category} • {cuisine}
          </p>

          {/* Price + Rating */}
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold text-blue-600">
              ৳{price}
            </span>
            <span className="text-yellow-500 text-lg">⭐ {rating}</span>
          </div>

          {/* Ingredients */}
          <div>
            <h3 className="font-semibold text-lg mb-1">Ingredients:</h3>
            <p className="text-gray-600 text-sm">{main_ingredients.join('')}</p>
          </div>

          {/* Nutrition */}
          <div>
            <h3 className="font-semibold text-lg mb-1">Nutrition:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
              <p>🔥 {approximate_nutrition_per_serving.calories}</p>
              <p>💪 Protein: {approximate_nutrition_per_serving.protein}</p>
              <p>🍞 Carbs: {approximate_nutrition_per_serving.carbohydrates}</p>
              <p>🧈 Fat: {approximate_nutrition_per_serving.fat}</p>
              <p>🌿 Fiber: {approximate_nutrition_per_serving.fiber}</p>
            </div>
          </div>

          {/* Cooking Steps */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Cooking Steps:</h3>
            <ol className="list-decimal list-inside space-y-1 text-gray-600 text-sm">
              {cooking_steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Button */}
          <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
            Order Now 🍽️
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodCard;
