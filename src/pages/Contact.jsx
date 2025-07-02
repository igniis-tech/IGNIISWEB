import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';
import { FaUserEdit } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);;

    emailjs.send(
      'service_c9l09rw',
      'template_9ug0isn',
      formData,
      '_7sbHibaZRG7o3nvH'
    ).then(() => {
      toast.success('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }).catch(() => {
      toast.error('Failed to send message. Please try again later.');
    });
  };

  return (
    <>
      <div className="bg-blue-900">
        <Header />
      </div>

      {/* Combined Contact Section */}
      <section className="flex justify-center items-center px-4 py-10 font-sans">
        <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-gray-50 shadow-lg rounded-xl overflow-hidden">
          
          {/* Left Text */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center text-left bg-white">
            <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Let's see if we are a good fit.
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-blue-700 mt-4">
              Schedule a call with our team.
            </h2>
            <p className="text-gray-500 mt-6 text-base">
              We're excited to connect and explore how we can help. Expect a response within 24 hours.
            </p>
            <div className='flex justify-center gap-10'>
            <a href='/'>
            <FaTwitter className='mt-10 cursor-pointer text-blue-500 size-5' />
            </a>
            <a href='/' className='flex justify-center '>
            <FaInstagram className='mt-10 cursor-pointer text-pink-600 size-5' />
            </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:w-1/2 p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-6 text-center">Contact Us</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="relative">
                <label className="text-gray-800 font-medium flex items-center gap-2">Your Name</label>
                <FaUserEdit className="absolute text-blue-700 left-5 bottom-3 size-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full pl-14 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <label className="text-gray-800 font-medium">Phone Number</label>
                <FiPhoneCall className="absolute text-blue-700 left-5 top-11 size-5" />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                  className="w-full pl-14 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label className="text-gray-800 flex justify-start ml-8 font-medium">Email Address</label>
                <MdOutlineMail className="absolute text-blue-700 left-5 top-10 size-6" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johnsmith@example.com"
                  required
                  className="w-full pl-14 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-gray-800 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Input your message"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none resize-none"
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-[70%] md:w-[50%] py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-purple-800 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-4 py-10 bg-white text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Location</h2>
        <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden shadow-lg mx-auto max-w-5xl">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.2762358439745!2d78.0024653749054!3d27.21047574723207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974777bc6baffd3%3A0xbafa1b14ff7d2b60!2sBhagwan%20Talkies!5e0!3m2!1sen!2sin!4v1749722449259!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
