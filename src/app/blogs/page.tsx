"use client";
import Header from "@/components/header";
import React from "react";
import BlogCard from "@/components/blogCard";
import { motion, useScroll, useTransform } from "framer-motion";
const BlogPage = () => {
  const blogs = [
    {
      title: "SOLID Principles: A Must-Know for All Developers",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*NB9wHllrua8T3sBXGDwM1g.jpeg",
      text: "If you are a software developer dreaming of writing code that’s super clear, works like a charm, and makes you feel like a coding superhero, then dive into the SOLID principles. They’re here to make your coding journey a whole lot cooler! 🌟",
      slug: "https://medium.com/@mohammadmandegar2019/solid-principles-a-must-know-for-all-developers-13431ae5f7c6", // This could be dynamically generated from the title
    },
    {
      title: "SOLID Principles: A Must-Know for All Developers",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*NB9wHllrua8T3sBXGDwM1g.jpeg",
      text: "If you are a software developer dreaming of writing code that’s super clear, works like a charm, and makes you feel like a coding superhero, then dive into the SOLID principles. They’re here to make your coding journey a whole lot cooler! 🌟",
      slug: "https://medium.com/@mohammadmandegar2019/solid-principles-a-must-know-for-all-developers-13431ae5f7c6", // This could be dynamically generated from the title
    },
    {
      title: "SOLID Principles: A Must-Know for All Developers",
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*NB9wHllrua8T3sBXGDwM1g.jpeg",
      text: "If you are a software developer dreaming of writing code that’s super clear, works like a charm, and makes you feel like a coding superhero, then dive into the SOLID principles. They’re here to make your coding journey a whole lot cooler! 🌟",
      slug: "https://medium.com/@mohammadmandegar2019/solid-principles-a-must-know-for-all-developers-13431ae5f7c6", // This could be dynamically generated from the title
    },

    // Add more blogs as needed
  ];
  // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

  return (
    <div className="w-full flex flex-col items-center bg-[#111] gap-10 min-h-screen ">
      <h1 className="uppercase text-[52px] max-md:text-[42px] font-bold text-white mt-10 relative z-10">
        MY <span className="text-yellow-500">blogs</span>
      </h1>
      <h2 className="uppercase absolute text-[#c4c4c4] -top-3 text-[116px] max-md:text-[96px] max-md:mt-2 z-0 font-bold opacity-10">
        posts
      </h2>

      <div className="lg:self-end  absolute lg:h-[100%]  max-lg:w-full flex justify-center lg:pr-5">
        <Header></Header>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[80%] mb-[120px]">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
