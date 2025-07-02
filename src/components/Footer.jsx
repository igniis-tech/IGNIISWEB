import React from 'react';
import logo from '../assets/Ingniis_Final_Logo_page-0001-removebg-preview.png';
import { IoLogoFacebook } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section>
      <footer className="bg-blue-900 pt-1 py-5 text-white">
        <div className="px-6 md:px-30">

          {/* Logo */}
          <div className="flex justify-center md:justify-start mt-5">
            <img
              src={logo}
              alt="logo"
              className="h-auto w-[60px] md:w-[80px]"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center md:justify-end mb-6">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Our Projects</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>

          {/* Newsletter form */}
          <form className="mt-6 flex flex-col md:items-start items-center">
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full sm:w-auto px-4 py-2 rounded-md text-black bg-white flex-1"
              />
              <button
                type="submit"
                className="bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-gray-200 transition-all"
              >
                Join Newsletter
              </button>
            </div>
          </form>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-6 text-2xl text-blue-200 mt-10">
            <a href="#" className="hover:text-white"><IoLogoFacebook /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
            <a href="#" className="hover:text-white"><FaTelegram /></a>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-sm text-blue-200 text-center md:text-start">
            © 2024 BB. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
