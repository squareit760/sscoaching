import { Megaphone, Calendar, Trophy, FileText } from "lucide-react";

export default function UpdatesSection() {
  const updates = [
    {
      icon: Calendar,
      text: "Updated NIOS Syllabus For 10th 2025.",
      link: "https://sscoaching.in/for-secondary-xth10th_31.html",
    },
    {
      icon: Calendar,
      text: "Updated NIOS Syllabus For 12th 2025.",
      link: "https://sscoaching.in/for-senior-secondary-xiith12th_32.html",
    },
    {
      icon: Trophy,
      text: "Senior Secondary Result for April 2025 Declared. Check Here.",
      link: "https://sscoaching.in/result",
    },
    {
      icon: FileText,
      text: "New Question Papers for 2025-26 Session Uploaded.",
      link: "https://sscoaching.in/ques-papers_147.html",
    },
  ];

  return (
    <div className="bg-[#0a1f44] text-white py-2 sm:py-3 overflow-hidden relative">
      <div className="container mx-auto px-3 sm:px-4 flex items-center">
        {/* Updates Badge */}
        <span className="bg-yellow-400 text-[#0a1f44] font-bold text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md mr-2 sm:mr-4 flex-shrink-0 flex items-center shadow-md whitespace-nowrap">
          <Megaphone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          UPDATES
        </span>

        {/* Scrolling Updates */}
        <div className="flex-grow overflow-hidden">
          <div className="animate-scroll whitespace-nowrap text-[11px] sm:text-sm md:text-base leading-tight sm:leading-normal">
            {[...updates, ...updates].map((update, index) => (
              <span key={index} className="inline-block">
                <a
                  href={update.link}
                  className="hover:text-yellow-400 transition inline-flex items-center"
                >
                  <update.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                  <span className="truncate">{update.text}</span>
                </a>
                <span className="mx-3 sm:mx-6 text-yellow-400">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: inline-block;
          animation: scroll 30s linear infinite;
          padding-left: 1rem;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Faster scroll for smaller devices */
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 20s;
          }
        }

        @media (max-width: 480px) {
          .animate-scroll {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
}
