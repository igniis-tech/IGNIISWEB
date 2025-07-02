import React from 'react';
import { FaLightbulb, FaPuzzlePiece, FaClock, FaDollarSign } from 'react-icons/fa';

const features = [
  {
    icon: <FaLightbulb className="text-blue-600 text-2xl" />,
    title: 'Advanced Innovative Agency',
    description:
      'Our experienced developers are skilled in the latest technologies, ensuring innovative and high-quality solutions for your business needs.',
  },
  {
    icon: <FaPuzzlePiece className="text-blue-600 text-2xl" />,
    title: 'Customized Solutions',
    description:
      'We tailor every project to meet the unique requirements of each client, delivering solutions that perfectly align with your business goals.',
  },
  {
    icon: <FaClock className="text-blue-600 text-2xl" />,
    title: 'On-Time Delivery',
    description:
      'We understand the importance of time in business, which is why we prioritize efficient project management to deliver on schedule.',
  },
  {
    icon: <FaDollarSign className="text-blue-600 text-2xl" />,
    title: 'Affordable Pricing',
    description:
      'We offer competitive rates without compromising on quality, making us an excellent choice for cost-effective solutions.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto rounded-md p-5 sm:p-8 md:p-10 bg-white">
        <p className="text-center text-blue-600 font-medium mb-2 uppercase tracking-wide">Choose Us</p>
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 leading-tight">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="w-full">
            <img
              src="/About/choose-img.png"
              alt="Team Discussion"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>

          {/* Right - Features */}
          <div className="space-y-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-gray-100 p-4 rounded-md shadow-sm"
              >
                <div className="pt-1 shrink-0">{feature.icon}</div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
