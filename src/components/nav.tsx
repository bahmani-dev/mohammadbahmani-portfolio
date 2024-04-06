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
      console.log(path);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);
  console.log(path);
  return (
    <div className="flex flex-col gap-6  relative z-40 mr-5  ">
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link
          key={nav.name}
          href={nav.link}
          className={`w-[45px] h-[45px] flex items-center justify-center bg-gray-800 rounded-full`}
        >
          <nav.icon
            className={`w-[18px] h-[18px] ${
              path === nav.name ? "text-yellow-500" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;

<nav className="flex-grow ">
  <ul className="flex flex-col gap-10  relative z-40">
    <li>
      <a href="#" className=" hover:text-yellow-500 relative z-40">
        Home
      </a>
    </li>
    <li>
      <a href="#" className=" hover:text-yellow-500 relative z-40">
        About
      </a>
    </li>
    <li>
      <a href="#" className=" hover:text-yellow-500 relative z-40">
        Services
      </a>
    </li>
    <li className="">
      <a href="#" className=" hover:text-yellow-500 relative z-40">
        Contact
      </a>
    </li>
  </ul>
</nav>;
