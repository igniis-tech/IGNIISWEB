import React from 'react';
import Header from '../components/Header.jsx';
import HeroContent from './HeroContent';
import HeroImages from './HeroImages';

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* Blue background layer */}
        <div className="absolute top-0 left-0 w-full md:h-[85%] h-[80%] bg-blue-900 z-0 overflow-hidden">
          <img
            src="/Hero/Rectangle 4.png"
            alt="Background Rectangle"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Header */}
        <div className="z-20">
          <Header />
        </div>
        <div className='grid grid-cols-1  md:grid-cols-2 md:gap-0'>
       <HeroContent/>
       <HeroImages/>
      </div>
      </section>

    </>
  );
};

export default Hero;
