import React from "react";

const Box = () => {
  return (
    <div className="bg-black h-[200px] flex items-center justify-center w-full">
      <div className="container mx-auto flex justify-evenly">
        {/* Add your sponsor logos here */}
        <div className="mx-4 h-20  w-20 bg-gray-400"></div>
        <div className="mx-4 h-20  w-20 bg-gray-400"></div>
        <div className="mx-4 h-20  w-20 bg-gray-400"></div>
        <div className="mx-4 h-20  w-20 bg-gray-400"></div>
        {/* Add more sponsors as needed */}
      </div>
    </div>
  );
};

export default Box;
