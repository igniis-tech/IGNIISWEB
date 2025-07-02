import React from 'react';
import Slider from 'react-slick';
import { FaQuoteRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'James Thomas',
    role: 'UI Designer',
    image: '/About/Container.png',
    quote:
      'HR Solutions are incredibly accommodating, diligent and competent. They understand the scope, needs and importance of both concerned parties within the interviewing and hiring process – That really helps with building a life and career',
  },
  {
    name: 'Priya Sharma',
    role: 'Backend Developer',
    image: '/About/team2.jpg',
    quote:
      'The team provided excellent support throughout our project. Their expertise and dedication made a real difference.',
  },
  {
    name: 'Rahul Verma',
    role: 'Project Manager',
    image: '/About/team4.jpg',
    quote:
      'Professional, reliable, and always ready to help. Highly recommended for any business looking for HR solutions.',
  },
];

const OurCustomers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="py-16 px-4 md:px-20 bg-gray-100 w-full text-center">
      <p className="text-blue-600 mb-2 font-medium uppercase tracking-wide">Our Customers</p>
      <h2 className="text-2xl md:text-4xl font-bold mb-10">Our Happy Customers</h2>

      <Slider {...settings}>
        {testimonials.map((item, i) => (
          <div key={i} className="px-2">
            <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-center gap-6 p-6 md:p-10 max-w-5xl mx-auto">
              
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 object-cover rounded-full shadow-md"
              />

              {/* Text Content */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="mb-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-xl">
                    <FaQuoteRight />
                  </span>
                </div>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 max-w-xl">
                  “{item.quote}”
                </p>

                <div>
                  <p className="font-semibold text-gray-900 text-lg">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurCustomers;
