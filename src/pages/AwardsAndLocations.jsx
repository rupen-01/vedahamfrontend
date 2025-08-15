import React from "react";
import tro from "../assets/lovepik-trophy-png-image_401443708_wh1200-removebg-preview.png"; // Adjust the import path as necessary
import map from "../assets/world-map-globe-vector-illustration-world-map-symbol-isolated-vector-eps10_532800-267-removebg-preview.png"; // Adjust the import path as necessary 
import { Link } from "react-router-dom";
export default function AwardsAndLocations() {

  return (
    <div className="w-full min-h-screen bg-white text-black p-4 flex flex-col items-center justify-center">
      {/* Awards Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:mt-20 gap-8">
  {/* Left: Image */}
  <div className="w-[250px] md:w-[300px] lg:w-[350px]">
    <img
      src={tro}
      alt="Awards and Certificates"
      className="w-full h-auto object-contain"
    />
  </div>

  {/* Right: Content */}
  <div className="text-center md:text-left max-w-md">
    <h2 className="text-xl md:text-2xl font-bold mb-2">
      Awards & Certifications
    </h2>
    <p className="text-sm mb-3">
      HISO was awarded the Business Excellence Awards 2022 by Sharjah
      chamber of commerce and industry, a leading hiring firm of the year
      2022
    </p>
    <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
      About Us
    </button>
  </div>
</div>


      {/* World Map Section */}
      <div className="relative w-full max-w-6xl mt-16">
        <img
          src={map}
          alt="World Map"
          className="w-full h-auto opacity-30"
        />
        {/* Locations */}
        <div className="absolute top-[60%] left-[20%] text-center">
          <div className="text-red-600 text-2xl">📍</div>
          <Link className="text-black font-semibold " to={"/regions/us"}>USA</Link>
        </div>
        <div className="absolute top-[52%] left-[24%] text-center">
          <div className="text-red-600 text-2xl">📍</div>
          <Link className="text-black font-semibold" to={"/regions/canada"} >Canada</Link>
        </div>
        <div className="absolute top-[50%] left-[60%] text-center">
          <div className="text-red-600 text-2xl">📍</div>
          <Link className="text-black font-semibold" to={"/regions/uae"}>UAE</Link>
        </div>
        <div className="absolute top-[60%] left-[64%] text-center">
          <div className="text-red-600 text-2xl">📍</div>
          <Link className="text-black font-semibold" to={"/regions/india"}>India</Link>
        </div>
        <div className="absolute top-[70%] left-[72%] text-center">
          <div className="text-red-600 text-2xl">📍</div>
          <Link className="text-black font-semibold" to={"/regions/philippines"}>Philippines</Link>
        </div>
      </div>
    </div>
  );
}
