import React from "react";
import logo from "../assets/Green_And_Yellow_Modern_Company_Logo.pdf_20250729_164632_0000-removebg-preview.png"; // Adjust the import path as necessary

export default function Footer() {
  return (
    <footer className="bg-[#0B469B] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* Logo + Description */}
<div className="col-span-1 md:col-span-1">
  <div className="flex items-center space-x-2 mb-3">
    <img 
      src={logo}
      alt="Logo" 
      className="w-20 h-20 object-contain"
    />
  </div>
  <p className="text-[#D1D5DB]">
    The right talent solution is a conversation away. Whether you’re
    developing the power of people at the organizational or
    departmental level.
  </p>
</div>


        {/* Our Services */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Our Services</h4>
          <ul className="space-y-1 text-[#D1D5DB]">
            <li>Enterprise RPO</li>
            <li>Candidate Sourcing</li>
            <li>Contingent Workforce</li>
            <li>Total Talent Solution</li>
            <li>Project RPO</li>
            <li>On-Demand RPO</li>
            <li>HR Solutions</li>
            <li>Hiring Events</li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Industries</h4>
          <ul className="space-y-1 text-[#D1D5DB]">
            <li>Banking</li>
            <li>Financial Services</li>
            <li>Healthcare</li>
            <li>Supply Chain</li>
            <li>Information Technology</li>
            <li>Insurance</li>
            <li>Travel And Hospitality</li>
          </ul>
        </div>

        {/* Regions */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Regions</h4>
          <ul className="space-y-1 text-[#D1D5DB]">
            <li>United States</li>
            <li>Canada</li>
            <li>Philippines</li>
            <li>UAE</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Contact</h4>
          <ul className="space-y-1 text-[#D1D5DB]">
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-400 my-8" />

      <div className="text-center text-xs text-[#D1D5DB]">
        © VEDAHAM TECHNOLOGY PRIVATE LIMITED. All rights reserved
      </div>
    </footer>
  );
}
