// import React from "react";
// import { useNavigate } from "react-router-dom";
// import candidateSourcing from "../assets/960x0.webp"; // Adjust the import path as necessary
// import ondemandRPO from "../assets/on-demand-rpo.jpg"; // Adjust the import path as necessary
// import contingent from "../assets/Mastering-Contingent-Workforce-Management.jpeg"; // Adjust the import path as necessary
// import enterprise from "../assets/1653672289006.png"; // Adjust the import path as necessary
// import project from "../assets/Artboard 2.webp"; // Adjust the import path as necessary
// import totaltalent from "../assets/RPOAImg234.webp"; // Adjust the import path as necessary
// const services = [
//   {
//     title: "Enterprise RPO",
//     description:
//       "Simplify your recruitment journey with our comprehensive Enterprise Recruitment Process Outsourcing (RPO) solution.",
//     image:
//      enterprise,
//   },
//   {
//     title: "Candidate Sourcing",
//     description:
//       "Access top-tier candidates efficiently and effectively with our targeted Candidate Sourcing services.",
//     image:
//      candidateSourcing,
//   },
//   {
//     title: "Contingent Workforce",
//     description:
//       "Optimize your workforce by seamlessly integrating contingent workers through our Contingent Workforce solutions.",
//     image:
//      contingent,
//   },
//   {
//     title: "Total Talent Solution",
//     description:
//       "Unlock the full potential of your workforce with our Total Talent Solution for holistic talent management.",
//     image:
//      totaltalent,
//   },
//   {
//     title: "Project RPO",
//     description:
//       "Get tailored recruitment support for your specific project needs with our flexible Project RPO services.",
//     image:
//      project,
//   },
//   {
//     title: "On-Demand RPO",
//     description:
//       "Scale your recruitment efforts as needed with our on-demand RPO solution for efficient hiring.",
//     image:
//       ondemandRPO,
//   },
// ];

// const ServicesGrid = () => {
//   const navigate = useNavigate();

//   const handleViewAll = () => {
//     navigate("/view-all-our");
//   };
//   return (
//     <section className="py-12 px-4 md:px-16 bg-white text-center">
//       <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Our Services</h2>
//       <p className="text-gray-600 mb-10">Our Extensive Range of Services</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition duration-300"
//           >
//             <img
//               src={service.image}
//               alt={service.title}
//               className="rounded-md mb-4 w-full h-48 object-cover"
//             />
//             <h3 className="font-semibold text-lg text-gray-900 mb-2">
//               {service.title}
//             </h3>
//             <p className="text-gray-600 text-sm mb-4">{service.description}</p>
//             <a
//               href="#"
//               className="text-blue-600 font-medium hover:underline flex items-center"
//             >
//               View Details <span className="ml-1">→</span>
//             </a>
//           </div>
//         ))}
//       </div>

//       <div className="mt-10">
//         <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800" onClick={handleViewAll}>
//           View All
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ServicesGrid;





import React from "react";
import { useNavigate } from "react-router-dom";
import candidateSourcing from "../assets/960x0.webp";
import ondemandRPO from "../assets/on-demand-rpo.jpg";
import contingent from "../assets/Mastering-Contingent-Workforce-Management.jpeg";
import enterprise from "../assets/1653672289006.png";
import project from "../assets/Artboard 2.webp";
import totaltalent from "../assets/RPOAImg234.webp";

const services = [
  {
    title: "Enterprise RPO",
    description:
      "Simplify your recruitment journey with our comprehensive Enterprise Recruitment Process Outsourcing (RPO) solution.",
    image: enterprise,
    path: "/services/enterprise"
  },
  {
    title: "Candidate Sourcing",
    description:
      "Access top-tier candidates efficiently and effectively with our targeted Candidate Sourcing services.",
    image: candidateSourcing,
    path: "/services/candidate-sourcing"
  },
  {
    title: "Contingent Workforce",
    description:
      "Optimize your workforce by seamlessly integrating contingent workers through our Contingent Workforce solutions.",
    image: contingent,
    path: "/services/contingent-workforce"
  },
  {
    title: "Total Talent Solution",
    description:
      "Unlock the full potential of your workforce with our Total Talent Solution for holistic talent management.",
    image: totaltalent,
    path: "/services/total-talent"
  },
  {
    title: "Project RPO",
    description:
      "Get tailored recruitment support for your specific project needs with our flexible Project RPO services.",
    image: project,
    path: "/services/project-rpo"
  },
  {
    title: "On-Demand RPO",
    description:
      "Scale your recruitment efforts as needed with our on-demand RPO solution for efficient hiring.",
    image: ondemandRPO,
    path: "/services/on-demand-rpo"
  },
];

const ServicesGrid = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/view-all-our");
  };

  const handleViewDetails = (path) => {
    navigate(path);
  };

  return (
    <section className="py-12 px-4 md:px-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
        Our Services
      </h2>
      <p className="text-gray-600 mb-10">Our Extensive Range of Services</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {service.description}
            </p>
            <button
              onClick={() => handleViewDetails(service.path)}
              className="text-blue-600 font-medium hover:underline flex items-center"
            >
              View Details <span className="ml-1">→</span>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800"
          onClick={handleViewAll}
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default ServicesGrid;
