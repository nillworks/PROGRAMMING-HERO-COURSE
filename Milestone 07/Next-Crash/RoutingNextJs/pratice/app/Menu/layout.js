import Link from 'next/link';
import React from 'react';

const navLinks = [
  { id: 2, name: 'Laptop', path: '/Menu/Laptop' },
  { id: 3, name: 'Listed Books', path: '/Menu/ListedBooks' },
  { id: 4, name: 'Pages to Read', path: '/Menu/PagesToRead' },
];

const LaptopLayout = ({ children }) => {
  const li = navLinks.map(item => (
    <li key={item.id}>
      <Link href={`${item.path}`}>{item.name}</Link>
    </li>
  ));

  return (
    <div>
      <nav className="pb-10">
        <ul className="flex items-center gap-2 text-green-700">{li}</ul>
      </nav>

      {children}
    </div>
  );
};

export default LaptopLayout;
