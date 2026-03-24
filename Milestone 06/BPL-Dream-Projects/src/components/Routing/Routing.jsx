import { createBrowserRouter } from 'react-router';
import App from '../../App';
import Home from '../Pages/HomePage/Home';
import Fixture from '../Pages/FixturePages/Fixture';
import Teams from '../Pages/TeamsPages/Teams';

const Routing = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/fixture', element: <Fixture /> },
      { path: '/teams', element: <Teams /> },
    ],
  },
]);

export default Routing;
