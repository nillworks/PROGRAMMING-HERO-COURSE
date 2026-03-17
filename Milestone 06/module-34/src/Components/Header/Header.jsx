import Nav from './Nav';
import HeroHeader from './HeroHeader';
import Navbar from 'daisyui/components/navbar';

const Header = () => {
  return (
    <header className="containers">
      <Navbar />
      <HeroHeader />
    </header>
  );
};

export default Header;
