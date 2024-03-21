import Image from "next/image";
import Hero from "@/components/hero";
import Box from "@/components/summary";

export default function Home() {
  return (
    <main className=" flex flex-col items-center ">
      {/* <Header></Header> */}

      <div className="self-end absolute h-[700px] w-[45%] bg-black "></div>
      <div className="self-start absolute h-[700px] w-[20%] hero "></div>
      <Hero></Hero>
      <Box></Box>
    </main>
  );
}
