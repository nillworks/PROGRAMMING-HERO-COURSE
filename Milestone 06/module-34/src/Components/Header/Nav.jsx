import { Menu, X } from 'lucide-react';
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
  {
    id: 5,
    name: 'Search',
    icon: 'search',
  },
  {
    id: 6,
    name: 'Cart',
    icon: 'cart',
    count: 8,
  },
  {
    id: 7,
    name: "Let's Talk",
    path: '/contact',
    type: 'button',
  },
];

const Nav = () => {
  // Mobile Menu
  const [open, setOpen] = useState(false);

  // Nav Menu
  const linkItem = navItems.map(item => (
    <li key={item.id}>
      <a href={item.path}>{item.name}</a>
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
      <div>
        <span onClick={() => setOpen(!open)}>
          {!open ? (
            <Menu className="cursor-pointer" />
          ) : (
            <X className="cursor-pointer" />
          )}
        </span>
      </div>
    </nav>
  );
};

export default Nav;
