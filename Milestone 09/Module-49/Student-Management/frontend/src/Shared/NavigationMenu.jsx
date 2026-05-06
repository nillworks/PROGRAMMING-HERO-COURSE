'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationMenu = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Students', path: '/students' },
    { name: 'Add Student', path: '/add-student' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="bg-slate-800">
      <nav className="container mx-auto  text-white px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">MyApp</div>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`transition hover:text-sky-400 ${
                  pathname === link.path ? 'text-sky-400' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className="bg-sky-400 text-black px-4 py-1.5 rounded-md hover:bg-sky-500 transition">
          Login
        </button>
      </nav>
    </div>
  );
};

export default NavigationMenu;
