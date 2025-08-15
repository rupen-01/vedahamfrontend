// src/components/HeroSection.jsx
import React from "react";
import"../App.css";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-6 md:px-16 py-12">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight">
          Developing <br />
          <span className="text-red-600">Extraordinary Talent</span> <br />
          Acquisition <br />
          Strategies
        </h1>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition">
            Hire a Talent
          </button>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
            Apply as a Talent
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1 mt-12 md:mt-0 md:ml-12">
        <div className="relative w-full h-[400px] md:h-[500px]">
          <img
            src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
            alt="Team"
            className="object-cover w-full h-full mask-custom"
          />
        </div>
      </div>
    </section>
  );
}
