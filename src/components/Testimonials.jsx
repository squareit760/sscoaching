import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Verma",
      achievement: "94% in 12th Science",
      image: "https://placehold.co/80x80/e2e8f0/64748b?text=R",
      text: "SS Coaching helped me clear my 12th exams after I failed in CBSE. Their study material and faculty guidance were exceptional. I couldn't have done it without them.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Singh",
      achievement: "92% in 10th",
      image: "https://placehold.co/80x80/e2e8f0/64748b?text=P",
      text: "The teachers at SS Coaching are very supportive. They provided personalized attention and made sure I understood every concept. The regular tests helped me track my progress.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Kumar",
      achievement: "96% in 12th Commerce",
      image: "https://placehold.co/80x80/e2e8f0/64748b?text=A",
      text: "I was struggling with Accountancy after failing in my previous board. SS Coaching's simplified notes and practice papers helped me score 98 in Accounts. Thank you team!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-[#0a1f44] mb-4">
            What Our Students Say About SS Coaching?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our successful students about their experience with SS
            Coaching.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Student Info */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#0a1f44] text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#2563eb] font-semibold">
                    {testimonial.achievement}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="text-gray-600 mb-6 relative">
                <Quote className="w-6 h-6 text-yellow-400 mb-2" />
                <p className="leading-relaxed">{testimonial.text}</p>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
