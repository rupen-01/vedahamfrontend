import React from "react";

const EnterpriseCTA = () => {
  return (
    <section className="relative bg-white py-12 px-4 text-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Equirectangular_projection_SW.jpg/1280px-Equirectangular_projection_SW.jpg')",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
          Is An Banking Solution Right For You?
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          We would love to answer your questions and show you how your
          organization will benefit from an Enterprise solution.
          <br />
          Start by selecting your region to speak with one of our talent experts
          or complete the form below.
        </p>
      </div>
    </section>
  );
};

export default EnterpriseCTA;
