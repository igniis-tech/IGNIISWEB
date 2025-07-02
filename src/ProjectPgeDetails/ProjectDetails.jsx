import React from 'react';


const ProjectDetails = () => {
  return (
    <>
    <div className="max-w-7xl  mx-auto p-6 md:p-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Image */}
        <img
          src="/public/OurPrjects/dxz (1).png" // Update this to correct public path if needed
          alt="Team Working"
          className="w-full h-auto rounded-lg shadow-md"
        />

        {/* Project Info */}
          <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Details</h2>
          <div className="bg-gray-100 rounded-xl shadow-sm p-6 space-y-4 text-base text-gray-700">
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Client</span>
              <span className="text-gray-600">Thomas</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Location</span>
              <span className="text-gray-600">United Kingdom</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Date</span>
              <span className="text-gray-600">March 22, 2023</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Website</span>
              <a href="http://localhost:5173/Projects" className="text-blue-600 hover:underline">
                info@tecishsol.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Description and Features */}
      <div className="mt-10 max-w-7xl text-[23px] text-gray-700 text-sm space-y-6">
        <p>
          Flashost is a cutting-edge e-commerce platform designed to provide users with a seamless shopping experience, focused on speed, ease of use, and adaptability. Built with a scalable architecture,
          Flashost caters to a wide audience and supports businesses in managing online sales with advanced
          features and intuitive design.
        </p>

        <ul className="list-disc list-inside space-y-4">
          <li >
            <strong className='text-[22px]'>User-Friendly Interface:</strong> Simplified and responsive interface for smooth navigation and a pleasant shopping experience.
          </li>
          <li>
            <strong >Fast Loading Speeds:</strong> Optimized for quick load times, ensuring that users can browse and purchase products without delays.
          </li>
          <li>
            <strong >Robust Product Management:</strong> Advanced product categorization, inventory tracking, and order management tools tailored for e-commerce efficiency.
          </li>
          <li>
            <strong >Secure Payment Integration:</strong> Multiple secure payment options to enhance buyer trust and transaction convenience.
          </li>
          <li>
            <strong >Scalability and Flexibility:</strong> Designed to scale effortlessly, adapting to growing business demands and diverse user needs.
          </li>
          <li>
            <strong >Intuitive User Interface:</strong> A clean, responsive design ensures easy navigation and enhances user engagement.
          </li>
        </ul>
      </div>
    </div>
     <div>

      </div>
    </>
  );
};

export default ProjectDetails;
