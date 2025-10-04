import { Megaphone, Calendar, Trophy, FileText } from "lucide-react";

export default function UpdatesSection() {
  const updates = [
    {
      icon: Calendar,
      text: "NIOS October 2025 Exam Datesheet Announced! Download Now.",
      link: "#",
    },
    {
      icon: Trophy,
      text: "Senior Secondary Result for April 2025 Declared. Check Here.",
      link: "#",
    },
    {
      icon: FileText,
      text: "New Question Papers for 2025-26 Session Uploaded.",
      link: "#",
    },
  ];

  return (
    <div className="bg-[#0a1f44] text-white py-3 overflow-hidden relative">
      <div className="container mx-auto px-4 flex items-center">
        {/* Updates Badge */}
        <span className="bg-yellow-400 text-[#0a1f44] font-bold text-sm px-4 py-2 rounded-md mr-4 flex-shrink-0 flex items-center shadow-lg">
          <Megaphone className="w-4 h-4 mr-2" />
          UPDATES
        </span>

        {/* Scrolling Updates */}
        <div className="flex-grow overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            {/* Render updates twice for seamless loop */}
            {[...updates, ...updates].map((update, index) => (
              <span key={index} className="inline-block">
                <a
                  href={update.link}
                  className="hover:text-yellow-400 transition inline-flex items-center"
                >
                  <update.icon className="w-4 h-4 mr-2" />
                  {update.text}
                </a>
                <span className="mx-6 text-yellow-400">|</span>
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
          padding-left: 2rem;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 25s;
          }
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 20s;
          }
        }
      `}</style>
    </div>
  );
}
