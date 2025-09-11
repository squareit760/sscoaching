import React from 'react';

const RecentArticlesSection = () => {
  const articles = [
    {
      id: 1,
      title: "The VR Hype Cycle: Lessons for the Age of AI",
      author: "Caleb Sponheim",
      date: "Sep 5",
      type: "article",
      bgColor: "bg-slate-800",
      icon: "🥽"
    },
    {
      id: 2,
      title: "Smart-Device Apps: 7 Best Practices to Make Devices Truly Smart",
      author: "Tim Neusesser",
      date: "Sep 5", 
      type: "article",
      bgColor: "bg-purple-200",
      icon: "📱"
    },
    {
      id: 3,
      title: "User-Ecosystem Thinking: An Anthropologic Approach to Design",
      author: "Therese Fessenden",
      date: "Aug 29",
      type: "article", 
      bgColor: "bg-green-200",
      icon: "👥"
    }
  ];

  const videos = [
    {
      id: 4,
      title: "Template Trap",
      author: "Sarah Gibbons",
      duration: "6 min video",
      type: "video",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5, 
      title: "Anatomy of Good Icons",
      author: "Kelley Gordon",
      duration: "3 min video",
      type: "video",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      title: "Why Disabled Buttons Hurt UX (and How to Fix Them)",
      author: "Huei-Hsin Wang", 
      duration: "5 min video",
      type: "video",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
        Recent Updates
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Articles Column */}
        <div className="space-y-6">
          {articles.map((article) => (
            <div key={article.id} className="flex gap-4 group cursor-pointer">
              {/* Icon/Image */}
              <div className={`w-20 h-20 md:w-24 md:h-24 ${article.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <span className="text-2xl md:text-3xl">{article.icon}</span>
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-2">
                  {article.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Videos Column */}
        <div className="space-y-6">
          {videos.map((video) => (
            <div key={video.id} className="flex gap-4 group cursor-pointer">
              {/* Video Thumbnail */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                <img 
                  src={video.image} 
                  alt={video.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-700 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-2">
                  {video.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                  <span>{video.duration}</span>
                  <span>•</span>
                  <span>{video.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More Articles & Videos Button */}
      <div className="text-center">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
          More Articles & Videos
        </button>
      </div>
    </div>
  );
};

export default RecentArticlesSection;