import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import Routing from './components/Routing/Routing.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routing} />
  </StrictMode>,
);
