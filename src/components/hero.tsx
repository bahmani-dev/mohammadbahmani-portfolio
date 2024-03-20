import React from "react";
import Header from "@/components/header";

const HeroSection = () => {
  return (
    <div className="hero relative overflow-hidden container h-[700px]">
      <Header></Header>
      <div className="grid grid-cols-12 relative bottom-20 z-10 ">
        {/* <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-black "></div> */}
        <div className="w-full h-full bg-white col-span-5"></div>
        <img src="/images/blackBg.svg" alt="" className="col-span-7" />
      </div>
      <div className="grid grid-cols-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 text-white w-full">
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
        <div className="text-lg md:text-xl lg:text-2xl col-span-7">
          This is a diagonally divided hero page.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
