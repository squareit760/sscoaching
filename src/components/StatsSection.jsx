export default function StatsSection() {
  const stats = [
    { id: "years", label: "Years of Experience", value: "10", suffix: "+" },
    { id: "students", label: "Students Enrolled", value: "2500", suffix: "+" },
    { id: "success", label: "Success Rate", value: "95", suffix: "%" },
    {
      id: "satisfaction",
      label: "Satisfaction Rate",
      value: "98",
      suffix: "%",
    },
  ];

  return (
    <section className="py-20 bg-[#0a1f44] text-white relative overflow-hidden">
      {/* Animated Particles */}
      <div className="absolute top-[20%] left-[10%] w-5 h-5 bg-yellow-400 rounded-full opacity-60 animate-float-particle-1"></div>
      <div className="absolute top-[60%] left-[5%] w-7 h-7 bg-[#1e90ff] rounded-full opacity-60 animate-float-particle-2"></div>
      <div className="absolute top-[40%] right-[15%] w-6 h-6 bg-white rounded-full opacity-40 animate-float-particle-3"></div>
      <div className="absolute bottom-[30%] right-[10%] w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-float-particle-4"></div>

      {/* Additional particles for richer effect */}
      <div className="absolute top-[15%] right-[25%] w-3 h-3 bg-[#1e90ff] rounded-full opacity-50 animate-float-particle-5"></div>
      <div className="absolute bottom-[20%] left-[20%] w-5 h-5 bg-white rounded-full opacity-30 animate-float-particle-6"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="p-6 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-3 animate-count-up">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-lg text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-particle-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translate(40px, -10px) scale(0.9);
            opacity: 0.4;
          }
          75% {
            transform: translate(20px, 20px) scale(1.05);
            opacity: 0.7;
          }
        }

        @keyframes float-particle-2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.6;
          }
          33% {
            transform: translate(-25px, 35px) rotate(120deg);
            opacity: 0.8;
          }
          66% {
            transform: translate(15px, -20px) rotate(240deg);
            opacity: 0.5;
          }
        }

        @keyframes float-particle-3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          30% {
            transform: translate(-30px, 25px) scale(1.2);
            opacity: 0.6;
          }
          60% {
            transform: translate(15px, -35px) scale(0.8);
            opacity: 0.3;
          }
        }

        @keyframes float-particle-4 {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.6;
          }
          40% {
            transform: translate(30px, -20px);
            opacity: 0.8;
          }
          80% {
            transform: translate(-15px, 15px);
            opacity: 0.4;
          }
        }

        @keyframes float-particle-5 {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-40px) rotate(180deg);
            opacity: 0.8;
          }
        }

        @keyframes float-particle-6 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(25px, -25px) scale(1.3);
            opacity: 0.6;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes count-up {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-float-particle-1 {
          animation: float-particle-1 20s ease-in-out infinite;
        }

        .animate-float-particle-2 {
          animation: float-particle-2 25s ease-in-out infinite;
        }

        .animate-float-particle-3 {
          animation: float-particle-3 18s ease-in-out infinite;
        }

        .animate-float-particle-4 {
          animation: float-particle-4 22s ease-in-out infinite;
        }

        .animate-float-particle-5 {
          animation: float-particle-5 15s ease-in-out infinite;
        }

        .animate-float-particle-6 {
          animation: float-particle-6 28s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-count-up {
          animation: count-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
