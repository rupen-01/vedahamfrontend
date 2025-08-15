import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import candidateSourcing from "../assets/960x0.webp"; // Adjust the import path as necessary
import ondemandRPO from "../assets/on-demand-rpo.jpg"; // Adjust the import path as necessary
import hrSolutions from "../assets/hr-solutions-services.png"; // Adjust the import path as necessary
import enterprise from "../assets/1653672289006.png"; // Adjust the import path as necessary

const services = [
  { title: "On-Demand RPO", image: ondemandRPO },
  { title: "HR solutions", image: hrSolutions  },
  { title: "enterprise", image: enterprise },
  { title: "Candidate Sourcing", image: candidateSourcing },

];

export default function CarouselSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Make Your Hiring And Recruiting Process Easy With HIRD!
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Accelerating Hiring: Streamlining the Recruitment Process for Faster Results
        </p>

        <div className="mt-12">
          <Swiper
            modules={[FreeMode, Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={1000}
            freeMode={false} 
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-lg overflow-hidden shadow-md text-center bg-white">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="py-4">
                    <span className="inline-block bg-white px-4 py-2 text-md font-semibold text-gray-900 shadow-sm rounded-md">
                      {service.title}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}



// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import { FreeMode, Autoplay } from "swiper/modules";

// const services = [
//   {
//     title: "Total Talent Solution",
//     image:
//       "https://www.shutterstock.com/image-photo/portrait-excited-happy-man-pointing-260nw-534216460.jpg",
//   },
//   {
//     title: "Project",
//     image:
//       "https://www.shutterstock.com/image-photo/portrait-excited-happy-man-pointing-260nw-534216460.jpg",
//   },
//   {
//     title: "On-Demand RPO",
//     image:
//       "https://www.shutterstock.com/image-photo/portrait-excited-happy-man-pointing-260nw-534216460.jpg",
//   },
//  {
//     title: "Total Talent Solution",
//     image:
//       "https://www.shutterstock.com/image-photo/portrait-excited-happy-man-pointing-260nw-534216460.jpg",
//   },
//   {
//     title: "Project",
//     image:
//       "https://www.shutterstock.com/image-photo/portrait-excited-happy-man-pointing-260nw-534216460.jpg",
//   },
//   {
//     title: "On-Demand RPO",
//     image:
//       "https://www.shutterstock.com/image-photo/portrait-excited-happy-man-pointing-260nw-534216460.jpg",
//   },
  
//   {
//     title: "Total Talent Solution",
//     image:
//       "https://www.shutterstock.com/image-photo/portrait-excited-happy-man-pointing-260nw-534216460.jpg",
//   },
//   {
//     title: "Project",
//     image:
//       "https://www.shutterstock.com/image-photo/portrait-excited-happy-man-pointing-260nw-534216460.jpg",
//   },
//   {
//     title: "On-Demand RPO",
//     image:
//       "https://www.shutterstock.com/image-photo/portrait-excited-happy-man-pointing-260nw-534216460.jpg",
//   },
// ];

// export default function HiringIntro() {
//   return (
//     <div className="bg-gray-100 px-6 py-16 md:px-20">
//       <div className="flex flex-col md:flex-row md:items-center">
//         {/* Left "H" visual */}
//         <div className="hidden md:block w-40 text-blue-900 text-[22rem] font-bold leading-none mt-10">
//           H
//         </div>

//         {/* Right content */}
//         <div className="md:ml-12 flex-1 text-center md:text-left ">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
//             Make Your Hiring And Recruiting Process Easy With HIRD!
//           </h2>
//           <p className="text-gray-800 text-lg mb-10">
//             Accelerating Hiring: Streamlining the Recruitment Process for Faster Results
//           </p>

//           {/* Auto-scrolling Swiper */}
//           <Swiper
//             modules={[FreeMode, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1.5}
//             freeMode={true}
//             loop={true}
//             autoplay={{ delay: 2000, disableOnInteraction: false }}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               768: { slidesPerView: 3 },
//               1024: { slidesPerView: 4 },
//             }}
//             className="w-full"
//           >
//             {services.map((service, index) => (
//               <SwiperSlide key={index} className="flex justify-center m-15 z-10">
//                 <div className="relative">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-40 h-40 md:w-44 md:h-44 object-cover rounded-bl-[3rem]"
//                   />
//                   <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white shadow-md px-4 py-1 rounded text-black font-bold text-sm">
//                     {service.title}
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }
