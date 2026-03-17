import { Menu, PhoneCall, Search, ShoppingCart, X } from 'lucide-react';
import logo from '../../assets/images/logo.png';
import { useState } from 'react';

const navItems = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Menu',
    path: '/menu',
    dropdown: true,
  },
  {
    id: 3,
    name: 'Services',
    path: '/services',
    dropdown: true,
  },
  {
    id: 4,
    name: 'Offers',
    path: '/offers',
  },
];

const Nav = () => {
  // Mobile Menu
  const [open, setOpen] = useState(true);

  // Nav Menu
  const linkItem = navItems.map(item => (
    <li key={item.id}>
      <a
        className="hover:text-PrimaryColor duration-200 font-medium"
        href={item.path}
      >
        {item.name}
      </a>
    </li>
  ));

  return (
    <nav className="flex items-center justify-between">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" className="w-20" />
      </div>

      <ul className="hidden items-center gap-5 md:flex">{linkItem}</ul>

      {/* Mobile Menu  */}
      <div className="md:hidden">
        <span onClick={() => setOpen(!open)}>
          {open ? (
            <Menu className="cursor-pointer" />
          ) : (
            <X className="cursor-pointer" />
          )}
        </span>
      </div>

      {/* Right Menu items */}
      <div className="hidden items-center gap-4 md:flex">
        {/* Search */}
        <Search />

        {/* Add To Cart */}
        <div className="relative">
          <div
            className="absolute -top-4 right-1 leftPadding bg-PrimaryColor
           text-white  px-1 rounded-full text-sm"
          >
            0
          </div>
          <ShoppingCart className="cursor-pointer" />
        </div>

        {/* Button Lets Talk */}

        <div>
          <button className="flex gap-2 items-center bg-PrimaryColor px-5 py-3 rounded-full text-white font-medium cursor-pointer">
            <PhoneCall />
            Let’s Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
