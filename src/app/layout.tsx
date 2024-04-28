"use client";
import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/Transition";
import PreloadingScreen from "@/components/PreloadingScreen";
import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const inter = PT_Serif({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${darkMode ? "dark" : "light"} relative`}
      >
        {" "}
        <PreloadingScreen />
        <TransitionProvider>
          <div
            onClick={toggleDarkMode}
            className=" fixed z-40 transition duration-300 hover:bg-yellow-500 ease-in-out lg:right-10 right-3 sm:right-5 top-10  w-[40px] h-[40px] text-white dark:bg-gray-800 bg-gray-400 rounded-full   flex items-center justify-center cursor-pointer "
          >
            {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
          </div>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
