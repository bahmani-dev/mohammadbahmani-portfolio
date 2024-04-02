import Image from "next/image";
import Hero from "@/components/hero";
import Box from "@/components/summary";
import HorizontalScrolling from "@/components/services";
import Header from "@/components/header";
export default function Home() {
  return (
    <main className=" flex flex-col items-center ">
      <div className="self-end absolute h-[100%] pr-5">
        <Header></Header>
      </div>

      <div className="self-end absolute h-screen w-[40%] bg-[#0f0f0f] "></div>
      <div className="self-start absolute h-[700px] w-[20%] hero "></div>
      <Hero></Hero>
      <Box></Box>

      {/* <HorizontalScrolling /> */}
    </main>
  );
}
