import { useState } from "react";
import { ChevronDown, ArrowRight, Mail, Phone, X } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className="bg-[#0a1f44] text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2.5 text-sm">
            <div className="hidden md:flex items-center space-x-4">
              <span className="font-medium">Follow us:</span>
              <div className="flex space-x-3">
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
                {/* <a href="#" className="hover:text-blue-400 transition">
                  <FaLinkedin className="w-4 h-4" />
                </a> */}
                <a
                  href="https://www.youtube.com/c/SscoachingInlucknow"
                  className="hover:text-blue-400 transition"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-xs sm:text-sm ml-auto">
              <a
                href="tel:+911234567890"
                className="flex items-center space-x-1.5 hover:text-blue-400 transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 123-456-7890</span>
              </a>
              <a
                href="tel:+919876543210"
                className="hidden sm:flex items-center space-x-1.5 hover:text-blue-400 transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 987-654-3210</span>
              </a>
              <a
                href="mailto:info@sscoaching.com"
                className="hidden md:flex items-center space-x-1.5 hover:text-blue-400 transition"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>info@sscoaching.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <a
            href="#"
            className="text-3xl font-extrabold text-[#0a1f44] flex items-center"
          >
            <div className="w-12 h-12 bg-[#0a1f44] rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-bold text-xl">SS</span>
            </div>
            <span>
              SS<span className="text-[#2563eb]">Coaching</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-base font-medium">
            <a href="#" className="nav-link">
              Home
            </a>

            {/* React-based Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors ${
                  isDropdownOpen ? "text-[#2563eb]" : "text-[#0a1f44]"
                } hover:text-red-600`}
              >
                Admissions
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-gray-100 transform transition-all duration-200 origin-top ${
                  isDropdownOpen
                    ? "scale-100 opacity-100 visible"
                    : "scale-95 opacity-0 invisible"
                }`}
              >
                <a
                  href="#"
                  className="dropdown-item flex  py-2 px-1 hover:text-red-600"
                >
                  <ArrowRight className="w-4 h-4 mr-2 " />
                  Stream 1
                </a>
                <a
                  href="#"
                  className="dropdown-item flex  py-2 px-1 hover:text-red-600"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Stream 2
                </a>
                <a
                  href="#"
                  className="dropdown-item flex py-2 px-1 hover:text-red-600"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Stream 3 & 4
                </a>
              </div>
            </div>

            <a href="#" className="nav-link hover:text-red-600">
              Students Center
            </a>
            <a href="#" className="nav-link hover:text-red-600">
              FAQs
            </a>
            <a href="#" className="nav-link hover:text-red-600">
              Time Table
            </a>
            <a href="#" className="nav-link hover:text-red-600">
              Results
            </a>
            <a href="#" className="nav-link hover:text-red-600">
              Gallery
            </a>
            <a href="#" className="nav-link hover:text-red-600">
              Contact Us
            </a>
          </nav>

          {/* Prospectus Button */}
          <a
            href="#"
            className="hidden lg:inline-flex items-center bg-gradient-to-r from-[#2563eb] to-[#0a1f44] text-white font-semibold px-6 py-3 rounded-full hover:from-blue-600 hover:to-[#0d2844] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            Prospectus
          </a>
        </div>
      </header>
    </>
  );
}

/* ✅ Tailwind helper classes for simplicity */
const styles = `
.nav-link {
  @apply text-[#0a1f44] hover:text-[#2563eb] transition relative group;
}
.nav-link span {
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563eb] transition-all duration-300 group-hover:w-full;
}
.dropdown-item {
  @apply flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#2563eb] hover:text-white transition-all duration-300;
}
`;
