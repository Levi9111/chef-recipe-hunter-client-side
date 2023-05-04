import React from 'react';

const LinkingTitle = ({ children }) => {
  return (
    <div className="text-center md:mb-9 mb-4 md:mt-9 mt-4">
      <span className="mt-5 mx-auto block h-[2px] w-[85px] bg-red-600"></span>
      <h3 className="text-5xl text-gray-700 font-extrabold uppercase mt-2">
        {children}
      </h3>
    </div>
  );
};

export default LinkingTitle;
