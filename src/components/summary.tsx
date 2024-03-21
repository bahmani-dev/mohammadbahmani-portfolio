import React from "react";

const Box = () => {
  return (
    <div className=" p-8 shadow-lg  mx-auto flex   justify-center summary relative bottom-[50px] z-30 rounded-[30px]">
      <h2 className="text-xl text-white font-bold mb-3">Summary</h2>
      <p className="text-white mb-4 text-sm font-thin ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ut
      </p>
      <button className="uppercase border-l text-sm text-white border-r border-transparent border-gray-200 px-4 py-1 hover:bg-gray-200 focus:outline-none">
        Read More
      </button>
    </div>
  );
};

export default Box;
