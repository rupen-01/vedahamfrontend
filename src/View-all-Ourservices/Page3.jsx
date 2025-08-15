// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import banking from '../assets/image-from-rawpixel-id-867525-original.jpg'; // Adjust the import path as necessary
// import financialServices from '../assets/financial-services.jpg'; // Adjust the import path as necessary
// import healthcare from '../assets/healthcare.webp'; // Adjust the import path as necessary
// import supplyChain from '../assets/Blog-72.jpg'; // Adjust the import path as necessary
// import informationTechnology from '../assets/information-technology.jpg'; // Adjust the import path as necessary
// import insurance from '../assets/insurance1.jpg'; // Adjust the import path as necessary
// import logistics from '../assets/desktop-image-1920x918.jpeg'; // Adjust the import path as necessary
// import travelAndHospitality from '../assets/Traveler.jpg'; // Adjust the import path as necessary
// import manufacturing from '../assets/capa-22-scaled.webp'; // Adjust the import path as necessary

// const industries = [
//   {
//     title: 'Banking',
//     image:banking,
//     description: 'At HRBD, we recognise the enormous value of talented workers across many sectors.',
//   },
//   {
//     title: 'Financial Services',
//     image: financialServices,
//     description: 'We empower financial institutions with real-time data insights and predictive analytics...',
//   },
//   {
//     title: 'Healthcare',
//     image: healthcare,
//     description: 'We specialise in matching healthcare organisations with people...',
//   },
//   {
//     title: 'Supply Chain',
//     image: supplyChain,
//     description: 'Through GPS tracking, warehouse management systems, and route optimisation software...',
//   },
//   {
//     title: 'Information Technology',
//     image: informationTechnology,
//     description: 'Welcome to HRBD, where we grasp the transformative influences of IT on businesses...',
//   },
//   {
//     title: 'Insurance',
//     image: insurance,
//     description: 'We facilitate enhanced customer engagement through online portals...',
//   },
//   {
//     title: 'Logistics',
//     image: logistics,
//     description: 'Through GPS tracking, warehouse management systems, and route optimisation software...',
//   },
//   {
//     title: 'Travel and Hospitality',
//     image: travelAndHospitality,
//     description: 'Welcome to HRBD, where we grasp the transformative influences of IT on businesses...',
//   },
//   {
//     title: 'Manufacturing',
//     image:manufacturing,
//     description: 'We facilitate enhanced customer engagement through online portals...',
//   },
// ];

// const Industries = () => {
//   const navigate = useNavigate();

//   const handleViewAll = () => {
//     navigate('/view-all');
//   };
//   return (
//     <div className="bg-[#f1f5ff] py-10 px-4 md:px-12">
//       <div className="text-center mb-10">
//         <h2 className="text-2xl md:text-4xl font-bold text-[#1d1d4f]">Industries We Serve</h2>
//         <p className="text-sm text-gray-600 mt-2">Our Extensive Range of Services and Expertise</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//         {industries.map((item, index) => (
//           <div key={index} className="bg-white rounded-md overflow-hidden shadow hover:shadow-md transition duration-300">
//             <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
//             <div className="p-4 text-center">
//               <h3 className="text-[15px] font-semibold text-[#1d1d4f]">{item.title}</h3>
//               <p className="text-xs text-gray-600 mt-1 line-clamp-2">{item.description}</p>
//               <button className="text-blue-600 hover:underline text-xs mt-2 block mx-auto">
//                 View Details →
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-10">
//         <button className="bg-[#1d1d4f] text-white px-5 py-2 text-sm rounded hover:bg-[#151542] transition" onClick={handleViewAll}>
//           View All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Industries;










import React from 'react';
import { useNavigate } from 'react-router-dom';
import banking from '../assets/image-from-rawpixel-id-867525-original.jpg';
import financialServices from '../assets/financial-services.jpg';
import healthcare from '../assets/healthcare.webp';
import supplyChain from '../assets/Blog-72.jpg';
import informationTechnology from '../assets/information-technology.jpg';
import insurance from '../assets/insurance1.jpg';
import logistics from '../assets/desktop-image-1920x918.jpeg';
import travelAndHospitality from '../assets/Traveler.jpg';
import manufacturing from '../assets/capa-22-scaled.webp';

const industries = [
  {
    title: 'Banking',
    image: banking,
    description: 'At HRBD, we recognise the enormous value of talented workers across many sectors.',
    path: '/industries/banking'
  },
  {
    title: 'Financial Services',
    image: financialServices,
    description: 'We empower financial institutions with real-time data insights and predictive analytics...',
    path: '/industries/financial'
  },
  {
    title: 'Healthcare',
    image: healthcare,
    description: 'We specialise in matching healthcare organisations with people...',
    path: '/industries/healthcare'
  },
  {
    title: 'Supply Chain',
    image: supplyChain,
    description: 'Through GPS tracking, warehouse management systems, and route optimisation software...',
    path: '/industries/supply-chain'
  },
  {
    title: 'Information Technology',
    image: informationTechnology,
    description: 'Welcome to HRBD, where we grasp the transformative influences of IT on businesses...',
    path: '/industries/it'
  },
  {
    title: 'Insurance',
    image: insurance,
    description: 'We facilitate enhanced customer engagement through online portals...',
    path: '/industries/insurance'
  },
  {
    title: 'Logistics',
    image: logistics,
    description: 'Through GPS tracking, warehouse management systems, and route optimisation software...',
    path: '/industries/logistics'
  },
  {
    title: 'Travel and Hospitality',
    image: travelAndHospitality,
    description: 'Welcome to HRBD, where we grasp the transformative influences of IT on businesses...',
    path: '/industries/travel-hospitality'
  },
  {
    title: 'Manufacturing',
    image: manufacturing,
    description: 'We facilitate enhanced customer engagement through online portals...',
    path: '/industries/manufacturing'
  },
];

const Industries = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/view-all');
  };

  const handleViewDetails = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-[#f1f5ff] py-10 px-4 md:px-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1d1d4f]">Industries We Serve</h2>
        <p className="text-sm text-gray-600 mt-2">Our Extensive Range of Services and Expertise</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {industries.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-md overflow-hidden shadow hover:shadow-md transition duration-300"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => handleViewDetails(item.path)}
            />
            <div className="p-4 text-center">
              <h3 
                className="text-[15px] font-semibold text-[#1d1d4f] cursor-pointer"
                onClick={() => handleViewDetails(item.path)}
              >
                {item.title}
              </h3>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">{item.description}</p>
              <button
                onClick={() => handleViewDetails(item.path)}
                className="text-blue-600 hover:underline text-xs mt-2 block mx-auto"
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button 
          className="bg-[#1d1d4f] text-white px-5 py-2 text-sm rounded hover:bg-[#151542] transition" 
          onClick={handleViewAll}
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Industries;
