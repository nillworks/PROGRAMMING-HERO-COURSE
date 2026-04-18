'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Post', path: '/post' },
  { id: 3, name: 'Projects', path: '/projects' },
];

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const li = navLinks.map(item => (
    <Link href={`${item.path}`} key={item.id}>
      {item.name}
    </Link>
  ));

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">MyLogo</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {li}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col px-4 pb-4 space-y-3 text-gray-700 font-medium">
          {li}
        </ul>
      )}
    </nav>
  );
};

export default NavigationMenu;
