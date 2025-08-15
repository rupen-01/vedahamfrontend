// import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { FaChevronDown } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const handleDropdown = (item) => {
//     setOpenDropdown(openDropdown === item ? null : item);
//   };

//   const dropdownItems = {
//     Services: ["Enterprise","Candidate Sourcing","Contingent Workforce", "Total Talent Solution", "Project PRO", "on-demand PRO", "HR Solutions", "Hiring Events"],
//     Industries: ["Banking","Financial Services","BPO","ITES", "Healthcare","Manufacturing","Logistics", "Supply Chain", "Information Teachnology", "Insurance", "Travel And Hospitality"],
//     Regions: ["United States", "Canada", "Philippines", "UAE", "India"],
//     "About Us": ["About Us", "Resource"]
//   };

//   const navItems = [
//     { name: "Home" },
//     { name: "Services", dropdown: true },
//     { name: "Industries", dropdown: true },
//     { name: "Regions", dropdown: true },
//     { name: "Career" },
//     { name: "Contact Us" },
//     { name: "About Us", dropdown: true },
//     { name: "Blog" }
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//       <div className="flex justify-between items-center px-6 md:px-12 py-4">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img src="/logo.png" alt="Logo" className="h-10" />
//           <span className="text-xs text-gray-600">Innovating Businesses</span>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-800 relative">
//           {navItems.map((item, idx) => (
//             <li
//               key={idx}
//               className="relative group cursor-pointer hover:text-blue-600"
//               onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
//               onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
//             >
//               <div className="flex items-center gap-1">
//                 {item.name}
//                 {item.dropdown && <FaChevronDown className="text-xs" />}
//               </div>
//               {/* Dropdown */}
//               {item.dropdown && openDropdown === item.name && (
//                 <ul className="absolute top-full left-0 w-48 bg-white shadow-md rounded mt-2 z-50">
//                   {dropdownItems[item.name].map((option, i) => (
//                     <li key={i} className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
//                       {option}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-800">
//             {menuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <ul className="md:hidden flex flex-col bg-white px-6 pb-4 space-y-3 text-sm font-medium text-gray-800 shadow-md">
//           {navItems.map((item, idx) => (
//             <li key={idx}>
//               <div
//                 className="flex justify-between items-center cursor-pointer border-b pb-2"
//                 onClick={() => item.dropdown ? handleDropdown(item.name) : null}
//               >
//                 <span>{item.name}</span>
//                 {item.dropdown && <FaChevronDown className="text-xs" />}
//               </div>
//               {/* Mobile Dropdown Items */}
//               {item.dropdown && openDropdown === item.name && (
//                 <ul className="pl-4 mt-2 space-y-1 text-gray-600">
//                   {dropdownItems[item.name].map((option, i) => (
//                     <li key={i} className="py-1 border-b border-gray-100">
//                       {option}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Green_And_Yellow_Modern_Company_Logo.pdf_20250729_164632_0000-removebg-preview.png"; // Adjust the import path as necessary

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const dropdownItems = {
    Services: [
      { label: "Enterprise", path: "/services/enterprise" },
      { label: "Candidate Sourcing", path: "/services/candidate-sourcing" },
      { label: "Contingent Workforce", path: "/services/contingent-workforce" },
      { label: "Total Talent Solution", path: "/services/total-talent" },
      { label: "Project PRO", path: "/services/project-rpo" },
      { label: "on-demand PRO", path: "/services/on-demand-rpo" },
      { label: "HR Solutions", path: "/services/hr-solutions" },
      { label: "Hiring Events", path: "/services/hiring-events" },
    ],
    Industries: [
      { label: "Banking", path: "/industries/banking" },
      { label: "Financial Services", path: "/industries/financial" },
      { label: "BPO", path: "/industries/bpo" },
      { label: "ITES", path: "/industries/ites" },
      { label: "Healthcare", path: "/industries/healthcare" },
      { label: "Manufacturing", path: "/industries/manufacturing" },
      { label: "Logistics", path: "/industries/logistics" },
      { label: "Supply Chain", path: "/industries/supply-chain" },
      { label: "Information Teachnology", path: "/industries/it" },
      { label: "Insurance", path: "/industries/insurance" },
      { label: "Travel And Hospitality", path: "/industries/travel-hospitality" },
    ],
    Regions: [
      { label: "United States", path: "/regions/us" },
      { label: "Canada", path: "/regions/canada" },
      { label: "Philippines", path: "/regions/philippines" },
      { label: "UAE", path: "/regions/uae" },
      { label: "India", path: "/regions/india" },
    ],
    "About Us": [
      { label: "About Us", path: "/about" },
      { label: "Resource", path: "/resources" },
    ],
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", dropdown: true },
    { name: "Industries", dropdown: true },
    { name: "Regions", dropdown: true },
    { name: "Career", path: "/career" },
    { name: "Contact Us", path: "/contact" },
    { name: "About Us", dropdown: true },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-xs text-gray-600">Innovating Businesses</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-800 relative">
          {navItems.map((item, idx) => (
          <li
  key={idx}
  className="relative group cursor-pointer hover:text-blue-600"
  onMouseEnter={() => setOpenDropdown(item.name)}
>


              {!item.dropdown ? (
                <Link to={item.path || "#"}>{item.name}</Link>
              ) : (
                <div className="flex items-center gap-1">
                  {item.name}
                  <FaChevronDown className="text-xs" />
                </div>
              )}

              {item.dropdown && openDropdown === item.name && (
                <ul className="absolute top-full left-0 w-48 bg-white shadow-md rounded mt-2 z-50">
                  {dropdownItems[item.name].map((option, i) => (
                    <li key={i}>
                     <Link
  to={option.path}
  onClick={() => setOpenDropdown(null)}
  className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
>
  {option.label}
</Link>

                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-800">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-white px-6 pb-4 space-y-3 text-sm font-medium text-gray-800 shadow-md">
          {navItems.map((item, idx) => (
            <li key={idx}>
              {!item.dropdown ? (
                <Link to={item.path || "#"} className="block border-b py-2">
                  {item.name}
                </Link>
              ) : (
                <>
                  <div
                    className="flex justify-between items-center cursor-pointer border-b pb-2"
                    onClick={() => handleDropdown(item.name)}
                  >
                    <span>{item.name}</span>
                    <FaChevronDown className="text-xs" />
                  </div>
                  {openDropdown === item.name && (
                    <ul className="pl-4 mt-2 space-y-1 text-gray-600">
                      {dropdownItems[item.name].map((option, i) => (
                        <li key={i}>
                          <Link
                            to={option.path}
                            className="block py-1 border-b border-gray-100"
                          >
                            {option.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;