const ProductTable = ({ products }) => {
  return (
    <div className="bg-white  shadow-lg rounded-2xl p-5 w-80 hover:shadow-2xl transition">
      <h2 className="text-2xl font-bold text-gray-800">{products.name}</h2>

      <p className="text-lg text-blue-600 mt-2 font-semibold">
        Price: ${products.price}
      </p>

      <p className="text-gray-600 mt-1">Available: {products.qty}</p>

      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductTable;
