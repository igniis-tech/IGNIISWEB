import React from 'react';
import {
  FaSyncAlt,
  FaCogs,
  FaProjectDiagram,
  FaChartPie,
  FaPuzzlePiece,} from 'react-icons/fa';

const features = [
  {
    title: 'Coordination',
    icon: <FaSyncAlt className="text-blue-500" size={28} />,
    desc: 'To ideate the best solutions, we always start with figuring out your business goals by keeping close coordination with you.',
  },
  {
    title: 'Flexible Technologies',
    icon: <FaCogs className="text-blue-500" size={28} />,
    desc: 'We design systems that grow with your business, adapting to new demands and opportunities as they arise.',
  },
  {
    title: 'End-to-End Project',
    icon: <FaProjectDiagram className="text-blue-500" size={28} />,
    desc: 'From strategy to deployment, we guide you through every step, making complex transformations manageable and successful.',
  },
  {
    title: 'Data-Driven Insights',
    icon: <FaChartPie className="text-blue-500" size={28} />,
    desc: 'To ideate the best solutions, we always start with figuring out your business goals by keeping close coordination with you.',
  },
  {
    title: 'Custom Solutions',
    icon: <FaPuzzlePiece className="text-blue-500" size={28} />,
    desc: 'Our team crafts software tailored precisely to your business needs, ensuring seamless integration and outstanding results.',
  },
];

const Argument = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 from-60%  to-blue-700 text-white mb-10 py-16 px-4 md:px-20">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How We Augment Your Business Growth!
        </h2>
        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
          We specialize in creating innovative software solutions designed to scale with your business.
          Our team combines cutting-edge technology with deep industry expertise to deliver applications
          and services that streamline processes, enhance customer engagement, and drive efficiency.
          From custom development to seamless integration, we’re here to empower your growth at every stage,
          enabling you to stay ahead in a competitive digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {features.map((feature, idx) => (
          <div className='hover:scale-105 transition-transform duration-300'>
          <div key={idx} className="bg-white text-black rounded-lg p-4 text-center h-full hover:shadow-xl transition-shadow duration-300">
            <div className="mb-3 flex justify-center">{feature.icon}</div>
            <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
            <a href='#' className='hover:scale-105 transition-transform duration-300'>
            <p className="text-sm text-gray-700">
              {feature.desc}{' '}
              <span className="text-blue-600 font-medium cursor-pointer">Read more...</span>
            </p>
            </a>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Argument;
