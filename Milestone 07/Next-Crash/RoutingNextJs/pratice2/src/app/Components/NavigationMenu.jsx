import Link from 'next/link';

const navItems = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/',
  },
  {
    id: 2,
    name: 'My Books',
    path: '/ListedBooks',
  },
  {
    id: 3,
    name: 'Reading List',
    path: '/PagesToRead',
  },
];
const NavigationMenu = () => {
  const li = navItems.map(item => (
    <li key={item.id}>
      <Link href={`${item.path}`}>{item.name}</Link>
    </li>
  ));

  return (
    <>
      <nav className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {li}
            </ul>
          </div>
          <Link href={`/`} className="btn btn-ghost text-xl">
            Home
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{li}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </nav>
    </>
  );
};

export default NavigationMenu;
