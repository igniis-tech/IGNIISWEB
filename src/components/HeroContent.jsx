import React from 'react';
import { BsDashLg } from 'react-icons/bs';
import { motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <div className="relative bg-transparent text-white px-6 md:px-16 py-16 overflow-hidden">
      
        {/* Decorative dash and quote */}
        <div className="flex items-center gap-2 mb-2 text-sm md:text-base text-white">
          <BsDashLg className="text-lg" />
          <p className="border-l-4 border-white pl-3">
            "Transform Your Body, Elevate Your Mind"
          </p>
        </div>
      <motion>
      <div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative max-w-3xl mx-auto flex flex-col items-start gap-6 text-center md:text-left"
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-5xl text-start font-extrabold leading-tight">
          We provide creative solutions to turn your ideas into digital reality.
        </h1>
        </div>
        </motion>

      <motion>
      <div
        initial={{ opacity: -20, x: -70 }}
        animate={{ opacity: 10, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative max-w-3xl mx-auto flex flex-col items-start gap-6 text-center md:text-left"
      >
        {/* Subtext */}
        <p className="text-base mt-5 sm:text-lg md:text-xl text-white/90 max-w-xl">
          Join our community of fitness enthusiasts and achieve your health goals with expert guidance, state-of-the-art equipment, and personalized workout plans.
        </p>
        </div>
</motion>
        {/* CTA Button */}
        <motion>
        <button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 3 }}
          className="bg-white cursor-pointer text-blue-800 mt-3 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition-all duration-300"
        >
          Learn More
          </button>
        </motion>
      
    </div>
  );
};

export default HeroContent;
