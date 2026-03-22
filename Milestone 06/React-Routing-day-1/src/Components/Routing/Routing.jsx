import { createBrowserRouter } from 'react-router';
import App from '../../App';
import Home from '../Pages/HomePage/Home';
import Menu from '../Pages/MenuPage/Menu';

const Routing = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
    ],
  },
]);

export default Routing;
