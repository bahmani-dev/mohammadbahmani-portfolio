"use-client";
import Image from "next/image";
import Hero from "@/components/hero";
import Box from "@/components/summary";
import Header from "@/components/header";
import React from "react";
export default function Home() {
  return (
    <main className=" flex flex-col items-center ">
      <div className="lg:self-end absolute lg:h-[100%]  w-full flex justify-center lg:pr-5">
        <Header></Header>
      </div>

      <div className="self-end absolute h-screen w-[40%] bg-[#111] z-0 "></div>
      {/* <div className="self-start absolute h-[700px] w-[20%] hero "></div> */}

      <Hero></Hero>
    </main>
  );
}
