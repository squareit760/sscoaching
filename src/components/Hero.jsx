import { UserPlus, PlayCircle, ChevronDown } from "lucide-react";

export default function HeroBanner() {
  return (
    <section
      className="relative h-[80vh] sm:h-screen min-h-[500px] text-white flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://sscoaching.in/images/imparting-suggestions-to-students.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Floating Elements */}
      <div className="absolute top-16 left-6 w-10 h-10 sm:w-16 sm:h-16 bg-white bg-opacity-10 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-32 right-8 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400 rounded-full opacity-20 animate-float-medium"></div>
      <div className="absolute top-1/3 right-1/5 w-8 h-8 sm:w-12 sm:h-12 bg-[#2563eb] rounded-full opacity-30 animate-float-fast"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-5xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6 drop-shadow-2xl animate-fade-in">
          Best NIOS Coaching in <span className="text-yellow-400">Lucknow</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-10 drop-shadow-md font-light animate-fade-in-delay">
          Your trusted partner for NIOS admissions, guidance, and success.
          Secure your future with our expert mentorship.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-delay-2">
          <a
            href="#contact"
            className="bg-yellow-400 text-[#0a1f44] font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-yellow-400/50 flex items-center group"
          >
            <UserPlus className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
            Get Admission Help
          </a>

          <a
            href="#streams"
            className="bg-white bg-opacity-20 text-black font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm flex items-center group"
          >
            <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
            Watch Video
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#streams"
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition-all"
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
        </a>
      </div>

      {/* Animations */}
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
