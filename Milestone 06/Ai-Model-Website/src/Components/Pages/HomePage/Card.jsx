const Card = ({ useData }) => {
  const { title, description, price, image, status } = useData;

  return (
    <div className="containers">
      <div className=" rounded-xl overflow-hidden shadow-md bg-white border border-gray-200">
        {/* Image Section */}
        <div className="bg-gray-100 flex justify-center items-center h-40">
          <img src={image} alt={title} className="object-contain" />
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>

          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            {description}
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            ${price}/month
          </h3>

          {/* Button */}
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition duration-200">
            {status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
