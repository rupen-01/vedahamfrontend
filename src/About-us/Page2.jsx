import React from "react";
import mid from "../assets/mid.jpg"; // Adjust the import path as necessary

const Page2 = () => {
  return (
    <section className="w-full py-12 px-4 md:px-12 flex flex-col md:flex-row items-center gap-8">
      {/* Left Image with background block */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        {/* Blue background box */}
        <div className="absolute top-0 left-0 w-[80%] h-[80%] bg-[#0046a1] z-0 translate-x-[-10%] translate-y-[10%] rounded-md" />
        
        {/* Foreground image */}
        <img
          src={mid}
          alt="Team working"
          className="relative z-10 w-[80%] shadow-lg rounded-sm"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-xl md:text-2xl font-bold text-[#00306f] mb-4">
          WHAT WE DO
        </h2>
        <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
          At HIRD, we go beyond simple hiring and recruitment; we become your strategic partner
          in maximizing the potential of an individual. Our all-encompassing services, which
          cover the whole recruiting cycle, are created to improve your staff and promote
          commercial success. Here, we are not just recruiters; we are partners invested in your
          growth. Our comprehensive solutions, strategic approach, and dedication to excellence
          make us your go-to choice for all your recruiting and hiring needs. Let us help you to
          shape your workforce and drive your company’s success forward.
        </p>
        <button className="bg-[#0046a1] text-white px-5 py-2 rounded-md text-sm hover:bg-blue-800 transition">
          Contact US
        </button>
      </div>
    </section>
  );
};

export default Page2;
