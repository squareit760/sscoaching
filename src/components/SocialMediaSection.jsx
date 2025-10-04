import { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Youtube,
  Instagram,
  Play,
} from "lucide-react";

export default function SocialMediaFeedSection() {
  const scrollContainerRef = useRef(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = [
    {
      id: 1,
      src: "https://www.instagram.com/reel/DN0GKmNQgTY/",
      title: "Campus Tour",
      platform: "instagram",
      handle: "@SSCoaching",
    },
    {
      id: 2,
      src: "https://www.youtube.com/watch?v=XAgOkjMsdHc",
      title: "Result Celebration",
      platform: "youtube",
      handle: "@SSCoaching",
    },
    {
      id: 3,
      src: "https://www.youtube.com/watch?v=iHUAXdHbI-s",
      title: "Study Session",
      platform: "youtube",
      handle: "@SSCoaching",
    },
    {
      id: 4,
      src: "https://www.instagram.com/reel/DNOCgJeCphD/",
      title: "Classroom Moments",
      platform: "instagram",
      handle: "@SSCoaching",
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 336;
      scrollContainerRef.current.scrollTo({
        left:
          scrollContainerRef.current.scrollLeft +
          (direction === "left" ? -scrollAmount : scrollAmount),
        behavior: "smooth",
      });
    }
  };

  // ✅ Helper to get preview thumbnails
  const getThumbnail = (video) => {
    if (video.platform === "youtube") {
      const match = video.src.match(/v=([^&]+)/);
      return match
        ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`
        : "/placeholder.jpg";
    } else if (video.platform === "instagram") {
      // Instagram doesn’t allow direct image fetch, so use placeholder
      return "/instagram-placeholder.jpg"; // add a static thumbnail
    } else {
      return "/video-placeholder.jpg";
    }
  };

  // ✅ Helper to get embed URLs
  const getEmbedUrl = (video) => {
    if (video.platform === "youtube") {
      const match = video.src.match(/v=([^&]+)/);
      return match
        ? `https://www.youtube.com/embed/${match[1]}?autoplay=1`
        : video.src;
    } else if (video.platform === "instagram") {
      return `${video.src}embed`;
    } else {
      return video.src;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="flex flex-col items-center mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-4">
            Campus Life & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow us on social media to see daily updates, student
            achievements, and learning moments.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 px-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videos.map((video) => (
              <div key={video.id} className="w-80 flex-shrink-0 snap-start">
                <div className="bg-black rounded-2xl overflow-hidden shadow-lg relative aspect-[9/16]">
                  {playingVideo === video.id ? (
                    <iframe
                      src={getEmbedUrl(video)}
                      className="w-full h-full"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={getThumbnail(video)}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => setPlayingVideo(video.id)}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
                      >
                        <Play className="w-16 h-16 text-white opacity-90" />
                      </button>
                    </>
                  )}

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent text-white">
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                          video.platform === "youtube"
                            ? "bg-[#0a1f44]"
                            : "bg-gradient-to-r from-purple-500 to-pink-500"
                        }`}
                      >
                        {video.platform === "youtube" ? (
                          <Youtube className="w-5 h-5 text-white" />
                        ) : (
                          <Instagram className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">{video.title}</p>
                        <p className="text-xs">{video.handle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg opacity-80 hover:opacity-100 transition hidden md:block hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-[#0a1f44]" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg opacity-80 hover:opacity-100 transition hidden md:block hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-[#0a1f44]" />
          </button>
        </div>
      </div>
    </section>
  );
}
