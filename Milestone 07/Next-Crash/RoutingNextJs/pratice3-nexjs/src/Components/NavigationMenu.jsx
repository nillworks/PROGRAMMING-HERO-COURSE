import Link from 'next/link';

const navLinks = [
  { id: 1, name: 'listed Books', path: '/listedBooks' },
  { id: 2, name: 'Post', path: '/post' },
  { id: 3, name: 'Users', path: '/user' },
];

const NavigationMenu = () => {
  const li = navLinks.map(item => (
    <li key={item.id}>
      <Link
        className="text-lg font-medium text-teal-500 capitalize"
        href={`${item.path}`}
      >
        {item.name}
      </Link>
    </li>
  ));

  return (
    <div className="fixed top-4 w-full z-50 px-3">
      <nav className=" containers navbar shadow-sm rounded-full px-4 bg-white/15 backdrop-blur-sm">
        <div className="navbar-start">
          {/* Home Page */}
          <div>
            <h3 className=" text-xl font-semibold text-primary cursor-pointer">
              <Link href="/">BK2.00W</Link>
            </h3>
          </div>
        </div>
        <div className="navbar-center hidden sm:flex">
          <ul className="flex items-center gap-4 px-1">{li}</ul>
        </div>

        <div className="navbar-end">
          {/*  */}
          <div className="dropdown  sm:hidden">
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

          <div>
            <a className="btn btn-success text-white">Login</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationMenu;
