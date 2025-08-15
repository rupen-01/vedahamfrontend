import React from "react";
import { FaLightbulb, FaClock, FaHandshake, FaChartLine } from "react-icons/fa";

const features = [
  {
    title: "Proactive Recruitment",
    icon: <FaLightbulb className="text-blue-600 w-12 h-12 mb-4" />,
    description:
      "Staying Ahead of Needs: Sourcing candidates proactively ensures that we have a pipeline of potential hires ready to meet our future staffing needs, reducing recruitment delays.",
  },
  {
    title: "Reducing Time And Cost",
    icon: <FaClock className="text-blue-600 w-12 h-12 mb-4" />,
    description:
      "Faster Hiring Process: Sourcing candidates in advance speeds up the hiring process, allowing us to fill positions quickly and minimise productivity gaps.",
  },
  {
    title: "Building Relationships",
    icon: <FaHandshake className="text-blue-600 w-12 h-12 mb-4" />,
    description:
      "Candidate Engagement: Sourcing candidates allows us to establish a rapport with them before they are actively job hunting, making them more likely to consider opportunities with us.",
  },
  {
    title: "Scaling For Growth",
    icon: <FaChartLine className="text-blue-600 w-12 h-12 mb-4" />,
    description:
      "Rapid Expansion: As we grow, having a candidate sourcing strategy in place ensures that we can quickly fill new positions and maintain our operational momentum.",
  },
];

const Page2 = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Why You Need <span className="text-orange-500">Candidate Sourcing?</span>
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Partnering with HIRD for recruitment ensures a comprehensive and effective hiring process, allowing you to find the best candidates efficiently and with confidence.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {feature.icon}
            <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page2;
