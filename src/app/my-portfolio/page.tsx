import Header from "@/components/header";
import React from "react";

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      imageUrl:
        "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      liveDemoUrl: "https://example.com",
    },
    {
      id: 2,
      name: "Project 2",
      imageUrl:
        "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      liveDemoUrl: "https://example.com",
    },
    {
      id: 3,
      name: "Project 3",
      imageUrl:
        "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      liveDemoUrl: "https://example.com",
    },
    // Add more projects as needed
  ];
  return (
    <div className=" flex flex-col items-center bg-[#0f0f0f] gap-10 h-screen">
      <h1 className="uppercase text-[52px] font-bold text-white mt-10 relative z-10">
        <span className="text-yellow-500">my</span> portfolio
      </h1>
      <h2 className="uppercase absolute text-[#c4c4c4] -top-3 text-[116px] z-0 font-bold opacity-10">
        works
      </h2>
      <div className="self-end absolute h-[100%] pr-5">
        <Header></Header>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[80%]">
        {projects.map((project) => (
          <div key={project.id} className="relative ">
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-auto rounded-lg "
            />
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg"
            >
              <button className="bg-yellow-500 hover:bg-yellow-700 transition-all ease-in-out duration-300 text-white font-bold py-2 px-4 rounded">
                Live Demo
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
