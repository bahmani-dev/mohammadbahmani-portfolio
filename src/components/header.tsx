import React from "react";
import Nav from "./nav";

const Header = () => {
  return (
    <header
      className=" max-lg:mt-20 fixed lg:top-1/2 lg:transform lg:-translate-y-[20%]
       max-lg:w-full z-20 dark:max-lg:bg-[#252525] max-lg:bg-[#666]  text-white py-4 
    lg:right-5  bottom-0
     px-0 flex flex-col  items-center justify-between lg:h-[100%]"
    >
      {/* Left Part */}

      {/* Middle Part */}
      <Nav></Nav>
      {/* Right Part */}
    </header>
  );
};

export default Header;
