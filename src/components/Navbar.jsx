import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  X,
  Menu,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState({
    admissions: false,
    timetable: false,
    gallery: false,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdown = (name, value) => {
    setDropdownOpen({
      admissions: false,
      timetable: false,
      gallery: false,
      [name]: value,
    });
  };

  return (
    <>
      {/* 🔹 Top Bar */}
      <div className="bg-[#0a1f44] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-col lg:flex-row justify-between gap-2 py-2.5">
            {/* Social Icons */}
            <div className="flex items-center space-x-3 justify-start">
              <a
                href="https://www.facebook.com/SSCoachingLucknow"
                className="hover:text-blue-400 transition"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/SSCoachingTwit"
                className="hover:text-blue-400 transition"
              >
                <X className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/sscoaching_lucknow/"
                className="hover:text-blue-400 transition"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/c/SscoachingInlucknow"
                className="hover:text-blue-400 transition"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="flex space-x-4 justify-start">
              <a
                href="tel:+919839065533"
                className="flex items-center space-x-1.5 hover:text-blue-400 transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 9839065533</span>
              </a>
              <a
                href="mailto:sscoachinglko@gmail.com"
                className="flex items-center space-x-1.5 hover:text-blue-400 transition"
              >
                <Mail className="w-4.5 h-4.5 lg:w-3.5 lg:h-3.5" />
                <span>sscoachinglko@gmail.com</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <a href="#">
            <img
              src="/images/sslogo.jpg"
              className="h-14 sm:h-16 lg:h-14 object-contain"
              alt="SS Coaching Logo"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-base font-medium">
            <a href="#" className="nav-link">
              Home
            </a>

            {/* 🔸 Admissions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdown("admissions", true)}
              onMouseLeave={() => handleDropdown("admissions", false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors ${
                  dropdownOpen.admissions ? "text-[#2563eb]" : "text-[#0a1f44]"
                } hover:text-red-600`}
              >
                Admissions
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    dropdownOpen.admissions ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-200 ${
                  dropdownOpen.admissions
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <a
                  href="https://sscoaching.in/Admission-in-NIOS-Stream-1_24.html"
                  className="dropdown-item flex items-center p-2"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Stream 1
                </a>
                <a
                  href="https://sscoaching.in/Admission-in-NIOS-Stream-2_25.html"
                  className="dropdown-item flex items-center p-2"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Stream 2
                </a>
                <a
                  href="https://sscoaching.in/Admission-in-NIOS-Stream-3-and-4_27.html"
                  className="dropdown-item flex items-center p-2"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Stream 3 & 4
                </a>
              </div>
            </div>

            <a
              href="https://sscoaching.in/ques-papers_147.html"
              className="nav-link hover:text-red-600"
            >
              Students Center
            </a>
            <a
              href="https://sscoaching.in/faq"
              className="nav-link hover:text-red-600"
            >
              FAQs
            </a>

            {/* 🔸 Time Table Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdown("timetable", true)}
              onMouseLeave={() => handleDropdown("timetable", false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors ${
                  dropdownOpen.timetable ? "text-[#2563eb]" : "text-[#0a1f44]"
                } hover:text-red-600`}
              >
                Time Table
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    dropdownOpen.timetable ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-200 ${
                  dropdownOpen.timetable
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <a
                  href="https://sscoaching.in/timing-hazratgunj_140.html"
                  className="dropdown-item flex items-center p-2"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Time Table Hazratganj
                </a>
                <a
                  href="https://sscoaching.in/timing-indiranagar_141.html"
                  className="dropdown-item flex items-center p-2"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Time Table Indira
                  Nagar
                </a>
                <a
                  href="https://sscoaching.in/Time-table-Alambagh_3284.html"
                  className="dropdown-item flex items-center p-2"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Time Table Alambagh
                </a>
              </div>
            </div>

            <a
              href="https://sscoaching.in/result"
              className="nav-link hover:text-red-600"
            >
              Results
            </a>

            {/* 🔸 Gallery Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdown("gallery", true)}
              onMouseLeave={() => handleDropdown("gallery", false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors ${
                  dropdownOpen.gallery ? "text-[#2563eb]" : "text-[#0a1f44]"
                } hover:text-red-600`}
              >
                Gallery
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    dropdownOpen.gallery ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 mt-3 w-64 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-200 ${
                  dropdownOpen.gallery
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <a
                  href="https://sscoaching.in/hazratganj-branch-lucknow_1.xhtml"
                  className="dropdown-item flex items-center p-2"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Hazratganj Branch
                </a>
                <a
                  href="https://sscoaching.in/indiranagar-branch-lucknow_2.xhtml"
                  className="dropdown-item flex items-center p-2"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Indira Nagar Branch
                </a>
                <a
                  href="https://sscoaching.in/photo/alambagh/2"
                  className="dropdown-item flex items-center p-2"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Alambagh Branch
                </a>
                <a
                  href="https://sscoaching.in/students-of-ss-coaching_5.xhtml"
                  className="dropdown-item flex items-center p-2"
                >
                  <ArrowRight className="w-4 h-4 mr-2" /> Students Of SSCoaching
                </a>
              </div>
            </div>

            <a
              href="https://sscoaching.in/contact"
              className="nav-link hover:text-red-600"
            >
              Contact Us
            </a>
          </nav>

          {/* Prospectus Button (Desktop) */}
          <a
            href="https://sscoaching.in/onlineforms"
            className="hidden lg:inline-flex gap-2 items-center bg-gradient-to-r from-[#2563eb] to-[#0a1f44] text-white font-semibold px-5 py-2.5 rounded-full hover:from-blue-600 hover:to-[#0d2844] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            <PiStudent className="w-6 h-6" />
            Admission Open
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#0a1f44]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* 🔹 Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
            <nav className="flex flex-col space-y-2 p-4 text-[#0a1f44] font-medium">
              <a href="#" className="py-2 hover:text-blue-600">
                Home
              </a>

              {/* Admissions */}
              <details>
                <summary className="flex justify-between items-center cursor-pointer py-2 hover:text-blue-600">
                  Admissions <ChevronDown className="w-4 h-4" />
                </summary>
                <div className="pl-4 flex flex-col space-y-2 mt-1">
                  <a href="https://sscoaching.in/Admission-in-NIOS-Stream-1_24.html">
                    Stream 1
                  </a>
                  <a href="https://sscoaching.in/Admission-in-NIOS-Stream-2_25.html">
                    Stream 2
                  </a>
                  <a href="https://sscoaching.in/Admission-in-NIOS-Stream-3-and-4_27.html">
                    Stream 3 & 4
                  </a>
                </div>
              </details>

              <a
                href="https://sscoaching.in/ques-papers_147.html"
                className="py-2 hover:text-blue-600"
              >
                Students Center
              </a>
              <a
                href="https://sscoaching.in/faq"
                className="py-2 hover:text-blue-600"
              >
                FAQs
              </a>

              {/* Time Table */}
              <details>
                <summary className="flex justify-between items-center cursor-pointer py-2 hover:text-blue-600">
                  Time Table <ChevronDown className="w-4 h-4" />
                </summary>
                <div className="pl-4 flex flex-col space-y-2 mt-1">
                  <a href="https://sscoaching.in/timing-hazratgunj_140.html">
                    Time Table Hazratganj
                  </a>
                  <a href="https://sscoaching.in/timing-indiranagar_141.html">
                    Time Table Indira Nagar
                  </a>
                  <a href="https://sscoaching.in/Time-table-Alambagh_3284.html">
                    Time Table Alambagh
                  </a>
                </div>
              </details>

              <a
                href="https://sscoaching.in/result"
                className="py-2 hover:text-blue-600"
              >
                Results
              </a>

              {/* Gallery */}
              <details>
                <summary className="flex justify-between items-center cursor-pointer py-2 hover:text-blue-600">
                  Gallery <ChevronDown className="w-4 h-4" />
                </summary>
                <div className="pl-4 flex flex-col space-y-2 mt-1">
                  <a href="https://sscoaching.in/hazratganj-branch-lucknow_1.xhtml">
                    Hazratganj Branch
                  </a>
                  <a href="https://sscoaching.in/indiranagar-branch-lucknow_2.xhtml">
                    Indira Nagar Branch
                  </a>
                  <a href="https://sscoaching.in/photo/alambagh/2">
                    Alambagh Branch
                  </a>
                  <a href="https://sscoaching.in/students-of-ss-coaching_5.xhtml">
                    Students Of SSCoaching
                  </a>
                </div>
              </details>

              <a
                href="https://sscoaching.in/contact"
                className="py-2 hover:text-blue-600"
              >
                Contact Us
              </a>

              <a
                href="https://sscoaching.in/onlineforms"
                className="mt-3 inline-flex justify-center bg-gradient-to-r from-[#2563eb] to-[#0a1f44] text-white font-semibold px-4 py-2 rounded-full hover:from-blue-600 hover:to-[#0d2844] transition"
              >
                Admission Open
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
