'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Menu', path: '/Menu' },
    { id: 3, name: 'Listed Books', path: '/listed-books' },
    { id: 4, name: 'Pages', path: '/pages' },
  ];

  return (
    <div className="">
      <nav className="containers bg-white shadow-md px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">FD</h1>

        {/* Menu */}
        <ul className="hidden sm:flex gap-6">
          {navItems.map(item => (
            <li key={item.id}>
              <Link
                href={item.path}
                className={`font-medium transition ${
                  pathname === item.path
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <button className="btn btn-primary">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
