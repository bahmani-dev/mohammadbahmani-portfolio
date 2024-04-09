"use client";
import Button from "@/components/button";
import Header from "@/components/header";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Contacts, Socials } from "@/constants";
import EmailForm from "./sendEmail";
const ContactPage = () => {
  return (
    <div className="w-full flex flex-col items-center bg-[#111] gap-10 min-h-screen">
      <h1 className="uppercase text-[52px] max-md:text-[42px] font-bold text-white mt-10 relative z-10">
        get in <span className="text-yellow-500">touch</span>
      </h1>
      <h2 className="uppercase absolute text-[#c4c4c4] mt-2 text-[96px] max-md:text-[72px] max-md:mt-4 z-0 font-bold opacity-10">
        contact
      </h2>
      <div className="lg:self-end absolute lg:h-[100%]  w-full flex justify-center lg:pr-5">
        <Header></Header>
      </div>
      <div className=" mt-5  container mb-[150px]  flex items-center ">
        <div className="grid grid-cols-12 ">
          <div className="lg:col-span-4 col-span-12 p-4">
            <h3 className="uppercase text-[22px] font-bold text-white mb-5">
              Dont be shy!
            </h3>
            <p className="text-white ">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions
            </p>
            {Contacts.map((contact) => (
              <div
                className="flex gap-5 text-white mt-8 items-center"
                key={contact.id}
              >
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
                <div
                  className=" text-white bg-[#2b2b2b]  items-center justify-center p-2 rounded-full w-10"
                  key={social.name}
                >
                  <img src={social.src} alt="icon" className="" />
                </div>
              ))}
            </div>
          </div>
          <EmailForm></EmailForm>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
