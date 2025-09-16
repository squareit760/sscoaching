import { SheetIcon, Ticket } from 'lucide-react';
import React from 'react';

const RecentArticlesSection = () => {
  const articles = [
    {
      id: 1,
      title: "Datesheet",
      author: "Caleb Sponheim",
      date: "Sep 5",
      type: "article",
      bgColor: "bg-slate-800",
      icon: <SheetIcon className="text-white w-14 h-14" />,
    },
    {
      id: 2,
      title: "Hall Ticket",
      author: "Tim Neusesser",
      date: "Sep 5",
      type: "article",
      bgColor: "bg-purple-200",
      icon: <Ticket className='text-black w-14 h-14' />,
    },
    // {
    //   id: 3,
    //   title: "User-Ecosystem Thinking: An Anthropologic Approach to Design",
    //   author: "Therese Fessenden",
    //   date: "Aug 29",
    //   type: "article",
    //   bgColor: "bg-green-200",
    //   icon: "👥"
    // }
  ];


  return (
    <div
      className="w-full bg-fixed bg-cover bg-center bg-no-repeat py-12 relative"
      style={{
        backgroundImage:
          "url('/assets/bg.jpg')",
      }}
    >
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
        Notice Board
      </h2>

      {/* Content Grid */}
      <div className="flex w-full gap-8 mb-12 justify-center text-white">
        {/* Articles Column */}
        <div className="flex justify-between  w-[60%] ">
          {articles.map((article) => (
            <div key={article.id} className="flex gap-4 group cursor-pointer">
              {/* Icon/Image */}
              <div
                className={`w-20 h-20 md:w-24 md:h-24 ${article.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
              >
                <span className="text-2xl md:text-3xl">{article.icon}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-2">
                  {article.title}
                </h3>
                <div className="flex items-center text-sm text-gray-400 space-x-2">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More Articles & Videos Button */}
      {/* <div className="text-center">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
          More Articles & Videos
        </button>
      </div> */}
    </div>
  );
};

export default RecentArticlesSection;