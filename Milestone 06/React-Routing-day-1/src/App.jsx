import { Outlet } from 'react-router';
import Home from './Components/Pages/HomePage/Home';
import Nav from './Components/Pages/HomePage/Nav/Nav';

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
