import { Outlet } from 'react-router';
import NavBars from './NavigationMenu/NavBars';
const App = () => {
  return (
    <div>
      <NavBars />
      <Outlet />
    </div>
  );
};

export default App;
