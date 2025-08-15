import React from "react";

const Page1 = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-16 flex flex-col mt-20 lg:flex-row items-center justify-between gap-8">
      {/* Text Content */}
      <div className="flex-1 z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
       INDIA
        </h2>
        <div className="w-24 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-6"></div>
        <p className="text-sm md:text-base text-gray-800 mb-4">
          Hird understands the crucial role top candidates play in shaping their careers within the
          current US job market. These individuals often wield the power to select and progress to
          the next stage.
        </p>
        <p className="text-sm md:text-base text-gray-800 mb-6">
          Hird’s talented recruitment specialists is there to help, whether the situation calls for
          finding specialized personnel for pressing projects, planning significant recruiting after
          acquisition, or adjusting recruitment tactics to reflect changes in the market. Our team
          is well-equipped to devise a recruitment strategy that aligns with the unique
          characteristics of your business and adeptly adjusts to your ever-evolving needs,
          fostering a mutually beneficial relationship between clients and the company.
        </p>
        <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
          Hire a Talent
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 relative w-full max-w-xl">
        {/* Background Layer */}
        <div className="hidden lg:block absolute top-4 left-4 w-full h-full bg-blue-900 -z-10 rounded"></div>

        {/* Image */}
        <img
          src="https://media.istockphoto.com/id/1388062547/photo/business-meeting.jpg?s=612x612&w=0&k=20&c=I0FLNm8MDLgfZRszD7pvEYCM1otVNgmeWs8qAPRmzqQ=" // <-- replace with your image path
          alt="Team working"
          className="w-full h-auto object-cover rounded shadow-lg"
        />
      </div>
    </section>
  );
};

export default Page1;
