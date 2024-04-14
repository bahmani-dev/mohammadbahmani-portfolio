"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import Button from "@/components/button";
import Header from "@/components/header";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  return (
    <div className=" flex flex-col items-center bg-[#0f0f0f] gap-10">
      <h1 className="uppercase text-[52px] max-md:text-[42px] font-bold text-white mt-10 relative z-10">
        About <span className="text-yellow-500">me</span>
      </h1>
      <h2 className="uppercase absolute text-[#c4c4c4] mt-2 text-[96px] max-md:text-[82px] z-0 font-bold opacity-10">
        resume
      </h2>
      <div className="lg:self-end absolute lg:h-[100%]  max-lg:w-full flex justify-center lg:pr-5">
        <Header></Header>
      </div>
      <div className="flex flex-wrap justify-evenly lg:grid grid-cols-12 container ">
        {/* Personal Info */}

        <div className=" p-4 col-span-6 w-full m-auto">
          <div className="sm:w-[80%] w-full m-auto">
            <h3 className="uppercase md:text-[22px]  text-[18px]  font-bold text-white mb-5">
              personal infos
            </h3>
            <div className="grid grid-cols-2 gap-4 text-white text-sm">
              {/* Personal Info Items */}
              <div>
                <p className="font-thin inline-block">First Name:</p>
                <p className="md:inline block">Steve</p>
              </div>
              <div>
                <p className="font-thin md:inline block">Last Name:</p>
                <p className="md:inline block">Milner</p>
              </div>
              <div>
                <p className="font-thin md:inline block">Age:</p>
                <p className="md:inline block">30</p>
              </div>
              <div>
                <p className="font-thin md:inline block">Email:</p>
                <p className="md:inline block">steve@example.com</p>
              </div>
              <div>
                <p className="font-thin md:inline block">Phone:</p>
                <p className="md:inline block">+123456789</p>
              </div>
              <div>
                <p className="font-thin md:inline block">Address:</p>
                <p className="md:inline block">
                  123 Main Street, City, Country
                </p>
              </div>
              <div>
                <p className="font-thin md:inline block">Nationality:</p>
                <p className="md:inline block">American</p>
              </div>
              <div>
                <p className="font-thin md:inline block">Languages:</p>
                <p className="md:inline block">English, Spanish</p>
              </div>
            </div>
            <div className="mt-5">
              <Button text="Download CV" type="button"></Button>
            </div>
          </div>
        </div>

        {/* Boxes */}
        <div className=" col-span-6 w-full">
          <div className="sm:w-[80%] w-full m-auto p-4 grid grid-cols-2 sm:gap-10 gap-5 ">
            {/* Box 1 */}
            <div className="border border-gray-800 text-white rounded-lg p-7  w-full ">
              <p className="text-4xl font-bold sm:text-[48px] text-yellow-500 mb-5">
                12+
              </p>
              <p>Years of Experience</p>
            </div>

            {/* Box 2 */}
            <div className="border border-gray-800 text-white rounded-lg p-7  w-full ">
              <p className="text-4xl font-bold sm:text-[48px] text-yellow-500 mb-5">
                100+
              </p>
              <p>Projects Completed</p>
            </div>

            {/* Box 3 */}
            <div className="border border-gray-800 text-white rounded-lg p-7  w-full ">
              <p className="text-4xl font-bold sm:text-[48px] text-yellow-500 mb-5">
                5
              </p>
              <p>Awards Won</p>
            </div>

            {/* Box 4 */}
            <div className="border border-gray-800 text-white rounded-lg p-7  w-full ">
              <p className="text-4xl font-bold sm:text-[48px] text-yellow-500 mb-5">
                10K+
              </p>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:gap-10 gap-5 max-w-[90%] text-center items-center mt-5 mb-[120px]">
        <h3 className="uppercase md:text-[22px] text-[18px] font-bold text-white  ">
          skills
        </h3>
        <div className="hidden md:flex flex-col gap-10 max-w-[90%] text-center items-center mt-5">
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
            className="max-w-[90%] "
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
            className="max-w-[90%] "
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
        <div
          className="flex flex-col gap-12 justify-center md:hidden"
          ref={skillRef}
        >
          <motion.div
            initial={{ x: "-300px" }}
            animate={isSkillRefInView ? { x: 0 } : {}}
            className="flex gap-4 flex-wrap"
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
