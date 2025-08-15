// import React from "react";

// export default function EnterpriseRPO() {
//   return (
//     <div className="w-full min-h-screen bg-white p-6 md:p-12 flex flex-col lg:flex-row items-center justify-between">
//       {/* Text Section */}
//       <div className="w-full lg:w-1/2 pr-0 lg:pr-10">
//         <h2 className="text-2xl font-bold text-black mb-4">Enterprise RPO</h2>
//         <div className="h-1 w-48 bg-gradient-to-r from-orange-400 to-white rounded mb-6" />
//         <p className="text-gray-700 mb-4">
//           Simplify your recruitment journey with our comprehensive Enterprise Recruitment Process Outsourcing (RPO) solution. HIRD’s Enterprise RPO offers a complete end-to-end talent acquisition experience. We handle every step of the recruitment process, except for the final hiring decision – that’s your call!
//         </p>
//         <p className="text-gray-700">
//           Our all-inclusive talent acquisition management program starts from the workforce planning phase and involves seamless collaboration with key business stakeholders. We ensure a clear understanding and prioritization of your hiring needs, from the moment a requisition is opened to the successful onboarding of new hires.
//         </p>
//       </div>

//       {/* Image Section */}
//       <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
//         <div className="bg-blue-900 rounded-tr-[80px] rounded-bl-[80px] p-4 lg:p-8">
//           <img
//             src="https://media.istockphoto.com/id/1388062547/photo/business-meeting.jpg?s=612x612&w=0&k=20&c=I0FLNm8MDLgfZRszD7pvEYCM1otVNgmeWs8qAPRmzqQ="
//             alt="Team Meeting"
//             className="w-full h-auto rounded shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }






import React from "react";
import enterprise from "../assets/1653672289006.png";

const Page1 = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white mt-15">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
       ENTERPRISE
          </h2>

          {/* Red-orange curve */}
          <div className="w-36 md:w-60 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500 mb-6"></div>

          <p className="text-gray-800 mb-4 leading-relaxed">
            Access top-tier candidates efficiently and effectively with our
            targeted Candidate Sourcing services.
          </p>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Targeted Candidate Sourcing services are essential for
            organizations looking to access top-tier talent efficiently and
            effectively.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Accessing top-tier candidates is crucial for the success of your
            organization. Our targeted Candidate Sourcing services employ
            advanced methods to identify and attract the best talent in the
            market. Our team utilizes cutting-edge tools and techniques to
            connect you with the right candidates efficiently and effectively.
          </p>
        </div>

        {/* Image with angled background */}
       <div className="relative w-full h-full flex justify-center items-center">
  {/* Angled blue background */}
  <div className="absolute top-0 left-0 w-full h-full bg-blue-900 transform rotate-3 rounded-xl shadow-lg z-0"></div>

  {/* Foreground Image */}
  <img
    src={enterprise}
    alt="Candidate Sourcing"
    className="relative z-10 w-100 h-90 object-contain rounded-md shadow-md"
  />
</div>

      </div>
    </section>
  );
};

export default Page1;
