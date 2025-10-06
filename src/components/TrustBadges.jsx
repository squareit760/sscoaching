import { Clock, TrendingUp, BookOpen } from "lucide-react";

export default function TrustBadgesSection() {
  const mainFeatures = [
    {
      id: 1,
      icon: Clock,
      title: "25+ Years of Experience",
      description:
        "Guiding NIOS students to success for over a decade with proven results and expert faculty.",
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "95% Success Rate",
      description:
        "Our students consistently achieve high scores and secure their future through our proven methods.",
    },
    {
      id: 3,
      icon: BookOpen,
      title: "Complete Study Material",
      description:
        "We provide comprehensive notes, guides, and solved papers to ensure your preparation is complete.",
    },
  ];

  const stats = [
    { value: "100%", label: "Admission Guidance" },
    { value: "24/7", label: "Student Support" },
    { value: "500+", label: "Toppers" },
    { value: "1000+", label: "Study Resources" },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-[#0a1f44] mb-4">
            Why Trust SS Coaching for NIOS Coaching & Admission?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to your academic excellence and future success.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-[#0a1f44] to-[#2563eb] text-white mb-6 mx-auto transform hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#0a1f44] mb-4 text-center">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300 transform hover:scale-105"
            >
              <div className="text-3xl font-bold text-[#0a1f44] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
