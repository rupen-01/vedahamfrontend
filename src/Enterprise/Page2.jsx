import React from "react";
import { FaLightbulb, FaClock, FaHandshake, FaChartLine } from "react-icons/fa";

const WhyEnterprise = () => {
  const features = [
    {
      icon: <FaLightbulb size={40} className="text-blue-600 mx-auto mb-4" />,
      title: "Proactive Recruitment",
      description:
        "Staying Ahead of Needs: Sourcing candidates proactively ensures that we have a pipeline of potential hires ready to meet our future staffing needs, reducing recruitment delays.",
    },
    {
      icon: <FaClock size={40} className="text-blue-600 mx-auto mb-4" />,
      title: "Reducing Time And Cost",
      description:
        "Faster Hiring Process: Sourcing candidates in advance speeds up the hiring process, allowing us to fill positions quickly and minimise productivity gaps.",
    },
    {
      icon: <FaHandshake size={40} className="text-blue-600 mx-auto mb-4" />,
      title: "Building Relationships",
      description:
        "Candidate Engagement: Sourcing candidates allows us to establish a rapport with them before they are actively job hunting, making them more likely to consider opportunities with us.",
    },
    {
      icon: <FaChartLine size={40} className="text-blue-600 mx-auto mb-4" />,
      title: "Scaling For Growth",
      description:
        "Rapid Expansion: As we grow, having a candidate sourcing strategy in place ensures that we can quickly fill new positions and maintain our operational momentum.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Why You Need <span className="text-orange-600">Enterprise?</span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          Partnering with HIRD for recruitment ensures a comprehensive and effective hiring process,
          allowing you to find the best candidates efficiently and with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, idx) => (
          <div key={idx} className="text-center">
            {item.icon}
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyEnterprise;
