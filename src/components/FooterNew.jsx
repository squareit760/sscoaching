import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  User,
  Smartphone,
  Send,
  Heart,
} from "lucide-react";

export default function FooterNew() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We will contact you soon.");
    setFormData({ name: "", mobile: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer className="bg-blue-950 text-gray-300 pt-16 pb-8" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Section 1: Logo & Address */}
          <div>
            <a
              href="#"
              className="text-2xl sm:text-3xl font-extrabold text-white mb-6 inline-flex items-center"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-blue-950 font-bold text-sm sm:text-base">
                  SS
                </span>
              </div>
              <span>
                SS<span className="text-blue-400">Coaching</span>
              </span>
            </a>

            <div className="space-y-4 mt-6">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  123 Education Lane, Hazratganj, Lucknow, Uttar Pradesh -
                  226001
                </span>
              </p>
              <a
                href="tel:+911234567890"
                className="flex items-center hover:text-blue-400 transition"
              >
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                +91 123-456-7890
              </a>
              <a
                href="mailto:info@sscoaching.com"
                className="flex items-center hover:text-blue-400 transition"
              >
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                info@sscoaching.com
              </a>
            </div>

            <div className="flex space-x-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-400 transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-400 transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-400 transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-400 transition"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "NIOS Admissions",
                "Results",
                "Blogs",
                "Contact Us",
                "FAQs",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Resources */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                "Question Papers",
                "Syllabus",
                "Study Material",
                "Time Table",
                "Prospectus",
              ].map((resource) => (
                <li key={resource}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Enquiry Form */}
          <div className="bg-white p-6 rounded-2xl">
            <h4 className="text-xl font-bold text-blue-950 mb-4 text-center">
              Enquire Now
            </h4>
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-800 outline-none"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Smartphone className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-800 outline-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-950 text-white font-bold py-3 rounded-lg hover:from-blue-600 hover:to-blue-900 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center shadow-lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
          <p className="flex items-center justify-center flex-wrap gap-1">
            <span>© 2025 SS Coaching. All Rights Reserved. Designed with</span>
            <Heart className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>for students.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
