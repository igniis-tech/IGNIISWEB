import React, { useState } from 'react';
import logo from '../assets/Ingniis_Final_Logo_page-0001-removebg-preview.png';
import { TbMenuDeep } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Header = () => {

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-between items-center px-8 py-6 text-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-sm font-large">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/AboutUs" className="hover:text-gray-300">About Us</Link>
        <Link to="/Services" className="hover:text-gray-300">Services</Link>
        <Link to="/Projects" className="hover:text-gray-300">Projects</Link>
        <Link to="/Contact" className="hover:text-gray-300">Contact</Link>
        <Link to='/LetsTalk'></Link>
      </nav>

     
      <div className="hidden md:block">
        <button
         onClick={() => navigate('/contact')}
         className="bg-white text-blue-900 font-semibold cursor-pointer px-5 py-2 rounded-full hover:bg-gray-100">Let’s Talk</button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
          <TbMenuDeep />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-900 text-white flex flex-col gap-4 p-6 rounded-b-lg md:hidden">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/AboutUs" className="hover:text-gray-300">About Us</Link>
          <Link to="/Services" className="hover:text-gray-300">Services</Link>
          <Link to="/Projects" className="hover:text-gray-300">Projects</Link>
          <Link to="/Contact" className="hover:text-gray-300">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
