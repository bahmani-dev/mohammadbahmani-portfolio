"use client";
import Header from "@/components/header";
import React from "react";
import BlogCard from "@/components/blogCard";
import { motion, useScroll, useTransform } from "framer-motion";
const BlogPage = () => {
  const blogs = [
    {
      title:
        "Mastering Object-Oriented Programming in TypeScript: Your Complete Guide with Practical Examples",
      image: "/images/blog2.png",
      text: "Embark on an enjoyable learning experience about Object-Oriented Programming in TypeScript. We’ll break down complex concepts with real-world examples and simplified definitions, paving the way for your coding success.",
      slug: "https://medium.com/@mohammadmandegar2019/mastering-object-oriented-programming-in-typescript-your-complete-guide-with-practical-examples-5f2ad17b1668", // This could be dynamically generated from the title
    },
    {
      title: "SOLID Principles: A Must-Know for All Developers",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*NB9wHllrua8T3sBXGDwM1g.jpeg",
      text: "If you are a software developer dreaming of writing code that’s super clear, works like a charm, and makes you feel like a coding superhero, then dive into the SOLID principles. They’re here to make your coding journey a whole lot cooler! 🌟",
      slug: "https://medium.com/@mohammadmandegar2019/solid-principles-a-must-know-for-all-developers-13431ae5f7c6", // This could be dynamically generated from the title
    },
  ];

  return (
    <div className="w-full flex flex-col items-center dark:bg-[#0f0f0f] bg-white dark:text-white text-[#666] gap-10 min-h-screen ">
      <h1 className="uppercase text-[52px] max-md:text-[42px] font-bold   mt-10 relative z-10">
        my <span className="text-yellow-500">blogs</span>
      </h1>
      <h2 className="uppercase absolute dark:text-[#c4c4c4] text-[#1e2530]  mt-2 text-[96px] max-md:text-[82px] z-0 font-bold opacity-10">
        posts
      </h2>
      <Header></Header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[80%] mb-[120px]">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
