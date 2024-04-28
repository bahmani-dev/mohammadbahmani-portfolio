"use client";
import Image from "next/image";
import Hero from "@/components/hero";
import Header from "@/components/header";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PageWrapper } from "./pageWrapper";
import PreloadingScreen from "@/components/PreloadingScreen";
import { motion } from "framer-motion";

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
    <>
      <Header></Header>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <main className="flex flex-col items-center">
          <div className="self-end absolute h-screen w-[40%] dark:bg-[#111] bg-white z-0 "></div>
          {/* <div className="self-start absolute h-[700px] w-[20%] hero "></div> */}

          {/* {isHardReload && <PreloadingScreen />} */}
          <Hero />
        </main>
      </motion.div>
    </>
  );
};

export default Home;
