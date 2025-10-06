import { useState } from "react";
import {
  Youtube,
  Instagram,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialMediaFeedSection() {
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = [
    {
      id: 1,
      src: "https://www.instagram.com/reel/DKwqFc0pSF-/?utm_source=ig_web_copy_link",
      title: "Campus Tour",
      platform: "instagram",
      handle: "@SSCoaching",
      thumbnail: "/images/insta-reel1.png",
    },
    {
      id: 2,
      src: "https://www.youtube.com/shorts/dNDKZaAcCOo",
      title: "Result Celebration",
      platform: "youtube",
      handle: "@SSCoaching",
    },
    {
      id: 3,
      src: "https://www.youtube.com/shorts/VtjftJEnO4o",
      title: "Study Session",
      platform: "youtube",
      handle: "@SSCoaching",
    },
    {
      id: 4,
      src: "https://www.instagram.com/reel/DK1hEYeJsaO/?utm_source=ig_web_copy_link",
      title: "Classroom Moments",
      platform: "instagram",
      handle: "@SSCoaching",
      thumbnail: "/images/insta-reel2.png",
    },
  ];

  const getYoutubeId = (url) => {
    const match = url.match(/(?:v=|shorts\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  const getThumbnail = (video) => {
    if (video.thumbnail) return video.thumbnail;
    if (video.platform === "youtube") {
      const id = getYoutubeId(video.src);
      return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    }
    return "/video-placeholder.jpg";
  };

  const getEmbedUrl = (video) => {
    if (video.platform === "youtube") {
      const id = getYoutubeId(video.src);
      return id
        ? `https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0`
        : video.src;
    } else if (video.platform === "instagram") {
      // ✅ Instagram oEmbed format — works inline
      const baseUrl = video.src.split("?")[0]; // remove tracking params
      return `${baseUrl}embed`;
    } else {
      return null;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-4">
            Understand NIOS: Admission, Exams & Benefits
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Follow us on social media to see daily updates, student
            achievements, and learning moments.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="bg-black rounded-2xl overflow-hidden shadow-lg relative aspect-[9/16] group">
                  {/* If currently playing */}
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

                      {/* Play Button */}
                      <button
                        onClick={() => setPlayingVideo(video.id)}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition"
                      >
                        <Play className="w-14 h-14 text-white opacity-90" />
                      </button>
                    </>
                  )}

                  {/* Overlay info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/70 to-transparent text-white">
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3 ${
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
                        <p className="text-xs opacity-80">{video.handle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="swiper-button-prev absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg opacity-80 hover:opacity-100 transition hidden md:flex">
            <ChevronLeft className="w-5 h-5 text-[#0a1f44]" />
          </button>
          <button className="swiper-button-next absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg opacity-80 hover:opacity-100 transition hidden md:flex">
            <ChevronRight className="w-5 h-5 text-[#0a1f44]" />
          </button>
        </div>
      </div>
      <div className="text-center mt-10">
        <h2 className="text-gray-400 text-lg mb-8 font-medium">
          Follow us for more updates and behind-the-scenes content
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://www.youtube.com/c/SscoachingInlucknow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FaYoutube className="w-6 h-6" />
            <span>YouTube</span>
          </a>

          <a
            href="https://www.instagram.com/sscoaching_lucknow/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FaInstagram className="w-6 h-6" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
