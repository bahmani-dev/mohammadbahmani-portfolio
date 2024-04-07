"use-client";
import Image from "next/image";
import Hero from "@/components/hero";
import Box from "@/components/summary";
import Header from "@/components/header";
import React from "react";
export default function Home() {
  return (
    <main className=" flex flex-col items-center ">
      <div className="self-end absolute h-[100%] pr-5 z-30">
        <Header></Header>
      </div>

      <div className="self-end absolute h-screen w-[40%] bg-[#252525] "></div>
      {/* <div className="self-start absolute h-[700px] w-[20%] hero "></div> */}

      <Hero></Hero>

      <Box></Box>
    </main>
  );
}
