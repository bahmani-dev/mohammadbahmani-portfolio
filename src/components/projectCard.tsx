"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Project {
  name: string;
  imageUrl: string;
  liveDemoUrl: string;
  color: string;
  desc: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div>
      <div style={{ background: `${project.color}` }} className="rounded-md ">
        <Link
          href={project.liveDemoUrl}
          className={`flex flex-col items-center justify-center h-[400px] rounded-md  dark:bg-gray-600  py-10 px-5  cursor-pointer relative overflow-hidden  `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={project.imageUrl}
            alt={project.name}
            width={450}
            height={100}
            className={`max-w-[90%] mb-4 rounded-md transform transition-transform duration-500  ${
              isHovered ? "scale-110" : ""
            }`}
          />
        </Link>
      </div>

      <p
        className={` mt-5  dark:text-white text-[#666] text-2xl transform transition duration-500 ${
          isHovered ? "underline underline-offset-8" : ""
        } `}
      >
        {project.name}
      </p>
      <p className={` mt-3  mb-10 dark:text-white text-[#666] text-sm    `}>
        {project.desc}
      </p>
    </div>
  );
};

export default ProjectCard;
