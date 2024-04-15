import React from "react";
import Nav from "./nav";
import { BsFillMoonStarsFill } from "react-icons/bs";
const Header = () => {
  return (
    <header className=" max-lg:mt-20 fixed max-lg:w-full z-30 max-lg:bg-[#252525]  text-white py-4 lg:right-5 max-lg:bottom-0  px-0 flex flex-col lg:items-end items-center justify-between lg:h-[70%]">
      {/* Left Part */}
      <div className="w-[40px] h-[40px] bg-gray-800 rounded-full relative right-5 flex items-center justify-center cursor-pointer ">
        <BsFillMoonStarsFill />
      </div>

      {/* Middle Part */}
      <Nav></Nav>
      {/* Right Part */}
    </header>
  );
};

export default Header;
