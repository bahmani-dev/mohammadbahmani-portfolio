import React from "react";

const Header = () => {
  return (
    <header className=" container text-white py-4 px-6 md:px-10 lg:px-0 flex items-center justify-between h-20">
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

      {/* Right Part */}
      <div className="flex items-center space-x-4">
        {/* Resume Button */}
        <nav className="flex-grow text-center">
          <ul className="flex justify-center space-x-6 relative z-40">
            <li>
              <a href="#" className=" hover:text-yellow-500 relative z-40">
                Home
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-yellow-500 relative z-40">
                About
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-yellow-500 relative z-40">
                Services
              </a>
            </li>
            <button className="">
              <a href="#" className=" hover:text-yellow-500 relative z-40">
                Contact
              </a>
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
