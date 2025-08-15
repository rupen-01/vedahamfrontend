// import React from 'react';
// import candidateSourcing from "../assets/960x0.webp"; // Adjust the import path as necessary
// import ondemandRPO from "../assets/on-demand-rpo.jpg"; // Adjust the import path as necessary
// import hrSolutions from "../assets/hr-solutions-services.png"; // Adjust the import path as necessary
// import enterprise from "../assets/1653672289006.png"; // Adjust the import path as necessary
// import project from "../assets/Artboard 2.webp"; // Adjust the import path as necessary
// import totaltalent from "../assets/RPOAImg234.webp"; // Adjust the import path as necessary
// const rpoData = [
//   {
//     title: 'Enterprise RPO',
//     image: enterprise,
//   },
//   {
//     title: 'Project RPO',
//     image: project,
//   },
//   {
//     title: 'On-Demand RPO',
//     image: ondemandRPO,
//   },
//    {
//     title: 'Total Talent RPO',
//     image: totaltalent,
//   },
//   {
//     title: 'Candidate Sourcing',
//     image: candidateSourcing,
//   },
//   {
//     title: 'hr Solutions',
//     image: hrSolutions,
//   },
// ];

// export default function RPOSection() {
//   return (
//     <div className="py-10 px-4 md:px-16 bg-white">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           Nimble Solutions, Deep Industry Expertise
//         </h2>
//         <p className="text-sm md:text-base text-gray-600 mt-4">
//           From the right players in the right markets, to the right strategy at the right time,
//           will help you dominate the talent game in your industry
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {rpoData.map((item, index) => (
//           <div key={index} className="relative rounded overflow-hidden shadow-md group">
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="absolute bottom-4 left-4 bg-white text-black text-lg font-bold shadow px-4 py-2 rounded">
//               {item.title}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }








import React from "react";
import { useNavigate } from "react-router-dom";
import candidateSourcing from "../assets/960x0.webp";
import ondemandRPO from "../assets/on-demand-rpo.jpg";
import hrSolutions from "../assets/hr-solutions-services.png";
import enterprise from "../assets/1653672289006.png";
import project from "../assets/Artboard 2.webp";
import totaltalent from "../assets/RPOAImg234.webp";

const rpoData = [
  {
    title: "Enterprise RPO",
    image: enterprise,
    path: "/services/enterprise",
  },
  {
    title: "Project RPO",
    image: project,
    path: "/services/project-rpo",
  },
  {
    title: "On-Demand RPO",
    image: ondemandRPO,
    path: "/services/on-demand-rpo",
  },
  {
    title: "Total Talent RPO",
    image: totaltalent,
    path: "/services/on-demand-rpo",
  },
  {
    title: "Candidate Sourcing",
    image: candidateSourcing,
    path: "/services/candidate-sourcing",
  },
  {
    title: "HR Solutions",
    image: hrSolutions,
    path: "/services/hr-solutions",
  },
];

export default function RPOSection() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="py-10 px-4 md:px-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Nimble Solutions, Deep Industry Expertise
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-4">
          From the right players in the right markets, to the right strategy at the right time,
          will help you dominate the talent game in your industry
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rpoData.map((item, index) => (
          <div
            key={index}
            className="relative rounded overflow-hidden shadow-md group cursor-pointer"
            onClick={() => handleClick(item.path)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-white text-black text-lg font-bold shadow px-4 py-2 rounded">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
