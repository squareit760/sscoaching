import React from "react";

export default function PopularCoursesSection() {
  const streams = [
    {
      id: 1,
      header: "फेल छात्र 10वीं; 12वीं 45 दिनों में पास करें",
      headerColor: "bg-red-600",
      title: "NIOS Stream 3 & 4 - (Saves Time, Saves…)",
      description:
        "The students who fail any recognized board in India can pass within 45 Days with the top On-Demand Examination System (ODES) at NIOS board, following the CBSE pattern. Get NIOS Admission now in the best NIOS Coaching in Lucknow for streams 3rd and 4th.",
      btnText: "Read More",
    },
    {
      id: 2,
      header: "9वीं & 11वीं फेल छात्र सीधे 10वीं & 12वीं पास करें",
      headerColor: "bg-blue-600",
      title: "NIOS Stream 1 - (Saves Time)",
      description:
        "9th & 11th failed students can get NIOS Admission to pass directly 10th & 12th in Stream 1st of NIOS board by getting NIOS Admission in best NIOS Coaching in Lucknow - CBSE Pattern (GOVT OF INDIA).",
      btnText: "Read More",
    },
    {
      id: 3,
      header: "साल बचाए फेल छात्र 10वीं; 12वीं इसी साल में पास करें",
      headerColor: "bg-green-600",
      title: "NIOS Stream 2 - (Saves Year)",
      description:
        "Failed Student from any recognized board of India can get admission & pass 10th & 12th the same year through NIOS board in Stream 2 - CBSE Pattern (GOVT OF INDIA).",
      btnText: "Read More",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-7">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-gray-900">
                Understand Your NIOS Streams
              </h2>
            </div>

        {/* Section Title */}
        

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {streams.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Header */}
              <div
                className={`${item.headerColor} text-white font-bold text-center py-2`}
              >
                {item.header}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>

                {/* Button aligned bottom */}
                <div className="mt-6">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
                    {item.btnText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
