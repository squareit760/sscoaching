import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img
              src="https://sscoaching.in/images/sslogo.jpg"
              alt="SS Coaching Logo"
              className="w-full h-14 object-cover"
            />
            {/* <h2>SS Coaching</h2> */}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-black font-semibold hover:text-blue-300 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-black font-semibold hover:text-blue-300 transition-colors"
            >
              About
            </a>
            <a
              href="#courses"
              className="text-black font-semibold hover:text-blue-300 transition-colors"
            >
              Courses
            </a>
            <a
              href="#success"
              className="text-black font-semibold hover:text-blue-300 transition-colors"
            >
              Success Stories
            </a>
            <a
              href="#contact"
              className="text-black font-semibold hover:text-blue-300 transition-colors"
            >
              Contact
            </a>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Get Admission
            </button>
          </div>

          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-lg rounded-lg mt-2 p-4 space-y-4">
            <a href="#home" className="block text-white hover:text-blue-300">
              Home
            </a>
            <a href="#about" className="block text-white hover:text-blue-300">
              About
            </a>
            <a href="#courses" className="block text-white hover:text-blue-300">
              Courses
            </a>
            <a href="#success" className="block text-white hover:text-blue-300">
              Success Stories
            </a>
            <a href="#contact" className="block text-white hover:text-blue-300">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar