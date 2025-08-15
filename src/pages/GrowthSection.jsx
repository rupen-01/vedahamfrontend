// src/components/GrowthSection.jsx
import React from "react";
import {
  FaUsers,
  FaUserTie,
  FaStar,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUsers size={40} className="text-blue-800" />,
    title: "Building Specialised Networks",
    description:
      "Building strong networks, utilising data-driven approaches, and providing excellent candidate and client experiences.",
  },
  {
    icon: <FaUserTie size={40} className="text-blue-800" />,
    title: "World-Class Recruiters",
    description:
      "HIRD, a reputable recruitment company, employs experienced recruiters who specialize in finding the right candidates for your specific needs.",
  },
  {
    icon: <FaStar size={40} className="text-blue-800" />,
    title: "Access To A Wider Talent Pool",
    description:
      "We have extensive networks and databases, giving you access to a broader range of potential candidates.",
  },
  {
    icon: <FaHandshake size={40} className="text-blue-800" />,
    title: "Streamlining Recruitment",
    description:
      "We utilize advanced technology to automate candidate sourcing, screening, matching from recruitment to end to end process, which can save time and increase efficiency.",
  },
];

export default function GrowthSection() {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">
          Human-Centred Approaches To Team Growth
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Partnering with HIRD for recruitment ensures a comprehensive and effective hiring process,
          allowing you to find the best candidates efficiently and with confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {item.icon}
              <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition">
            Hire a Talent
          </button>
        </div>
      </div>
    </section>
  );
}
