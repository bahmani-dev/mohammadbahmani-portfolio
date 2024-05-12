import React from "react";
import Button from "./button";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="lg:bg-yellow-500  max-lg:dark:bg-[#111]  bg-[#fff]   self-stretch flex items-center min-h-[100%] justify-center ">
      <div className=" relative overflow-hidden xl:w-[90%] w-[100%] lg:max-xl:px-10 h-screen ">
        <div className="grid grid-cols-12 relative bottom-20 z-10 h-full ">
          <div className="w-full h-full xl:col-span-3  col-span-3 "></div>
          <div className="col-span-9  bg-[#fff] dark:bg-[#111] -rotate-6 scale-125 lg:shadow"></div>
        </div>
        <div className="lg:h-full grid grid-cols-12 justify-items-center items-center  gap-5 lg:gap-0 absolute lg:max-xl:px-10 top-1/2 left-1/2 transform -translate-x-1/2 sm:-translate-y-1/2 translate-y-[-55%]  z-10 text-white w-full">
          <div
            className=" col-span-4 h-[90%] w-[100%] bg-white rounded-[30px] shadow ml-4 hidden lg:block "
            style={{
              backgroundImage: "url('/images/hero1.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="w-[250px] h-[250px] rounded-full dark:border-2 border-[#252525] col-span-12 lg:hidden"
            style={{
              backgroundImage: "url('/images/hero2.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="text-lg md:text-xl lg:text-2xl lg:col-span-8 col-span-12 flex flex-col justify-center  gap-5 sm:w-[70%] w-[100%] p-4 text-[#555] dark:text-white">
            <div className="sm:text-4xl text-2xl font-bold leading-tight max-lg:text-center   ">
              <div className="relative flex justify-center flex-col">
                <div className=" relative flex items-center max-lg:justify-center h-[50px] xl:w-[100%] w-full">
                  <span className="blocked "></span>
                  <h1 className="text-yellow-600 dark:text-yellow-500 uppercase title sm:text-[32px] xl:text-[46px] ">
                    {" "}
                    I&apos;M Mohammad Bahmani <span></span>
                  </h1>
                </div>
                <div className="role xl:w-[60%] w-full max-lg:justify-center xl:mt-3 ">
                  <div className="blocked"></div>
                  <p className="xl:text-[24px] sm:text-[32px] dark:text-white ">
                    {" "}
                    SOFTWARE Developer
                  </p>
                </div>
              </div>
            </div>
            <p className="xl:leading-[37px] leading-normal lg:leading-loose sm:text-[16px] text-base font-thin max-lg:text-center xl:w-[550px] mt-3  xl:mt-5 ">
              Software Developer committed to crafting captivating user
              experiences. Passionate about transforming ideas into impactful
              digital solutions. Let&apos;s create something remarkable
              together!
            </p>
            <div className=" max-lg:text-center">
              <a className=" inline-block" href="./bahmani-cv.pdf" download>
                <Button
                  text="Download CV"
                  type="button"
                  icon={<FaDownload />}
                ></Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
