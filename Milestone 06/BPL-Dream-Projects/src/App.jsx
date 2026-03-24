import { Outlet } from 'react-router';
import Nav from './components/Pages/HomePage/Header/NavigationMenu/Nav';
import Footer from './components/Pages/HomePage/Header/Footer/Footer';

const App = () => {
  return (
    <div className="">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
