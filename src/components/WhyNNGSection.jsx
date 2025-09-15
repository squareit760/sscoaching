import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WhyNNGSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
          Why SS Coaching is the Best NIOS Centre in Lucknow?
        </h2>

        {/* Three columns section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Column 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-gray-800 rounded-full relative">
                <div className="absolute inset-1 bg-yellow-400 rounded-full"></div>
                <div className="absolute top-2 left-2 w-2 h-2 bg-gray-800 rounded-full"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-gray-800 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Experienced Professionals
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We have the most experienced faculty of tutors who are truly
              determined to cover all the concepts and prepare you to give your
              best in the NIOS Exams.
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-gray-800"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Best Study Materials
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Study Materials of the SS Coaching are designed by professionals
              which consist of the latest syllabus, Test series with
              illustrative examples and Proper Notes.
            </p>
          </div>

          {/* Column 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Most Trusted Center
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Most trusted NIOS Center in Lucknow, offering expert guidance,
              hassle-free admission, and complete support for 10th & 12th. Build
              your future with reliable education solutions. Enroll today for
              success!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNNGSection;
