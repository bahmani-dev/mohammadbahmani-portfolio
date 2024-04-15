import React from "react";
import Button from "./button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="lg:bg-yellow-500 bg-[#111] self-stretch flex items-center min-h-[100%] justify-center ">
      <div className=" relative overflow-hidden xl:w-[90%] w-[100%] lg:max-xl:px-10 h-screen ">
        <div className="grid grid-cols-12 relative bottom-20 z-10 h-full ">
          <div className="w-full h-full xl:col-span-3  col-span-3 "></div>
          <div className="col-span-9  bg-[#111] -rotate-6 scale-125 lg:shadow"></div>
        </div>
        <div className="lg:h-full grid grid-cols-12 justify-items-center items-center  gap-5 lg:gap-0 absolute lg:max-xl:px-10 top-1/2 left-1/2 transform -translate-x-1/2 sm:-translate-y-1/2 translate-y-[-55%]  z-10 text-white w-full">
          <div className=" col-span-4 h-[90%] w-[100%] bg-white rounded-[30px] shadow ml-4 hidden lg:block"></div>
          <div className="w-[250px] h-[250px] rounded-full border-4 border-[#252525] col-span-12 lg:hidden"></div>
          <div className="text-lg md:text-xl lg:text-2xl lg:col-span-8 col-span-12 flex flex-col justify-center  gap-5 sm:w-[70%] w-[100%] p-4 ">
            <div className="sm:text-4xl text-2xl font-bold leading-tight max-lg:text-center   ">
              <div className="relative flex justify-center flex-col">
                <div className=" relative flex items-center max-lg:justify-center h-[50px] xl:w-[80%] w-full">
                  <span className="blocked "></span>
                  <h1 className="text-yellow-500 uppercase title sm:text-[32px] ">
                    {" "}
                    I'M stephen hawking <span></span>
                  </h1>
                </div>
                <div className="role xl:w-[60%] w-full max-lg:justify-center mt-10">
                  <div className="blocked"></div>
                  <p> SOFTWARE ENGINEER</p>
                </div>
              </div>
            </div>
            <p className="sm:text-base text-sm font-thin max-lg:text-center  ">
              I'm a Tunisian based web designer & front‑end developer focused on
              crafting clean & user‑friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me.
            </p>
            <div className="max-lg:text-center">
              <Link href="/about">
                <Button text="more about me" type="button"></Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
