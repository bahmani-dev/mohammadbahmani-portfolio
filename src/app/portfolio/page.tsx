"use client";
import Header from "@/components/header";
import ProjectCard from "@/components/projectCard";
import React from "react";
import { motion } from "framer-motion";

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      name: "Colorful Effects Artgallery Website",
      imageUrl: "/images/portfolio1.png",
      liveDemoUrl: "/artGallery",
      color: "#f58585",
      target: "_self",
      desc: "        The Colorful Effects Artgallery website offers a vibrant and immersive platform for art enthusiasts to explore, purchase, and learn about a diverse range of artworks created by talented artists from around the world.",
    },
    {
      id: 2,
      name: "Colorful Effects Artgallery mobile app",
      imageUrl: "/images/portfolio2.png",
      liveDemoUrl: "",
      color: "#e0de57",
      target: "_self",
      desc: "The art gallery mobile app allows users to browse, order, and purchase artwork conveniently. With a user-friendly interface, users can explore a diverse collection, add artworks to their cart, and securely complete transactions. They can also save favorites, read reviews, and discover artists.",
    },

    {
      id: 5,
      name: "Jobs.af",
      imageUrl: "/images/jobs.jpeg",
      liveDemoUrl: "https://jobs.af",
      color: "#4f8ce2",
      target: "blank",
      desc: "     As a member of Netlinks Company's software development team, I had the privilege of collaborating on the creation of Jobs.af, a leading online platform connecting job seekers and employers in Afghanistan. Contributing to this project was an enriching experience, where I played a  role in development and maintenance of the website. My involvement in this megaproject exemplifies my expertise in software development in a big team and my commitment to delivering impactful solutions that drive positive change in the Afghan job market.",
    },
    {
      id: 6,
      name: "Weena.af",
      imageUrl: "/images/weena.png",
      liveDemoUrl: "",
      color: "#cb2b0f",
      target: "_self",
      desc: " As an integral part of the software development team at Netlinks Company, I had the privilege of contributing to the creation of Weena.af, a pioneering website dedicated to facilitating blood donation and distribution across Afghanistan.  Through meticulous teamwork and technical expertise, we developed a user-friendly platform with intuitive interfaces, streamlined donation scheduling, and robust inventory management systems.",
    },
    {
      id: 4,
      name: "Kamyab Contracting",
      imageUrl: "/images/portfolio4.png",
      liveDemoUrl: "https://kamyabcontracting.com",
      color: "#e2c94f",
      target: "_blank",
      desc: "      Kamyab Contracting website, a leader company since 2003, excels in the general contracting field with reshaping residential and commercial spaces with 20+ years of experience",
    },
    {
      id: 3,
      name: "Vidagram Social Media",
      imageUrl: "/images/portfolio3.jpeg",
      liveDemoUrl: "",
      color: "#1547a5",
      target: "_self",
      desc: "Introducing Vidagram: your go-to social media platform for sharing moments, connecting with friends, and discovering new content! Post your favorite videos, photos, and stories, then engage with your community through likes, comments, and private messages. Stay up-to-date with friends' stories and explore trending content—all in one place. Join Vidagram today and start sharing your world!",
    },
  ];

  return (
    <>
      <Header></Header>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className=" flex flex-col items-center dark:bg-[#0f0f0f] bg-white dark:text-white text-[#666] gap-10 min-h-screen ">
          <h1 className="uppercase text-[52px] max-md:text-[42px] font-bold mt-8  lg:mt-12 relative z-10">
            my <span className="text-yellow-500">portfolio</span>
          </h1>
          <h2 className="uppercase absolute dark:text-[#c4c4c4] text-[#1e2530]   text-[108px] max-md:text-[82px] z-0 font-bold opacity-10">
            works
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-10 justify-between max-w-[80%] xl:max-w-[1200px] mb-[120px]">
            {projects.map((project, index) => (
              <div key={index} style={{ marginTop: index % 2 ? "50px" : "" }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PortfolioPage;
