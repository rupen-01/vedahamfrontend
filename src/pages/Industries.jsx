// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// const industries = [
//   {
//     title: 'Banking',
//     image: '../assets/banking.jpg',
//     description: 'At HRBD, we recognise the enormous value of talented workers across many sectors.',
//   },
//   {
//     title: 'Financial Services',
//     image: '../assets/financial-services.jpg',
//     description: 'We empower financial institutions with real-time data insights and predictive analytics...',
//   },
//   {
//     title: 'Healthcare',
//     image: 'https://via.placeholder.com/600x400?text=Healthcare',
//     description: 'We specialise in matching healthcare organisations with people...',
//   },
//   {
//     title: 'Supply Chain',
//     image: 'https://via.placeholder.com/600x400?text=Supply+Chain',
//     description: 'Through GPS tracking, warehouse management systems, and route optimisation software...',
//   },
//   {
//     title: 'Information Technology',
//     image: 'https://via.placeholder.com/600x400?text=Information+Technology',
//     description: 'Welcome to HRBD, where we grasp the transformative influences of IT on businesses...',
//   },
//   {
//     title: 'Insurance',
//     image: 'https://via.placeholder.com/600x400?text=Insurance',
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
import banking from '../assets/image-from-rawpixel-id-867525-original.jpg'; // Adjust the import path as necessary
import financialServices from '../assets/financial-services.jpg'; // Adjust the import path as necessary
import healthcare from '../assets/healthcare.webp'; // Adjust the import path as necessary
import supplyChain from '../assets/Blog-72.jpg'; // Adjust the import path as necessary
import informationTechnology from '../assets/information-technology.jpg'; // Adjust the import path as necessary
import insurance from '../assets/insurance1.jpg'; // Adjust the import path as necessary
import { Link } from 'react-router-dom';

const Industries = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/view-all');
  };

  return (
    <div className="bg-[#f1f5ff] py-10 px-4 md:px-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1d1d4f]">Industries We Serve</h2>
        <p className="text-sm text-gray-600 mt-2">Our Extensive Range of Services and Expertise</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* Banking Card */}
        <div className="bg-white rounded-md overflow-hidden shadow hover:shadow-md transition duration-300">
          <img src={banking} alt="Banking" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-[15px] font-semibold text-[#1d1d4f]">Banking</h3>
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">
              At HRBD, we recognise the enormous value of talented workers across many sectors.
            </p>
            <Link className="text-blue-600 hover:underline text-xs mt-2 block mx-auto" to={"/industries/banking"}>View Details →</Link>
          </div>
        </div>

        {/* Financial Services Card */}
        <div className="bg-white rounded-md overflow-hidden shadow hover:shadow-md transition duration-300">
          <img src={financialServices}alt="Financial Services" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-[15px] font-semibold text-[#1d1d4f]">Financial Services</h3>
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">
              We empower financial institutions with real-time data insights and predictive analytics...
            </p>
            <Link className="text-blue-600 hover:underline text-xs mt-2 block mx-auto" to={"/industries/financial"}>View Details →</Link>
          </div>
        </div>

        {/* Healthcare Card */}
        <div className="bg-white rounded-md overflow-hidden shadow hover:shadow-md transition duration-300">
          <img src={healthcare} alt="Healthcare" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-[15px] font-semibold text-[#1d1d4f]">Healthcare</h3> 
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">        
              We specialise in matching healthcare organisations with people...
            </p>
            <Link className="text-blue-600 hover:underline text-xs mt-2 block mx-auto" to={"/industries/healthcare"}>View Details →</Link>
          </div>
        </div>

        {/* Supply Chain Card */}
        <div className="bg-white rounded-md overflow-hidden shadow hover:shadow-md transition duration-300">
          <img src={supplyChain} alt="Supply Chain" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-[15px] font-semibold text-[#1d1d4f]">Supply Chain</h3>
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">
              Through GPS tracking, warehouse management systems, and route optimisation software...
            </p>
            <Link className="text-blue-600 hover:underline text-xs mt-2 block mx-auto" to={"/industries/supply-chain"}>View Details →</Link>
          </div>
        </div>

        {/* Information Technology Card */}
        <div className="bg-white rounded-md overflow-hidden shadow hover:shadow-md transition duration-300">
          <img src={informationTechnology} alt="Information Technology" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-[15px] font-semibold text-[#1d1d4f]">Information Technology</h3>
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">
              Welcome to HRBD, where we grasp the transformative influences of IT on businesses...
            </p>
            <Link className="text-blue-600 hover:underline text-xs mt-2 block mx-auto" to={"/industries/it"}>View Details →</Link>
          </div>
        </div>

        {/* Insurance Card */}
        <div className="bg-white rounded-md overflow-hidden shadow hover:shadow-md transition duration-300">
          <img src={insurance} alt="Insurance" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-[15px] font-semibold text-[#1d1d4f]">Insurance</h3>
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">
              We facilitate enhanced customer engagement through online portals...
            </p>
            <Link className="text-blue-600 hover:underline text-xs mt-2 block mx-auto" to={"/industries/insurance"}>View Details →</Link>
          </div>
        </div>

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
