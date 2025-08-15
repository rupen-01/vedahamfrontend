import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import bajaj from "../assets/Bajaj-Allianz-Insurance-Logo-e1500914200739.avif"; // Adjust the import path as necessary
import axix from "../assets/axix.png"; // Adjust the import path as necessary
import canera from "../assets/Canara_HSBC_Life_Insurance_Wikipedia_Logo.jpg"; // Adjust the import path as necessary
import efl from "../assets/efl.png"; // Adjust the import path as necessary
import extip from "../assets/exatip_technologies_logo.jpeg"; // Adjust the import path as necessary
import hdfc from "../assets/hdfc.png"; // Adjust the import path as necessary
import hgs from "../assets/HGS_Digital_Logo.jpg"; // Adjust the import path as necessary
import ipro from "../assets/ipro.jpeg"; // Adjust the import path as necessary
import kotak from "../assets/kotak.jpg"; // Adjust the import path as necessary
import care from "../assets/Care Health Insurance.jpg"; // Adjust the import path as necessary
import max from "../assets/Max_Life_Insurance_logo.svg.png"; // Adjust the import path as necessary
import wip from "../assets/wipro.jpg"; // Adjust the import path as necessary
import task from "../assets/task.jpg"; // Adjust the import path as necessary
import sbi from "../assets/89.sbi-life.jpg"; // Adjust the import path as necessary

const logos = [
  bajaj,
  axix,
 canera,
 efl,
 extip,
 hdfc,
  hgs,
  ipro,
  kotak,
  care,
  max,
  wip,
  task,
  sbi,
];

const ClientSlider = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <Swiper
        modules={[FreeMode, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.5}
        freeMode={true}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="w-full"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white shadow-md rounded-md p-4 w-36 h-24 flex items-center justify-center">
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientSlider;
