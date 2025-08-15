// src/components/ClientStats.jsx
import React from "react";
import { FaUsers, FaStar, FaClock, FaDollarSign } from "react-icons/fa";

const logos = [
  "/logos/hgs.png",
  "/logos/iprocess.png",
  "/logos/kotak.png",
  "/logos/care.png",
  "/logos/maxlife.png",
  "/logos/nice.png",
];

const stats = [
  {
    icon: <FaUsers className="text-3xl text-blue-800" />,
    title: "Network",
    value: "200,000+",
    subtitle: "Talents",
  },
  {
    icon: <FaUsers className="text-3xl text-blue-800" />,
    title: "Process",
    value: "5 Days",
    subtitle: "Hiring",
  },
  {
    icon: <FaStar className="text-3xl text-blue-800" />,
    title: "Talent",
    value: "Top 3.5%",
    subtitle: "Vetted",
  },
  {
    icon: <FaDollarSign className="text-3xl text-blue-800" />,
    title: "Cost Advantage",
    value: "40%",
    subtitle: "Upto",
  },
  {
    icon: <FaClock className="text-3xl text-blue-800" />,
    title: "Network",
    value: "5+",
    subtitle: "Time Zones",
  },
];

const ClientStats = () => {
  return (
    <section className="px-4 md:px-16 py-12 bg-white text-center">
      {/* Client Logos */}
     

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <div className="mb-2 flex justify-center">{stat.icon}</div>
            <div className="text-sm font-medium text-gray-600">{stat.title}</div>
            <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientStats;
