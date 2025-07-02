import React from 'react';
import { FaBrain, FaChartLine } from 'react-icons/fa';
import { GiBiceps } from 'react-icons/gi';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Nutrition Plans',
    description: 'One-on-one sessions customized for your goals.',
    icon: <FaBrain className="text-purple-500 text-4xl mb-4" />,
  },
  {
    title: 'Strength Training',
    description: 'Build power and endurance with our expert-led routines.',
    icon: <GiBiceps className="text-green-500 text-4xl mb-4" />,
  },
  {
    title: 'Personal Training',
    description: 'Get diet advice and meal plans from certified experts.',
    icon: <FaChartLine className="text-pink-500 text-4xl mb-4" />,
  },
];

const Services = () => {
  return (
    <section className="bg-gray-300 py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <p className="text-blue-700 text-sm font-semibold uppercase tracking-wide mb-2">Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Training Programs
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Unlock your full potential with our personalized fitness programs designed to help you thrive.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 3, x: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="bg-blue-50 hover:bg-white hover:shadow-md transition duration-300 rounded-2xl p-6 text-left"
            >
            <a href='#' className='cursor-pointer flex flex-col hover:transform-3d hover:scale-105 transition-transform duration-300'>
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
