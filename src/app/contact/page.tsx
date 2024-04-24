"use client";
import Button from "@/components/button";
import Header from "@/components/header";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Contacts, Socials } from "@/constants";
import EmailForm from "./sendEmail";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
const ContactPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="w-full flex flex-col items-center dark:bg-[#0f0f0f] bg-white dark:text-white text-[#666] gap-10 min-h-screen">
        <h1 className="uppercase text-[52px] max-md:text-[42px] font-bold   mt-10 relative z-10">
          get in <span className="text-yellow-500">touch</span>
        </h1>
        <h2 className="uppercase absolute dark:text-[#c4c4c4] text-[#1e2530]  mt-2 text-[96px] max-md:text-[82px] z-0 font-bold opacity-10">
          contact
        </h2>

        <Header></Header>

        <div className=" mt-5  container sm:mb-[100px] mb-[70px]  flex items-center dark:text-white text-[#666]">
          <div className="grid grid-cols-12 ">
            <div className="lg:col-span-4 col-span-12 p-4">
              <h3 className="uppercase text-[22px] font-bold  mb-5">
                let&apos;s work together
              </h3>
              <p className=" ">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions
              </p>
              {Contacts.map((contact) => (
                <div className="flex gap-5  mt-8 items-center" key={contact.id}>
                  <contact.icon className="w-[40px] h-[40px] text-yellow-500" />
                  <div>
                    <h4 className="uppercase font-light text-base mb-1">
                      {contact.title}
                    </h4>
                    <p className="font-bold text-sm">{contact.text}</p>
                  </div>
                </div>
              ))}
              <div className="flex flex-row gap-5 mt-8">
                {Socials.map((social) => (
                  <Link
                    href={social.link}
                    className="  dark:bg-[#2b2b2b] bg-[#eee] cursor-pointer items-center justify-center p-2 rounded-full w-10"
                    key={social.name}
                  >
                    <Image
                      src={social.src}
                      alt="icon"
                      className=""
                      width={30}
                      height={30}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <EmailForm></EmailForm>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
