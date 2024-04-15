"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);
  return (
    <div className="flex lg:flex-col gap-6  relative z-40 lg:mr-5  ">
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link
          href={nav.link}
          key={nav.name}
          className={`w-[45px] h-[45px] flex  items-center justify-center group overflow-hidden rounded-full relative transition duration-300 ease-out ${
            path === nav.name ? "bg-yellow-500" : "bg-gray-800"
          }`}
        >
          <nav.icon className={`w-[18px] h-[18px]`} />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
