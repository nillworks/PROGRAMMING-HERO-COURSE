'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { signOut, useSession } from '@/app/lib/auth-client';

const Navigation = () => {
  const { data, isPending } = useSession();

  const [open, setOpen] = useState(false);

  if (isPending) {
    return <p>Loading....</p>;
  }

  const user = data?.user;

  console.log(data);

  return (
    <nav className="w-full shadow-md bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-black dark:text-white">
          MyApp
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {user ? (
          <>
            <div className="flex items-center gap-4">
              <p>Wellcome {user?.name}</p>
              <button onClick={() => signOut()} className="btn btn-primary">
                Log Out
              </button>
            </div>
          </>
        ) : (
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/auth/signin"
              className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Sign In
            </Link>

            <Link
              href="/auth/signup"
              className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black text-sm hover:opacity-80"
            >
              Sign Up
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
