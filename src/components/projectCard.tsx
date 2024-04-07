"use client";
import React from "react";

interface Project {
  name: string;
  imageUrl: string;
  liveDemoUrl: string;
  color: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className="">
      <div
        className="flex flex-col items-center justify-center  py-10 px-5 rounded-2xl bg-gray-600 cursor-pointer relative overflow-hidden "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={project.imageUrl}
          alt={project.name}
          className={`max-w-[80%] mb-4 rounded-xl transform transition-transform duration-500  ${
            isHovered ? "scale-110" : ""
          }`}
        />
      </div>
      <p
        className={` mt-5 mb-10 text-white text-2xl transform transition duration-500 ${
          isHovered ? "underline underline-offset-8" : ""
        } `}
      >
        {project.name}
      </p>
    </div>
  );
};

export default ProjectCard;
// style={{ backgroundColor: project.color }}
