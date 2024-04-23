import Header from "@/components/header";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center dark:bg-[#0f0f0f] bg-white dark:text-white text-[#666] gap-10 min-h-screen ">
      <h1 className="uppercase text-[52px] max-md:text-[42px] font-bold   mt-10 relative z-10">
        my <span className="text-yellow-500">blogs</span>
      </h1>
      <h2 className="uppercase absolute dark:text-[#c4c4c4] text-[#1e2530]  mt-2 text-[96px] max-md:text-[82px] z-0 font-bold opacity-10">
        posts
      </h2>
      <Header></Header>
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
          <h2 className="text-2xl font-semibold mb-4">Introducing Features:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li>
              <h3 className="text-lg font-semibold mb-2">Order Artworks</h3>
              <p>
                Browse through our diverse collection of paintings, sculptures,
                and digital art pieces. Place orders for your favorite artworks
                with ease.
              </p>
            </li>
            {/* Add more features here */}
          </ul>
        </section>

        {/* Image Placeholder Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Discover Inspiration:</h2>
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

      <footer className="mt-8 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Colorful Effects Art Gallery. All
          rights reserved.
        </p>
        <p>Website built with Next.js, Tailwind CSS, and TypeScript.</p>
      </footer>
    </div>
  );
};

export default page;
