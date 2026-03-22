import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
const navItems = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Menu', path: '/menu' },
  { id: 3, name: 'Shop', path: '/shop' },
  { id: 4, name: 'Contact', path: '/contact' },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <h2 className="text-2xl font-bold">Exe</h2>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            {navItems.map(item => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="hover:text-orange-500 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden bg-white px-4 pb-4 space-y-3">
            {navItems.map(item => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block hover:text-orange-500"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Nav;
