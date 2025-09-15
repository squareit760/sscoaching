import React from 'react';

const WhyNNGSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          Why NN/g
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
              We're a team of experts.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We've spent more than 25 years working in research and design — serving a wide variety of industries and clients, from small startups to Fortune 500 companies.
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              We're trusted for our research-backed guidance.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We publish actionable research findings to establish industry best practices for UX professionals to use in their work.
            </p>
          </div>

          {/* Column 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              We give practical advice.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our customers choose to come back to us time after time because we give them recommendations that work. No gimmicks, trends, or buzzwords here.
            </p>
          </div>
        </div>

        {/* Bottom section with image and consulting card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="./images/service.jpg" 
              alt="Person working at desk with laptop"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Consulting Services Card */}
          <div className="order-1 lg:order-2 bg-yellow-400 rounded-xl p-8 lg:p-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Consulting Services
            </h3>
            <p className="text-gray-900 mb-4 leading-relaxed">
              Hire NN/g to help your team. We'll conduct research, advise on strategy, evaluate your product, or run a custom workshop.
            </p>
            <p className="text-gray-900 mb-8 leading-relaxed">
              <strong>Not sure which consulting service you're looking for?</strong> We'll help you figure it out.
            </p>
            <button className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-transform">
              Explore Consulting Options
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNNGSection;