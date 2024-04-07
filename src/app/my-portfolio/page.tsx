import Header from "@/components/header";
import ProjectCard from "@/components/projectCard";
import React from "react";

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      imageUrl:
        "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      liveDemoUrl: "https://example.com",
      color: "#f58585",
    },
    {
      id: 2,
      name: "Project 2",
      imageUrl:
        "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      liveDemoUrl: "https://example.com",
      color: "#00ff00",
    },
    {
      id: 3,
      name: "Project 3",
      imageUrl:
        "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      liveDemoUrl: "https://example.com",
      color: "#0000ff",
    },
    // Add more projects as needed
  ];
  return (
    <div className=" flex flex-col items-center bg-[#252525] gap-10 min-h-screen ">
      <h1 className="uppercase text-[52px] max-md:text-[42px] font-bold text-white mt-10 relative z-10">
        <span className="text-yellow-500">my</span> portfolio
      </h1>
      <h2 className="uppercase absolute text-[#c4c4c4] -top-3 text-[116px] max-md:text-[96px] max-md:mt-2 z-0 font-bold opacity-10">
        works
      </h2>
      <div className="self-end absolute h-[100%] pr-5">
        <Header></Header>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[80%]">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
