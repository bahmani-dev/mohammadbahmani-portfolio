"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import Button from "@/components/button";
import Header from "@/components/header";
import { FaDownload } from "react-icons/fa6";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  return (
    <div className=" flex flex-col items-center dark:bg-[#0f0f0f] bg-white dark:text-white text-[#666] gap-10 min-h-screen">
      <h1 className="uppercase text-[52px] max-md:text-[42px] font-bold   mt-10 relative z-10">
        About <span className="text-yellow-500">me</span>
      </h1>
      <h2 className="uppercase absolute dark:text-[#c4c4c4] text-[#1e2530]  mt-2 text-[96px] max-md:text-[82px] z-0 font-bold opacity-10">
        resume
      </h2>

      <Header></Header>

      <div className="flex flex-wrap justify-evenly lg:grid grid-cols-12 container ">
        {/* Personal Info */}

        <div className=" p-4 col-span-6 w-full max-lg:m-auto">
          <div className="sm:max-lg:w-[80%] w-full m-auto">
            <h3 className="uppercase md:text-[22px]  text-[18px]  font-bold text-[#666] dark:text-white mb-5">
              personal infos
            </h3>
            <div className="grid grid-cols-2 gap-4 text-[#666] dark:text-white text-sm lg:text-base">
              {/* Personal Info Items */}
              <div>
                <p className="font-thin inline-block">First Name:</p>
                <p className="md:inline block">Mohammad</p>
              </div>
              <div>
                <p className="font-thin md:inline block">Last Name:</p>
                <p className="md:inline block">Bahmani</p>
              </div>
              <div>
                <p className="font-thin md:inline block">Email:</p>
                <p className=" block">mohammadmandegar2019@gmail.com</p>
              </div>
              <div>
                <p className="font-thin md:inline block">Phone:</p>
                <p className="md:inline block">+93778990838</p>
              </div>
              <div>
                <p className="font-thin md:inline block">Address:</p>
                <p className="md:inline block">
                  Shahr-e-Naw, Kabul, Afghanistan
                </p>
              </div>
              <div>
                <p className="font-thin md:inline block">Languages:</p>
                <p className="md:inline block">English, Persian</p>
              </div>
            </div>
            <div className="mt-5 lg:mt-10">
              <Button
                text="Download CV"
                type="button"
                icon={<FaDownload />}
              ></Button>
            </div>
          </div>
        </div>
        <div className=" col-span-6 w-full p-5  sm:max-lg:w-[80%]">
          <div className="dark:from-[#111] from-[##25272f]  bg-gradient-to-r to-[#1f2024] dark:to-[#121212]  border border-[#1b2c68a0] relative rounded-lg  ">
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-red-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-red-600 to-transparent"></div>
            </div>
            <div className="px-4 lg:px-8 py-5">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-200"></div>
              </div>
            </div>
            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-4">
              <code className="font-mono text-xs md:text-sm lg:text-sm ">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-blue-500 dark:text-white">
                    coder
                  </span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400"></span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-blue-500 dark:text-white">
                    name:
                  </span>
                  <span className="text-gray-400">&apos;</span>
                  <span className="text-yellow-500">Mohammad Bahmani</span>
                  <span className="text-gray-400">&apos;,</span>
                </div>
                <div className="ml-4 lg:ml-8 mr-2">
                  <span className=" text-blue-500 dark:text-white">
                    skills:
                  </span>
                  <span className="text-gray-400">[&apos;</span>
                  <span className="text-yellow-500">React</span>
                  <span className="text-gray-400">&apos;, &apos;</span>
                  <span className="text-yellow-500">NextJS</span>
                  <span className="text-gray-400">&apos;, &apos;</span>
                  <span className="text-yellow-500">Postgres</span>
                  <span className="text-gray-400">&apos;, &apos;</span>
                  <span className="text-yellow-500">Express</span>
                  <span className="text-gray-400">&apos;, &apos;</span>
                  <span className="text-yellow-500">NestJS</span>
                  <span className="text-gray-400">&apos;, &apos;</span>
                  <span className="text-yellow-500">MySql</span>
                  <span className="text-gray-400">&apos;, &apos;</span>
                  <span className="text-yellow-500">MongoDB</span>
                  <span className="text-gray-400">&apos;, &apos;</span>
                  <span className="text-yellow-500">Vue</span>
                  <span className="text-gray-400">&apos;, &apos;</span>
                  <span className="text-yellow-500">Flutter</span>
                  <span className="text-gray-400">&apos;,</span>
                  <span className="text-gray-400">&apos;</span>
                  <span className="text-yellow-500">...</span>
                  <span className="text-gray-400">&apos;],</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-blue-500 dark:text-white">
                    hardWorker:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-blue-500 dark:text-white">
                    quickLearner:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-blue-500 dark:text-white">
                    problemSolver:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                    hireable:
                  </span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">() </span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                    return
                  </span>
                  <span className="text-gray-400">(</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-blue-500 dark:text-white">
                    hardWorker
                  </span>
                  <span className="text-yellow-500">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-blue-500 dark:text-white">
                    problemSolver
                  </span>
                  <span className="text-yellow-500">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-blue-500 dark:text-white">
                    skills.length
                  </span>
                  <span className="mr-2 text-yellow-500">&gt;=</span>
                  <span className="text-orange-400">5</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-gray-400">);</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 text-gray-400"></span>
                </div>
                <div>
                  <span className="text-gray-400"></span>
                </div>
              </code>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:gap-10 gap-5 container text-center items-center mt-5 mb-[120px]">
        <h3 className="uppercase md:text-[22px] text-[18px] font-bold dark:text-white text-[#666] ">
          skills
        </h3>
        <div className="hidden md:flex flex-col gap-10 container  text-center items-center mt-5">
          <Swiper
            slidesPerView={6}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="max-w-[90%] xl:max-w-[100%] "
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            slidesPerView={6}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="max-w-[90%] xl:max-w-[100%] "
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col gap-12 justify-center md:hidden">
          <div className="flex gap-4 flex-wrap p-5">
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              JavaScript
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              TypeScript
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              React.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Next.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              SCSS
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Tailwind CSS
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              MongoDB
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              PostgreSQL
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Node.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Nest.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Express.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Spring Boot
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              GraphQL
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Apollo
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Redux
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Framer Motion
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Three.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              WebGL
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Webpack
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Vite
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Docker
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              AWS
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Firebase
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Git
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Figma
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
