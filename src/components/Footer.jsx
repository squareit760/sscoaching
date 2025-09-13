import React from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { BiMobile } from "react-icons/bi";

const Footer = () => {
    const [formData, setFormData] = React.useState({ name: "", mobile: "" });
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  return (
    <footer className="bg-gradient-to-b from-red-900 to-red-950 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-8 lg:gap-12">
          {/* Logo and About Column */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://sscoaching.in/images/sslogo.jpg"
                alt="Company Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Inquiry Form Column */}

            {/* About paragraph */}
            <p className="text-gray-200 leading-relaxed text-sm">
              We are dedicated to providing exceptional user experience
              consulting and training services. Our team of experts helps
              organizations create intuitive, user-centered designs that drive
              business success and customer satisfaction through evidence-based
              research and proven methodologies.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-300 mt-1 flex-shrink-0" />
                <div className="text-gray-200 text-sm">
                  <p>
                    3rd Floor, Shree Chamber, <br /> Naza Computer Market, Near
                    Basant Cinema, Hazratganj , Lucknow
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <BiMobile className="h-5 w-5 text-red-300 flex-shrink-0" />
                <a
                  href="tel:+919839065533"
                  className="text-gray-200 hover:text-white transition-colors duration-200 text-sm"
                >
                  +919839065533
                </a>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-300 flex-shrink-0" />
                <a
                  href="tel:05224029757"
                  className="text-gray-200 hover:text-white transition-colors duration-200 text-sm"
                >
                  0522-4029757
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-300 flex-shrink-0" />
                <a
                  href="mailto:sscoachinglko@gmail.com"
                  className="text-gray-200 hover:text-white transition-colors duration-200 text-sm"
                >
                  sscoachinglko@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-red-800/30 border border-red-700/50 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Mobile Input */}
              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-red-800/30 border border-red-700/50 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full cursor-pointer
                 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="h-4 w-4" />
                <span>Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="border-t border-red-800/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              <span className="underline">Copyright</span> © 2024 Your Company
              Name. All Rights Reserved.
            </div>

            {/* Footer links */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 text-gray-300 text-sm">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <span className="hidden sm:inline text-gray-500">/</span>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <span className="hidden sm:inline text-gray-500">/</span>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;