import { useState } from "react";
import { ChevronDown, ArrowRight, Mail, Phone, X, Menu, Download } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 🔹 Top Bar */}
      <div className="bg-[#0a1f44] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center py-2.5">
            {/* Social Icons (hidden on small screens) */}
            <div className="hidden md:flex items-center space-x-3">
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
                <a
                  href="https://www.youtube.com/c/SscoachingInlucknow"
                  className="hover:text-blue-400 transition"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-nowrap items-center gap-3 sm:gap-4 text-[11px] sm:text-sm ml-auto overflow-x-auto whitespace-nowrap">
              <a
                href="tel:+911234567890"
                className="flex items-center space-x-1.5 hover:text-blue-400 transition flex-shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 123-456-7890</span>
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-center space-x-1.5 hover:text-blue-400 transition flex-shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 987-654-3210</span>
              </a>

              <a
                href="mailto:info@sscoaching.com"
                className="flex items-center space-x-1.5 hover:text-blue-400 transition flex-shrink-0"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>info@sscoaching.com</span>
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
              className="h-14 sm:h-16 lg:h-20 object-contain"
              alt="SS Coaching Logo"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-base font-medium">
            <a href="#" className="nav-link">
              Home
            </a>

            {/* Dropdown */}
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
                <a href="#" className="dropdown-item flex py-2">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Stream 1
                </a>
                <a href="#" className="dropdown-item flex py-2">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Stream 2
                </a>
                <a href="#" className="dropdown-item flex py-2">
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

          {/* Prospectus Button (Desktop Only) */}
          <a
            href="#"
            className="hidden lg:inline-flex gap-2 items-center bg-gradient-to-r from-[#2563eb] to-[#0a1f44] text-white font-semibold px-5 py-2.5 rounded-full hover:from-blue-600 hover:to-[#0d2844] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            <Download className="w-6 h-6" />
            Prospectus
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
            <nav className="flex flex-col space-y-2 p-4 text-[#0a1f44] font-medium">
              <a href="#" className="py-2 hover:text-blue-600">
                Home
              </a>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-2 hover:text-blue-600">
                  Admissions{" "}
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pl-4 flex flex-col space-y-2 mt-1">
                  <a href="#" className="hover:text-red-600">
                    Stream 1
                  </a>
                  <a href="#" className="hover:text-red-600">
                    Stream 2
                  </a>
                  <a href="#" className="hover:text-red-600">
                    Stream 3 & 4
                  </a>
                </div>
              </details>
              <a href="#" className="py-2 hover:text-blue-600">
                Students Center
              </a>
              <a href="#" className="py-2 hover:text-blue-600">
                FAQs
              </a>
              <a href="#" className="py-2 hover:text-blue-600">
                Time Table
              </a>
              <a href="#" className="py-2 hover:text-blue-600">
                Results
              </a>
              <a href="#" className="py-2 hover:text-blue-600">
                Gallery
              </a>
              <a href="#" className="py-2 hover:text-blue-600">
                Contact Us
              </a>
              <a
                href="#"
                className="mt-3 inline-flex justify-center bg-gradient-to-r from-[#2563eb] to-[#0a1f44] text-white font-semibold px-4 py-2 rounded-full hover:from-blue-600 hover:to-[#0d2844] transition"
              >
                Prospectus
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

/* Tailwind helper classes */
const styles = `
.nav-link {
  @apply text-[#0a1f44] hover:text-[#2563eb] transition relative group;
}
.dropdown-item {
  @apply flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#2563eb] hover:text-white transition-all duration-300;
}
`;
