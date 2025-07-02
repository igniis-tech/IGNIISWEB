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
      image: '/Projects/project5.jpg',
      title: 'Portfolio Website',
      category: 'Frontend Dev',
      subtitle: 'Flashost',
    },
    {
      image: '/Projects/project6.jpg',
      title: 'eCommerce Store',
      category: 'Fullstack Dev',
      subtitle: 'Flashost',
    },
  ];

  return (
    <section className="py-12 px-4 md:px-20 bg-white text-center">
      <p className="text-blue-600 font-medium">Our Projects</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Recently Completed Creative Works
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md bg-white group"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 group">
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-80 transition-all duration-300 ease-in-out rounded-xl"></div>

              
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
               <div className='border rounded-full bg-white h-10 w-10 flex items-center justify-center'>
               <a href="#"><FiLink className="text-xl group-hover:scale-110 group-hover:text-blue-900 transition" /></a>
               </div>
               
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm mt-1">{project.category}</p>
              </div>
            </div>

  
            <div className="absolute bottom-4 right-2 bg-white px-8 py-1 rounded shadow text-blue-800 font-medium text-sm group-hover:opacity-0 transition-all duration-300">
              {project.subtitle}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
