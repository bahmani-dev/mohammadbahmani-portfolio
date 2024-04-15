"use client";
import Image from "next/image";
import Hero from "@/components/hero";
import Header from "@/components/header";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PageWrapper } from "./pageWrapper";
import PreloadingScreen from "@/components/PreloadingScreen";

const Home = () => {
  const [helloShown, setHelloShown] = useState<boolean>(false);
  const [isHardReload, setIsHardReload] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      setIsHardReload(false);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  useEffect(() => {
    if (isHardReload) {
      // Run code specific to hard reload (e.g., mounting PreloadingScreen)
    }
  }, [isHardReload]);

  useEffect(() => {
    if (!isHardReload) {
      // Run code specific to subsequent navigations (e.g., navigating away from PreloadingScreen)
    }
  }, [isHardReload]);

  return (
    <PageWrapper>
      <main className="flex flex-col items-center">
        <div className="lg:self-end absolute lg:h-[100%] max-lg:w-full  flex justify-center lg:pr-5">
          <Header></Header>
        </div>

        <div className="self-end absolute h-screen w-[40%] bg-[#111] z-0 "></div>
        {/* <div className="self-start absolute h-[700px] w-[20%] hero "></div> */}

        {/* {isHardReload && <PreloadingScreen />} */}
        <Hero />
      </main>
    </PageWrapper>
  );
};

export default Home;
