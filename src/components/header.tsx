import React from "react";
import Nav from "./nav";
const Header = () => {
  return (
    <header className="  text-white py-4 px-6 md:px-10 lg:px-0 flex flex-col items-end justify-between h-[70%]">
      {/* Left Part */}
      <div className="flex items-center space-x-4">
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        {/* Text */}
        <span className="hidden md:inline-block relative z-40">Logo</span>
      </div>

      {/* Middle Part */}
      <Nav></Nav>
      {/* Right Part */}
    </header>
  );
};

export default Header;
