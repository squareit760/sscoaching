import { Rocket, RotateCcw, Zap, CheckCircle, ArrowRight } from "lucide-react";

export default function NIOSStreamsSection() {
  const streams = [
    {
      id: 1,
      title: "NIOS Stream 1",
      icon: Rocket,
      description:
        "Perfect for 9th or 11th failed students. Directly appear for 10th or 12th board exams and",
      highlight: "SAVE YOUR PRECIOUS TIME.",
      highlightColor: "text-[#2563eb]",
      borderColor: "border-[#2563eb]",
      iconGradient: "from-[#2563eb] to-[#0a1f44]",
      accentColor: "text-[#2563eb]",
      bgCircle: "bg-[#2563eb]",
      circlePosition: "-top-10 -right-10",
      features: [
        "Direct admission to 10th/12th",
        "No need to repeat previous class",
        "Save one full academic year",
      ],
    },
    {
      id: 2,
      title: "NIOS Stream 2",
      icon: RotateCcw,
      description:
        "For students who failed 10th or 12th from any recognized board. Get a second chance and",
      highlight: "PASS IN THE SAME YEAR.",
      highlightColor: "text-yellow-500",
      borderColor: "border-yellow-400",
      iconGradient: "from-yellow-400 to-yellow-500",
      accentColor: "text-yellow-500",
      bgCircle: "bg-yellow-400",
      circlePosition: "-bottom-10 -left-10",
      features: [
        "Second chance in same academic year",
        "Transfer of marks from previous board",
        "Appear only for failed subjects",
      ],
    },
    {
      id: 3,
      title: "NIOS Stream 3 & 4",
      icon: Zap,
      description:
        "On-Demand Exams for those who failed in a few subjects. Appear for exams when you're ready and",
      highlight: "PASS WITHIN 45 DAYS.",
      highlightColor: "text-green-500",
      borderColor: "border-green-500",
      iconGradient: "from-green-500 to-green-700",
      accentColor: "text-green-500",
      bgCircle: "bg-green-500",
      circlePosition: "-top-10 -right-10",
      features: [
        "Exams when you're prepared",
        "Fast results in 30-45 days",
        "Flexible exam scheduling",
      ],
    },
  ];

  return (
    <section
      id="streams"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#2563eb] rounded-full opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-4">
            Your Path to Success with NIOS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right stream and get back on track without losing a year.
            We guide you at every step.
          </p>
        </div>

        {/* Streams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {streams.map((stream) => {
            const IconComponent = stream.icon;
            return (
              <div
                key={stream.id}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 ${stream.borderColor} relative overflow-hidden group`}
              >
                {/* Decorative Circle */}
                <div
                  className={`absolute ${stream.circlePosition} w-28 h-28 ${stream.bgCircle} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br ${stream.iconGradient} text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#0a1f44] mb-4">
                  {stream.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {stream.description}{" "}
                  <span className={`font-bold ${stream.highlightColor}`}>
                    {stream.highlight}
                  </span>
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {stream.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle
                        className={`w-5 h-5 ${stream.accentColor} mr-2 flex-shrink-0`}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href="#"
                  className={`inline-flex items-center ${stream.accentColor} font-semibold group-hover:underline`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
