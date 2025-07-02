import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: 'Thomas',
    role: 'Senior Front-end Developer',
    description:
      'Our Front-End Developer brings creativity and technical expertise.',
    image: '/team/thomas.jpg',
  },
  {
    name: 'Alice',
    role: 'UI Designer',
    description:
      'Creates visually engaging and accessible designs for all platforms.',
    image: '/team/thomas.jpg',
  },
  {
    name: 'Michael',
    role: 'Back-End Developer',
    description:
      'Builds and maintains robust server-side logic and APIs.',
    image: '/team/thomas.jpg',
  },
  {
    name: 'Sophia',
    role: 'Product Manager',
    description:
      'Bridges the gap between technology and business for optimal results.',
    image: '/team/thomas.jpg',
  },
  {
    name: 'David',
    role: 'QA Engineer',
    description:
      'Ensures quality through rigorous testing and automation.',
    image: '/team/thomas.jpg',
  },
  {
    name: 'Jack',
    role: 'DevOps Engineer',
    description:
      'Manages deployments, CI/CD pipelines, and system reliability.',
    image: '/team/thomas.jpg',
  },
];

const TeamSection = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-4 md:px-20 bg-[#f8f8fc] text-center">
      <p className="text-blue-600 font-medium">Our Team</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Meet the team behind the agency success
      </h2>

      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition h-full">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm mb-3">
                {member.description}{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Read more...
                </a>
              </p>
              <div className="flex justify-center gap-3 text-blue-600">
                <a href="#" className="hover:text-blue-800">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-blue-800">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="hover:text-blue-800">
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TeamSection;
