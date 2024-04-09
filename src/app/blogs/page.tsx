"use client";
import Header from "@/components/header";
import React from "react";
import BlogCard from "@/components/blogCard";
import { motion, useScroll, useTransform } from "framer-motion";
const BlogPage = () => {
  const blogs = [
    {
      title: "Blog Title 1",
      image: "/images/NextWebsite.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      slug: "blog-title-1", // This could be dynamically generated from the title
    },
    {
      title: "Blog Title 2",
      image: "/images/NextWebsite.png",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      slug: "blog-title-2",
    },
    {
      title: "Blog Title 3",
      image: "/images/NextWebsite.png",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      slug: "blog-title-3",
    },
    {
      title: "Blog Title 1",
      image: "/images/NextWebsite.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      slug: "blog-title-1", // This could be dynamically generated from the title
    },
    {
      title: "Blog Title 2",
      image: "/images/NextWebsite.png",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      slug: "blog-title-2",
    },
    {
      title: "Blog Title 3",
      image: "/images/NextWebsite.png",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      slug: "blog-title-3",
    },
    // Add more blogs as needed
  ];
  // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="w-full flex flex-col items-center bg-[#111] gap-10 min-h-screen pb-[10%]">
        <h1 className="uppercase text-[52px] font-bold text-white mt-10 relative z-1 ">
          MY <span className="text-yellow-500">blogs</span>
        </h1>
        <h2 className="uppercase absolute text-[#c4c4c4] mt-2 text-[96px] z-0 font-bold opacity-10">
          posts
        </h2>
        <div className="lg:self-end absolute md:h-[100%]  max-lg:w-full flex justify-center lg:pr-5">
          <Header></Header>
        </div>
        <div className=" mt-5  container mb-[120px] ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {blogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPage;
