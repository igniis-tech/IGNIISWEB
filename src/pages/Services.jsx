import React from 'react';
import Header from '../components/Header';
import WeDo from '../ServicesPageDetails/WeDo.jsx';
import Argument from '../ServicesPageDetails/Argument.jsx';
import OurCustomers from '../AboutPageDetails/OurCutomer.jsx';
import Footer from '../components/Footer.jsx'

const Services = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-[#0f1cb3] to-[#e0e0e0] text-white h-full ">
       <div className='w-full'>
       <Header />
       </div>
        <div className="max-w-7xl p-6 mx-auto h-full mt-20 relative">
          {/* Left Text Content */}
          <div className="max-w-xl mb-12">
            <h1 className="text-4xl md:text-4xl font-bold leading-tight">
              Transform Your Body. Transform Your Life. <br />
              <span className="text-white">Get Fit with Our Expert Fitness Services!</span>
            </h1>
            <p className="text-gray-200 mt-6 text-base leading-relaxed">
At <span className='text-2xl text-blue-900 font-bold'>[igniis]</span>, we’re more than just a fitness center — we’re your partners in health and transformation. Whether you're looking to lose weight, gain muscle, or improve your overall lifestyle, our expert trainers and modern facilities are here to support your journey every step of the way.

            </p>
            <button className="mt-6 cursor-pointer bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-full font-semibold">
              Learn More
            </button>
          </div>

          {/* Right Side Cards */}
          <div className="flex flex-row md:flex-row gap-4 items-end md:absolute right-0 top-0 mt-10 md:mt-10">
            <div className="bg-blue-900 w-36 h-40 rounded-t-3xl flex items-end justify-center text-center text-sm px-2 pb-4 z-10 shadow-lg">
              Web <br /> development
            </div>
            <div className="bg-[#1c1c3a] w-36 h-44 rounded-t-3xl flex items-end justify-center text-center text-sm px-2 pb-4 z-20 shadow-lg">
              SEO
            </div>
            <div className="bg-[#2346d6] w-36 h-48 rounded-t-3xl flex items-end justify-center text-center text-sm px-2 pb-4 z-30 shadow-lg">
              Mobile <br /> Application
            </div>
            <div className="bg-[#2b2b45] w-36 h-52 rounded-t-3xl flex items-end justify-center text-center text-sm px-2 pb-4 z-40 shadow-lg">
              UI/UX <br /> Design
            </div>
          </div>
        </div>
        
      </section>
      <WeDo/>
      <Argument/>
      <OurCustomers />
      <Footer/>
    </>
  );
};

export default Services;
