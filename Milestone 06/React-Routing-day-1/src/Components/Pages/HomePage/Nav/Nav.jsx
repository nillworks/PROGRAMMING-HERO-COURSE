import { Link } from 'react-router-dom';

const NavigationMenu = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Contact', path: '/contact' },
  { name: 'Footer', path: '/footer' },
];

const Nav = () => {
  return (
    <nav className="flex items-center justify-between containers">
      {/* logo */}
      <div>
        <h2 className="text-2xl font-bold">Exe</h2>
      </div>

      <ul className="flex gap-5">
        {NavigationMenu.map((item, i) => (
          <li
            className=" font-medium hover:text-orange-600 duration-300"
            key={i}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* login Button */}
      <div>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Nav;
