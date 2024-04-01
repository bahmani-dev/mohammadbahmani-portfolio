import React from "react";
import Header from "@/components/header";

const HeroSection = () => {
  return (
    <div className="hero self-stretch flex justify-center">
      <div className=" relative overflow-hidden container lg:max-xl:px-10 h-screen ">
        <Header></Header>
        <div className="grid grid-cols-12 relative bottom-20 z-10 h-full ">
          <div className="w-full h-full xl:col-span-7  col-span-6 "></div>
          <div className="xl:col-span-5 col-span-6 bg-black rotate-6 scale-125"></div>
        </div>
        <div className="grid grid-cols-12 absolute lg:max-xl:px-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 text-white w-full">
          <div className=" col-span-5 ">
            <h1 className="text-sm md:text-sm lg:text-xl font-bold mb-4  text-black">
              Hi, I am
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl  text-black">
              This is a diagonally divided hero page.
            </p>
            <div className="flex items-center justify-center ">
              <div>
                t jos os an ocon which vcan have varyu by the most compiter
                scioent of the cpountur
              </div>
            </div>
          </div>
          <div className="text-lg md:text-xl lg:text-2xl col-span-6 col-start-7">
            This is a diagonally divided hero page.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
