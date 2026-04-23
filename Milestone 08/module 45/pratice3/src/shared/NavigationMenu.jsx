'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NavigationMenu = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="w-full bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-black">SRP</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-black">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-gray-500 transition">
                {link.name}
              </Link>
            </li>
          ))}

          {/* Sign In */}
          <Link
            href="/auth/signin"
            className="px-4 py-1 border rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            Sign In
          </Link>

          {/* Sign Up */}
          <Link
            href="/auth/signup"
            className="px-4 py-1 rounded-md bg-black text-white dark:bg-white dark:text-black"
          >
            Sign Up
          </Link>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black dark:text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-black px-4 pb-4">
          <ul className="flex flex-col gap-4 text-black dark:text-white">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 border-b border-gray-200 dark:border-gray-700"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Sign In */}
            <Link
              href="/auth/signin"
              onClick={() => setOpen(false)}
              className="text-center py-2 border rounded-md"
            >
              Sign In
            </Link>

            {/* Sign Up */}
            <Link
              href="/auth/signup"
              onClick={() => setOpen(false)}
              className="text-center py-2 rounded-md bg-black text-white dark:bg-white dark:text-black"
            >
              Sign Up
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;
