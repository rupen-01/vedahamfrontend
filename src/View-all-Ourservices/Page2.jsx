import React from "react";
import front from "../assets/ai-generated-two-smiling-men-shaking-hands-after-meeting-in-an-office-free-photo.jpg"; // Adjust the import path as necessary
export default function TalentDevelopment() {
  return (
    <div className="py-16 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            On-Boarding And Talent Development
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Enterprises like HIRD understand the critical value of strategic talent nurturing and
            smooth onboarding in an environment that is continually changing and characterized by
            quick changes and dynamic industries. These procedures go beyond simple checkboxes; they
            are strategic expenditures that foster employee development and engagement and ultimately
            help the business succeed. <br /><br />
            We are here to reinvent talent development and onboarding to produce a staff that succeeds
            in the changing environment of contemporary business.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={front}
            alt="Talent Development"
            className="rounded-tr-[100px] rounded-bl-[100px] w-full max-w-md object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
