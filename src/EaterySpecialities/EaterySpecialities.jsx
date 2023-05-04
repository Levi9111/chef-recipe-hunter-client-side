import { FaCoffee, FaCocktail, FaFish, FaLeaf } from 'react-icons/fa';

const EaterySpecialities = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center">
          <div className="text-4xl text-red-500 mb-2">
            <FaCoffee />
          </div>
          <h3 className="text-2xl font-bold mb-2">Coffee</h3>
          <p className="text-gray-700 text-center">
            Wake up and smell the coffee! We serve the best coffee in town made
            from freshly roasted beans.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center">
          <div className="text-4xl text-red-500 mb-2">
            <FaCocktail />
          </div>
          <h3 className="text-2xl font-bold mb-2">Cocktails</h3>
          <p className="text-gray-700 text-center">
            Our mixologists have crafted a variety of cocktails that are sure to
            please. Come try our signature drinks!
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center">
          <div className="text-4xl text-red-500 mb-2">
            <FaFish />
          </div>
          <h3 className="text-2xl font-bold mb-2">Seafood</h3>
          <p className="text-gray-700 text-center">
            We have a wide selection of fresh seafood brought in daily by our
            local fishermen. Come taste the ocean!
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center">
          <div className="text-4xl text-red-500 mb-2">
            <FaLeaf />
          </div>
          <h3 className="text-2xl font-bold mb-2">Fresh Salad</h3>
          <p className="text-gray-700 text-center">
            Our salads are made with the freshest vegetables and ingredients and
            are the perfect light and healthy option.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EaterySpecialities;
