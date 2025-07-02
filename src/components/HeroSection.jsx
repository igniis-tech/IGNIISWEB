import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <div className="relative bg-[#0E2E79] text-white px-6 md:px-16 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-sm md:text-base border-l-4 border-white pl-4 mb-3">
            "Transform Your Body, Elevate Your Mind"
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            We provide creative solutions to turn your ideas into digital reality.
          </h1>
          <p className="text-lg mb-6">
            Join our community of fitness enthusiasts and achieve your health goals with expert guidance, state-of-the-art equipment, and personalized workout plans.
          </p>
          <button className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition">
            Learn More
          </button>
        </div>

        {/* Right Image Content */}
        <div className="flex-1 relative flex flex-col items-center">
          <img
            src="/hero-girl.png"
            alt="Hero"
            className="w-full max-w-sm mx-auto z-10 relative"
          />
          {/* Inquiry Box */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 bg-white text-blue-900 rounded-xl p-6 shadow-lg w-[90%] max-w-xs md:w-[300px] z-20">
            <p className="font-semibold">For Further Inquiries Call:</p>
            <p className="text-lg font-bold mt-2 flex items-center">
              <FiPhoneCall className="mr-2" /> +92-12345678
            </p>
            <p className="text-sm mt-2">
              Ready to elevate your business? Contact us to explore tailored software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;