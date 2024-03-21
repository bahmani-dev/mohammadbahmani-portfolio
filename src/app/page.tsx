import Image from "next/image";
import Hero from "@/components/hero";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className=" flex flex-col items-center ">
      {/* <Header></Header> */}

      <div className="self-end absolute h-[700px] w-[45%] bg-black"></div>
      <Hero></Hero>
    </main>
  );
}
