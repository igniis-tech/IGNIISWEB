import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const teamMembers = [
  {
    name: 'Thomas',
    role: 'Senior Front-end Developer',
    image: '/public/About/Rectangle 19359.png',
    description:
      'Our Front-End Developer brings creativity and technical expertise to deliver seamless, user-friendly interfaces.',
  },
  {
    name: 'John',
    role: 'Backend Developer',
    image: '/public/About/Ellipse.png',
    description:
      'Ensures smooth server-side operations and robust API design.',
  },
  {
    name: 'Alice',
    role: 'UI/UX Designer',
    image: '/About/team3.jpg',
    description:
      'Crafts beautiful and intuitive user experiences.',
  },
  {
    name: 'Emma',
    role: 'Project Manager',
    image: '/About/team4.jpg',
    description:
      'Keeps projects on track and ensures communication flows.',
  },
   {
    name: 'Emma',
    role: 'Project Manager',
    image: '/About/team4.jpg',
    description:
      'Keeps projects on track and ensures communication flows.',
  },
   {
    name: 'Emma',
    role: 'Project Manager',
    image: '/About/team4.jpg',
    description:
      'Keeps projects on track and ensures communication flows.',
  },
];

const OurTeam = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 px-4 md:px-20 bg-white text-center">
      <p className="text-blue-600 mb-2 font-medium">Our Team</p>
      <h2 className="text-2xl md:text-4xl font-bold mb-10">
        Meet the team behind the agency success
      </h2>

      <Slider {...settings}>
  {teamMembers.map((member, i) => (
    <div key={i} className="px-4"> 
      <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow"
        />
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-sm text-gray-600">{member.role}</p>
        <p className="text-xs text-gray-500 mt-2">
          {member.description}{' '}
          <span className="text-blue-600 underline cursor-pointer">
            Read more...
          </span>
        </p>
        <div className="flex justify-center gap-4 text-blue-600 text-lg mt-4">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
        </div>
      </div>
    </div>
  ))}
</Slider>
    </section>
  );
};

export default OurTeam;