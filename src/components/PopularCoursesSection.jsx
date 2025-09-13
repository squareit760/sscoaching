import React from 'react';

export default function PopularCoursesSection() {
  const courses = [
    {
      id: 1,
      title: "AI for Design Workflows",
      description: "Leverage AI to enhance creativity, efficiency, and impact in everyday design work",
      category: "INTERACTION",
      categoryColor: "bg-yellow-400",
      headerColor: "bg-yellow-400",
      icon: (
        <div className="w-16 h-16 mx-auto mb-4">
          <svg viewBox="0 0 64 64" className="w-full h-full">
            {/* AI Robot Head */}
            <circle cx="32" cy="28" r="12" fill="#4B5563" stroke="#374151" strokeWidth="2"/>
            {/* Eyes */}
            <circle cx="28" cy="26" r="2" fill="#F59E0B"/>
            <circle cx="36" cy="26" r="2" fill="#F59E0B"/>
            {/* Connections */}
            <circle cx="20" cy="45" r="3" fill="#F59E0B"/>
            <circle cx="32" cy="45" r="3" fill="#F59E0B"/>
            <circle cx="44" cy="45" r="3" fill="#F59E0B"/>
            <line x1="32" y1="40" x2="20" y2="42" stroke="#F59E0B" strokeWidth="2"/>
            <line x1="32" y1="40" x2="32" y2="42" stroke="#F59E0B" strokeWidth="2"/>
            <line x1="32" y1="40" x2="44" y2="42" stroke="#F59E0B" strokeWidth="2"/>
          </svg>
        </div>
      )
    },
    {
      id: 2,
      title: "Measuring UX and ROI",
      description: "Use metrics from quantitative research to demonstrate value",
      category: "RESEARCH",
      categoryColor: "bg-purple-500",
      headerColor: "bg-purple-500",
      icon: (
        <div className="w-16 h-16 mx-auto mb-4">
          <svg viewBox="0 0 64 64" className="w-full h-full">
            {/* Arrow going right */}
            <path d="M10 32 L45 32 M40 27 L45 32 L40 37" stroke="#8B5CF6" strokeWidth="3" fill="none"/>
            {/* Dollar sign */}
            <circle cx="32" cy="32" r="8" fill="#8B5CF6" opacity="0.3"/>
            <text x="32" y="36" textAnchor="middle" fontSize="12" fill="#8B5CF6" fontWeight="bold">$</text>
            {/* Arrow going left */}
            <path d="M54 32 L19 32 M24 27 L19 32 L24 37" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.6"/>
          </svg>
        </div>
      )
    },
    {
      id: 3,
      title: "ResearchOps: Scaling User Research",
      description: "Orchestrate and optimize research to amplify its impact",
      category: "MANAGEMENT • RESEARCH",
      categoryColor: "bg-green-500",
      headerColor: "bg-green-500",
      icon: (
        <div className="w-16 h-16 mx-auto mb-4">
          <svg viewBox="0 0 64 64" className="w-full h-full">
            {/* Network nodes */}
            <circle cx="32" cy="20" r="4" fill="#10B981"/>
            <circle cx="20" cy="35" r="4" fill="#10B981"/>
            <circle cx="44" cy="35" r="4" fill="#10B981"/>
            <circle cx="32" cy="50" r="4" fill="#10B981"/>
            <circle cx="15" cy="50" r="3" fill="#6B7280"/>
            <circle cx="49" cy="50" r="3" fill="#6B7280"/>
            {/* Connections */}
            <line x1="32" y1="24" x2="20" y2="31" stroke="#10B981" strokeWidth="2"/>
            <line x1="32" y1="24" x2="44" y2="31" stroke="#10B981" strokeWidth="2"/>
            <line x1="20" y1="39" x2="32" y2="46" stroke="#10B981" strokeWidth="2"/>
            <line x1="44" y1="39" x2="32" y2="46" stroke="#10B981" strokeWidth="2"/>
            <line x1="20" y1="39" x2="15" y2="47" stroke="#6B7280" strokeWidth="1"/>
            <line x1="44" y1="39" x2="49" y2="47" stroke="#6B7280" strokeWidth="1"/>
          </svg>
        </div>
      )
    },
    {
      id: 4,
      title: "Successful Stakeholder Relationships",
      description: "Get buy-in, manage expectations, and build trust",
      category: "MANAGEMENT",
      categoryColor: "bg-green-500",
      headerColor: "bg-green-500",
      icon: (
        <div className="w-16 h-16 mx-auto mb-4">
          <svg viewBox="0 0 64 64" className="w-full h-full">
            {/* People icons */}
            <circle cx="25" cy="25" r="6" fill="#10B981"/>
            <circle cx="39" cy="25" r="6" fill="#10B981"/>
            <path d="M15 45 Q25 35 35 45" fill="#10B981"/>
            <path d="M29 45 Q39 35 49 45" fill="#10B981"/>
            {/* Check mark */}
            <circle cx="32" cy="40" r="8" fill="#10B981" opacity="0.9"/>
            <path d="M28 40 L31 43 L36 37" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 lg:mb-12">
          <div className="flex items-center gap-4 mb-6 lg:mb-0">
            {/* NN/g Certification Badge */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full border-2 border-red-600 flex items-center justify-center bg-white">
                <div className="text-center">
                  <div className="text-red-600 font-bold text-lg">NN/g</div>
                  <div className="text-red-600 text-xs font-medium bg-red-600 text-white px-2 py-0.5 rounded">
                    UX CERTIFIED
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Take 5 Courses, Pass 5 Exams, Become UX Certified
              </h2>
            </div>
          </div>
          
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
            UX Certification Benefits
          </button>
        </div>
        
        {/* Section Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 lg:mb-12">
          Popular Live Online Courses
        </h3>
        
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:border-2 hover:border-gray-800 transition-all duration-300 border-2 border-transparent">
              {/* Header with colored bar */}
              <div className={`h-2 ${course.headerColor}`}></div>
              
              {/* Card Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="mb-6">
                  {course.icon}
                </div>
                
                {/* Title */}
                <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {course.title}
                </h4>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>
                
                {/* Category Tag */}
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${course.categoryColor}`}></div>
                  <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    {course.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}