import React from 'react';
import { FaHeart, FaRegEye } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Chef = ({ chef }) => {
  const {
    id,
    name,
    image,
    experience,
    numRecipes,
    recipes,
    description,
    likes,
  } = chef;
  console.log(chef);
  return (
    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
      <img src={image} alt="Chef" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <h3 className="text-lg font-semibold mb-2">Years of Experience:</h3>
        <p className="mb-2">{experience}</p>
        <h3 className="text-lg font-semibold mb-2">Number of Recipes:</h3>
        <p className="mb-2">{numRecipes}</p>
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <FaHeart className="mr-2 text-red-500" /> Likes:
        </h3>
        <p className="mb-2">{likes}</p>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center, justify-center">
            <FaRegEye className="mr-2" /> View Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chef;
