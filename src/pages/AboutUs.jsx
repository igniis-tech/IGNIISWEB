import React from 'react';
import Header from '../components/Header';
import OurStory from '../AboutPageDetails/OurStory';
import WhyChooseUs from '../AboutPageDetails/ChooseUs';
import OurTeam from '../AboutPageDetails/OurTeam';
import OurCustomers from '../AboutPageDetails/OurCutomer';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <img
        src="/About/bgabout.png"
        alt="Background"
        className="absolute inset-0 w-full h-[75%] object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60 h-[75%] z-10"></div>

      {/* Content */}
      <Header />
      <div className="relative z-20 flex flex-col items-center justify-center md:justify-center text-center h-screen px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
        <p className="text-white text-base mb-50 md:text-lg max-w-2xl">
          We are a fitness community dedicated to your physical and mental well-being.
          <br/>
          Our vision To create a healthy lifestyle accessible to everyone.<br/>
          We provide a supportive space, with real-time tracking, wellness sessions,<br/> and goal-driven training.
        </p>
      </div>
    </div>

    <OurStory/>
    <WhyChooseUs/>
    <OurTeam/>
    <OurCustomers/>
    <Footer/>
    </>
  );
};

export default AboutUs;
