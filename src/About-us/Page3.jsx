import React from "react";

const historyData = [
  {
    year: "2020",
    description: "Operations commenced in India.",
    position: "top",
  },
  {
    year: "2021",
    description: "Expanded to India and the US.",
    position: "bottom",
  },
  {
    year: "2022",
    description: "Operating across India, US, Canada, UAE, and the Philippines.",
    position: "top",
  },
  {
    year: "2023",
    description: "Expanding",
    position: "bottom",
  },
];

const OurHistory = () => {
  return (
    <section className="w-full py-16 px-4 md:px-16">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#001652] mb-16">
        Our History
      </h2>

      <div className="relative w-full border-t border-blue-400 flex justify-between items-center mt-40">
        {historyData.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center w-1/4 text-center"
          >
            {/* Circle on the line */}
            <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10" />

            {/* Box above or below */}
            <div
              className={`absolute w-64 bg-blue-100 p-4 rounded-md shadow-md text-sm ${
                item.position === "top"
                  ? "-top-32"
                  : "top-6"
              }`}
            >
              <p className="text-gray-800 mb-2">{item.description}</p>
              <span className="text-blue-600 text-xs font-semibold">
                {item.year}
              </span>

              {/* Small triangle pointer */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent ${
                  item.position === "top"
                    ? "border-b-8 border-b-blue-100 top-full"
                    : "border-t-8 border-t-blue-100 -top-2"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurHistory;
