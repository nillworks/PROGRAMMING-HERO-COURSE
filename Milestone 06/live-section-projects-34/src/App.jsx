import { Outlet } from 'react-router';
import Nav from './components/Pages/HomePage/NavigationManu/Nav';

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
