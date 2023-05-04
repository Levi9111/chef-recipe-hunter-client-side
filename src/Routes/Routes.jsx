import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Home/Login';
import Register from '../Home/Register';
import Main from '../Main/Main';
import Blog from '../Blog/Blog';
import ChefInfo from '../ChefInfo/ChefInfo';
import Error from '../Error/Error';
import ChefSection from '../ChefSection/ChefSection';
import Chef from '../Chef/Chef';
import RecipeDescription from '../RecipeDescription/RecipeDescription';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Main></Main>,
        loader: async () => {
          const response = await fetch('http://localhost:5300/chefs');
          const data = await response.json();
          return data;
        },
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
        path: '/chefs/:id',
        element: <ChefInfo></ChefInfo>,
        loader: ({ params }) =>
          fetch(`http://localhost:5300/chefs/${params.id}`),
        // children: [
        //   {
        //     path: '/recipeFescription/:id',
        //     element: <RecipeDescription></RecipeDescription>,
        //     loader: ({ params }) =>
        //       fetch(`http://localhost:5300/recipeFescription/${params.id}`),
        // },
        // ],
      },
    ],
  },
]);

const Routes = () => {
  return <div></div>;
};

export default Routes;
