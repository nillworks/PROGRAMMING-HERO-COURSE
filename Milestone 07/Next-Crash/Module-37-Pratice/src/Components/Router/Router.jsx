import { createBrowserRouter } from 'react-router';
import App from '../../App';
import HomePage from '../Pages/Home/HomePage';
import Menu from '../Pages/Menu/Menu';
import Offers from '../Pages/Offers/Offers';
import Service from '../Pages/Services/Service';
import { Suspense } from 'react';

// data Pass Menu Page
const menuData = fetch(`https://jsonplaceholder.typicode.com/posts`).then(res =>
  res.json(),
);

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: '/menu',
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-spinner text-success"></span>
              </div>
            }
          >
            <Menu menuData={menuData} />
          </Suspense>
        ),
      },
      { path: '/services', element: <Service /> },
      { path: '/offers', element: <Offers /> },
    ],
  },
]);

export default Router;
