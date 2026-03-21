import { Link, Outlet } from 'react-router';

const NavBars = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-4">
      <div>
        <h2>logo</h2>
      </div>

      <ul className="flex items-center gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default NavBars;
