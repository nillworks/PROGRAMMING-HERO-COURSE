import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h2 className="text-xl font-semibold text-gray-800">
        Oops! Page not found
      </h2>

      <p className="mt-2 text-gray-500 max-w-md">
        The page you are looking for might have been removed, renamed, or is
        temporarily unavailable.
      </p>

      <Link
        href="/"
        className="mt-6 px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
