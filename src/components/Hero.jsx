import { UserPlus, PlayCircle, ChevronDown } from "lucide-react";

export default function HeroBanner() {
  return (
    <section
      className="relative h-screen min-h-[600px] text-white flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://sscoaching.in/images/imparting-suggestions-to-students.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Video */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-40 right-12 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-float-medium"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-[#2563eb] rounded-full opacity-30 animate-float-fast"></div>

      {/* Content */}
      <div className="relative z-10 p-4 max-w-5xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-2xl animate-fade-in">
          Best NIOS Coaching in <span className="text-yellow-400">Lucknow</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 drop-shadow-md font-light animate-fade-in-delay">
          Your trusted partner for NIOS admissions, guidance, and success.
          Secure your future with our expert mentorship.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
          <a
            href="#contact"
            className="bg-yellow-400 text-[#0a1f44] font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-yellow-400/50 flex items-center group"
          >
            <UserPlus className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Get Admission Help
          </a>
          <a
            href="#streams"
            className="bg-white bg-opacity-20 text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm flex items-center group"
          >
            <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Watch Video
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#streams"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition-all"
        >
          <ChevronDown className="w-5 h-5 text-black" />
        </a>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(-15px);
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-25px) translateX(20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-delay {
          opacity: 0;
          animation: fade-in 1s ease-out 0.3s forwards;
        }

        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fade-in 1s ease-out 0.6s forwards;
        }
      `}</style>
    </section>
  );
}
