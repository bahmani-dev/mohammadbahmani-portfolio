// import React from "react";

// const HeroSection = () => {
//   // Generate random positions for the small texts
//   const getRandomPosition = () => {
//     const positions = ["top", "right", "bottom", "left"];
//     return positions[Math.floor(Math.random() * positions.length)];
//   };

//   return (
//     <div className=" text-white py-24 relative container">
//       <div className="container mx-auto px-4">
//         {/* Title */}
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center text-gray-800">
//           Welcome to My Website
//         </h1>
//         {/* Small One-Line Texts */}
//         <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
//           <p
//             className={`text-sm text-gray-400 absolute ${getRandomPosition()}-0`}
//           >
//             Text 1
//           </p>
//           <p
//             className={`text-sm text-gray-400 absolute ${getRandomPosition()}-0`}
//           >
//             Text 2
//           </p>
//           <p
//             className={`text-sm text-gray-400 absolute ${getRandomPosition()}-0`}
//           >
//             Text 3
//           </p>
//           <p
//             className={`text-sm text-gray-400 absolute ${getRandomPosition()}-0`}
//           >
//             Text 4
//           </p>
//           <p
//             className={`text-sm text-gray-400 absolute ${getRandomPosition()}-0`}
//           >
//             Text 1
//           </p>
//           <p
//             className={`text-sm text-gray-400 absolute ${getRandomPosition()}-0`}
//           >
//             Text 2
//           </p>
//           <p
//             className={`text-sm text-gray-400 absolute ${getRandomPosition()}-0`}
//           >
//             Text 3
//           </p>
//           <p
//             className={`text-sm text-gray-400 absolute ${getRandomPosition()}-0`}
//           >
//             Text 4
//           </p>
//           {/* Add more small texts here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// components/HeroSection.tsx
import React from "react";

const HeroSection = () => {
  return (
    <div className="hero relative overflow-hidden container h-[700px]">
      <header className=" container text-white py-4 px-6 md:px-10 lg:px-16 flex items-center justify-between h-20">
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
          <span className="hidden md:inline-block text-black">Logo</span>
        </div>

        {/* Middle Part */}

        {/* Right Part */}
        <div className="flex items-center space-x-4">
          {/* Resume Button */}
          <nav className="flex-grow text-center">
            <ul className="flex justify-center space-x-6 text-black">
              <li>
                <a href="#" className=" hover:text-yellow-500 text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-yellow-500 text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-yellow-500 text-black">
                  Services
                </a>
              </li>
              <button className="">
                <a href="#" className=" hover:text-yellow-500 text-black">
                  Contact
                </a>
              </button>
            </ul>
          </nav>
        </div>
      </header>
      <div className="absolute inset-0 bg-black w-1/2"></div>
      <div className="absolute inset-0 bg-black w-1/2"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white w-full">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Welcome to Hero Page
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          This is a diagonally divided hero page.
        </p>
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-full z-20">
        <svg
          className="absolute top-0 left-0 w-full h-full z-20"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,0 0,100 100,100" fill="white" />
          <polygon points="0,0 100,0 100,100" fill="black" />
        </svg>
      </div> */}
      {/* <div className="" ></div> */}
    </div>
  );
};

export default HeroSection;
