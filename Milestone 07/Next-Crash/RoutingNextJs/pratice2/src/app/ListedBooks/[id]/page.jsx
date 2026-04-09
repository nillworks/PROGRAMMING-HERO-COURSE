const books = [
  {
    id: 1,
    name: 'Atomic Habits',
    author: 'James Clear',
    price: 450,
    category: 'Self Development',
    image: 'https://i.ibb.co/atomic-habits.jpg',
  },
  {
    id: 2,
    name: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    price: 400,
    category: 'Finance',
    image: 'https://i.ibb.co/rich-dad.jpg',
  },
  {
    id: 3,
    name: 'The Alchemist',
    author: 'Paulo Coelho',
    price: 350,
    category: 'Novel',
    image: 'https://i.ibb.co/alchemist.jpg',
  },
  {
    id: 4,
    name: 'Deep Work',
    author: 'Cal Newport',
    price: 500,
    category: 'Productivity',
    image: 'https://i.ibb.co/deep-work.jpg',
  },
  {
    id: 5,
    name: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    price: 380,
    category: 'Motivation',
    image: 'https://i.ibb.co/think-grow.jpg',
  },
];

// Meta Data SEO ||
export async function generateMetadata({ params }) {
  const { id } = await params;
  const bookDetails = books.find(item => item.id === Number(id));
  const { name, author } = bookDetails;
  return {
    title: name,
    description: author,
  };
}

const NestedListedBook = async ({ params }) => {
  const { id } = await params;
  const bookDetails = books.find(item => item.id === Number(id));
  const { name, author, price } = bookDetails;

  console.log('click  id:', id);

  return (
    <div>
      <h2>Name:{name}</h2>
      <h2>Author:{author}</h2>
      <h2>Price:{price}</h2>
    </div>
  );
};

export default NestedListedBook;
