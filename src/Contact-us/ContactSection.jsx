import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const ContactSection = () => {
  const contactItems = [
    {
      icon: <MdEmail size={30} className="text-blue-900" />,
      title: "Email Us",
      value: "hello@thehird.com",
    },
    {
      icon: <MdPhone size={30} className="text-blue-900" />,
      title: "Call Us",
      value: "+1 307 271 0777",
    },
    {
      icon: <MdLocationOn size={30} className="text-blue-900" />,
      title: "Head Office",
      value: "Coffeen Avenue, ST1200, Sheridan, Wyoming 82801",
    },
  ];

  return (
    <div className="bg-[#0B469B] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {contactItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="bg-white rounded-lg p-4 shadow-md">
              {item.icon}
            </div>
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p className="text-sm">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
