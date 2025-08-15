import React from "react";
import top from "../assets/employee-calculating-budget-customers-office-97405877.webp"; // Adjust the import path as necessary
export default function ServicesBanner() {
  return (
    <div
      className="relative w-full h-[300px] md:h-[700px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${top})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="inline-block bg-white text-blue-800 font-bold text-2xl md:text-3xl px-6 py-2 rounded-full shadow">
          <span className="text-blue-900">Services</span>
          <div className="h-1 w-12 bg-orange-400 mt-1 mx-auto rounded-full"></div>
        </div>
        <h2 className="text-white text-xl md:text-3xl font-semibold mt-6">
          Providing a Wide Range of Services to Empower Your Workforce
        </h2>
      </div>
    </div>
  );
}
