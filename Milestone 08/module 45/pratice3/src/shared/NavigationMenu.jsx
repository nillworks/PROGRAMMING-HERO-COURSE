'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { signOut, useSession } from '@/app/lib/auth-client';

const NavigationMenu = () => {
  const { data, pending } = useSession();
  const [open, setOpen] = useState(false);

  const user = data?.user;
  if (pending) {
    <p>loading ....</p>;
    return;
  }

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

          <>
            {user ? (
              <>
                <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl shadow-sm">
                  <p className="text-gray-800 dark:text-gray-200 font-medium">
                    Welcome, <span className="font-semibold">{user?.name}</span>
                  </p>

                  <button
                    onClick={() => signOut()}
                    className="px-4 py-1.5 cursor-pointer rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Sign In */}
                <Link
                  href="/auth/signin"
                  onClick={() => setOpen(false)}
                  className="text-center btn btn-accent"
                >
                  Sign In
                </Link>

                {/* Sign Up */}
                <Link
                  href="/auth/signup"
                  onClick={() => setOpen(false)}
                  className="btn btn-active"
                >
                  Sign Up
                </Link>
              </>
            )}
          </>
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

            {/* SignUp And SignIn Mobile */}
            <>
              {user ? (
                <>
                  <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl shadow-sm">
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      Welcome,{' '}
                      <span className="font-semibold">{user?.name}</span>
                    </p>

                    <button
                      onClick={() => signOut()}
                      className="px-4 py-1.5 cursor-pointer rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Sign In */}
                  <Link
                    href="/auth/signin"
                    onClick={() => setOpen(false)}
                    className="text-center btn btn-primary"
                  >
                    Sign In
                  </Link>

                  {/* Sign Up */}
                  <Link
                    href="/auth/signup"
                    onClick={() => setOpen(false)}
                    className="btn btn-accent"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;
