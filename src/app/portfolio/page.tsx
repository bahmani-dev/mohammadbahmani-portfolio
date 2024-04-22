import Header from "@/components/header";
import ProjectCard from "@/components/projectCard";
import React from "react";

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      name: "Colorful Effects Artgallery Website",
      imageUrl: "/images/portfolio1.png",
      liveDemoUrl: "",
      color: "#f58585",
      desc: "        The Colorful Effects Artgallery website offers a vibrant and immersive platform for art enthusiasts to explore, purchase, and learn about a diverse range of artworks created by talented artists from around the world.",
    },
    {
      id: 2,
      name: "Colorful Effects Artgallery mobile app",
      imageUrl: "/images/portfolio2.png",
      liveDemoUrl: "",
      color: "#224f7d",
      desc: "The art gallery mobile app allows users to browse, order, and purchase artwork conveniently. With a user-friendly interface, users can explore a diverse collection, add artworks to their cart, and securely complete transactions. They can also save favorites, read reviews, and discover artists.",
    },
    {
      id: 3,
      name: "Vidagram Social Media",
      imageUrl: "/images/portfolio3.jpeg",
      liveDemoUrl: "",
      color: "#90133d",
      desc: "Introducing Vidagram: your go-to social media platform for sharing moments, connecting with friends, and discovering new content! Post your favorite videos, photos, and stories, then engage with your community through likes, comments, and private messages. Stay up-to-date with friends' stories and explore trending content—all in one place. Join Vidagram today and start sharing your world!",
    },
    {
      id: 4,
      name: "Kamyab Contracting",
      imageUrl: "/images/portfolio4.png",
      liveDemoUrl: "",
      color: "#90133d",
      desc: "      Kamyab Contracting website, a leader company since 2003, excels in the general contracting field with reshaping residential and commercial spaces with 20+ years of experience",
    },
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
