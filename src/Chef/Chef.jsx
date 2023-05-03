import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Chef = () => {
  const chefs = useLoaderData();
  const {
    id,
    name,
    image,
    experience,
    numRecipes,
    recipes,
    description,
    likes,
  } = chefs;
  console.log(chefs);
  return (
    <div>
      <div className="border border-yellow-500 rounded-lg p-4">
        <img
          className="mx-auto rounded-full w-32 h-32 object-cover"
          src={image}
          alt="Chef's picture"
        />
        <h2 className="text-2xl font-bold text-orange-500 mt-4 mb-2">
          Chef Name
        </h2>
        <p className="text-lg font-medium text-gray-700 mb-2">
          Years of experience: X
        </p>
        <p className="text-lg font-medium text-gray-700 mb-2">
          Number of recipes: Y
        </p>
        <p className="text-lg font-medium text-gray-700 mb-4">Likes: Z</p>
        <button className="bg-orange-500 hover:bg-orange-400 text-white font-medium py-2 px-4 rounded">
          View Recipes
        </button>
      </div>
    </div>
  );
};

export default Chef;
