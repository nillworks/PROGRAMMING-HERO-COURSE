import { createBrowserRouter } from 'react-router';
import App from '../../App';
import Home from '../Pages/HomePage/Home';
import Fixture from '../Pages/FixturePages/Fixture';
import Teams from '../Pages/TeamsPages/Teams';
import Schedules from '../Pages/SchedulesPages/Schedules';

const Routing = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/fixture', element: <Fixture /> },
      { path: '/teams', element: <Teams /> },
      { path: '/schedules', element: <Schedules /> },
    ],
  },
]);

export default Routing;
