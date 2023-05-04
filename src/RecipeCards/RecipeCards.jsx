import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCards = ({ recipes }) => {
  const handleAddToFavorites = recipeName => {
    toast.success(`${recipeName} added to favorites!`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map(recipe => (
        <div key={recipe.name} className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
          <p className="text-gray-600 mb-4">{recipes.cooking_Description}</p>
          <p className="text-2xl underline">Ingredients:</p>
          <ul className="mb-4 list-decimal">
            {recipe.ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => handleAddToFavorites(recipe.name)}
          >
            Add to favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeCards;
