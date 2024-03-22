// components/ServicesSection.tsx
import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-700">
              From simple landing pages to complex web applications, I can build
              responsive and scalable solutions using the latest web
              technologies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Mobile App Development
            </h3>
            <p className="text-gray-700">
              I develop native and cross-platform mobile apps for iOS and
              Android platforms, ensuring a smooth and engaging user experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-700">
              I create intuitive and visually appealing designs that enhance
              user experience and effectively communicate your brand's message.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
