import HeroHeader from './HeroHeader';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="containers paddingXCustom">
      <Nav />
      <HeroHeader />
    </header>
  );
};

export default Header;
