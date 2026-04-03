import { NavLink } from 'react-router';

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
  const navUl = navItems.map(item => (
    <li key={item.id}>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'
        }
      >
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">MyWebsite</h1>

        {/* Menu */}
        <ul className="flex items-center gap-6 text-gray-700 font-medium">
          {navUl}
        </ul>

        {/* Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Nav;
