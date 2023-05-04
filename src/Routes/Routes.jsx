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
import PrivateRouter from '../route/PrivateRoute';

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
          const response = await fetch(
            'https://eatery-server-shanjidahmad1234-gmailcom.vercel.app/chefs'
          );
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
        element: (
          <PrivateRouter>
            <ChefInfo></ChefInfo>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://eatery-server-shanjidahmad1234-gmailcom.vercel.app/chefs/${params.id}`
          ),
      },
    ],
  },
]);

const Routes = () => {
  return <div></div>;
};

export default Routes;
