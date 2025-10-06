import { Quote } from "lucide-react";

export default function CelebritySection() {
  const celebrities = [
    {
      id: 1,
      name: "Sania Mirza",
      profession: "Tennis Player",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXYj42SpOlpdonZfHgXnM1G0a05NhMrRDEUWSXGVpUtqdpuM96g46Usmu8WgXPAVcs_o5xkZ7DZfuvbd--mLOLSvu8id9iNn44ieIKW0M",
    },
    {
      id: 2,
      name: "MC Mary Kom",
      profession: "Boxer",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      name: "Kavya Madhavan",
      profession: "Actress",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCgYH28nLXReWdv2pVP6QperjbE4HwQKV1I495Gz9ZJNQ6Pns2gj1TP5IK3RG67xTiOhaFaaml7vhhTGnEO8FL54f10akRll7a69dM6Q",
    },
    {
      id: 4,
      name: "Dipika Pallikal",
      profession: "Squash Player",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQiitK80iCqEbG8DHgJgEixspv6XNZwVCKhRcsHIHlxh2Y5HQiNfSOv0ZL6BnX97HeSfBA6rzVVKJ_RoV0JQreTJw6vv8D1pr11yCOAEN4",
    },
    {
      id: 5,
      name: "Somdev Devvarman",
      profession: "Tennis Player",
      image:
        "https://sportsmatik.com/uploads/world-events/players/somdev-devvarman_1564743074.jpg",
    },
    {
      id: 6,
      name: "Nethra Kumanan",
      profession: "Sailor",
      image:
        "https://thejuniorage.com/wp-content/uploads/2024/07/TJA-Featured-Image-15.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[#0a1f44] text-white relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-4">
            NIOS: The Choice of Champions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Many renowned personalities chose NIOS to balance their passion and
            education.
          </p>
        </div>

        {/* Celebrities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center">
          {celebrities.map((celebrity) => (
            <div
              key={celebrity.id}
              className="flex flex-col items-center group"
            >
              {/* Photo */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <img
                  src={celebrity.image}
                  alt={celebrity.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Name & Profession */}
              <h4 className="font-semibold text-base">{celebrity.name}</h4>
              <p className="text-sm text-gray-400">{celebrity.profession}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Card */}
        <div className="mt-16 bg-white text-black bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto hover:bg-opacity-15 transition-all duration-300">
          <div className="text-center">
            {/* Quote Icon */}
            <div className="flex justify-center mb-4">
              <Quote className="w-12 h-12 text-yellow-400" />
            </div>

            {/* Testimonial Text */}
            <p className="text-xl italic mb-6 leading-relaxed">
              NIOS provided me the flexibility to pursue my tennis career while
              completing my education. It's a great platform for students who
              want to balance their passion with academics.
            </p>

            {/* Attribution */}
            <div className="font-semibold text-lg">- Sania Mirza</div>
            <div className="text-sm text-gray-400">
              Professional Tennis Player
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
