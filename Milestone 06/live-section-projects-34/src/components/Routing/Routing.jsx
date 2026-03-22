import { createBrowserRouter } from 'react-router';
import App from '../../App';
import Menu from './../Pages/MenuPage/Menu';
import Home from '../Pages/HomePage/Home';
import Service from './../Pages/ServicePage/Service';
import ShopPage from './../Pages/ShopPage/ShopPage';

const Routing = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/menu', element: <Menu /> },
      { path: '/service', element: <Service /> },
      { path: '/shop', element: <ShopPage /> },
    ],
  },
]);

export default Routing;
