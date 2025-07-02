import React from 'react';
import { FiLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      image: '/Projects/project1.jpg',
      title: 'Tech Solution',
      category: 'Web Development',
      subtitle: 'Flashost',
    },
    {
      image: '/Projects/project2.jpg',
      title: 'Marketing Campaign',
      category: 'Brand Strategy',
      subtitle: 'Flashost',
    },
    {
      image: '/Projects/project3.jpg',
      title: 'Mobile App',
      category: 'UI/UX Design',
      subtitle: 'Flashost',
    },
    {
      image: '/Projects/project4.jpg',
      title: 'Analytics Dashboard',
      category: 'Data Visualization',
      subtitle: 'Flashost',
    },
    {
      image: '/Projects/project4.jpg',
      title: 'Analytics Dashboard',
      category: 'Data Visualization',
      subtitle: 'Flashost',
    }
  ];

  return (
    <section className="py-12 px-4 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Recently Completed Creative Works
      </h2>

      {/* Row 1 - 3 cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {projects.slice(0, 3).map((project, index) => (
          <div key={index} className="w-full sm:w-[48%] lg:w-[30%]">
            <div className="relative rounded-xl overflow-hidden shadow bg-white group">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 group-hover:bg-blue-900/80 transition duration-300 rounded-xl flex flex-col items-center justify-center text-white">
                <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center mb-2">
                 <a href='#'> <FiLink className="text-blue-900 text-xl" /></a>
                </div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm">{project.category}</p>
              </div>
              <div className="absolute bottom-4 right-2 bg-white px-6 py-1 rounded shadow text-blue-800 text-sm group-hover:opacity-0 transition duration-300">
                {project.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 - 2 cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {projects.slice(3, 5).map((project, index) => (
          <div key={index} className="w-full sm:w-[40%] lg:w-[30%]">
            <div className="relative rounded-xl overflow-hidden shadow bg-white group">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 group-hover:bg-blue-900/80 transition duration-300 rounded-xl flex flex-col items-center justify-center text-white">
                <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center mb-2">
                 <a href='#'> <FiLink className="text-blue-900 text-xl" /></a>
                </div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm">{project.category}</p>
              </div>
              <div className="absolute bottom-4 right-2 bg-white px-6 py-1 rounded shadow text-blue-800 text-sm group-hover:opacity-0 transition duration-300">
                {project.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
