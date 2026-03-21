import { Link } from 'react-router';

const NavBars = () => {
  return (
    <div>
      <ul className="flex items-center gap-4">
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
        <li>
          <Link to="#">Footer</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBars;
