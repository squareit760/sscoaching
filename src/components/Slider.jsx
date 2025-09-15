import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StudentSlider = () => {
  // Random student data
  const students = [
    {
      id: 1,
      name: "KUNWAR HARSH VARDHAN SINGH",
      rollNumber: "210273243061",
      percentage: "95.2%",
      grade: "12th PCB",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "MOHD SHAZAD",
      rollNumber: "210273243251",
      percentage: "95%",
      grade: "12th P.C.B",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "MOHAMMAD AKIL KHAM",
      rollNumber: "210273243186",
      percentage: "95%",
      grade: "12th PCB",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "SHREE HARI TIWARI",
      rollNumber: "210273243079",
      percentage: "95%",
      grade: "12th COMM.",
      photo: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "PRIYA SHARMA",
      rollNumber: "210273243145",
      percentage: "94.8%",
      grade: "12th PCM",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b332c3c2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "RAJESH KUMAR",
      rollNumber: "210273243098",
      percentage: "94.5%",
      grade: "12th PCB",
      photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "ANITA SINGH",
      rollNumber: "210273243234",
      percentage: "94.2%",
      grade: "12th ARTS",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "VIKASH GUPTA",
      rollNumber: "210273243167",
      percentage: "93.8%",
      grade: "12th PCM",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 9,
      name: "KAVITA DEVI",
      rollNumber: "210273243289",
      percentage: "93.5%",
      grade: "12th COMM.",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 10,
      name: "AMIT VERMA",
      rollNumber: "210273243156",
      percentage: "93.2%",
      grade: "12th PCB",
      photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Top Performers 2025
          </h1>
          <p className="text-blue-100 text-lg">
            Celebrating Academic Excellence
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-white/50',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-white'
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }}
          className="pb-12"
        >
          {students.map((student) => (
            <SwiperSlide key={student.id}>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden border-4 border-blue-300">
                      <img
                        src={student.photo}
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-bold text-gray-800 text-sm mb-2 min-h-[2.5rem] flex items-center justify-center">
                      {student.name}
                    </h3>
                    
                    <div className="space-y-1 text-xs text-gray-600">
                      <p className="font-mono">{student.rollNumber}</p>
                      <div className="flex justify-between items-center">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
                          {student.percentage}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                          {student.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2">
                  <p className="text-white text-xs text-center font-medium">
                    🎉 Congratulations!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          <button className="swiper-button-prev-custom bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors duration-200">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next-custom bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors duration-200">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentSlider;