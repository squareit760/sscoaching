import React from 'react';
import StudentSlider from './Slider';

export default function NNGLearnSection() {
  return (
    <>
    <section className="bg-gradient-to-b from-red-900 to-red-950 text-white py-5 mt-8 md:mt-12 ">
    <h1 className="text-3xl sm:text-4xl lg:text-3xl font-semibold text-white text-center">
              We Are The Best NIOS Coaching in Lucknow
            </h1>
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <StudentSlider />
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div className="text-white space-y-6 lg:space-y-8 text">
            
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
              
            </p>
            
            <div className="pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
               view All
              </button>
            </div>
          </div>
          
          <div className="relative">
            
            <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center">
             
              <div className="text-gray-400 text-center opacity-50">
                
                <img src="./images/online.webp" alt="" />
              </div>
            </div>
            
            
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black p-3 rounded-xl shadow-lg z-10">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
            </div>
            
            
            <div className="absolute top-6 -left-4 bg-white text-gray-800 p-2 rounded-lg shadow-lg z-10 transform rotate-12">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.64 21.97c-.16 0-.3-.07-.4-.2L7.29 15.8c-.19-.19-.19-.5 0-.69.19-.2.51-.2.7-.01L13.64 20.76c.16.16.16.42 0 .58-.08.13-.21.21-.36.21z"/>
                <path d="M13.64 21.97c-.28 0-.5-.22-.5-.5V3.5c0-.28.22-.5.5-.5s.5.22.5.5v17.97c0 .28-.22.5-.5.5z"/>
              </svg>
            </div>
            
            
            <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-xl shadow-lg z-10">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l8 4-8 4-8-4 8-4zm0 2.84L7.5 6 12 7.16 16.5 6 12 4.84zM12 11l8 4-8 4-8-4 8-4zm0 2.84L7.5 15 12 16.16 16.5 15 12 13.84z"/>
              </svg>
            </div>
            
            
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg z-10">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15.5c1.93 0 3.5-1.57 3.5-3.5S13.93 8.5 12 8.5 8.5 10.07 8.5 12s1.57 3.5 3.5 3.5z"/>
                <path d="M17.5 9H16l-1.83-2H9.83L8 9H6.5C5.12 9 4 10.12 4 11.5v7C4 19.88 5.12 21 6.5 21h11c1.38 0 2.5-1.12 2.5-2.5v-7C20 10.12 18.88 9 17.5 9z"/>
              </svg>
            </div>
            
            
            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-red-500 text-white px-3 py-2 rounded-lg shadow-lg z-10">
              <div className="text-sm font-bold flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Live
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
    </>
  );
}