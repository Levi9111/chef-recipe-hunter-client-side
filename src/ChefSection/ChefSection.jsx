import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

const ChefSection = () => {
  const chefsData = useLoaderData();
  const { chefs } = chefsData;
  console.log(chefs);
  return <div>{/* <Outlet></Outlet> */}</div>;
};

export default ChefSection;
