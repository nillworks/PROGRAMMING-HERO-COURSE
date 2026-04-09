import Link from 'next/link';

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

const LIstedBooksLayout = ({ children }) => {
  const li = books.map(item => (
    <li className="" key={item.id}>
      <Link href={`/ListedBooks/${item.id}`}>{item.name}</Link>
    </li>
  ));

  return (
    <div>
      <aside>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}

            {children}

            <label
              htmlFor="my-drawer-3"
              className="btn drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
              {/* Sidebar content here */}
              {li}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default LIstedBooksLayout;
