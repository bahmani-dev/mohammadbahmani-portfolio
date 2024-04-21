import React, { ReactNode, ButtonHTMLAttributes } from "react";
import { FaArrowRight } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
interface Props {
  text: string;
  type: "submit" | "reset" | "button";
  icon?: ReactNode;
}

const Button = ({ text, type, icon }: Props) => {
  return (
    <button
      type={type}
      className="relative inline-flex items-center justify-between  pl-5 py-6    transition duration-300 ease-out border-2  rounded-full shadow-md group  overflow-hidden font-medium        group  h-10       border-yellow-500     uppercase text-base"
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-x-full bg-yellow-500 group-hover:-translate-x-0 ease"></span>
      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease dark:text-white max-md:text-sm  pr-5">
        {text}
      </span>

      <div className=" w-[48px] h-[48px] text-white  relative z-10 rounded-full bg-yellow-500 flex items-center justify-center">
        {icon || <FaArrowRight />}
      </div>
    </button>
  );
};

export default Button;
