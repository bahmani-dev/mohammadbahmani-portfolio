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
      color: "#224f7d",
    },
    {
      id: 3,
      name: "Project 3",
      imageUrl:
        "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      liveDemoUrl: "https://example.com",
      color: "#90133d",
    },
    // Add more projects as needed
  ];
  return (
    <div className=" flex flex-col items-center dark:bg-[#0f0f0f] bg-white dark:text-white text-[#666] gap-10 min-h-screen ">
      <h1 className="uppercase text-[52px] max-md:text-[42px] font-bold   mt-10 relative z-10">
        About <span className="text-yellow-500">me</span>
      </h1>
      <h2 className="uppercase absolute dark:text-[#c4c4c4] text-[#1e2530]  mt-2 text-[96px] max-md:text-[82px] z-0 font-bold opacity-10">
        resume
      </h2>

      <Header></Header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[80%] mb-[120px]">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
