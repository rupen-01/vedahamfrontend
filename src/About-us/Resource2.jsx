import React from "react";

export default function ContactCTA() {
  return (
    <div className="bg-gray-100 py-16 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Have Questions?
      </h2>
      <p className="text-gray-700 mb-6 text-lg">
        Let us know how we can help you.
      </p>
      <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-2 rounded transition duration-200">
        Contact US
      </button>
    </div>
  );
}
