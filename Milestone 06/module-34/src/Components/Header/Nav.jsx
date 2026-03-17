import logo from '../assets/images/logo.png';

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
  const linkItem = navItems.map(item => <li key={item.id}>{item.name}</li>);
  return (
    <nav>
      {/* Logo */}
      <div>
        <img src={logo} alt="" />
      </div>

      <ul className="flex items-center gap-5">{linkItem}</ul>

      {/* Mobile Menu  */}
      <div></div>
    </nav>
  );
};

export default Nav;
