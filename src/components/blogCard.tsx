// components/BlogCard.tsx
import React from "react";
import Link from "next/link";

interface Blog {
  title: string;
  image: string;
  text: string;
  slug: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`${blog.slug}`} target="_blank">
      <div className="rounded-md border  overflow-hidden text-white ">
        <img src={blog.image} alt={blog.title} className="w-full h-1/2" />
        <div className="bg-yellow-500 h-1 w-full "></div>
        <div className="p-4  h-1/2">
          <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
          <p>{blog.text}</p>
        </div>
      </div>
    </Link>
  );
  4;
};

export default BlogCard;
