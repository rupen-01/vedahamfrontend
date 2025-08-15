import React from "react";
import back from "../assets/266.jpg"; // Adjust the import path as necessary
const Page1 = () => {
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-start mt-10"
      style={{
        backgroundImage: `url(${back})`,
      }}
    >
      <div className="ml-10 bg-white rounded-full px-6 py-4 shadow-lg flex items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mr-2">
         Industries
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full -mt-2"></div>
      </div>
    </section>
  );
};

export default Page1;
