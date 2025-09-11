import React from "react";
import { TrendingUp, Clock, Users, Award } from "lucide-react";

export default function Hero() {

    const boxes = [
      {
        icon: <TrendingUp />,
        title: "95%",
        description: "Success Rate",
      },
      {
        icon: <Clock />,
        title: "15+",
        description: "Years Experience",
      },
      {
        icon: <Users />,
        title: "5000+",
        description: "Students Enrolled",
      },
      {
        icon: <Award />,
        title: "45",
        description: "Days to Pass",
      },
    ];
  return (
    <section
      className="relative lg:h-[90vh] h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/image.png')", // replace with your image
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col text-white h-full px-4 lg:p-8 mt-15">
        {/* Editing */}

        <div className="flex flex-col lg:gap-10 ">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Best NIOS Coaching <br /> in Lucknow
            </h1>
            <p className="text-3xl font-semibold">Pass in 45 Days</p>
            <p className="text-lg max-w-lg lg:mt-4">
              Failed students can pass through NIOS board with CBSE pattern.
              Your second chance for academic success starts here.
            </p>
          </div>

        </div>
        <div className="flex flex-col gap-3 mt-3">

        
          <div className="flex lg:justify-start justify-center gap-x-5 lg:mb-0 mb-3 ">
            {/* buttons */}

            <button className="lg:px-6 lg:py-3 p-3 bg-red-600 cursor-pointer hover:bg-red-700 rounded-2xl shadow-lg text-lg font-medium transition">
              Get Started
            </button>
            <button className="lg:px-6 lg:py-3 p-3 bg-white/20 cursor-pointer hover:bg-white/30 border border-white rounded-2xl shadow-lg text-lg font-medium transition">
              Learn More
            </button>
          </div>
          <div className="max-w-3xl mx-auto px-6 sm:px-6 lg:px-8 lg:mt-0 mt-10">
            {/* Responsive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className="bg-white  rounded-lg lg:p-6 p-2 text-center hover:bg-opacity-60 transition  flex flex-col items-center justify-center"
                >
                  {/* Icon */}
                  <div className="lg:h-10 lg:w-10 h-6 w-6 text-black mx-auto mb-3">
                    {box.icon}
                  </div>

                  {/* Title */}
                  <div className="text-2xl text-yellow-600 sm:text-3xl font-bold">
                    {box.title}
                  </div>

                  {/* Description */}
                  <div className="text-blue-600 text-sm sm:text-base">
                    {box.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
</div>
        {/* Editing - end */}

        {/* <div className="mt-6 mb-2 flex gap-4">
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-2xl shadow-lg text-lg font-medium transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white/20 hover:bg-white/30 border border-white rounded-2xl shadow-lg text-lg font-medium transition">
            Learn More
          </button>
        </div> */}
      </div>
    </section>
  );
}
