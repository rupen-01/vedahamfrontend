import React from "react";

import char from "../assets/ceo-described-the-three-different-types-of-managers-and-only-one-is-effective-removebg-preview.png"; // Adjust the import path as necessary
const OurValues = () => {
  return (
    <section className="bg-[#0a4a9e] text-white py-16 px-4 md:px-20 relative overflow-hidden mt-18">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Content */}
        <div className="md:w-1/2 z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white uppercase">
            Our Values
          </h2>
          <div className="h-2 w-40 bg-gradient-to-r from-white/80 to-white/10 mb-6"></div>

          <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-white">
            <li>
              <strong>Integrity:</strong> The Pillar of our Actions and Decisions
            </li>
            <li>
              <strong>Respect:</strong> Valuing the Dignity and Worth of Every Individual
            </li>
            <li>
              <strong>Trust:</strong> The Cornerstone of Lasting Relationships
            </li>
          </ul>

          <p className="mt-6 text-sm leading-relaxed">
            These serve as the foundation for HIRD’s core values. As we go ahead,
            bringing about development, transformation, and long-lasting connections
            that have an impact on the recruiting and hiring industry,{" "}
            <strong>we hold ourselves accountable to these values.</strong>
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={char}
            alt="Our Values"
            className="max-h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OurValues;
