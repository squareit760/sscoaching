import { Trophy, Medal, Star, Award, ArrowRight } from "lucide-react";

export default function ToppersSection() {
  const toppers = [
    {
      id: 1,
      name: "Aarav Singh",
      percentage: "94.6%",
      rollNo: "123456789",
      class: "Sr. Secondary",
      image: "/assets/1.jpg",
      icons: [Trophy, Medal, Star],
    },
    {
      id: 2,
      name: "Priya Sharma",
      percentage: "92.8%",
      rollNo: "987654321",
      class: "Secondary",
      image: "/assets/3.jpg",
      icons: [Trophy, Medal, Award],
    },
    {
      id: 3,
      name: "Rohan Verma",
      percentage: "91.2%",
      rollNo: "456789123",
      class: "Sr. Secondary",
      image: "/assets/7.jpg",
      icons: [Trophy, Medal, Star],
    },
    {
      id: 4,
      name: "Anjali Gupta",
      percentage: "90.5%",
      rollNo: "789123456",
      class: "Secondary",
      image: "/assets/6.jpg",
      icons: [Trophy, Award, Star],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-4">
            Our Shining Stars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are proud of our students' achievements. They inspire us to do
            better every day.
          </p>
        </div>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {toppers.map((topper) => (
            <div
              key={topper.id}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Photo Section */}
              <div className="relative w-40 h-40 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#0a1f44] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <img
                  src={topper.image}
                  alt={`${topper.name} Photo`}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                />
                {/* Percentage Badge */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-[#0a1f44] font-bold py-1 px-3 rounded-full text-sm shadow-md">
                  {topper.percentage}
                </div>
              </div>

              {/* Student Details */}
              <h4 className="text-xl font-bold text-[#0a1f44] mt-4">
                {topper.name}
              </h4>
              <p className="text-gray-500 mb-2">Roll No: {topper.rollNo}</p>
              <p className="text-[#2563eb] font-semibold">{topper.class}</p>

              {/* Achievement Icons */}
              <div className="mt-4 flex justify-center space-x-2">
                {topper.icons.map((Icon, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#2563eb] hover:bg-blue-100 transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center text-[#2563eb] font-semibold text-lg group hover:text-[#1e40af] transition-colors"
          >
            View All Success Stories
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
