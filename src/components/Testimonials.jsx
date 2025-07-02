import React, { useState } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Alexander Gibson',
    image: '/testimonials/client1.jpg',
    quote:
      'Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht...',
    rating: 5,
  },
  {
    name: 'Sarah Müller',
    image: '/testimonials/client2.jpg',
    quote:
      'Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt.',
    rating: 4,
  },
  {
    name: 'Tom Becker',
    image: '/testimonials/client3.jpg',
    quote:
      'Nach lesbarer Sprache aussieht. Lorem Ipsum ist daher der Industriestandard.',
    rating: 5,
  },
  {
    name: 'Anna Schmidt',
    image: '/testimonials/client4.jpg',
    quote:
      'Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Das ist einfach so.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextTestimonial = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-12 px-4 bg-[#f8f8fc] text-center">
      <p className="text-blue-600 font-medium">Our Testimonials</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        What Our Clients Says?
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left circle layout */}
        <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
          <div className="absolute inset-0 rounded-full border-2 border-gray-300"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src="/testimonials/client2.jpg"
              className="w-14 h-14 rounded-full border-4 border-white shadow-md"
              alt=""
            />
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src="/testimonials/client4.jpg"
              className="w-14 h-14 rounded-full border-4 border-white shadow-md"
              alt=""
            />
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <img
              src="/testimonials/client3.jpg"
              className="w-14 h-14 rounded-full border-4 border-white shadow-md"
              alt=""
            />
          </div>
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
            <img
              src="/testimonials/client1.jpg"
              className="w-14 h-14 rounded-full border-4 border-white shadow-md"
              alt=""
            />
          </div>

          {/* Center image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-full h-full object-cover"
            />
            <FaQuoteLeft className="absolute text-4xl text-blue-600 top-1 left-1" />
          </div>
        </div>

        {/* Right Content */}
        <div className="max-w-xl text-left space-y-4">
          <div className="flex text-yellow-400 text-xl">
            {[...Array(testimonials[current].rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="text-gray-600 text-lg">{testimonials[current].quote}</p>
          <h4 className="text-xl font-semibold text-gray-900">
            {testimonials[current].name}
          </h4>

          {/* Arrows */}
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition"
            >
              <FiChevronLeft className="mx-auto text-lg" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition"
            >
              <FiChevronRight className="mx-auto text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
