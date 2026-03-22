import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Routing from './Components/Routing/Routing.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routing} />
  </StrictMode>,
);
