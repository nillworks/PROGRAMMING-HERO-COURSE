import { Outlet } from 'react-router';
import Nav from './Components/Pages/Home/Navigation/Nav';

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
