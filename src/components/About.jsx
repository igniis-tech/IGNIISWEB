import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutUsSection = () => {
  const [stats, setStats] = useState([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    const data = [
      {
        title: 'Expert Team',
        value: '3K+',
        description: 'Complete Projects',
        bg: 'bg-blue-900',
      },
      {
        title: 'Branches',
        value: '25+',
        description: 'Company Sectors',
        bg: 'bg-red-500',
      },
      {
        title: 'Happy Clients',
        value: '10K+',
        description: 'Satisfied Members',
        bg: 'bg-green-600',
      },
    ];
    setStats(data);
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-12 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* Left Image and Stats (Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative w-full hidden md:block"
        >
          <div className="h-150 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/About/Rectangle 19359.png"
              alt="Team Meeting"
              className="rounded-3xl object-cover h-full w-full"
            />
          </div>

          {/* Overlay Stats */}
          <div className="absolute -bottom-8 left-2/2 transform -translate-x-1/2 flex gap-4">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className={`${item.bg} text-white px-4 py-3 rounded-lg w-36 text-center shadow-lg`}
              >
                <p className="text-xs uppercase mb-1">{item.title}</p>
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full"
        >
          {/* Decorative Shape */}
          <img
            src="/About/shape-05 1.png"
            alt="Decorative Shape"
            className="absolute top-0 right-0 w-14 md:w-20 h-auto z-10"
          />

      
          <p className="text-blue-700 font-semibold uppercase tracking-wide mb-2 flex items-center">
            <span className="inline-block w-6 h-1 bg-blue-700 mr-2"></span>
            Who We Are
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            We are a team of <br className="hidden md:block" />
            certified fitness professionals committed to helping you reach your full potential.
          </h2>

          <p className="text-gray-600 mb-6">
            Our gym is equipped with modern facilities and a motivating environment tailored for all fitness levels — from beginners to athletes.
          </p>

          {/* Mobile Image */}
          <div className="block md:hidden rounded-2xl overflow-hidden shadow-md mb-6">
            <img
              src="/About/Rectangle 19359.png"
              alt="Team Meeting"
              className="w-full h-[250px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Feature List */}
          <ul className="list-disc ml-5 text-gray-800 mb-6 space-y-2">
            <li>Advanced Innovative Agency</li>
            <li>Creative Design & Branding</li>
            <li>Web Development Services</li>
          </ul>

          {/* Stats for Mobile */}
          <div className="flex flex-wrap gap-4 mt-4 md:hidden">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className={`${item.bg} text-white px-4 py-3 rounded-lg w-[48%] text-center shadow-md`}
              >
                <p className="text-xs uppercase mb-1">{item.title}</p>
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
