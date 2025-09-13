import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPodcast } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section className="bg-[#6d0c1b] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Subscribe Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h2>
          <p className="mb-5 text-gray-200">
            Get weekly UX articles, videos, and upcoming training events
            straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
            <input
              type="email"
              placeholder="sscoching123@gmail.com"
              className="px-4 py-3 rounded-l-full sm:rounded-full sm:rounded-r-none text-black focus:outline-none w-full sm:w-auto"
            />
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full sm:rounded-l-none font-semibold transition mt-3 sm:mt-0">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Section */}
        <div>
          <h2 className="text-2xl font-bold mb-5">Follow Us</h2>
          <div className="flex flex-wrap gap-6 text-lg">
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <FaLinkedin size={22} /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <FaInstagram size={22} /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <FaYoutube size={22} /> YouTube
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <FaPodcast size={22} /> Podcast
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <FaXTwitter size={22} /> X (Twitter)
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <FaFacebook size={22} /> Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
