import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefInfo = () => {
  const chefInfo = useLoaderData();
  console.log(chefInfo);
  const {
    id,
    image,
    name,
    description,
    experience,
    likes,
    numRecipes,
    recipes,
  } = chefInfo;
  console.log(recipes);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img src={image} alt={name} className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 md:pl-6">
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
          <p className="text-gray-600 text-lg mb-4">{description}</p>
          <div className="flex items-center mb-2">
            <span className="text-lg font-semibold mr-2">Experience:</span>
            <span>{experience}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-lg font-semibold mr-2">Likes:</span>
            <span>{likes}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-lg font-semibold mr-2">
              Number of Recipes:
            </span>
            <span>{numRecipes}</span>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={`https://source.unsplash.com/400x250/?${recipe}`}
              alt={recipe}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{recipe}</h3>
              <p className="text-gray-600 mb-2">{description}</p>
              <p className="font-semibold text-lg">${(index + 1) * 10}.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefInfo;