import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Home/Login';
import Register from '../Home/Register';
import Main from '../Main/Main';
import Blog from '../Blog/Blog';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Main></Main>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
    ],
  },
]);

const Routes = () => {
  return <div></div>;
};

export default Routes;
