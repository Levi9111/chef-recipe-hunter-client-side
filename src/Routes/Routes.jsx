import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Home/Login';
import Register from '../Home/Register';
import Main from '../Main/Main';
import Blog from '../Blog/Blog';
import ChefSection from '../ChefSection/ChefSection';
import Chef from '../Chef/Chef';

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
      {
        path: '/chefs',
        element: <ChefSection></ChefSection>,
        loader: () => fetch(`http://localhost:5300/chefs`),
      },
    ],
  },
  // {
  //   path: '/chefs',
  //   element: <ChefSection></ChefSection>,
  //   children: [
  //     {
  //       path: ':id',
  //       element: <Chef></Chef>,
  //       loader: ({ params }) =>
  //         fetch(`http://localhost:5300/chefs/${params.id}`),
  //     },
  //   ],
  // },
]);

const Routes = () => {
  return <div></div>;
};

export default Routes;
