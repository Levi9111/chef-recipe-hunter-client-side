import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';

const ChefSection = ({ chefsData }) => {
  const chefs = chefsData.chefs;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-3/4 mx-auto">
      {chefs.map(chef => (
        <Chef key={chef.id} chef={chef}></Chef>
      ))}
    </div>
  );
};

export default ChefSection;
