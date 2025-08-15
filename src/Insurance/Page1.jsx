import React from "react";
import insurance from '../assets/insurance1.jpg';

const Page1 = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white mt-15">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
    INSURANCE
          </h2>

          {/* Red-orange curve */}
          <div className="w-36 md:w-60 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500 mb-6"></div>

          <p className="text-gray-800 mb-4 leading-relaxed">
            Access top-tier candidates efficiently and effectively with our
            targeted Candidate Sourcing services.
          </p>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Targeted Candidate Sourcing services are essential for
            organizations looking to access top-tier talent efficiently and
            effectively.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6">
            Accessing top-tier candidates is crucial for the success of your
            organization. Our targeted Candidate Sourcing services employ
            advanced methods to identify and attract the best talent in the
            market. Our team utilizes cutting-edge tools and techniques to
            connect you with the right candidates efficiently and effectively.
          </p>

          {/* ✅ Button Added Here */}
          <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Hire a Talent
          </button>
        </div>

        {/* Image with angled background */}
        <div className="relative w-full h-full flex justify-center items-center">
          {/* Angled blue background */}
          <div className="absolute top-0 left-0 w-full h-full bg-blue-900 transform rotate-3 rounded-xl shadow-lg z-0"></div>

          {/* Foreground Image */}
          <img
            src={insurance}
            alt="Candidate Sourcing"
            className="relative z-10 w-90 h-90 object-contain rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Page1;
