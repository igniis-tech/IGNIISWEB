import React from 'react';
import Header from '../components/Header';
import ProjectDetails from '../ProjectPgeDetails/ProjectDetails';
import ProjectCard from '../ProjectPgeDetails/ProjectCard';
import Footer from '../components/Footer';
const OurProjects = () => {
  return (
    <>
      
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src="/public/OurPrjects/Rectangle 19401.png" // Replace this with your image path
          alt="Our Projects"
          className="absolute inset-0 w-full md:h-[90%] h-[90%] object-cover z-0"
        />

        <div className="absolute h-[90%] inset-0 bg-[#2e2c6a]/60 z-10" />

        {/* Header */}
        <div className="absolute top-0 left-0 w-full z-30">
          <Header />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Our Projects
          </h1>
          <p className="text-white text-base md:text-lg max-w-2xl">
            Explore our diverse portfolio of successful projects, each crafted with precision and innovation
            to meet unique business challenges and deliver lasting value.
          </p>
        </div>
        <ProjectDetails/>
        <ProjectCard/>
        <Footer/>
      </div>
    </>
  );
};

export default OurProjects;
