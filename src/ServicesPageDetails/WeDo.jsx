import React from "react";

import {
  FaPaintBrush,
  FaCode,
  FaBullhorn,
  FaMobileAlt,
  FaDraftingCompass,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    title: "Personal Training",
    icon: <FaPaintBrush size={24} />,
  },
  {
    title: "Group Fitness Classes",
    icon: <FaCode size={24} />,
  },
  {
    title: "Nutrition Guidance",
    icon: <FaBullhorn size={24} />,
  },
  {
    title: " Recovery & Wellness",
    icon: <FaMobileAlt size={24} />,
  },
  {
    title: "Mind & Body Programs",
    icon: <FaDraftingCompass size={24} />,
  },
  {
    title: "Body building",
    icon: <FaChartLine size={24} />,
  },
];

const WeDo = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-20 bg-white text-center">
      <p className="text-blue-600 font-medium text-sm mb-2">What We Do?</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        PUSH YOUR LIMITS FORWARD
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-6 relative group hover:shadow-xl transition-shadow duration-300"
          >
            {/* Top Left Ribbon Icon */}
            <div className="absolute -top-3 left-4 bg-indigo-700 text-white p-2 rounded-b-md shadow-md">
              {service.icon}
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-3">{service.title}</h3>
            <p className="text-sm text-gray-600">
              Get responsive website designs with user friendly interface for any type of business.
            </p>

            {/* Decorative background dot */}
            <div className="absolute top-4 right-4 w-6 h-6 border-4 border-dotted border-gray-300 rounded-full animate-spin-slow" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeDo;
