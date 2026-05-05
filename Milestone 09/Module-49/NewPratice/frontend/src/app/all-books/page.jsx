import getBooksData from '@/lib/getBooksData';

const AllBooksPage = async () => {
  const allData = await getBooksData();
  const data = allData.books;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">📚 All Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map(book => (
          <div
            key={book.id}
            className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{book.title}</h2>

            <p className="text-gray-600 text-sm mb-1">✍️ {book.author}</p>

            <p className="text-sm text-blue-500 mb-2">{book.category}</p>

            <div className="flex justify-between items-center mt-3">
              <span className="text-lg font-bold text-green-600">
                ৳{book.price}
              </span>

              <span className="text-yellow-500 font-medium">
                ⭐ {book.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooksPage;
