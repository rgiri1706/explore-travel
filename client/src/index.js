import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Admin from './components/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter([
  {
      path: '/',
      element: <App />
  },
  {
      path: '/admin',
      element: <Admin />
  }
])
root.render(
  <RouterProvider router={appRouter} />
);

