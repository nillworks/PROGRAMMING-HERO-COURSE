import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Routing from './components/Routing/Routing';
import ContextProvide from './components/context/ContextProvide';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvide>
      <RouterProvider router={Routing} />
    </ContextProvide>
  </StrictMode>,
);
