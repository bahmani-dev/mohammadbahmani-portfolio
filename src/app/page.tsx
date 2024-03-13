import Image from "next/image";
import Hero from "@/components/hero";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <Header></Header>
      <Hero></Hero>
    </main>
  );
}
