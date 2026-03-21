import { createBrowserRouter, Routes } from 'react-router';
import App from '../App';
import Home from '../Pages/Home';
import About from '../Pages/About';

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
    ],
  },
]);

export default Routers;
