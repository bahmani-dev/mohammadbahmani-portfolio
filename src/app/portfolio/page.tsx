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
      desc: "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum vero ipsum accusantium quasi quo deserunt. Aperiam, facere. Veritatis, magni ullam excepturi beatae omnis officiis quos accusamus dolorem quo voluptatibus deserunt odit dolor fuga necessitatibus a molestiae hic eius? Eum, velit.",
    },
    {
      id: 2,
      name: "Project 2",
      imageUrl:
        "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      liveDemoUrl: "https://example.com",
      color: "#224f7d",
      desc: "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum vero ipsum accusantium quasi quo deserunt. Aperiam, facere. Veritatis, magni ullam excepturi beatae omnis officiis quos accusamus dolorem quo voluptatibus deserunt odit dolor fuga necessitatibus a molestiae hic eius? Eum, velit.",
    },
    {
      id: 3,
      name: "Project 3",
      imageUrl:
        "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      liveDemoUrl: "https://example.com",
      color: "#90133d",
      desc: "        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum vero ipsum accusantium quasi quo deserunt. Aperiam, facere. Veritatis, magni ullam excepturi beatae omnis officiis quos accusamus dolorem quo voluptatibus deserunt odit dolor fuga necessitatibus a molestiae hic eius? Eum, velit.",
    },
    // Add more projects as needed
  ];
  return (
    <div className=" flex flex-col items-center dark:bg-[#0f0f0f] bg-white dark:text-white text-[#666] gap-10 min-h-screen ">
      <h1 className="uppercase text-[52px] max-md:text-[42px] font-bold mt-8  lg:mt-12 relative z-10">
        my <span className="text-yellow-500">portfolio</span>
      </h1>
      <h2 className="uppercase absolute dark:text-[#c4c4c4] text-[#1e2530]   text-[108px] max-md:text-[82px] z-0 font-bold opacity-10">
        works
      </h2>

      <Header></Header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-10 justify-between max-w-[80%] xl:max-w-[1200px] mb-[120px]">
        {projects.map((project, index) => (
          <div key={index} style={{ marginTop: index % 2 ? "50px" : "" }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
