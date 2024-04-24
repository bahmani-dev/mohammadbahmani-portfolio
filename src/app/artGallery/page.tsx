"use client";
import Header from "@/components/header";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="w-full flex flex-col items-center dark:bg-[#0f0f0f] bg-white dark:text-white text-[#666] gap-10 min-h-screen ">
        <h1 className="uppercase text-[52px] max-md:text-[42px] font-bold   mt-10 relative z-10">
          my <span className="text-yellow-500">blogs</span>
        </h1>
        <h2 className="uppercase absolute dark:text-[#c4c4c4] text-[#1e2530]  mt-2 text-[96px] max-md:text-[82px] z-0 font-bold opacity-10">
          posts
        </h2>
        <Header></Header>
        <div className="container mx-auto px-4 py-8">
          <Head>
            <title>Colorful Effects Art Gallery</title>
            <meta
              name="description"
              content="Discover vibrant artworks & connect with artists"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <header className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Colorful Effects Art Gallery
            </h1>
            <h2 className="text-lg text-gray-600">
              Discover Vibrant Artworks & Connect with Artists
            </h2>
          </header>

          <main>
            {/* Introducing Features Section */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Introducing Features:
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <li>
                  <h3 className="text-lg font-semibold mb-2">Order Artworks</h3>
                  <p>
                    Browse through our diverse collection of paintings,
                    sculptures, and digital art pieces. Place orders for your
                    favorite artworks with ease.
                  </p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold mb-2">
                    Buy with Confidence
                  </h3>
                  <p>
                    Shop with confidence knowing that all transactions are
                    secure and protected. Our streamlined checkout process
                    ensures a hassle-free purchasing experience.
                  </p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold mb-2">
                    Order Custom Paintings
                  </h3>
                  <p>
                    Have a specific vision in mind? Simply upload an image, and
                    our talented artists will create a custom painting tailored
                    to your preferences. Turn your memories into timeless
                    masterpieces!
                  </p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold mb-2">
                    Explore Artist Profiles
                  </h3>
                  <p>
                    Get to know the artists behind the artworks. Visit artist
                    profiles to discover their biographies, explore their
                    portfolios, and learn about their inspirations and
                    techniques.
                  </p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold mb-2">
                    Connect with Artists
                  </h3>
                  <p>
                    Engage with artists directly by sending messages or leaving
                    comments on their artworks. Build meaningful connections and
                    support emerging talents within the art community.
                  </p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold mb-2">
                    Personalized Recommendations
                  </h3>
                  <p>
                    Receive personalized recommendations based on your
                    preferences and browsing history. Discover new artists and
                    artworks that resonate with your unique taste.
                  </p>
                </li>
              </ul>
            </section>

            {/* Image Placeholder Section */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Discover Inspiration:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  {/* Replace this with an actual image */}
                  <Image
                    src="/images/portfolio1.png"
                    alt="Artwork"
                    width={600}
                    height={400}
                  />
                </div>
                {/* Add more images here */}
              </div>
            </section>
          </main>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
