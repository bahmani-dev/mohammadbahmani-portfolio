import Header from "@/components/header";
import React from "react";
import BlogCard from "@/components/blogCard";
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
  return (
    <div className="w-full flex flex-col items-center bg-[#111] gap-10 min-h-screen">
      <h1 className="uppercase text-[52px] font-bold text-white mt-10 relative z-1 ">
        MY <span className="text-yellow-500">blogs</span>
      </h1>
      <h2 className="uppercase absolute text-[#c4c4c4] mt-2 text-[96px] z-0 font-bold opacity-10">
        posts
      </h2>
      <div className="self-end absolute h-[100%] pr-5">
        <Header></Header>
      </div>
      <div className=" mt-5  container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
