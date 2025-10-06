import { FileText, Download, Eye, Book, FileCheck, Video } from "lucide-react";

export default function QuestionPapersSection() {
  const papers = [
    {
      id: 1,
      title: "Secondary (10th)",
      headerGradient: "from-[#2563eb] to-[#0a1f44]",
      textColor: "text-white",
      papers: [
        {
          subject: "Mathematics (2025)",
          file: "https://sscoaching.in/files/secondary/nios-mathematics-211-secondary-question-paper-april-2025.pdf",
        },
        {
          subject: "Science (2025)",
          file: "https://sscoaching.in/files/secondary/nios-science-212-secondary-question-paper-april-2025.pdf",
        },
        {
          subject: "English (2025)",
          file: "https://sscoaching.in/files/secondary/nios-english-202-secondary-question-paper-april-2025.pdf",
        },
        {
          subject: "Social Science (2025)",
          file: "https://sscoaching.in/files/secondary/nios-social-science-213-secondary-question-paper-april-2025.pdf",
        },
      ],
      viewAllText: "View All 10th Papers",
      href: "https://sscoaching.in/papers-secondary-10th_148.html",
    },
    {
      id: 2,
      title: "Sr. Secondary (12th)",
      headerGradient: "from-yellow-400 to-yellow-500",
      textColor: "text-[#0a1f44]",
      papers: [
        {
          subject: "Physics (2025)",
          file: "https://sscoaching.in/files/srsecondary/nios-physics-312-sr-secondary-question-paper-april-2025.pdf",
        },
        {
          subject: "Chemistry (2025)",
          file: "https://sscoaching.in/files/srsecondary/nios-chemistry-313-sr-secondary-question-paper-april-2025.pdf",
        },
        {
          subject: "Business Studies (2025)",
          file: "https://sscoaching.in/files/srsecondary/nios-business-studies-319-sr-secondary-question-paper-april-2025.pdf",
        },
        {
          subject: "Accountancy (2025)",
          file: "https://sscoaching.in/files/srsecondary/nios-accountancy-320-sr-secondary-question-paper-april-2025.pdf",
        },
      ],
      viewAllText: "View All 12th Papers",
      href: "https://sscoaching.in/papers-senior-secondary-12th_3281.html",
    },
  ];

  const resources = [
    {
      icon: Book,
      title: "Download Syllabus Class 10th",
      description: "Latest curriculum for all subjects",
      link: "https://sscoaching.in/for-secondary-xth10th_31.html",
    },
    {
      icon: FileCheck,
      title: "Download Syllabus Class 12th",
      description: "Complete admission information",
      link: "https://sscoaching.in/for-senior-secondary-xiith12th_32.html",
    },
    {
      icon: Video,
      title: "Video Lectures",
      description: "Learn from expert faculty",
      link: "https://www.youtube.com/c/SscoachingInlucknow",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-4">
            Download Previous Year Question Papers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practice with real exam papers to boost your preparation and
            confidence.
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Paper Cards */}
          {papers.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              {/* Header */}
              <div
                className={`p-6 bg-gradient-to-r ${card.headerGradient} ${card.textColor}`}
              >
                <h3 className="text-2xl font-bold">{card.title}</h3>
              </div>

              {/* Papers List */}
              <div className="p-6">
                <ul className="space-y-4">
                  {card.papers.map((paper, index) => (
                    <li
                      key={index}
                      className={`flex justify-between items-center py-2 ${
                        index < card.papers.length - 1
                          ? "border-b border-gray-100"
                          : ""
                      }`}
                    >
                      <a
                        href={paper.file}
                        className="text-gray-700 hover:text-[#2563eb] transition flex items-center"
                      >
                        <FileText className="w-4 h-4 text-[#2563eb] mr-2" />
                        {paper.subject}
                      </a>
                      <a
                        href={paper.file}
                        className="text-[#2563eb] font-semibold hover:underline flex items-center"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </a>
                    </li>
                  ))}
                </ul>

                {/* View All Button */}
                <a
                  href={card.href}
                  className="mt-6 w-full text-center bg-[#0a1f44] text-white font-semibold py-3 rounded-lg hover:bg-[#0d2844] transition flex items-center justify-center"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  {card.viewAllText}
                </a>
              </div>
            </div>
          ))}

          {/* More Resources Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-[#0a1f44] to-[#0d2844] text-white">
              <h3 className="text-2xl font-bold">More Resources</h3>
            </div>

            {/* Resources List */}
            <div className="p-6 space-y-4">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <a
                    key={index}
                    href={resource.link}
                    className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition group/item"
                  >
                    <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center text-white mr-4 group-hover/item:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#0a1f44] block">
                        {resource.title}
                      </span>
                      <span className="text-sm text-gray-500">
                        {resource.description}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
