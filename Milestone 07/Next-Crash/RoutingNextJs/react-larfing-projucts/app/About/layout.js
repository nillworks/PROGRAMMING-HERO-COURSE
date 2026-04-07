import Link from 'next/link';
import React from 'react';

const AboutLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/About/Mission">Mission</Link>
          </li>
          <li>
            <Link href="/About/Vision">Vision</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default AboutLayout;
