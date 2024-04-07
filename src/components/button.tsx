import React, { ReactNode, ButtonHTMLAttributes } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <button className="relative inline-flex items-center justify-between  pl-5 py-6   transition duration-300 ease-out border-2  rounded-full shadow-md group  overflow-hidden font-medium        group  h-10 w-60    border-yellow-500     uppercase text-base">
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-x-full bg-yellow-500 group-hover:-translate-x-0 ease"></span>
      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease text-white max-md:text-sm">
        {text}
      </span>

      <div className=" w-[48px] h-[48px] relative z-30 rounded-full bg-yellow-500 flex items-center justify-center">
        <AiOutlineArrowRight />
      </div>
    </button>
  );
};

export default Button;
