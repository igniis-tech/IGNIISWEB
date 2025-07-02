// pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Services from '../components/Services.jsx';
import Projects from '../components/Projects.jsx';
import Testimonials from '../components/Testimonials.jsx';
import TeamSection from '../components/Team.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <TeamSection />
      <Footer />
    </>
  );
};

export default Home;
